import React, { useRef, useEffect } from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import gsap from 'gsap';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  bullets: string[];
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  bullets, 
  delay 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const card = cardRef.current;
    
    if (card) {
      gsap.from(card, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: delay * 0.2,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    }
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="service-card group"
    >
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 rounded-full bg-navy-900/10 flex items-center justify-center group-hover:bg-navy-900/15 transition-colors duration-300">
          <Icon size={32} className="text-navy-900" />
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-navy-900 text-center mb-3">
        {title}
      </h3>
      
      <p className="text-center mb-4 text-gray-700">
        {description}
      </p>
      
      <ul className="space-y-2 text-sm">
        {bullets.map((bullet, index) => (
          <li key={index} className="flex items-start">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold mt-1.5 mr-2"></span>
            <span className="text-gray-700">{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;