import { Sparkles, Leaf, Droplet, Cake, Cookie } from 'lucide-react';

interface ShopProps {
  onNavigate: (page: string, subcategory?: string) => void;
}

export default function Shop({ onNavigate }: ShopProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-emerald-800 mb-4 font-['Comic_Sans_MS',_cursive]">
            🛍️ Nuestra Tienda
          </h1>
          <p className="text-xl text-emerald-700">
            Productos naturales y saludables para ti
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div
            onClick={() => onNavigate('hygiene')}
            className="group cursor-pointer"
          >
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all border-4 border-emerald-600 hover:border-emerald-400">
              <div className="relative h-80 bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-300 rotate-12 rounded-lg"></div>
                  <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rotate-45"></div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <Sparkles className="absolute -top-8 -right-8 w-16 h-16 text-yellow-300 animate-pulse" />
                    <img
                      src="https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="EcoSkin"
                      className="w-64 h-64 object-cover rounded-2xl shadow-2xl transform group-hover:rotate-3 transition-transform"
                    />
                  </div>
                </div>

                <div className="absolute top-4 left-4 bg-yellow-300 px-6 py-2 rounded-full transform -rotate-3 shadow-lg">
                  <p className="text-emerald-900 font-bold text-sm">¡SIN ACEITE!</p>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-emerald-50 to-green-100">
                <h2 className="text-4xl font-bold text-emerald-800 mb-4 font-['Comic_Sans_MS',_cursive]">
                  🧼 EcoSkin
                </h2>
                <p className="text-lg text-emerald-700 mb-4">
                  Línea de jabones naturales para el cuidado de tu piel y el medio ambiente.
                </p>
                <div className="bg-white p-4 rounded-xl border-2 border-emerald-400">
                  <p className="text-emerald-900 font-semibold text-sm mb-2">
                    ✨ Beneficios:
                  </p>
                  <ul className="text-emerald-700 text-sm space-y-1">
                    <li>• Sin aceites dañinos</li>
                    <li>• 100% naturales</li>
                    <li>• Biodegradables</li>
                    <li>• Cuidan tu piel</li>
                  </ul>
                </div>
                <button className="w-full mt-6 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold py-4 rounded-xl hover:from-emerald-700 hover:to-green-700 transition-all transform hover:scale-105 shadow-lg">
                  Ver Productos
                </button>
              </div>
            </div>
          </div>

          <div
            onClick={() => onNavigate('food', 'ecorelax')}
            className="group cursor-pointer"
          >
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all border-4 border-blue-600 hover:border-blue-400">
              <div className="relative h-80 bg-gradient-to-br from-blue-400 via-cyan-500 to-emerald-600 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-300 rotate-12 rounded-full"></div>
                  <div className="absolute bottom-10 right-10 w-32 h-32 bg-white -rotate-45"></div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <Droplet className="absolute -top-8 -right-8 w-16 h-16 text-yellow-300 animate-pulse" />
                    <img
                      src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="EcoRelax"
                      className="w-64 h-64 object-cover rounded-2xl shadow-2xl transform group-hover:-rotate-3 transition-transform"
                    />
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-yellow-300 px-6 py-2 rounded-full transform rotate-3 shadow-lg">
                  <p className="text-blue-900 font-bold text-sm">¡RELAX!</p>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-blue-50 to-cyan-100">
                <h2 className="text-3xl font-bold text-blue-800 mb-4 font-['Comic_Sans_MS',_cursive]">
                  💧 EcoRelax
                </h2>
                <p className="text-lg text-blue-700 mb-4">
                  Bebidas naturales creadas para liberar el estrés y encontrar calma.
                </p>
                <div className="bg-white p-4 rounded-xl border-2 border-blue-400">
                  <p className="text-blue-900 font-semibold text-sm mb-2">
                    🌿 Ingredientes:
                  </p>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Pasiflora</li>
                    <li>• Valeriana</li>
                    <li>• Magnesio</li>
                    <li>• 100% natural</li>
                  </ul>
                </div>
                <button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-4 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all transform hover:scale-105 shadow-lg">
                  Ver Bebidas
                </button>
              </div>
            </div>
          </div>

          <div
            onClick={() => onNavigate('food', 'ecosweet')}
            className="group cursor-pointer"
          >
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all border-4 border-orange-600 hover:border-orange-400">
              <div className="relative h-80 bg-gradient-to-br from-orange-400 via-yellow-500 to-amber-600 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-10 right-10 w-24 h-24 bg-yellow-300 -rotate-12 rounded-lg"></div>
                  <div className="absolute bottom-10 left-10 w-32 h-32 bg-white rotate-45"></div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <Cake className="absolute -top-8 -left-8 w-16 h-16 text-yellow-300 animate-pulse" />
                    <img
                      src="https://images.pexels.com/photos/3964623/pexels-photo-3964623.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="EcoSweet"
                      className="w-64 h-64 object-cover rounded-2xl shadow-2xl transform group-hover:rotate-3 transition-transform"
                    />
                  </div>
                </div>

                <div className="absolute top-4 left-4 bg-yellow-300 px-6 py-2 rounded-full transform -rotate-3 shadow-lg">
                  <p className="text-orange-900 font-bold text-sm">¡DULCE!</p>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-orange-50 to-yellow-100">
                <h2 className="text-3xl font-bold text-orange-800 mb-4 font-['Comic_Sans_MS',_cursive]">
                  🍌 EcoSweet
                </h2>
                <p className="text-lg text-orange-700 mb-4">
                  Muffins naturales con plátanos maduros, sin desperdicio.
                </p>
                <div className="bg-white p-4 rounded-xl border-2 border-orange-400">
                  <p className="text-orange-900 font-semibold text-sm mb-2">
                    ✨ Beneficios:
                  </p>
                  <ul className="text-orange-700 text-sm space-y-1">
                    <li>• Cero desperdicio</li>
                    <li>• Nutrientes naturales</li>
                    <li>• Belleza desde adentro</li>
                    <li>• S/ 2.50 c/u</li>
                  </ul>
                </div>
                <button className="w-full mt-6 bg-gradient-to-r from-orange-600 to-yellow-600 text-white font-bold py-4 rounded-xl hover:from-orange-700 hover:to-yellow-700 transition-all transform hover:scale-105 shadow-lg">
                  Ver Muffins
                </button>
              </div>
            </div>
          </div>

          <div
            onClick={() => onNavigate('food', 'ecocrunch')}
            className="group cursor-pointer lg:col-span-1"
          >
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all border-4 border-amber-600 hover:border-amber-400">
              <div className="relative h-80 bg-gradient-to-br from-amber-400 via-yellow-500 to-green-600 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-300 rotate-12 rounded-lg"></div>
                  <div className="absolute bottom-10 right-10 w-32 h-32 bg-white -rotate-45"></div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <Cookie className="absolute -top-8 -right-8 w-16 h-16 text-yellow-300 animate-pulse" />
                    <img
                      src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="EcoCrunch"
                      className="w-64 h-64 object-cover rounded-2xl shadow-2xl transform group-hover:-rotate-3 transition-transform"
                    />
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-yellow-300 px-6 py-2 rounded-full transform rotate-3 shadow-lg">
                  <p className="text-amber-900 font-bold text-sm">¡CRUNCH!</p>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-amber-50 to-yellow-100">
                <h2 className="text-3xl font-bold text-amber-800 mb-4 font-['Comic_Sans_MS',_cursive]">
                  🍪 EcoCrunch
                </h2>
                <p className="text-lg text-amber-700 mb-4">
                  Galletas artesanales sin químicos ni desperdicios.
                </p>
                <div className="bg-white p-4 rounded-xl border-2 border-amber-400">
                  <p className="text-amber-900 font-semibold text-sm mb-2">
                    🌾 Características:
                  </p>
                  <ul className="text-amber-700 text-sm space-y-1">
                    <li>• Avena pura</li>
                    <li>• Sin químicos</li>
                    <li>• Amigable con el ambiente</li>
                    <li>• Deliciosa artesanía</li>
                  </ul>
                </div>
                <button className="w-full mt-6 bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-bold py-4 rounded-xl hover:from-amber-700 hover:to-yellow-700 transition-all transform hover:scale-105 shadow-lg">
                  Ver Galletas
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
