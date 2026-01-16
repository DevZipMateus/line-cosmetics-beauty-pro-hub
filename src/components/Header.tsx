import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
const navItems = [{
  label: "Início",
  href: "#inicio",
  isAnchor: true
}, {
  label: "Sobre",
  href: "#sobre",
  isAnchor: true
}, {
  label: "Produtos",
  href: "#produtos",
  isAnchor: true
}, {
  label: "Vitrine",
  href: "/vitrine",
  isAnchor: false
}, {
  label: "Serviços",
  href: "#servicos",
  isAnchor: true
}, {
  label: "Contato",
  href: "#contato",
  isAnchor: true
}];
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleNavClick = (href: string, isAnchor: boolean) => {
    setIsMobileMenuOpen(false);
    if (!isAnchor) {
      navigate(href);
      return;
    }

    // If we're not on the home page, navigate there first
    if (location.pathname !== "/") {
      navigate("/" + href);
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: "smooth"
      });
    }
  };
  const handleLogoClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-background/95 backdrop-blur-md"}`}>
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 sm:h-20">
          <button onClick={handleLogoClick} className="flex items-center">
            <img src={logo} alt="Line Cosméticos - Logo" className="h-12 sm:h-14 md:h-16 w-auto" />
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-4 xl:gap-8">
            {navItems.map(item => <li key={item.href}>
                <button onClick={() => handleNavClick(item.href, item.isAnchor)} className="font-body text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
                  {item.label}
                </button>
              </li>)}
          </ul>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-foreground hover:text-primary transition-colors" aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border animate-fade-in">
            <ul className="flex flex-col py-2 sm:py-4">
              {navItems.map(item => <li key={item.href}>
                  <button onClick={() => handleNavClick(item.href, item.isAnchor)} className="w-full text-left px-4 sm:px-6 py-3 font-body text-foreground hover:text-primary hover:bg-secondary/50 transition-colors">
                    {item.label}
                  </button>
                </li>)}
            </ul>
          </div>}
      </div>
    </header>;
};
export default Header;