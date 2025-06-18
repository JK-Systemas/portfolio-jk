import React from 'react';
import { Mail, Phone, MapPin, Clock, Linkedin, Instagram } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contato" className="py-20 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">CONTATO</h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="h-96 bg-gray-300 rounded-lg overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-100 relative">
              <div className="absolute inset-4 bg-white/20 rounded"></div>
              <div className="absolute top-8 left-8 bg-red-500 w-4 h-4 rounded-full"></div>
              <div className="absolute top-12 right-12 bg-blue-500 w-3 h-3 rounded-full"></div>
              <div className="absolute bottom-16 left-1/3 bg-green-500 w-2 h-2 rounded-full"></div>
              <div className="flex items-center justify-center h-full">
                <div className="text-center text-gray-600">
                  <MapPin className="mx-auto mb-2" size={48} />
                  <p className="font-semibold">Araguaína, TO</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-black rounded-lg p-8">
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-white font-semibold mb-2">E-mail</h3>
                <div className="flex items-center space-x-2 text-white">
                  <Mail size={20} />
                  <span>jeaoedeus400@gmail.com</span>
                </div>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">Informações de contato</h3>
                <div className="flex items-center space-x-2 text-white">
                  <Phone size={20} />
                  <span>+55-63991021043</span>
                </div>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">Endereço</h3>
                <div className="text-white">
                  <p>Araguaína, TO, Brasil</p>
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-2 text-white">
                  <Clock size={20} />
                  <span>Seg-Sex - 08:00 às 19:00</span>
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                  <Instagram size={24} />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Nome"
                className="w-full px-4 py-3 rounded bg-white text-gray-800 placeholder-gray-500"
              />
              <input
                type="tel"
                placeholder="Telefone"
                className="w-full px-4 py-3 rounded bg-white text-gray-800 placeholder-gray-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;