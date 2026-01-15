import { Heart, Target, Eye, Star } from "lucide-react";
import teamFair from "@/assets/gallery/team-fair.jpg";
import delivery from "@/assets/gallery/delivery.jpg";

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-foreground mb-4">
            Sobre a Line Cosméticos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* História com imagens */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-sm">
              <h3 className="text-2xl md:text-3xl font-heading font-semibold text-primary mb-6">
                Nossa história
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed text-lg mb-4">
                Em 2016, a Line Cosméticos teve sua origem ligada a uma empresa já estabelecida no mercado. 
                Em 2023, assumimos de forma independente, impulsionados pelo propósito de entender, na prática, 
                a rotina dos profissionais de salão.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed text-lg">
                Levamos produtos que atendem às suas necessidades, valorizando cada detalhe do seu trabalho, 
                talento e dedicação.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={teamFair}
                alt="Equipe Line Cosméticos em feira de beleza"
                className="rounded-2xl shadow-md object-cover w-full h-48 md:h-56"
              />
              <img
                src={delivery}
                alt="Entrega de produtos com carinho"
                className="rounded-2xl shadow-md object-cover w-full h-48 md:h-56"
              />
            </div>
          </div>
        </div>

        {/* Mercado de Atuação */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-secondary/30 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-heading font-semibold text-primary mb-6">
              Mercado de atuação
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed text-lg">
              Estamos presentes no mercado da beleza, apoiando profissionais que transformam autoestima 
              e confiança todos os dias. Atendemos cabeleireiros, manicures e pedicures, depiladoras e 
              designers de cílios e sobrancelhas, oferecendo produtos e soluções que levam praticidade, 
              qualidade e confiança diretamente ao espaço de cada profissional, contribuindo para um 
              trabalho feito com excelência.
            </p>
          </div>
        </div>

        {/* Missão, Visão e Valores */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Missão */}
          <div className="bg-card rounded-2xl p-8 shadow-sm card-hover text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
              Missão
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed">
              Fornecer produtos de alta performance e soluções práticas aos profissionais da beleza, 
              facilitando sua rotina com eficiência e confiança, para que tenham segurança nos 
              resultados e o seu espaço de beleza sempre abastecido.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-card rounded-2xl p-8 shadow-sm card-hover text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
              Visão
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed">
              Ser a principal parceira do profissional da beleza, reconhecida pela excelência dos 
              produtos e pela capacidade de compreender, com profundidade, as necessidades reais 
              do dia a dia do salão — entregando o produto certo, no momento certo.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-card rounded-2xl p-8 shadow-sm card-hover text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
              Valores
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Atuamos com base na ética, no amor ao próximo e no serviço, entendendo nosso trabalho 
              como um canal de bênçãos e propósito.
            </p>
            <div className="flex items-center justify-center gap-2 text-primary font-medium">
              <Star className="w-4 h-4" />
              <span className="font-body">Confiança, compromisso & propósito!</span>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <blockquote className="text-xl md:text-2xl font-heading italic text-primary/80">
            "Acreditamos que a beleza vai além da estética. Ela fortalece a autoestima, promove 
            bem-estar e impacta positivamente a forma como as pessoas se veem e vivem."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;