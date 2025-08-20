import { Play, Clock, Award, Download } from "lucide-react";
const ModulesSection = () => {
  const modules = [{
    number: "01",
    title: "Fundamentos da Viralização",
    description: "Entenda como funciona o algoritmo das principais redes sociais",
    duration: "2h 30min",
    lessons: 8,
    color: "brand-yellow"
  }, {
    number: "02",
    title: "Criação de Conteúdo Viral",
    description: "Técnicas para criar posts que geram alto engajamento",
    duration: "3h 15min",
    lessons: 12,
    color: "brand-gold"
  }, {
    number: "03",
    title: "Estratégias de Crescimento",
    description: "Como crescer sua base de seguidores organicamente",
    duration: "2h 45min",
    lessons: 10,
    color: "brand-red"
  }, {
    number: "04",
    title: "Monetização e Vendas",
    description: "Transforme seu conteúdo em uma máquina de vendas",
    duration: "4h 20min",
    lessons: 15,
    color: "brand-orange"
  }];
  return <section className="py-16 md:py-20 bg-dark-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-4 md:right-10 w-48 md:w-64 h-48 md:h-64 bg-brand-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-4 md:left-10 w-64 md:w-80 h-64 md:h-80 bg-brand-yellow/10 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container relative px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-2">
            <span className="gradient-text">Módulos</span> do Curso
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            Um conteúdo completo e estruturado para você dominar as redes sociais do zero ao profissional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {modules.map((module, index) => <div key={index} className="glass-card p-6 md:p-8 hover-scale animate-fade-in-up group" style={{
          animationDelay: `${index * 0.2}s`
        }}>
              {/* Module Header */}
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <div className={`text-4xl md:text-6xl font-black text-${module.color} opacity-20 group-hover:opacity-40 transition-opacity`}>
                  {module.number}
                </div>
                <div className="flex items-center space-x-2 md:space-x-4 text-gray-400">
                  <div className="flex items-center space-x-1">
                    
                    
                  </div>
                </div>
              </div>

              {/* Module Content */}
              <div className="mb-4 md:mb-6">
                <h3 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-brand-red transition-colors">
                  {module.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                  {module.description}
                </p>
              </div>

              {/* Module Features */}
              <div className="space-y-2 mb-4 md:mb-6">
                <div className="flex items-center text-gray-300">
                  <Award className="w-3 md:w-4 h-3 md:h-4 text-brand-red mr-2" />
                  <span className="text-xs md:text-sm">Certificado de conclusão</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Download className="w-3 md:w-4 h-3 md:h-4 text-brand-red mr-2" />
                  <span className="text-xs md:text-sm">Material complementar</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className={`h-2 bg-gradient-to-r from-${module.color} to-brand-red rounded-full transition-all duration-1000 group-hover:w-full`} style={{
              width: '0%'
            }}></div>
              </div>
            </div>)}
        </div>

        {/* Course Stats */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="glass-card p-6 md:p-8 max-w-4xl mx-auto">
            <h3 className="text-lg md:text-2xl font-bold text-white mb-6 md:mb-8 px-2">O que você vai receber:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <div>
                <div className="text-2xl md:text-3xl font-bold gradient-text">70+</div>
                <div className="text-xs md:text-base text-gray-400">Horas de Conteúdo</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold gradient-text">23+</div>
                <div className="text-xs md:text-base text-gray-400">Conteúdos</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold gradient-text">20+</div>
                <div className="text-xs md:text-base text-gray-400">Templates</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold gradient-text">24/7</div>
                <div className="text-xs md:text-base text-gray-400">Suporte</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ModulesSection;