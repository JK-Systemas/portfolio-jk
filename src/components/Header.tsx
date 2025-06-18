import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  scrollToSection: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  activeSection,
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection
}) => {
  const menuItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'depoimentos', label: 'Depoimentos' },
    { id: 'contato', label: 'Contato' }
  ];

  return (
    <header className="bg-[#02155a] border-b border-blue-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            {/* Imagem da logo */}
            <img
              src="/logo.jpg" // Certifique-se de ter uma imagem aqui
              alt="Logo JK Sistemas"
              className="h-10 w-auto object-contain"
            />
            {/* Texto do nome da empresa */}
            <div className="text-white font-bold text-xl">
              JK - SISTEMAS
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-white hover:text-yellow-400 transition-colors ${activeSection === item.id ? 'text-yellow-400 underline' : 'no-underline'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-800">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-yellow-400 transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;