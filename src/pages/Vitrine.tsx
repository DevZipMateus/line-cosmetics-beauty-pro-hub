import { useEffect } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  useEffect(() => {
    // Lock body scroll when on this page
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    // Hide MonteSite badge on this page
    const badge = document.querySelector('[id*="montesite"], [class*="montesite"], [id*="badge"], .badge-montesite') as HTMLElement;
    if (badge) {
      badge.style.display = 'none';
    }
    
    return () => {
      // Restore scroll when leaving
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      
      // Restore badge visibility
      if (badge) {
        badge.style.display = '';
      }
    };
  }, []);

  return (
    <div className="h-screen overflow-hidden bg-background">
      <Header />
      
      {/* Banner promocional para cabeleireiras */}
      <div 
        className="w-full bg-primary text-primary-foreground py-3 sm:py-4 px-4 text-center"
        style={{ marginTop: '64px' }}
      >
        <p className="text-sm sm:text-base font-medium leading-relaxed">
          <span className="font-bold">Você é Cabeleireira?</span>
          <span className="hidden sm:inline"> — </span>
          <br className="sm:hidden" />
          <span className="opacity-90">Os valores do site não correspondem aos preços profissionais!</span>
          <span className="hidden md:inline"> </span>
          <br className="md:hidden" />
          <a 
            href="https://wa.me/5551999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline hover:opacity-80 transition-opacity font-semibold"
          >
            Fale conosco no WhatsApp
          </a>
          <span> e receba descontos exclusivos!</span>
        </p>
      </div>
      
      <main 
        className="w-full overflow-hidden"
        style={{ height: 'calc(100vh - 64px - 48px)' }}
      >
        <iframe 
          src="https://linecosmeticos.egestor.com.br/vitrine/" 
          className="w-full h-full border-none"
          title="Demonstração de Vitrine"
          scrolling="auto"
        />
      </main>
    </div>
  );
};

export default Vitrine;
