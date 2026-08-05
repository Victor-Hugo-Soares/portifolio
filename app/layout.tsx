import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Victor Hugo Soares Lins | Especialista em Inteligência Artificial e Automação",
  description:
    "Levo Inteligência Artificial do experimento até a produção: agentes de IA, visão computacional e automação de processos — com custo por operação sob controle.",
  keywords: [
    "Victor Hugo Soares Lins",
    "Especialista em Inteligência Artificial",
    "IA Generativa",
    "Agentes de IA",
    "LLM",
    "Automação de Processos",
    "Visão Computacional",
    "Inovação",
  ],
  authors: [{ name: "Victor Hugo Soares Lins" }],
  openGraph: {
    title: "Victor Hugo Soares Lins | Especialista em Inteligência Artificial e Automação",
    description:
      "Processos manuais viram sistemas que rodam sozinhos. Agentes de IA, visão computacional e automação em produção.",
    url: "https://victor-hugo-soares.vercel.app",
    siteName: "Victor Hugo Soares Lins",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preload" href="/fonts/zodiak-700.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/switzer-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="flex min-h-screen flex-col bg-papel text-tinta">
        <span className="progresso-leitura" aria-hidden />
        <SmoothScroll />
        <Header />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
