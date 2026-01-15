import { Sparkles, Package, Zap, Armchair } from "lucide-react";
import cosmeticsFlatlay from "@/assets/cosmetics-flatlay.jpg";
import nailProducts from "@/assets/nail-products.jpg";
import lashBrow from "@/assets/lash-brow.jpg";
import waxingProducts from "@/assets/waxing-products.jpg";
import hairColor from "@/assets/hair-color.jpg";

const products = [
  {
    icon: Sparkles,
    title: "Cosméticos profissionais",
    description:
      "Produtos de marcas exclusivas e reconhecidas no mercado para tratamentos capilares, coloração, finalização e muito mais.",
  },
  {
    icon: Package,
    title: "Produtos descartáveis",
    description:
      "Materiais voltados à segurança e higiene dos espaços de beleza, garantindo a proteção de profissionais e clientes.",
  },
  {
    icon: Zap,
    title: "Equipamentos eletrônicos",
    description:
      "Secadores, pranchas, cabines de UV, entre outros equipamentos essenciais para a rotina dos salões de beleza.",
  },
  {
    icon: Armchair,
    title: "Móveis e ferramentas",
    description:
      "Itens indispensáveis para a estrutura completa do salão, desde mobiliário até ferramentas de trabalho.",
  },
];

const productImages = [
  {
    src: cosmeticsFlatlay,
    alt: "Produtos cosméticos profissionais para cabelo",
    label: "Cosméticos Capilares"
  },
  {
    src: nailProducts,
    alt: "Esmaltes e ferramentas para manicure profissional",
    label: "Manicure & Pedicure"
  },
  {
    src: hairColor,
    alt: "Produtos para coloração capilar profissional",
    label: "Coloração"
  },
  {
    src: lashBrow,
    alt: "Produtos para design de sobrancelhas e cílios",
    label: "Design de Sobrancelhas"
  },
  {
    src: waxingProducts,
    alt: "Produtos profissionais para depilação",
    label: "Depilação"
  },
];

const Products = () => {
  return (
    <section id="produtos" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-foreground mb-4">
            Nossos produtos
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Tudo o que seu espaço de beleza precisa para oferecer serviços de excelência
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Featured Images - Grid with 5 images */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {productImages.map((image, index) => (
            <div key={index} className="relative rounded-2xl overflow-hidden shadow-lg group">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex items-end p-4">
                <p className="text-primary-foreground font-heading font-medium text-sm md:text-base">{image.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-8 shadow-sm card-hover group"
            >
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                <product.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {product.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground font-body mb-6">
            Quer conhecer nosso catálogo completo?
          </p>
          <a
            href="https://wa.me/5551998232246?text=Olá! Gostaria de conhecer o catálogo de produtos da Line Cosméticos."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Entre em contato pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;