import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MapPin, Users } from "lucide-react";

const turfs = [
  {
    id: 1,
    name: "Premier Field",
    location: "North Complex",
    size: "100x50m",
    capacity: 22,
    type: "Natural Grass",
    pricePerHour: "$80",
  },
  {
    id: 2,
    name: "Indoor Arena",
    location: "Sports Center",
    size: "80x40m",
    capacity: 14,
    type: "Artificial Turf",
    pricePerHour: "$65",
  },
  {
    id: 3,
    name: "Training Ground",
    location: "East Wing",
    size: "90x45m",
    capacity: 18,
    type: "Hybrid Turf",
    pricePerHour: "$70",
  },
];

const TurfList = () => {
  return (
    <div className="w-full px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Facilities</h2>
      <div className="container mx-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Facility Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Capacity</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Price/Hour</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {turfs.map((turf) => (
              <TableRow key={turf.id}>
                <TableCell className="font-medium">{turf.name}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-primary" />
                    {turf.location}
                  </div>
                </TableCell>
                <TableCell>{turf.size}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-primary" />
                    {turf.capacity} players
                  </div>
                </TableCell>
                <TableCell>{turf.type}</TableCell>
                <TableCell>{turf.pricePerHour}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TurfList;