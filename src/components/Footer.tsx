import { Heart, Instagram, Mail } from "lucide-react";
const Footer = () => {
  return <footer className="bg-dark-card border-t border-white/10 py-8 md:py-12">
      <div className="section-container px-4">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Logo and Description */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold gradient-text mb-3 md:mb-4">
              Torne-se uma Referência
            </h3>
            <p className="text-sm md:text-base text-gray-400 mb-4">
              O curso mais completo para viralizar nas redes sociais e transformar sua presença digital em uma máquina de vendas.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base md:text-lg font-bold text-white mb-3 md:mb-4">Contato</h4>
            <div className="space-y-2 md:space-y-3">
              <a href="mailto:fferraz.oficial@contato.com" className="flex items-center text-sm md:text-base text-gray-400 hover:text-brand-red transition-colors">
                <Mail className="w-4 h-4 mr-2 md:mr-3" />
                <span>referencia.ofc@gmail.com</span>
              </a>
              <a href="https://instagram.com/fferraz_ofc" className="flex items-center text-sm md:text-base text-gray-400 hover:text-brand-red transition-colors">
                <Instagram className="w-4 h-4 mr-2 md:mr-3" />
                <span>@fferraz_ofc</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 md:pt-8 text-center">
          <p className="text-xs md:text-sm text-gray-400">© 2025 Torne-se uma Referência. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;