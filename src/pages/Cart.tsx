import { useState } from 'react';
import { Trash2, Plus, Minus, ShoppingBag, X } from 'lucide-react';
import { CartItem } from '../lib/supabase';

interface CartProps {
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
}

export default function Cart({ cartItems, onUpdateQuantity, onRemoveItem, onCheckout }: CartProps) {
  const [showModal, setShowModal] = useState(false);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    onCheckout();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl shadow-xl p-12 border-4 border-emerald-600">
              <ShoppingBag className="w-24 h-24 text-emerald-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-emerald-900 mb-4 font-['Comic_Sans_MS',_cursive]">
                Tu carrito está vacío
              </h2>
              <p className="text-emerald-700 text-lg mb-8">
                ¡Agrega algunos productos ecológicos para comenzar!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-green-50 to-emerald-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-emerald-600 to-green-700 text-white rounded-3xl p-8 mb-8 shadow-xl">
              <h1 className="text-5xl font-bold mb-2 font-['Comic_Sans_MS',_cursive]">
                🛒 Tu Carrito
              </h1>
              <p className="text-xl">
                {cartItems.length} {cartItems.length === 1 ? 'producto' : 'productos'} en tu carrito
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {cartItems.map(item => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-lg p-6 border-3 border-emerald-400 hover:border-emerald-600 transition-colors"
                >
                  <div className="flex gap-6">
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="w-32 h-32 object-cover rounded-xl shadow-md"
                    />

                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-emerald-900 mb-1 font-['Comic_Sans_MS',_cursive]">
                            {item.name}
                          </h3>
                          <p className="text-emerald-700 text-sm">{item.description}</p>
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors p-2 hover:bg-red-50 rounded-lg"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className="text-emerald-800 font-semibold">Cantidad:</span>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                              className="w-8 h-8 bg-emerald-200 hover:bg-emerald-300 rounded-full flex items-center justify-center transition-colors"
                            >
                              <Minus className="w-4 h-4 text-emerald-800" />
                            </button>
                            <span className="w-12 text-center font-bold text-emerald-900 text-lg">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 bg-emerald-200 hover:bg-emerald-300 rounded-full flex items-center justify-center transition-colors"
                            >
                              <Plus className="w-4 h-4 text-emerald-800" />
                            </button>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="text-emerald-700 text-sm mb-1">Precio unitario:</p>
                          <p className="text-2xl font-bold text-emerald-900">
                            S/ {(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 border-4 border-yellow-400">
              <div className="flex justify-between items-center mb-6 pb-6 border-b-2 border-emerald-200">
                <span className="text-2xl font-bold text-emerald-900">Total:</span>
                <span className="text-4xl font-bold text-emerald-900">
                  S/ {total.toFixed(2)}
                </span>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-xl shadow-lg"
              >
                <ShoppingBag className="w-6 h-6" />
                Finalizar Compra
              </button>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8 border-4 border-emerald-600 relative animate-[slideIn_0.3s_ease-out]">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-emerald-600 hover:text-emerald-800 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="w-10 h-10 text-green-600" />
              </div>

              <h2 className="text-3xl font-bold text-emerald-900 mb-4 font-['Comic_Sans_MS',_cursive]">
                ¡Gracias por tu compra!
              </h2>

              <div className="bg-yellow-100 border-3 border-yellow-400 rounded-xl p-6 mb-6">
                <p className="text-emerald-900 text-lg leading-relaxed">
                  <strong>Todas las entregas son presenciales.</strong>
                  <br /><br />
                  Por favor acércate al <strong>área de Ciencias Sociales</strong> para recoger tu producto y realizar el pago acordado.
                </p>
              </div>

              <div className="bg-emerald-50 rounded-xl p-4 mb-6">
                <p className="text-emerald-800 font-semibold">
                  Total a pagar: <span className="text-2xl">S/ {total.toFixed(2)}</span>
                </p>
              </div>

              <button
                onClick={closeModal}
                className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold py-3 rounded-xl transition-all"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateY(-50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
