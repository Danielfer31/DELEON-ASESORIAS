import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const content = contentRef.current;
    const image = imageRef.current;

    if (section && title && content && image) {
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

      gsap.from(image, {
        x: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
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
    <section ref={sectionRef} id="quien-soy" className="section bg-background">
      <div className="container">
        <div className="max-w-xl mx-auto mb-10 text-center">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-4 text-navy-900">
            ¿Quién soy?
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div ref={contentRef} className="space-y-4">
            <p className="leading-relaxed">
              Soy <span className="text-navy-900 font-semibold">Daniel De León</span>, asesor político y especialista en desarrollo de proyectos con una trayectoria enfocada en fortalecer procesos democráticos y de gestión pública. Mi enfoque se basa en la ética, la innovación y el compromiso con lo público, brindando herramientas y estrategias que generan resultados tangibles.
            </p>
            <p className="leading-relaxed">
              He asesorado campañas políticas en municipios como <span className="text-navy-900 font-semibold">Purísima, Lorica y Montería</span>, contribuyendo al fortalecimiento de liderazgos locales y al diseño de proyectos que responden a las necesidades de las comunidades.
            </p>
            <div className="pt-4">
              <a href="#servicios" className="btn btn-secondary">
                Conoce mis servicios
              </a>
            </div>
          </div>
          
          <div 
            ref={imageRef}
            className="bg-white p-4 rounded-lg shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300"
          >
            <img 
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Asesor político en una reunión" 
              className="rounded w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;