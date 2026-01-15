import { Instagram, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-custom section-padding pb-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Description */}
          <div>
            <img
              src={logo}
              alt="Line Cosméticos"
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-primary-foreground/80 font-body leading-relaxed">
              Feita para profissionais da beleza! Sua parceira de confiança em 
              cosméticos profissionais desde 2016.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">
              Links rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#inicio"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-body"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-body"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#produtos"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-body"
                >
                  Produtos
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-body"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-body"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">
              Contato
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/5551998232246"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors font-body"
                >
                  <Phone className="w-4 h-4" />
                  (51) 99823-2246
                </a>
              </li>
              <li>
                <a
                  href="mailto:lojalinecosmeticos@gmail.com"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors font-body"
                >
                  <Mail className="w-4 h-4" />
                  lojalinecosmeticos@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/linecosmeticos__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors font-body"
                >
                  <Instagram className="w-4 h-4" />
                  @linecosmeticos__
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm font-body">
              © {currentYear} Line Cosméticos. CNPJ: 35.130.433/0001-46
            </p>
            <p className="text-primary-foreground/60 text-sm font-body">
              Camaquã/RS - Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;