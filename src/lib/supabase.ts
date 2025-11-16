import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'hygiene' | 'food';
  image_url: string;
  created_at: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export interface Order {
  customer_name: string;
  customer_email: string;
  total_amount: number;
  items: CartItem[];
  status: string;
}
