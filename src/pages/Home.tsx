import { Sparkles, Leaf, Recycle, Heart } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string, subcategory?: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-green-50 to-emerald-100">
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rotate-12 rounded-lg"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-green-300 -rotate-12 rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-amber-300 rotate-45"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <Sparkles className="w-16 h-16 text-yellow-300 animate-pulse" />
            </div>
            <h1 className="text-6xl font-bold mb-6 text-yellow-300 font-['Comic_Sans_MS',_cursive] drop-shadow-lg">
              EcoRenova
            </h1>
            <p className="text-3xl mb-8 font-semibold bg-emerald-900 inline-block px-8 py-4 rounded-lg rotate-1 shadow-xl">
              Pequeñas decisiones, grandes cambios para el planeta.
            </p>

            <div className="mt-12 bg-white/90 backdrop-blur-sm text-emerald-900 p-8 rounded-2xl shadow-2xl transform -rotate-1">
              <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                <Heart className="w-8 h-8 text-red-500" />
                ¿Quiénes somos?
              </h2>
              <p className="text-lg leading-relaxed">
                Somos estudiantes que observó problemas ambientales y poco saludables dentro de
                nuestra comunidad y decidió formar un grupo con fines de ayuda ecológica y
                saludable para nuestra comunidad.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-emerald-800 font-['Comic_Sans_MS',_cursive]">
          Nuestros Productos
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all cursor-pointer border-4 border-emerald-600"
            onClick={() => onNavigate('hygiene')}>
            <div className="relative h-64 bg-gradient-to-br from-green-400 to-emerald-600">
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles className="w-32 h-32 text-yellow-300 opacity-50" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="EcoSkin Jabones"
                  className="w-48 h-48 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
            <div className="p-6 bg-gradient-to-br from-emerald-50 to-green-100">
              <h3 className="text-3xl font-bold text-emerald-800 mb-3 font-['Comic_Sans_MS',_cursive]">
                🧼 EcoSkin - Jabones Naturales
              </h3>
              <p className="text-emerald-700 text-lg">
                Jabones naturales sin aceite, perfectos para cuidar tu piel y el medio ambiente.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all cursor-pointer border-4 border-green-600"
            onClick={() => onNavigate('food')}>
            <div className="relative h-64 bg-gradient-to-br from-lime-400 to-green-600">
              <div className="absolute inset-0 flex items-center justify-center">
                <Leaf className="w-32 h-32 text-yellow-300 opacity-50" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Comida Ecológica"
                  className="w-48 h-48 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
            <div className="p-6 bg-gradient-to-br from-lime-50 to-green-100">
              <h3 className="text-3xl font-bold text-green-800 mb-3 font-['Comic_Sans_MS',_cursive]">
                🍏 Comida Saludable
              </h3>
              <p className="text-green-700 text-lg">
                Alimentos frescos y saludables preparados con amor y responsabilidad.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-yellow-300 p-8 rounded-3xl shadow-2xl transform rotate-2">
            <Recycle className="w-16 h-16 text-emerald-800 mx-auto mb-4" />
            <p className="text-2xl font-bold text-emerald-900">
              ¡Únete al cambio ecológico!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
