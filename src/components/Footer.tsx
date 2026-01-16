import { Instagram, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-custom section-padding pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          {/* Logo and Description */}
          <div className="sm:col-span-2 md:col-span-1">
            <img
              src={logo}
              alt="Line Cosméticos"
              className="h-12 sm:h-16 w-auto mb-3 sm:mb-4 brightness-0 invert"
            />
            <p className="text-primary-foreground/80 font-body leading-relaxed text-sm sm:text-base">
              Feita para profissionais da beleza! Sua parceira de confiança em 
              cosméticos profissionais desde 2016.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-heading font-semibold mb-3 sm:mb-4">
              Links rápidos
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <a
                  href="#inicio"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-body text-sm sm:text-base"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-body text-sm sm:text-base"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#produtos"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-body text-sm sm:text-base"
                >
                  Produtos
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-body text-sm sm:text-base"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-body text-sm sm:text-base"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-heading font-semibold mb-3 sm:mb-4">
              Contato
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="https://wa.me/5551998232246"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors font-body text-sm sm:text-base"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  (51) 99823-2246
                </a>
              </li>
              <li>
                <a
                  href="mailto:lojalinecosmeticos@gmail.com"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors font-body text-sm sm:text-base"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="break-all">lojalinecosmeticos@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/linecosmeticos__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors font-body text-sm sm:text-base"
                >
                  <Instagram className="w-4 h-4 flex-shrink-0" />
                  @linecosmeticos__
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p className="text-primary-foreground/60 text-xs sm:text-sm font-body">
              © {currentYear} Line Cosméticos. CNPJ: 35.130.433/0001-46
            </p>
            <p className="text-primary-foreground/60 text-xs sm:text-sm font-body">
              Camaquã/RS - Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;