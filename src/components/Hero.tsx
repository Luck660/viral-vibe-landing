
import { Button } from "@/components/ui/button";
import { Play, TrendingUp, Users, DollarSign } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-4 md:left-10 w-48 md:w-72 h-48 md:h-72 bg-brand-yellow/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-4 md:right-10 w-64 md:w-96 h-64 md:h-96 bg-brand-red/20 rounded-full blur-3xl animate-float" style={{
          animationDelay: '1s'
        }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 md:w-64 h-48 md:h-64 bg-brand-gold/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative section-container pt-16 md:pt-20 pb-12 md:pb-16 px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-3 md:px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 md:mb-8 animate-fade-in-up">
            <TrendingUp className="w-4 h-4 mr-2 text-brand-red" />
            <span className="text-xs md:text-sm font-medium">Curso Completo para Viralizar nas Redes Sociais</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6 animate-fade-in-up leading-tight" style={{
            animationDelay: '0.2s'
          }}>
            TORNE-SE UMA{' '}
            <span className="gradient-text block">REFERÊNCIA</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up px-2" style={{
            animationDelay: '0.4s'
          }}>
            Descubra as estratégias secretas que os <strong className="text-brand-red">influenciadores de sucesso</strong> usam para viralizar, 
            criar conteúdo de alto impacto e transformar seguidores em <strong className="text-brand-red">clientes fiéis</strong>
          </p>

          {/* Video Section - VSL */}
          <div className="relative max-w-2xl mx-auto mb-8 md:mb-12 animate-fade-in-up px-4" style={{
            animationDelay: '0.6s'
          }}>
            <div className="aspect-video bg-gradient-to-br from-dark-card to-dark-bg rounded-xl md:rounded-2xl border border-white/10 overflow-hidden">
              <video 
                className="w-full h-full object-cover"
                poster="/lovable-uploads/b0b162bd-dedf-427f-9175-d760938f062c.png"
                controls
                preload="metadata"
              >
                <source src="" type="video/mp4" />
                {/* Fallback content */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-3 text-white group cursor-pointer">
                    <div className="w-12 md:w-16 h-12 md:h-16 bg-brand-red rounded-full flex items-center justify-center animate-pulse-glow">
                      <Play className="w-4 md:w-6 h-4 md:h-6 ml-1" fill="currentColor" />
                    </div>
                    <span className="text-sm md:text-lg font-semibold text-center">Assista o Vídeo Exclusivo</span>
                  </div>
                </div>
              </video>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12 animate-fade-in-up px-2" style={{
            animationDelay: '0.8s'
          }}>
            <div className="glass-card p-4 md:p-6 text-center hover-scale">
              <Users className="w-6 md:w-8 h-6 md:h-8 text-brand-gold mx-auto mb-2 md:mb-3" />
              <div className="text-2xl md:text-3xl font-bold text-white">+8K</div>
              <div className="text-sm md:text-base text-gray-400">Alunos Transformados</div>
            </div>
            <div className="glass-card p-4 md:p-6 text-center hover-scale">
              <TrendingUp className="w-6 md:w-8 h-6 md:h-8 text-brand-red mx-auto mb-2 md:mb-3" />
              <div className="text-2xl md:text-3xl font-bold text-white">100x</div>
              <div className="text-sm md:text-base text-gray-400">Mais Engajamento</div>
            </div>
            <div className="glass-card p-4 md:p-6 text-center hover-scale">
              <DollarSign className="w-6 md:w-8 h-6 md:h-8 text-brand-yellow mx-auto mb-2 md:mb-3" />
              <div className="text-2xl md:text-3xl font-bold text-white">R$ 35K+</div>
              <div className="text-sm md:text-base text-gray-400">Em Vendas Geradas</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in-up px-4" style={{
            animationDelay: '1s'
          }}>
            <Button size="lg" className="w-full md:w-auto bg-cta-gradient hover:shadow-lg hover:shadow-brand-red/25 text-white font-bold px-8 md:px-12 py-4 md:py-6 text-base md:text-lg rounded-full transition-all duration-300 hover:scale-105 animate-pulse-glow">
              QUERO VIRALIZAR AGORA
            </Button>
            <p className="text-xs md:text-sm text-gray-400 mt-3 md:mt-4">🔥 Mais de 37 pessoas se inscreveram hoje</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
