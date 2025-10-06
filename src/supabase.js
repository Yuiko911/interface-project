// src/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tsfzyctmwdqzgplqdxjz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzZnp5Y3Rtd2RxemdwbHFkeGp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk0OTQ4NjcsImV4cCI6MjA3NTA3MDg2N30.pdGvp711KcS4l1Xp3hf1CC8V8Hl7i3nps7dodkTlCq0'
  // from Supabase dashboard
export const supabase = createClient(supabaseUrl, supabaseKey)
