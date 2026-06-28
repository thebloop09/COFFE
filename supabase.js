// supabase.js
const SUPABASE_URL = 'https://mlliczgqnreuqnljhcno.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sbGljemdxbnJldXFubGpoY25vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIwMDIwMDcsImV4cCI6MjA5NzU3ODAwN30.SWyeRjr9cDJm9DDBr972KdMQk41L1ihnokhVeYwlCJQ';

const { createClient } = supabase;
const _supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Xuất biến để các file khác sử dụng (nếu dùng module) hoặc gán vào window
window.supabaseClient = _supabase;