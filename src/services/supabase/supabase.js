import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hkxpnwdelgxzszpwzxnp.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhreHBud2RlbGd4enN6cHd6eG5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY4NDY2NTEsImV4cCI6MjAxMjQyMjY1MX0.y2oF9_TMz76tHeAY0S-IY-DuWz_9plAl304ImQaeyaw";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
