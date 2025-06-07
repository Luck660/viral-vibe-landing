
import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark-card border-t border-white/10 py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Torne-se uma Referência
            </h3>
            <p className="text-gray-400 mb-4">
              O curso mais completo para viralizar nas redes sociais e transformar sua presença digital em uma máquina de vendas.
            </p>
            <div className="flex items-center text-gray-400">
              <Heart className="w-4 h-4 mr-2 text-red-400" />
              <span className="text-sm">Feito com amor para empreendedores</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-3" />
                <span>contato@tornesereferencia.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-3" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-3" />
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Informações</h4>
            <div className="space-y-3">
              <a href="#" className="block text-gray-400 hover:text-brand-red transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="block text-gray-400 hover:text-brand-red transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="block text-gray-400 hover:text-brand-red transition-colors">
                Política de Reembolso
              </a>
              <a href="#" className="block text-gray-400 hover:text-brand-red transition-colors">
                Suporte
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Torne-se uma Referência. Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho passado não representa uma garantia de resultados futuros.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
