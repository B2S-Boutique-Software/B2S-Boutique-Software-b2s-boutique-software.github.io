import Clientes from "./components/Clientes";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InfoSection from "./components/InfoSection";
import Tech from "./components/Tech";
import WhatsApp from "./components/WhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <InfoSection />
      <Tech/>
      <Clientes/>
      <WhatsApp/>
      <Footer/>
    </>
  );
}
