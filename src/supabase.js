// src/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://YOUR_PROJECT_ID.supabase.co'
const supabaseKey = 'YOUR_ANON_KEY'  // from Supabase dashboard
export const supabase = createClient(supabaseUrl, supabaseKey)
