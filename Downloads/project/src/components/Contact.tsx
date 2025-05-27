import React, { useRef, useEffect } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Linkedin } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const content = contentRef.current;

    if (section && title && content) {
      gsap.from(title, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      gsap.from(content, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="contacto" className="section bg-navy-900 text-white">
      <div className="container">
        <div className="max-w-xl mx-auto mb-12 text-center">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-4">
            ¿Estás listo para impulsar tu proyecto político?
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-white/80">
            Estoy disponible para colaborar en proyectos que busquen generar un impacto positivo en lo público y lo territorial.
          </p>
        </div>

        <div ref={contentRef} className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            <a 
              href="tel:+573003473884" 
              className="bg-navy-800 hover:bg-navy-700 p-6 rounded-lg text-center transition-all duration-300 group"
            >
              <div className="bg-navy-700/50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                <Phone size={28} className="text-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Teléfono</h3>
              <p className="text-white/80">+57 300 347 3884</p>
            </a>
            
            <a 
              href="mailto:danielferdeleon@gmail.com" 
              className="bg-navy-800 hover:bg-navy-700 p-6 rounded-lg text-center transition-all duration-300 group"
            >
              <div className="bg-navy-700/50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                <Mail size={28} className="text-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-white/80">danielferdeleon@gmail.com</p>
            </a>

            <a 
              href="https://maps.google.com/?q=Montería,Córdoba,Colombia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-navy-800 hover:bg-navy-700 p-6 rounded-lg text-center transition-all duration-300 group"
            >
              <div className="bg-navy-700/50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                <MapPin size={28} className="text-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ubicación</h3>
              <p className="text-white/80">Montería, Córdoba</p>
            </a>
            
            <a 
              href="https://wa.me/573003473884" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-navy-800 hover:bg-navy-700 p-6 rounded-lg text-center transition-all duration-300 group"
            >
              <div className="bg-navy-700/50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                <MessageSquare size={28} className="text-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
              <p className="text-white/80">Mensaje directo</p>
            </a>

            <a 
              href="https://www.linkedin.com/in/daniel-de-león" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-navy-800 hover:bg-navy-700 p-6 rounded-lg text-center transition-all duration-300 group"
            >
              <div className="bg-navy-700/50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                <Linkedin size={28} className="text-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-white/80">Perfil profesional</p>
            </a>
          </div>

          <div className="mt-12 text-center">
            <a 
              href="https://wa.me/573003473884" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary inline-flex items-center"
            >
              <MessageSquare size={18} className="mr-2" />
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/573003473884"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20BD5C] text-white rounded-full p-4 shadow-lg transition-all duration-300 z-50"
        aria-label="Contactar por WhatsApp"
      >
        <MessageSquare size={24} />
      </a>
    </section>
  );
};

export default Contact;