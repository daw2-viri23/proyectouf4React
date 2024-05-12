import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bvjxwwevsxxxrnywdesh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2anh3d2V2c3h4eHJueXdkZXNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUzNTU4NjUsImV4cCI6MjAzMDkzMTg2NX0.JLPTNxz8dWYK1jJiEEeSstq1Ozy8VyN8PpBEdZONmuM';

export const supabase = createClient(supabaseUrl, supabaseKey);

console.log("conexion: ", supabase);
