
import { CheckCircle, Eye, Heart, Share2, MessageSquare } from "lucide-react";

const SecretsSection = () => {
  const secrets = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Descobrir as estratégias que os influenciadores usam para conseguir visualizações",
      description: "Técnicas comprovadas para aumentar o alcance dos seus posts"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Como identificar o que está em alta e usar isso a seu favor",
      description: "Aprenda a surfar nas tendências e criar conteúdo viral"
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Os melhores horários e formatos para postar",
      description: "Maximize seu engajamento com timing perfeito"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Técnicas de copywriting para redes sociais",
      description: "Escreva legendas que convertem seguidores em clientes"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-dark-bg to-dark-card">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Os <span className="gradient-text">Segredos</span> para Viralizar
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubra as estratégias que os maiores influenciadores usam para conseguir milhões de visualizações
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {secrets.map((secret, index) => (
            <div 
              key={index}
              className="glass-card p-8 hover-scale animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-green/20 rounded-lg flex items-center justify-center text-brand-green flex-shrink-0">
                  {secret.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-start mb-3">
                    <CheckCircle className="w-5 h-5 text-brand-green mr-2 mt-1 flex-shrink-0" />
                    <h3 className="text-lg font-semibold text-white leading-tight">
                      {secret.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    {secret.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Phone Mockups */}
        <div className="mt-20 relative">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Veja os Resultados em Ação</h3>
            <p className="text-gray-400">Exemplos reais de conteúdos que viralizaram usando nossas estratégias</p>
          </div>
          
          <div className="flex justify-center items-center space-x-4 md:space-x-8 overflow-x-auto pb-8">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div 
                key={index}
                className="w-48 h-96 bg-dark-card rounded-3xl border border-white/10 flex-shrink-0 relative overflow-hidden hover-scale"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  transform: `translateY(${index % 2 === 0 ? '20px' : '-20px'})` 
                }}
              >
                <div className="w-full h-full bg-gradient-to-b from-brand-purple/20 to-brand-blue/20 flex flex-col items-center justify-center p-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full mb-4 flex items-center justify-center">
                    <Heart className="w-8 h-8 text-red-400" />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-2">{Math.floor(Math.random() * 900 + 100)}K</div>
                    <div className="text-sm text-gray-300">Visualizações</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecretsSection;
