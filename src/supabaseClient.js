import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ypvhmhcgrbyqzlpftlzt.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwdmhtaGNncmJ5cXpscGZ0bHp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzNDMzOTgsImV4cCI6MjA2NTkxOTM5OH0.1W0MVyqBqHKg94YyN90GBkRmf47ZuqbSwScNPGUlcn4";

export const supabase = createClient(supabaseUrl, supabaseKey);
