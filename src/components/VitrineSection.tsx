import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ShoppingBag, Sparkles, Truck, BadgePercent } from "lucide-react";
import cosmeticsFlatlay from "@/assets/cosmetics-flatlay.jpg";
import hairColor from "@/assets/hair-color.jpg";
import nailProducts from "@/assets/nail-products.jpg";

const benefits = [
  {
    icon: ShoppingBag,
    title: "Catálogo Completo",
    description: "Milhares de produtos profissionais em um só lugar",
  },
  {
    icon: BadgePercent,
    title: "Preços Especiais",
    description: "Condições exclusivas para profissionais",
  },
  {
    icon: Sparkles,
    title: "Qualidade Premium",
    description: "Marcas renomadas do mercado da beleza",
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Receba seus produtos onde você estiver",
  },
];

const VitrineSection = () => {
  const navigate = useNavigate();

  return (
    <section id="vitrine" className="section-padding bg-gradient-to-b from-secondary/30 to-background overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-body text-sm font-medium rounded-full mb-4">
            Loja Online
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Nossa <span className="text-gradient">Vitrine Virtual</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Explore nosso catálogo completo de produtos profissionais. 
            Tudo o que você precisa para transformar a beleza dos seus clientes está aqui.
          </p>
        </div>

        {/* Product Preview Grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <div className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer" onClick={() => navigate("/vitrine")}>
            <img 
              src={cosmeticsFlatlay} 
              alt="Cosméticos Capilares" 
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex flex-col items-center justify-end p-6 text-center">
              <p className="text-primary-foreground font-heading font-bold text-xl mb-1">Linha Capilar</p>
              <p className="text-primary-foreground/80 font-body text-sm">+500 produtos</p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer" onClick={() => navigate("/vitrine")}>
            <img 
              src={hairColor} 
              alt="Coloração Profissional" 
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/40 to-transparent flex flex-col items-center justify-end p-6 text-center">
              <p className="text-accent-foreground font-heading font-bold text-xl mb-1">Coloração</p>
              <p className="text-accent-foreground/80 font-body text-sm">Todas as marcas</p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer" onClick={() => navigate("/vitrine")}>
            <img 
              src={nailProducts} 
              alt="Manicure e Pedicure" 
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex flex-col items-center justify-end p-6 text-center">
              <p className="text-primary-foreground font-heading font-bold text-xl mb-1">Manicure</p>
              <p className="text-primary-foreground/80 font-body text-sm">Esmaltes e acessórios</p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-card/80 backdrop-blur-sm rounded-xl p-6 text-center card-hover border border-border/50"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={() => navigate("/vitrine")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <ShoppingBag className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            Acessar Vitrine Completa
          </Button>
          <p className="mt-4 text-sm text-muted-foreground font-body">
            Navegue por todas as categorias e encontre os melhores produtos
          </p>
        </div>
      </div>
    </section>
  );
};

export default VitrineSection;
