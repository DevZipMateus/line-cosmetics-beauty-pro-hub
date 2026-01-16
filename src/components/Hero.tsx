import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const navigate = useNavigate();

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5551998232246?text=Olá! Gostaria de saber mais sobre os produtos da Line Cosméticos.",
      "_blank"
    );
  };

  const handleVitrineClick = () => {
    navigate("/vitrine");
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
      </div>

      <div className="container-custom relative z-10 pt-16 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-6 sm:mb-8 animate-fade-in">
            <img
              src={logo}
              alt="Line Cosméticos"
              className="h-24 sm:h-32 md:h-40 lg:h-48 w-auto mx-auto drop-shadow-lg"
            />
          </div>

          {/* H1 - Nome da empresa */}
          <h1 className="sr-only">Line Cosméticos</h1>

          {/* Slogan */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-heading font-medium text-primary mb-4 sm:mb-6 animate-slide-up drop-shadow-sm px-2">
            Feita para profissionais da beleza!
          </p>

          {/* H2 - Descrição */}
          <h2 className="text-base sm:text-lg md:text-xl text-foreground/80 font-body leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10 animate-slide-up drop-shadow-sm px-2" style={{ animationDelay: "0.2s" }}>
            Sua parceira de confiança em cosméticos profissionais. Produtos de alta performance 
            para cabeleireiros, manicures, depiladoras e designers que transformam autoestima todos os dias.
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-slide-up px-2" style={{ animationDelay: "0.4s" }}>
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Fale conosco
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleVitrineClick}
              className="w-full sm:w-auto border-primary text-primary bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-medium transition-all duration-300"
            >
              Conheça nossos produtos
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative bottom curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 100V50C240 16.67 480 0 720 0C960 0 1200 16.67 1440 50V100H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;