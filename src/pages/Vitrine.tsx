import Header from "@/components/Header";

const Vitrine = () => {
  return (
    <div className="h-screen overflow-hidden bg-background">
      <Header />
      <main 
        className="w-full"
        style={{ height: 'calc(100vh - 80px - 63px)', marginTop: '80px' }}
      >
        <iframe 
          src="https://linecosmeticos.egestor.com.br/vitrine/" 
          className="w-full h-full border-none"
          title="Demonstração de Vitrine"
        />
      </main>
    </div>
  );
};

export default Vitrine;
