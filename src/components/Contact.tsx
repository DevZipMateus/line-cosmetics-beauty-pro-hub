import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-foreground mb-4">
            Entre em contato
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Estamos prontos para atender você e seu negócio
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">
                  Endereço
                </h3>
                <p className="text-muted-foreground font-body">
                  Avenida Cônego Luiz Walter Hanquet, 203
                  <br />
                  Camaquã/RS
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">
                  Telefone / WhatsApp
                </h3>
                <a
                  href="https://wa.me/5551998232246"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors font-body"
                >
                  (51) 99823-2246
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">
                  E-mail
                </h3>
                <a
                  href="mailto:lojalinecosmeticos@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors font-body"
                >
                  lojalinecosmeticos@gmail.com
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">
                  Horário de funcionamento
                </h3>
                <p className="text-muted-foreground font-body">
                  Segunda à sexta: 08h às 12h / 13h45 às 18h30
                </p>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Instagram className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">
                  Instagram
                </h3>
                <a
                  href="https://www.instagram.com/linecosmeticos__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors font-body"
                >
                  @linecosmeticos__
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-background rounded-2xl overflow-hidden shadow-sm h-[400px] lg:h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.8!2d-51.808!3d-30.855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519e1c0d5b4d5d9%3A0x4f5c8d9a2b3c4d5e!2sAv.%20C%C3%B4nego%20Luiz%20Walter%20Hanquet%2C%20203%20-%20Camaqua%C3%A3%2C%20RS!5e0!3m2!1spt-BR!2sbr!4v1705345678901!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Line Cosméticos - Avenida Cônego Luiz Walter Hanquet, 203 - Camaquã/RS"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;