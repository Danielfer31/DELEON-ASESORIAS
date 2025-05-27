import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.from(titleRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    })
    .from(subtitleRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.4")
    .from(ctaRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.3");
    
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-navy-900 text-white">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
        }}
      ></div>
      
      <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
        >
          Estrategia con propósito. Política con visión.
        </h2>
        
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto"
        >
          Bienvenido a De León Asesoría Política, donde combinamos análisis técnico, estrategia electoral y desarrollo territorial para impulsar liderazgos efectivos y transformadores. Con experiencia comprobada en campañas políticas y formulación de proyectos, ofrecemos soluciones integrales para actores políticos y organizaciones comprometidas con el cambio.
        </p>
        
        <div ref={ctaRef}>
          <a 
            href="#servicios" 
            className="btn btn-primary inline-flex items-center"
          >
            Conoce nuestros servicios
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#quien-soy" aria-label="Scroll down">
          <ChevronDown size={24} className="text-gold" />
        </a>
      </div>
    </section>
  );
};

export default Hero;