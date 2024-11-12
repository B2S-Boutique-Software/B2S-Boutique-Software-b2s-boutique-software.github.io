import Head from "next/head";
import Clientes from "./components/Clientes";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InfoSection from "./components/InfoSection";
import Tech from "./components/Tech";
import WhatsApp from "./components/WhatsApp";
import { Metadata } from "next";
import Script from "next/script";


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
    <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-484BLCDERH`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-484BLCDERH', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Header />
      <InfoSection />
      <Tech />
      <Clientes />
      <WhatsApp />
      <Footer />
    </>
  );
}
