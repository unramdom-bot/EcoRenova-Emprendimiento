/*
  # Add new food product subcategories

  1. New Data
    - Delete existing generic food products
    - Add EcoRelax beverages (stress relief drinks)
    - Add EcoSweet Banana Glow muffins
    - Add EcoCrunch Avena Mix cookies
  
  2. Product Details
    - All marked as 'food' category with specific subcategory
    - Each has appropriate pricing and descriptions
*/

DELETE FROM products WHERE category = 'food';

INSERT INTO products (name, description, price, category, image_url) VALUES
('EcoRelax - Pasión', 'Bebida natural con pasiflora y valeriana. Libera el estrés y encuentra calma de forma saludable. Con magnesio para completo bienestar.', 4.50, 'food', 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800'),
('EcoRelax - Serenidad', 'Bebida natural creada para ayudarte a liberar el estrés. Combina bienestar y sostenibilidad en cada sorbo.', 4.50, 'food', 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800'),
('EcoSweet Banana Glow', 'Muffin natural que reduce el impacto ambiental usando plátanos muy maduros. Evita desperdicios y contaminación. Sus nutrientes aportan bienestar y resaltan la belleza desde adentro. Sabor: Plátano', 2.50, 'food', 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800'),
('EcoCrunch Avena Mix', 'Galleta natural y artesanal que evita químicos y desperdicios. Opción deliciosa y amigable con el medio ambiente. Hecha con avena pura y ingredientes sostenibles.', 3.00, 'food', 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800');
