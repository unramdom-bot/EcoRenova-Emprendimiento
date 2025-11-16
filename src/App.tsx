import { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import { CartItem, Product } from './lib/supabase';

type Page = 'home' | 'shop' | 'contact' | 'hygiene' | 'food' | 'cart';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentSubcategory, setCurrentSubcategory] = useState<string>('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('ecorenova-cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('ecorenova-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (product: Product, quantity: number) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);

      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prevItems, { ...product, quantity }];
    });

    const notification = document.createElement('div');
    notification.className = 'fixed top-24 right-4 bg-green-600 text-white px-6 py-4 rounded-xl shadow-2xl z-50 animate-[slideInRight_0.3s_ease-out]';
    notification.innerHTML = `
      <p class="font-bold">✓ Producto agregado al carrito</p>
      <p class="text-sm">${product.name} x${quantity}</p>
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const handleCheckout = () => {
    setCartItems([]);
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleNavigate = (page: string, subcategory?: string) => {
    setCurrentPage(page as Page);
    if (subcategory) {
      setCurrentSubcategory(subcategory);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        cartItemCount={cartItemCount}
      />

      {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
      {currentPage === 'shop' && <Shop onNavigate={handleNavigate} />}
      {currentPage === 'contact' && <Contact />}
      {currentPage === 'hygiene' && (
        <ProductList
          category="hygiene"
          subcategory={currentSubcategory}
          onNavigate={handleNavigate}
          onAddToCart={handleAddToCart}
        />
      )}
      {currentPage === 'food' && (
        <ProductList
          category="food"
          subcategory={currentSubcategory}
          onNavigate={handleNavigate}
          onAddToCart={handleAddToCart}
        />
      )}
      {currentPage === 'cart' && (
        <Cart
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onCheckout={handleCheckout}
        />
      )}

      <style>{`
        @keyframes slideInRight {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
