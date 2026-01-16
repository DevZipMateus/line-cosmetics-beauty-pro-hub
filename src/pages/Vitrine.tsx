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
      <main 
        className="w-full overflow-hidden"
        style={{ height: 'calc(100vh - 64px)', marginTop: '64px' }}
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
