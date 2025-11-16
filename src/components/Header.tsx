import { ShoppingCart, Leaf } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string, subcategory?: string) => void;
  cartItemCount: number;
}

export default function Header({ currentPage, onNavigate, cartItemCount }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-emerald-800 to-emerald-700 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <Leaf className="w-8 h-8 text-yellow-300" />
            <h1 className="text-3xl font-bold text-yellow-300 font-['Comic_Sans_MS',_cursive]">
              EcoRenova
            </h1>
          </button>

          <nav className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('home')}
              className={`text-lg font-medium transition-colors ${
                currentPage === 'home' ? 'text-yellow-300' : 'text-white hover:text-yellow-200'
              }`}
            >
              Inicio
            </button>
            <button
              onClick={() => onNavigate('shop')}
              className={`text-lg font-medium transition-colors ${
                currentPage === 'shop' ? 'text-yellow-300' : 'text-white hover:text-yellow-200'
              }`}
            >
              Tienda
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className={`text-lg font-medium transition-colors ${
                currentPage === 'contact' ? 'text-yellow-300' : 'text-white hover:text-yellow-200'
              }`}
            >
              Contacto
            </button>
            <button
              onClick={() => onNavigate('cart')}
              className="relative bg-yellow-400 hover:bg-yellow-300 text-emerald-900 p-2 rounded-full transition-all hover:scale-110"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
                  {cartItemCount}
                </span>
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
