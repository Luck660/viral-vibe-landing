import { Button } from "@/components/ui/button";
import { Play, TrendingUp, Users, DollarSign } from "lucide-react";
const Hero = () => {
  return <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-yellow/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl animate-float" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-gold/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative section-container pt-20 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8 animate-fade-in-up">
            <TrendingUp className="w-4 h-4 mr-2 text-brand-red" />
            <span className="text-sm font-medium">Curso Completo para Viralizar nas Redes Sociais</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-black mb-6 animate-fade-in-up" style={{
          animationDelay: '0.2s'
        }}>
            TORNE-SE UMA{' '}
            <span className="gradient-text block">REFERÊNCIA</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{
          animationDelay: '0.4s'
        }}>
            Descubra as estratégias secretas que os <strong className="text-brand-red">influenciadores de sucesso</strong> usam para viralizar, 
            criar conteúdo de alto impacto e transformar seguidores em <strong className="text-brand-red">clientes fiéis</strong>
          </p>

          {/* Video Section */}
          <div className="relative max-w-2xl mx-auto mb-12 animate-fade-in-up" style={{
          animationDelay: '0.6s'
        }}>
            <div className="aspect-video bg-gradient-to-br from-dark-card to-dark-bg rounded-2xl border border-white/10 flex items-center justify-center group cursor-pointer hover-scale">
              <div className="flex items-center space-x-3 text-white group-hover:text-brand-red transition-colors">
                <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center animate-pulse-glow">
                  <Play className="w-6 h-6 ml-1" fill="currentColor" />
                </div>
                <span className="text-lg font-semibold">Assista o Vídeo Exclusivo</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-fade-in-up" style={{
          animationDelay: '0.8s'
        }}>
            <div className="glass-card p-6 text-center hover-scale">
              <Users className="w-8 h-8 text-brand-gold mx-auto mb-3" />
              <div className="text-3xl font-bold text-white">+8K</div>
              <div className="text-gray-400">Alunos Transformados</div>
            </div>
            <div className="glass-card p-6 text-center hover-scale">
              <TrendingUp className="w-8 h-8 text-brand-red mx-auto mb-3" />
              <div className="text-3xl font-bold text-white">100x</div>
              <div className="text-gray-400">Mais Engajamento</div>
            </div>
            <div className="glass-card p-6 text-center hover-scale">
              <DollarSign className="w-8 h-8 text-brand-yellow mx-auto mb-3" />
              <div className="text-3xl font-bold text-white">R$ 30K+</div>
              <div className="text-gray-400">Em Vendas Geradas</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in-up" style={{
          animationDelay: '1s'
        }}>
            <Button size="lg" className="bg-cta-gradient hover:shadow-lg hover:shadow-brand-red/25 text-white font-bold px-12 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 animate-pulse-glow">
              QUERO VIRALIZAR AGORA
            </Button>
            <p className="text-sm text-gray-400 mt-4">🔥 Mais de 37 pessoas se inscreveram hoje</p>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;