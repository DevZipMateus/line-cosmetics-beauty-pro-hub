import { GraduationCap, HeadphonesIcon } from "lucide-react";
import salonEquipment from "@/assets/salon-equipment.jpg";

const services = [
  {
    icon: HeadphonesIcon,
    title: "Consultoria especializada",
    description:
      "Orientação personalizada em produtos profissionais para ajudar você a escolher as melhores soluções para seu negócio e seus clientes.",
  },
  {
    icon: GraduationCap,
    title: "Cursos especializados",
    description:
      "Capacitação e aperfeiçoamento profissional nas áreas da beleza, ministrados por especialistas para elevar seu conhecimento técnico.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-background">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Section Title with Image */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-10 sm:mb-16">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-foreground mb-3 sm:mb-4">
              Nossos serviços
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground font-body max-w-2xl">
              Além de produtos, oferecemos suporte completo para o seu crescimento profissional
            </p>
            <div className="w-20 sm:w-24 h-1 bg-primary rounded-full mt-4 sm:mt-6" />
          </div>
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg order-1 md:order-2">
            <img 
              src={salonEquipment} 
              alt="Equipamentos profissionais de salão de beleza" 
              className="w-full h-48 sm:h-64 lg:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm card-hover relative overflow-hidden"
            >
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative">
                <div className="w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-accent rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 sm:mb-8 shadow-lg">
                  <service.icon className="w-7 h-7 sm:w-10 sm:h-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-semibold text-foreground mb-3 sm:mb-4">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-body leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Info banner */}
        <div className="mt-10 sm:mt-16 bg-gradient-to-r from-primary to-accent rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-primary-foreground mb-3 sm:mb-4">
            Quer saber mais sobre nossos serviços?
          </h3>
          <p className="text-primary-foreground/90 font-body text-base sm:text-lg mb-5 sm:mb-6 max-w-2xl mx-auto px-2">
            Entre em contato conosco e descubra como podemos ajudar você a crescer no mercado da beleza.
          </p>
          <a
            href="https://wa.me/5551998232246?text=Olá! Gostaria de saber mais sobre os serviços oferecidos pela Line Cosméticos."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-background text-primary hover:bg-background/90 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
          >
            Fale conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;