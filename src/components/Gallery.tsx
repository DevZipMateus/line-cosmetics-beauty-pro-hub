import teamFair from "@/assets/gallery/team-fair.jpg";
import productsShelf from "@/assets/gallery/products-shelf.jpg";
import chimarrao from "@/assets/gallery/chimarrao.jpg";
import brushes from "@/assets/gallery/brushes.jpg";
import maxiline from "@/assets/gallery/maxiline.jpg";
import delivery from "@/assets/gallery/delivery.jpg";

const galleryImages = [
  {
    src: productsShelf,
    alt: "Prateleira com produtos capilares profissionais",
    caption: "Variedade de produtos"
  },
  {
    src: brushes,
    alt: "Escovas profissionais para cabelo",
    caption: "Ferramentas de qualidade"
  },
  {
    src: maxiline,
    alt: "Linha de produtos Maxiline Profissional",
    caption: "Marcas exclusivas"
  },
  {
    src: teamFair,
    alt: "Equipe Line Cosméticos em feira de beleza",
    caption: "Presença em eventos"
  },
  {
    src: delivery,
    alt: "Entrega de produtos aos clientes",
    caption: "Entrega com carinho"
  },
  {
    src: chimarrao,
    alt: "Cuia de chimarrão personalizada Line Cosméticos",
    caption: "Tradição gaúcha"
  },
];

const Gallery = () => {
  return (
    <section id="galeria" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-foreground mb-4">
            Nosso dia a dia
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Conheça um pouco mais sobre a Line Cosméticos através das nossas imagens
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <p className="text-primary-foreground font-heading font-medium text-lg p-6">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
