import { Button } from "@/components/ui/button";
import { Check, Clock, Shield, Gift } from "lucide-react";
const PricingSection = () => {
  const features = ["15+ horas de videoaulas exclusivas", "45+ lições práticas e aplicáveis", "20+ templates prontos para usar", "Suporte direto por 90 dias", "Certificado de conclusão", "Atualizações gratuitas para sempre", "Acesso vitalício ao conteúdo", "Grupo VIP no Telegram", "Bônus: E-book de Growth Hacking", "Bônus: Pack de templates viral"];
  return <section className="py-20 bg-dark-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-brand-yellow/20 rounded-full blur-3xl animate-float" style={{
        animationDelay: '2s'
      }}></div>
      </div>

      <div className="section-container relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Oferta <span className="gradient-text">Especial</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Por tempo limitado, você pode acessar todo o conteúdo com um desconto exclusivo
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Urgency Banner */}
          <div className="bg-red-600/20 border border-red-500/30 rounded-xl p-4 mb-8 text-center animate-pulse-glow">
            <div className="flex items-center justify-center space-x-2 text-red-400">
              <Clock className="w-5 h-5" />
              <span className="font-bold">OFERTA LIMITADA - Últimas 24 horas!</span>
            </div>
          </div>

          {/* Main Pricing Card */}
          <div className="glass-card p-10 relative overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute top-0 right-8 bg-brand-red px-6 py-2 rounded-b-lg">
              <span className="text-white font-bold text-sm">MAIS POPULAR</span>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left Side - Pricing */}
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Torne-se uma Referência
                </h3>
                <p className="text-gray-400 mb-8">
                  Acesso completo ao curso + bônus exclusivos
                </p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                    <span className="text-gray-400 line-through text-xl">De R$ 297</span>
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">-53%</span>
                  </div>
                  <div className="text-5xl md:text-6xl font-black gradient-text mb-2">
                    R$ 137,90
                  </div>
                  <p className="text-gray-400">ou 12x de R$ 13,79</p>
                </div>

                {/* Guarantees */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-center md:justify-start space-x-3">
                    <Shield className="w-5 h-5 text-brand-red" />
                    <span className="text-gray-300">Garantia de 7 dias</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-3">
                    <Gift className="w-5 h-5 text-brand-yellow" />
                    <span className="text-gray-300">Bônus exclusivos inclusos</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button size="lg" className="w-full bg-cta-gradient hover:shadow-lg hover:shadow-brand-red/25 text-white font-bold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 animate-pulse-glow mb-4">
                  GARANTIR MINHA VAGA AGORA
                </Button>
                
                <p className="text-sm text-gray-400">
                  🔒 Pagamento 100% seguro • SSL Certificado
                </p>
              </div>

              {/* Right Side - Features */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6">O que está incluso:</h4>
                <div className="space-y-4">
                  {features.map((feature, index) => <div key={index} className="flex items-start space-x-3 animate-fade-in-up" style={{
                  animationDelay: `${index * 0.05}s`
                }}>
                      <Check className="w-5 h-5 text-brand-red mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>)}
                </div>
              </div>
            </div>
          </div>

          {/* Bonus Section */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            
            
            
          </div>

          {/* Total Value */}
          <div className="text-center mt-8 glass-card p-6">
            <p className="text-gray-400 mb-2">Valor total se comprado separadamente:</p>
            <p className="text-2xl font-bold text-white line-through mb-2">R$ 297</p>
            <p className="text-3xl font-bold gradient-text">Hoje por apenas R$ 137,90</p>
          </div>
        </div>
      </div>
    </section>;
};
export default PricingSection;