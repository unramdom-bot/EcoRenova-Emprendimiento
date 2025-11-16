/*
  # EcoRenova E-commerce Database Schema

  1. New Tables
    - `products`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `price` (numeric)
      - `category` (text) - 'hygiene' or 'food'
      - `image_url` (text)
      - `created_at` (timestamptz)
    
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `message` (text)
      - `created_at` (timestamptz)
    
    - `orders`
      - `id` (uuid, primary key)
      - `customer_name` (text)
      - `customer_email` (text)
      - `total_amount` (numeric)
      - `items` (jsonb)
      - `status` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access to products
    - Add policies for inserting contact messages and orders
*/

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price numeric NOT NULL,
  category text NOT NULL,
  image_url text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  total_amount numeric NOT NULL,
  items jsonb NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view products"
  ON products FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can insert contact messages"
  ON contact_messages FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can insert orders"
  ON orders FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

INSERT INTO products (name, description, price, category, image_url) VALUES
('Jabón de Lavanda', 'Relajante y calmante. Ideal para un momento de paz.', 4.00, 'hygiene', 'https://images.pexels.com/photos/4202316/pexels-photo-4202316.jpeg?auto=compress&cs=tinysrgb&w=800'),
('Jabón de Limón', 'Fresco, energizante y antibacterial.', 4.00, 'hygiene', 'https://images.pexels.com/photos/5797901/pexels-photo-5797901.jpeg?auto=compress&cs=tinysrgb&w=800'),
('Jabón de Hierbabuena', 'Refrescante y aromático para tu piel.', 4.00, 'hygiene', 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=800'),
('Jabón de Romero', 'Limpieza profunda y fragancia herbal.', 4.00, 'hygiene', 'https://images.pexels.com/photos/6621392/pexels-photo-6621392.jpeg?auto=compress&cs=tinysrgb&w=800'),
('Jabón de Coco', 'Hidratante y con aroma tropical.', 4.00, 'hygiene', 'https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=800'),
('Ensalada Fresca', 'Ensalada orgánica con vegetales de temporada.', 5.50, 'food', 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800'),
('Batido Verde', 'Batido detox con espinaca, manzana y limón.', 4.50, 'food', 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800'),
('Granola Artesanal', 'Granola casera con avena, miel y frutos secos.', 6.00, 'food', 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800'),
('Wrap Vegetariano', 'Wrap integral con hummus y vegetales frescos.', 5.00, 'food', 'https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg?auto=compress&cs=tinysrgb&w=800'),
('Jugo Natural', 'Jugo fresco de naranja, zanahoria y jengibre.', 3.50, 'food', 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=800');
