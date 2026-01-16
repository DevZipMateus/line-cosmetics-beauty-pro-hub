import { Heart, Target, Eye, Star } from "lucide-react";
import teamFair from "@/assets/gallery/team-fair.jpg";
import delivery from "@/assets/gallery/delivery.jpg";
import sectionBg1 from "@/assets/section-bg-1.jpg";

const About = () => {
  return (
    <section id="sobre" className="relative section-padding overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${sectionBg1})` }}
      >
        <div className="absolute inset-0 bg-background/85" />
      </div>
      <div className="relative z-10">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-foreground mb-4">
            Sobre a Line Cosméticos
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* História com imagens */}
        <div className="max-w-6xl mx-auto mb-12 sm:mb-20">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm order-2 md:order-1">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-primary mb-4 sm:mb-6">
                Nossa história
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed text-base sm:text-lg mb-4">
                Em 2016, a Line Cosméticos teve sua origem ligada a uma empresa já estabelecida no mercado. 
                Em 2023, assumimos de forma independente, impulsionados pelo propósito de entender, na prática, 
                a rotina dos profissionais de salão.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed text-base sm:text-lg">
                Levamos produtos que atendem às suas necessidades, valorizando cada detalhe do seu trabalho, 
                talento e dedicação.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 order-1 md:order-2">
              <img
                src={teamFair}
                alt="Equipe Line Cosméticos em feira de beleza"
                className="rounded-xl sm:rounded-2xl shadow-md object-cover w-full h-36 sm:h-48 md:h-56"
              />
              <img
                src={delivery}
                alt="Entrega de produtos com carinho"
                className="rounded-xl sm:rounded-2xl shadow-md object-cover w-full h-36 sm:h-48 md:h-56"
              />
            </div>
          </div>
        </div>

        {/* Mercado de Atuação */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-20">
          <div className="bg-secondary/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-primary mb-4 sm:mb-6">
              Mercado de atuação
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed text-base sm:text-lg">
              Estamos presentes no mercado da beleza, apoiando profissionais que transformam autoestima 
              e confiança todos os dias. Atendemos cabeleireiros, manicures e pedicures, depiladoras e 
              designers de cílios e sobrancelhas, oferecendo produtos e soluções que levam praticidade, 
              qualidade e confiança diretamente ao espaço de cada profissional, contribuindo para um 
              trabalho feito com excelência.
            </p>
          </div>
        </div>

        {/* Missão, Visão e Valores */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Missão */}
          <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm card-hover text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Target className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-heading font-semibold text-foreground mb-3 sm:mb-4">
              Missão
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground font-body leading-relaxed">
              Fornecer produtos de alta performance e soluções práticas aos profissionais da beleza, 
              facilitando sua rotina com eficiência e confiança, para que tenham segurança nos 
              resultados e o seu espaço de beleza sempre abastecido.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm card-hover text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-heading font-semibold text-foreground mb-3 sm:mb-4">
              Visão
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground font-body leading-relaxed">
              Ser a principal parceira do profissional da beleza, reconhecida pela excelência dos 
              produtos e pela capacidade de compreender, com profundidade, as necessidades reais 
              do dia a dia do salão — entregando o produto certo, no momento certo.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm card-hover text-center sm:col-span-2 md:col-span-1">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-heading font-semibold text-foreground mb-3 sm:mb-4">
              Valores
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground font-body leading-relaxed mb-3 sm:mb-4">
              Atuamos com base na ética, no amor ao próximo e no serviço, entendendo nosso trabalho 
              como um canal de bênçãos e propósito.
            </p>
            <div className="flex items-center justify-center gap-2 text-primary font-medium">
              <Star className="w-4 h-4" />
              <span className="font-body text-sm sm:text-base">Confiança, compromisso & propósito!</span>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-10 sm:mt-16 text-center max-w-3xl mx-auto px-2">
          <blockquote className="text-lg sm:text-xl md:text-2xl font-heading italic text-primary/80">
            "Acreditamos que a beleza vai além da estética. Ela fortalece a autoestima, promove 
            bem-estar e impacta positivamente a forma como as pessoas se veem e vivem."
          </blockquote>
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;