import Head from "next/head";
import Clientes from "./components/Clientes";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InfoSection from "./components/InfoSection";
import Tech from "./components/Tech";
import WhatsApp from "./components/WhatsApp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'B2S',
  description: 'A sua Boutique de Software',
  openGraph: {
    title: 'B2S',
    description: 'A sua Boutique de Software',
    url: 'https://b2s.boutique',
    images: [
      {
        url: 'https://b2s.boutique/favicon.ico',
        alt: 'B2S Logo',
      },
    ],
  }
};

export default function Home() {
  return (
    <>
      <Header />
      <InfoSection />
      <Tech />
      <Clientes />
      <WhatsApp />
      <Footer />
    </>
  );
}
