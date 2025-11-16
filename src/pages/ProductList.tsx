import { useEffect, useState } from 'react';
import { Minus, Plus, ShoppingCart, ArrowLeft } from 'lucide-react';
import { supabase, Product, CartItem } from '../lib/supabase';

interface ProductListProps {
  category: 'hygiene' | 'food';
  subcategory?: string;
  onNavigate: (page: string, subcategory?: string) => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export default function ProductList({ category, subcategory, onNavigate, onAddToCart }: ProductListProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    fetchProducts();
  }, [category, subcategory]);

  const fetchProducts = async () => {
    setLoading(true);
    let query = supabase.from('products').select('*').eq('category', category);

    if (category === 'food' && subcategory) {
      if (subcategory === 'ecorelax') {
        query = query.like('name', '%EcoRelax%');
      } else if (subcategory === 'ecosweet') {
        query = query.like('name', '%EcoSweet%');
      } else if (subcategory === 'ecocrunch') {
        query = query.like('name', '%EcoCrunch%');
      }
    }

    const { data, error } = await query;

    if (!error && data) {
      setProducts(data);
      const initialQuantities: { [key: string]: number } = {};
      data.forEach(product => {
        initialQuantities[product.id] = 1;
      });
      setQuantities(initialQuantities);
    }
    setLoading(false);
  };

  const updateQuantity = (productId: string, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + delta)
    }));
  };

  const handleAddToCart = (product: Product) => {
    onAddToCart(product, quantities[product.id] || 1);
  };

  const categoryInfo = category === 'hygiene'
    ? {
        title: '🧼 EcoSkin - Jabones Naturales',
        description: 'Jabones artesanales sin aceite, perfectos para cuidar tu piel de forma natural.',
        bgColor: 'from-emerald-600 to-green-700',
        cardBorder: 'border-emerald-600'
      }
    : subcategory === 'ecorelax'
    ? {
        title: '💧 EcoRelax - Bebidas Naturales',
        description: 'Bebidas naturales creadas para ayudarte a liberar el estrés y encontrar calma de forma saludable.',
        bgColor: 'from-blue-600 to-cyan-700',
        cardBorder: 'border-blue-600'
      }
    : subcategory === 'ecosweet'
    ? {
        title: '🍌 EcoSweet Banana Glow - Muffins',
        description: 'Muffins naturales que reducen el impacto ambiental usando plátanos muy maduros.',
        bgColor: 'from-orange-600 to-yellow-700',
        cardBorder: 'border-orange-600'
      }
    : {
        title: '🍪 EcoCrunch Avena Mix - Galletas',
        description: 'Galletas naturales y artesanales que evitan químicos y desperdicios.',
        bgColor: 'from-amber-600 to-yellow-700',
        cardBorder: 'border-amber-600'
      };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center">
        <div className="text-2xl text-emerald-800 font-bold">Cargando productos...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-green-50 to-emerald-100 py-12">
      <div className="container mx-auto px-4">
        <button
          onClick={() => onNavigate('shop', subcategory)}
          className="mb-8 flex items-center gap-2 text-emerald-700 hover:text-emerald-900 font-semibold transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver a la tienda
        </button>

        <div className={`bg-gradient-to-r ${categoryInfo.bgColor} text-white rounded-3xl p-8 mb-12 shadow-xl`}>
          <h1 className="text-5xl font-bold mb-4 font-['Comic_Sans_MS',_cursive]">
            {categoryInfo.title}
          </h1>
          <p className="text-xl">{categoryInfo.description}</p>
        </div>

        {category === 'hygiene' && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border-3 border-emerald-400 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-emerald-800 mb-4 font-['Comic_Sans_MS',_cursive]">
              Propiedades de nuestros jabones:
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-emerald-700">
              <div className="bg-green-50 p-4 rounded-xl">
                <p className="font-semibold">🌿 Lavanda →</p>
                <p>Relajante y calmante</p>
              </div>
              <div className="bg-green-50 p-4 rounded-xl">
                <p className="font-semibold">🍋 Limón →</p>
                <p>Fresco, energizante y antibacterial</p>
              </div>
              <div className="bg-green-50 p-4 rounded-xl">
                <p className="font-semibold">🌱 Hierbabuena o menta →</p>
                <p>Refrescante y aromático</p>
              </div>
              <div className="bg-green-50 p-4 rounded-xl">
                <p className="font-semibold">🌿 Romero →</p>
                <p>Limpieza profunda y fragancia herbal</p>
              </div>
              <div className="bg-green-50 p-4 rounded-xl">
                <p className="font-semibold">🥥 Coco →</p>
                <p>Hidratante y con aroma tropical</p>
              </div>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <div
              key={product.id}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden border-4 ${categoryInfo.cardBorder} transform hover:scale-105 transition-all`}
            >
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-green-100 to-emerald-100">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-yellow-300 px-4 py-2 rounded-full shadow-lg transform rotate-3">
                  <p className="text-emerald-900 font-bold text-lg">
                    S/ {product.price.toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-emerald-900 mb-2 font-['Comic_Sans_MS',_cursive]">
                  {product.name}
                </h3>
                <p className="text-emerald-700 mb-4 min-h-[3rem]">
                  {product.description}
                </p>

                <div className="flex items-center gap-4 mb-4">
                  <span className="text-emerald-800 font-semibold">Cantidad:</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(product.id, -1)}
                      className="w-8 h-8 bg-emerald-200 hover:bg-emerald-300 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Minus className="w-4 h-4 text-emerald-800" />
                    </button>
                    <span className="w-12 text-center font-bold text-emerald-900 text-lg">
                      {quantities[product.id] || 1}
                    </span>
                    <button
                      onClick={() => updateQuantity(product.id, 1)}
                      className="w-8 h-8 bg-emerald-200 hover:bg-emerald-300 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Plus className="w-4 h-4 text-emerald-800" />
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold py-3 rounded-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
