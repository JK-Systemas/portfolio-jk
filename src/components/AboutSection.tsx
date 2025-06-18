import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-900 rounded-lg p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 border-yellow-500 opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-yellow-500 opacity-20"></div>
            
            <h3 className="text-2xl font-bold text-white mb-4">BEM-VINDO AO</h3>
            <h2 className="text-4xl font-bold text-white mb-6">SOBRE NÓS</h2>
            <div className="w-16 h-1 bg-yellow-400 mb-8"></div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 flex items-center justify-center">
                  <svg className="w-24 h-24 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div className="absolute -top-4 -left-4 w-6 h-6 bg-yellow-400 rounded-full"></div>
                <div className="absolute -top-2 -right-6 w-4 h-4 bg-yellow-400 rounded-full"></div>
                <div className="absolute -bottom-6 -left-2 w-5 h-5 bg-yellow-400 rounded-full"></div>
                <div className="absolute -bottom-4 -right-4 w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="absolute top-8 -right-8 w-4 h-4 bg-yellow-400 rounded-full"></div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Sobre nós</h2>
            <div className="w-16 h-1 bg-yellow-400 mb-8"></div>
            
            <p className="text-white text-lg mb-8">
              Desenvolvedor em criar soluções web inovadoras que combinam tecnologia de 
              ponta com experiências de usuário excepcionais.
            </p>
            
            <div className="space-y-4 text-white">
              <div className="flex items-start space-x-2">
                <span className="text-yellow-400">|</span>
                <span>Construa sua marca online!</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-yellow-400">|</span>
                <span>Desenvolvimento de sites inovadores e otimizados.</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-yellow-400">|</span>
                <span>Portfólio abaixo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;