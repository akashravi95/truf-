// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://rbjowptgbzjfbpctokwn.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJiam93cHRnYnpqZmJwY3Rva3duIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ1OTY5ODgsImV4cCI6MjA1MDE3Mjk4OH0.1SIJlKCRkwF_sMkV2RMVNdYJr62KLAiW-KflWwUMxGo";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);