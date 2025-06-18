import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="inicio" className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent"></div>
        <div className="absolute top-20 left-20 w-64 h-64 border border-blue-500/20 rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-blue-500/20 rotate-12"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
              Bem-vindo ao meu<br />
              <span className="text-white">Portfolio</span>
            </h1>
            <div className="w-20 h-1 bg-yellow-400 mb-6"></div>
            <p className="text-white text-xl">
              Construindo sistemas
            </p>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="w-96 h-64 bg-gray-800 rounded-lg border-4 border-gray-600 relative">
              <div className="w-full h-4 bg-gray-700 rounded-t-md flex items-center justify-start px-2 space-x-1">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <div className="p-4 h-full bg-black rounded-b-md">
                <div className="space-y-2">
                  <div className="w-24 h-2 bg-green-400 rounded"></div>
                  <div className="w-32 h-2 bg-blue-400 rounded"></div>
                  <div className="w-20 h-2 bg-yellow-400 rounded"></div>
                  <div className="w-28 h-2 bg-purple-400 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;