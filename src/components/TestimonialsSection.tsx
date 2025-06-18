import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Karine Leal",
      role: "Empresária",
      quote: "Fiquei impressionada com o nível de profissionalismo. Meu site ficou incrível!",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    },
    {
      name: "Thiago Almeida",
      role: "Empresário",
      quote: "A equipe foi extremamente atenciosa e capturou minha essência perfeitamente.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    },
    {
      name: "Sofia Vieira",
      role: "Mel",
      quote: "Nunca imaginei que um estúdio pudesse realizar tanto meu potencial.",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">DEPOIMENTOS</h2>
          <div className="w-16 h-1 bg-blue-900 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-4xl text-gray-300 mb-4">"</div>
              <p className="text-gray-600 mb-6 italic">
                {testimonial.quote}
              </p>
              <div className="text-4xl text-gray-300 mb-6 text-right">"</div>
              
              <div className="flex flex-col items-center">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />
                <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                <p className="text-gray-600 italic mb-4">{testimonial.role}</p>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;