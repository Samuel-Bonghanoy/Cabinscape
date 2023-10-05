import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://liyjuqvvmfmsnyshsoug.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpeWp1cXZ2bWZtc255c2hzb3VnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0NjcyNDUsImV4cCI6MjAxMjA0MzI0NX0.x8qsyasCZSEpEh8dAh2cS5DU-I3GP4xe1jYWvF59a_Q";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
