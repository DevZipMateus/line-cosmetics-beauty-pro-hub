import { useEffect } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  useEffect(() => {
    // Lock body scroll when on this page
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    return () => {
      // Restore scroll when leaving
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  return (
    <div className="h-screen overflow-hidden bg-background">
      <Header />
      <main 
        className="w-full overflow-hidden"
        style={{ height: 'calc(100vh - 80px - 63px)', marginTop: '80px' }}
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
