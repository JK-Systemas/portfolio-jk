import React from 'react';
import { Mail, Phone, MapPin, Clock, Linkedin, Instagram } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contato" className="py-20 bg-[#02155a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">CONTATO</h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15832.75394075393!2d-48.251510368703634!3d-7.219329484101671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92d911fe4ffae24d%3A0xfdedd75259682f54!2sLot.%20Nova%20Araguaina%2C%20Aragua%C3%ADna%20-%20TO!5e0!3m2!1spt-BR!2sbr!4v1750235605459!5m2!1spt-BR!2sbr" width="600" height="800" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

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
              <input
                type="email"
                placeholder="Endereço de e-mail"
                className="w-full px-4 py-3 rounded bg-white text-gray-800 placeholder-gray-500"
              />
              <textarea
                placeholder="Mensagem"
                rows={4}
                className="w-full px-4 py-3 rounded bg-white text-gray-800 placeholder-gray-500 resize-none"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;