import { CheckCircle, Eye, Heart, Share2, MessageSquare } from "lucide-react";
const SecretsSection = () => {
  const secrets = [{
    icon: <Eye className="w-6 h-6" />,
    title: "Descobrir as estratégias que os influenciadores usam para conseguir visualizações",
    description: "Técnicas comprovadas para aumentar o alcance dos seus posts"
  }, {
    icon: <Heart className="w-6 h-6" />,
    title: "Como identificar o que está em alta e usar isso a seu favor",
    description: "Aprenda a surfar nas tendências e criar conteúdo viral"
  }, {
    icon: <Share2 className="w-6 h-6" />,
    title: "Os melhores horários e formatos para postar",
    description: "Maximize seu engajamento com timing perfeito"
  }, {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Técnicas de copywriting para redes sociais",
    description: "Escreva legendas que convertem seguidores em clientes"
  }];
  const phoneExamples = [{
    views: "156K",
    image: ""
  }, {
    views: "851K",
    image: ""
  }, {
    views: "347K",
    image: ""
  }, {
    views: "273K",
    image: ""
  }, {
    views: "387K",
    image: ""
  }];
  return <section className="py-16 md:py-20 bg-gradient-to-b from-dark-bg to-dark-card">
      <div className="section-container px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-2">
            Meus <span className="gradient-text">Segredos</span> para Viralizar
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            Vou revelar as minhas próprias estratégias que realmente funcionam para crescer no digital.
            Além disso, vou expor os truques que muitos influenciadores usam em segredo, mas nunca contam a verdade sobre como conseguir milhões de visualizações.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {secrets.map((secret, index) => <div key={index} className="glass-card p-6 md:p-8 hover-scale animate-fade-in-up" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-brand-red/20 rounded-lg flex items-center justify-center text-brand-red flex-shrink-0">
                  {secret.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-start mb-3">
                    <CheckCircle className="w-4 md:w-5 h-4 md:h-5 text-brand-red mr-2 mt-1 flex-shrink-0" />
                    <h3 className="text-base md:text-lg font-semibold text-white leading-tight">
                      {secret.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                    {secret.description}
                  </p>
                </div>
              </div>
            </div>)}
        </div>

        {/* Phone Mockups */}
        <div className="mt-16 md:mt-20 relative">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 px-2">Veja os Resultados em Ação</h3>
            <p className="text-sm md:text-base text-gray-400 px-2">Exemplos reais de conteúdos que viralizaram usando nossas estratégias</p>
          </div>
          
          <div className="flex justify-center items-center space-x-2 md:space-x-4 lg:space-x-8 overflow-x-auto pb-8 px-4">
            {phoneExamples.map((example, index) => <div key={index} className="w-32 md:w-48 h-64 md:h-96 bg-dark-card rounded-2xl md:rounded-3xl border border-white/10 flex-shrink-0 relative overflow-hidden hover-scale" style={{
            animationDelay: `${index * 0.2}s`,
            transform: `translateY(${index % 2 === 0 ? '10px' : '-10px'})`
          }}>
                {example.image ? <div className="w-full h-full relative">
                    <img src={example.image} alt={`Screenshot ${index + 1}`} className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 md:p-4">
                      <div className="text-center">
                        
                        
                      </div>
                    </div>
                  </div> : <div className="w-full h-full bg-gradient-to-b from-brand-yellow/20 to-brand-red/20 flex flex-col items-center justify-center p-3 md:p-4">
                    <div className="w-12 md:w-16 h-12 md:h-16 bg-white/20 rounded-full mb-3 md:mb-4 flex items-center justify-center">
                      <Heart className="w-6 md:w-8 h-6 md:h-8 text-red-400" />
                    </div>
                    <div className="text-center">
                      <div className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2">{example.views}</div>
                      <div className="text-xs md:text-sm text-gray-300">Visualizações</div>
                    </div>
                  </div>}
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default SecretsSection;