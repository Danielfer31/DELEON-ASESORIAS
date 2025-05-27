import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy-900 py-8 text-white/80">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-white flex items-center">
              DE LEÓN
              <span className="ml-2 text-sm border-l border-gold/30 pl-2 text-gold">
                Asesoría Política
              </span>
            </h2>
          </div>
          
          <div className="text-sm">
            <p>© {currentYear} De León Asesoría Política. Todos los derechos reservados.</p>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/10 text-sm text-center text-white/60">
          <p>Diseñado con excelencia para líderes que buscan hacer la diferencia.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;