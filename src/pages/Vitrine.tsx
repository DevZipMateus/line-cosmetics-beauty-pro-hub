import { useEffect, useState, useRef } from "react";
import Header from "@/components/Header";
import { ChevronDown, ChevronUp } from "lucide-react";

const Vitrine = () => {
  const [isBannerExpanded, setIsBannerExpanded] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

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

  // Handle click outside to close banner
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (bannerRef.current && !bannerRef.current.contains(event.target as Node)) {
        setIsBannerExpanded(false);
      }
    };

    if (isBannerExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isBannerExpanded]);

  return (
    <div className="h-screen overflow-hidden bg-background">
      <Header />
      
      {/* Banner promocional para cabeleireiras */}
      <div 
        ref={bannerRef}
        className="w-full bg-primary text-primary-foreground text-center"
        style={{ marginTop: '64px' }}
      >
        {/* Versão Mobile - Dropdown */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsBannerExpanded(!isBannerExpanded)}
            className="w-full py-2 px-4 flex items-center justify-center gap-2 font-bold text-sm"
          >
            Você é Cabeleireira?
            {isBannerExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          
          {isBannerExpanded && (
            <div className="pb-3 px-4 text-sm animate-fade-in">
              <p className="opacity-90 mb-2">
                Os valores do site não correspondem aos preços profissionais!
              </p>
              <a 
                href="https://wa.me/5551999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:opacity-80 transition-opacity font-semibold"
              >
                Fale conosco no WhatsApp
              </a>
              <span> e receba descontos exclusivos!</span>
            </div>
          )}
        </div>

        {/* Versão Desktop - Texto completo */}
        <div className="hidden sm:block py-3 sm:py-4 px-4">
          <p className="text-sm sm:text-base font-medium leading-relaxed">
            <span className="font-bold">Você é Cabeleireira?</span>
            <span> — </span>
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
