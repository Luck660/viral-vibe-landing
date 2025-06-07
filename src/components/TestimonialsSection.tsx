
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Empreendedora Digital",
      image: "/lovable-uploads/d7dde467-9d02-480e-99dc-a83d3e7b101f.png",
      content: "Em apenas 30 dias aplicando as estratégias do curso, meu perfil saltou de 5k para 50k seguidores! As vendas aumentaram 300%.",
      rating: 5,
      results: "+900% seguidores"
    },
    {
      name: "João Santos",
      role: "Coach de Vendas",
      image: "/lovable-uploads/d7dde467-9d02-480e-99dc-a83d3e7b101f.png",
      content: "Nunca pensei que conseguiria viralizar. Hoje meus vídeos chegam a 2 milhões de visualizações. Curso incrível!",
      rating: 5,
      results: "2M visualizações"
    },
    {
      name: "Ana Costa",
      role: "Influenciadora",
      image: "/lovable-uploads/d7dde467-9d02-480e-99dc-a83d3e7b101f.png",
      content: "As técnicas de copywriting transformaram completamente meus posts. Agora cada publicação gera centenas de leads.",
      rating: 5,
      results: "+500 leads/mês"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-dark-card to-dark-bg">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Resultados <span className="gradient-text">Comprovados</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Veja o que nossos alunos estão conseguindo após aplicar nossas estratégias
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-card p-8 hover-scale animate-fade-in-up relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4">
                <Quote className="w-8 h-8 text-brand-red/30" />
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Results Badge */}
              <div className="inline-block bg-brand-red/20 text-brand-red px-3 py-1 rounded-full text-sm font-semibold mb-6">
                {testimonial.results}
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-yellow to-brand-red rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Numbers */}
        <div className="mt-20 text-center">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-8">Mais de 8.000 alunos já transformaram suas vidas</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">+8k</div>
                <div className="text-gray-400">Alunos Transformados</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">+35k</div>
                <div className="text-gray-400">Em Vendas Geradas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">4.9★</div>
                <div className="text-gray-400">Avaliação Média</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
