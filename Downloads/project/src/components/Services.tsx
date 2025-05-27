import React, { useRef, useEffect } from 'react';
import { FileText, Users, MessageSquare, FileCode, Briefcase, GraduationCap } from 'lucide-react';
import ServiceCard from './ServiceCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;

    if (section && title) {
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
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const services = [
    {
      title: "Asesoría política individual",
      description: "Acompañamiento personalizado para candidatos y líderes",
      icon: Users,
      bullets: [
        "Construcción de perfil político",
        "Desarrollo de estrategia electoral",
        "Coaching en liderazgo político",
        "Planificación de carrera política"
      ]
    },
    {
      title: "Diseño de campañas electorales",
      description: "Planificación y ejecución de campañas efectivas",
      icon: FileText,
      bullets: [
        "Conceptualización de campaña",
        "Estrategia de movilización",
        "Gestión de equipos de campaña",
        "Análisis electoral y territorial"
      ]
    },
    {
      title: "Estrategias de comunicación política",
      description: "Desarrollo de mensajes que conectan con la ciudadanía",
      icon: MessageSquare,
      bullets: [
        "Gestión de medios tradicionales",
        "Estrategia digital integral",
        "Creación de contenido político",
        "Manejo de crisis comunicacional"
      ]
    },
    {
      title: "Formación en liderazgo juvenil",
      description: "Capacitaciones para jóvenes líderes",
      icon: GraduationCap,
      bullets: [
        "Talleres de participación política",
        "Formación en gestión pública",
        "Desarrollo de habilidades de liderazgo",
        "Mentoría política juvenil"
      ]
    },
    {
      title: "Formulación de proyectos públicos",
      description: "Diseño y análisis de proyectos de impacto",
      icon: FileCode,
      bullets: [
        "Evaluación de políticas públicas",
        "Diseño de proyectos sociales",
        "Gestión de recursos públicos",
        "Seguimiento y evaluación"
      ]
    },
    {
      title: "Consultoría en desarrollo local",
      description: "Asistencia técnica para gobiernos locales",
      icon: Briefcase,
      bullets: [
        "Planeación territorial",
        "Desarrollo sostenible",
        "Gestión municipal",
        "Participación ciudadana"
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="servicios" className="section bg-white">
      <div className="container">
        <div className="max-w-xl mx-auto mb-12 text-center">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-4 text-navy-900">
            Servicios
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-700">
            Soluciones profesionales para potenciar tu carrera política y maximizar tu impacto en la región.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              bullets={service.bullets}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;