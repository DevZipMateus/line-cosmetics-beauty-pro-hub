import { GraduationCap, HeadphonesIcon } from "lucide-react";

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
      <div className="container-custom">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-foreground mb-4">
            Nossos serviços
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Além de produtos, oferecemos suporte completo para o seu crescimento profissional
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-10 shadow-sm card-hover relative overflow-hidden"
            >
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                  <service.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Info banner */}
        <div className="mt-16 bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-heading font-semibold text-primary-foreground mb-4">
            Quer saber mais sobre nossos serviços?
          </h3>
          <p className="text-primary-foreground/90 font-body text-lg mb-6 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar você a crescer no mercado da beleza.
          </p>
          <a
            href="https://wa.me/5551998232246?text=Olá! Gostaria de saber mais sobre os serviços oferecidos pela Line Cosméticos."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-background text-primary hover:bg-background/90 px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Fale conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;