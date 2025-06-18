import React from 'react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Site de doçaria",
      description: "Bem-vindo ao \"Site de Doçaria\" – sua plataforma de escolha para as mais deliciosas receitas e produtos de confeitarias! Encante-se com nossa dedicação à excelência em doces.",
      image: (
        <div className="h-48 bg-gradient-to-br from-pink-200 to-pink-100 flex items-center justify-center">
          <div className="grid grid-cols-3 gap-4 p-4">
            <div className="w-8 h-8 bg-pink-400 rounded-full"></div>
            <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
            <div className="w-8 h-8 bg-green-400 rounded-full"></div>
            <div className="w-8 h-8 bg-purple-400 rounded-full"></div>
            <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
            <div className="w-8 h-8 bg-red-400 rounded-full"></div>
          </div>
        </div>
      )
    },
    {
      title: "Protótipo do D.I",
      description: "Sistema de cadastro infantil",
      image: (
        <div className="h-48 bg-white flex items-center justify-center">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <div className="w-8 h-8 bg-red-500 rounded-full mr-2"></div>
              <div className="w-8 h-8 bg-yellow-500 rounded-full mr-2"></div>
              <div className="w-8 h-8 bg-green-500 rounded-full mr-2"></div>
              <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            </div>
            <h4 className="text-2xl font-bold text-gray-800">crianças</h4>
            <p className="text-sm text-gray-600">VERBODIVIDA</p>
          </div>
        </div>
      )
    },
    {
      title: "Site de Doações",
      description: "Projeto de extensão da faculdade.",
      image: (
        <div className="h-48 bg-gray-100 flex items-center justify-center">
          <div className="relative">
            <div className="w-16 h-16 bg-red-500 transform rotate-45 rounded-lg"></div>
            <div className="absolute -bottom-4 -left-8 w-12 h-12 border-4 border-gray-800 rounded-full bg-transparent"></div>
            <div className="absolute -bottom-4 -right-8 w-12 h-12 border-4 border-gray-800 rounded-full bg-transparent"></div>
          </div>
        </div>
      )
    },
    {
      title: "Desenvolvimento Web",
      description: "Soluções web personalizadas para seu negócio.",
      image: (
        <div className="h-48 bg-pink-100 flex items-center justify-center">
          <div className="w-24 h-24 bg-white rounded-full border-4 border-gray-300 flex items-center justify-center">
            <div className="w-8 h-8 bg-red-500 transform rotate-45 rounded"></div>
          </div>
        </div>
      )
    },
    {
      title: "E-commerce Perfume",
      description: "Plataforma de vendas online para perfumes de luxo.",
      image: (
        <div className="h-48 bg-gray-900 flex items-center justify-center">
          <div className="text-center text-yellow-400">
            <div className="text-4xl font-bold mb-2">PERFUME</div>
            <div className="text-sm">LUXURY LINE</div>
          </div>
        </div>
      )
    },
    {
      title: "Sistema Educacional",
      description: "Plataforma para gestão educacional e aprendizado.",
      image: (
        <div className="h-48 bg-gray-700 flex items-center justify-center">
          <div className="w-20 h-16 bg-yellow-600 rounded transform -rotate-12 shadow-lg"></div>
        </div>
      )
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-[#02155a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">SERVIÇOS</h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              {service.image}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;