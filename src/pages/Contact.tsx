import { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, MessageCircle, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([formData]);

      if (error) throw error;

      setSubmitMessage('¡Gracias por tu mensaje! Te responderemos pronto.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitMessage('Hubo un error. Por favor intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-emerald-800 mb-4 font-['Comic_Sans_MS',_cursive]">
            📞 Contacto
          </h1>
          <p className="text-xl text-emerald-700">
            ¡Nos encantaría saber de ti!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 border-4 border-emerald-600 transform -rotate-1">
            <div className="bg-yellow-200 -mx-8 -mt-8 p-6 rounded-t-3xl mb-6">
              <h2 className="text-3xl font-bold text-emerald-900 font-['Comic_Sans_MS',_cursive]">
                Envíanos un mensaje
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-emerald-800 font-semibold mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-3 border-emerald-400 rounded-xl focus:outline-none focus:border-emerald-600 bg-green-50"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-emerald-800 font-semibold mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border-3 border-emerald-400 rounded-xl focus:outline-none focus:border-emerald-600 bg-green-50"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-emerald-800 font-semibold mb-2">
                  Mensaje
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border-3 border-emerald-400 rounded-xl focus:outline-none focus:border-emerald-600 bg-green-50 resize-none"
                  placeholder="Tu mensaje o sugerencia..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold py-4 rounded-xl hover:from-emerald-700 hover:to-green-700 transition-all transform hover:scale-105 disabled:opacity-50 flex items-center justify-center gap-2 text-lg shadow-lg"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
              </button>

              {submitMessage && (
                <div className={`p-4 rounded-xl text-center font-semibold ${
                  submitMessage.includes('Gracias')
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-xl p-8 border-4 border-yellow-400 transform rotate-1">
              <div className="bg-emerald-600 -mx-8 -mt-8 p-6 rounded-t-3xl mb-6">
                <h2 className="text-3xl font-bold text-yellow-300 font-['Comic_Sans_MS',_cursive]">
                  🏪 Tienda Física
                </h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-green-50 p-4 rounded-xl">
                  <MapPin className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-emerald-900">Ubicación:</p>
                    <p className="text-emerald-700">Área de Ciencias Sociales</p>
                    <p className="text-emerald-700">Campus Universitario</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-green-50 p-4 rounded-xl">
                  <Phone className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-emerald-900">Teléfono:</p>
                    <p className="text-emerald-700">+51 999 888 777</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-green-50 p-4 rounded-xl">
                  <Mail className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-emerald-900">Email:</p>
                    <p className="text-emerald-700">contacto@ecorenuva.com</p>
                  </div>
                </div>

                <div className="bg-yellow-100 p-4 rounded-xl border-2 border-yellow-400">
                  <p className="font-semibold text-emerald-900 mb-2">⏰ Horario de atención:</p>
                  <p className="text-emerald-800">Lunes a Viernes: 8:00 AM - 5:00 PM</p>
                  <p className="text-emerald-800">Sábados: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 border-4 border-green-400">
              <h2 className="text-2xl font-bold text-emerald-900 mb-6 font-['Comic_Sans_MS',_cursive]">
                Síguenos en redes sociales
              </h2>

              <div className="space-y-4">
                <a
                  href="#"
                  className="flex items-center gap-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white p-4 rounded-xl hover:scale-105 transition-transform"
                >
                  <Instagram className="w-8 h-8" />
                  <span className="font-semibold text-lg">@ecorenuva_oficial</span>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-4 bg-blue-600 text-white p-4 rounded-xl hover:scale-105 transition-transform"
                >
                  <Facebook className="w-8 h-8" />
                  <span className="font-semibold text-lg">EcoRenova</span>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-4 bg-green-500 text-white p-4 rounded-xl hover:scale-105 transition-transform"
                >
                  <MessageCircle className="w-8 h-8" />
                  <span className="font-semibold text-lg">WhatsApp: +51 999 888 777</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
