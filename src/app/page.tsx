import Clientes from "./components/Clientes";
import Header from "./components/Header";
import InfoSection from "./components/InfoSection";
import Tech from "./components/Tech";

export default function Home() {
  return (
    <>
      <Header />
      <InfoSection />
      <Tech/>
      <Clientes/>
    </>
  );
}
