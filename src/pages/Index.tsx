import Navbar from "@/components/Navbar";
import { Phone, Mail, MapPin, Calendar, Users, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import TurfList from "@/components/TurfList";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: new Date(),
    players: "1",
  });

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Booking request sent! We'll confirm shortly.");
    setFormData({ name: "", email: "", phone: "", date: new Date(), players: "1" });
  };

  const membershipPlans = [
    {
      title: "Basic",
      price: "$49/month",
      features: ["2 games per week", "Basic equipment rental", "Online booking"],
    },
    {
      title: "Premium",
      price: "$89/month",
      features: ["Unlimited games", "Premium equipment included", "Priority booking", "Guest passes"],
    },
    {
      title: "Corporate",
      price: "$199/month",
      features: ["Team events", "Dedicated court times", "Professional coaching", "Custom tournaments"],
    },
  ];

  const availabilityHours = [
    { time: "9:00 AM", status: "Available" },
    { time: "10:00 AM", status: "Booked" },
    { time: "11:00 AM", status: "Available" },
    { time: "12:00 PM", status: "Available" },
    { time: "1:00 PM", status: "Booked" },
    { time: "2:00 PM", status: "Available" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative h-screen">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558435186-db6d3b0c307a')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Book Your Perfect Game Time
            </h1>
            <p className="text-xl mb-8">
              Premium turf facilities for sports enthusiasts
            </p>
            <a
              href="#booking"
              className="bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors duration-300"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* Turf List Section */}
      <TurfList />

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Book Your Slot</h2>
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Number of Players</label>
                  <select
                    value={formData.players}
                    onChange={(e) => setFormData({ ...formData, players: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Player" : "Players"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Select Date</label>
                <CalendarComponent
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition-colors duration-300"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Membership Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {membershipPlans.map((plan, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                <p className="text-3xl font-bold text-primary mb-6">{plan.price}</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Users className="h-5 w-5 text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-8 bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition-colors duration-300">
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Availability Section */}
      <section id="availability" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Today's Availability</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {availabilityHours.map((slot, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center p-4 ${
                    index !== availabilityHours.length - 1 ? "border-b" : ""
                  }`}
                >
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-2" />
                    <span>{slot.time}</span>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      slot.status === "Available"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {slot.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
