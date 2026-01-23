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
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center min-h-[60vh]">
          {/* Logo - Maior e centralizada */}
          <div className="mb-8 sm:mb-10 animate-fade-in">
            <img
              src={logo}
              alt="Line Cosméticos"
              className="h-36 sm:h-48 md:h-56 lg:h-64 w-auto mx-auto drop-shadow-lg"
            />
          </div>

          {/* H1 - Nome da empresa */}
          <h1 className="sr-only">Line Cosméticos</h1>

          {/* Slogan - Única frase */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-medium text-primary animate-slide-up drop-shadow-sm px-4">
            Feita para profissionais da beleza!
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-slide-up px-4 mt-8 sm:mt-10" style={{ animationDelay: "0.2s" }}>
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