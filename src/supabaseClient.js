import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://abgafrrufzrvvwxrcbsl.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiZ2FmcnJ1ZnpydnZ3eHJjYnNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkzMzAwNTcsImV4cCI6MjA4NDkwNjA1N30.R4BFtDy2oM2CbZ0VG5mhjSf0dJyuv45WUWLPAkuJVbQ";

export const supabase = createClient(supabaseUrl, supabaseKey);
