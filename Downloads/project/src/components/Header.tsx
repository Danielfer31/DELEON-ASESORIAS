import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-navy-900 shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/logo.png" 
            alt="De León Asesoría Política" 
            className="h-12 md:h-16"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#quien-soy" className="text-white hover:text-gold transition-colors">
            ¿Quién soy?
          </a>
          <a href="#servicios" className="text-white hover:text-gold transition-colors">
            Servicios
          </a>
          <a href="#contacto" className="text-white hover:text-gold transition-colors">
            Contacto
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-navy-800 pt-4 pb-6">
          <nav className="container flex flex-col space-y-4">
            <a 
              href="#quien-soy" 
              className="text-white hover:text-gold transition-colors px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              ¿Quién soy?
            </a>
            <a 
              href="#servicios" 
              className="text-white hover:text-gold transition-colors px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </a>
            <a 
              href="#contacto" 
              className="text-white hover:text-gold transition-colors px-2 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;