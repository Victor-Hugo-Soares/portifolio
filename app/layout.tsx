import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/lib/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Victor Hugo Soares Lins | Desenvolvedor Fullstack",
  description: "Portfólio de Victor Hugo Soares Lins - Desenvolvedor Fullstack especializado em automações, APIs e IA.",
  keywords: ["Victor Hugo Soares Lins", "Desenvolvedor Fullstack", "Automações", "APIs", "IA", "Next.js", "TypeScript"],
  authors: [{ name: "Victor Hugo Soares Lins" }],
  openGraph: {
    title: "Victor Hugo Soares Lins | Desenvolvedor Fullstack",
    description: "Desenvolvedor Fullstack focado em automações, integrações via APIs/Webhooks e implementação de agentes de IA.",
    url: "https://victorhlins.com", // Adjust later if needed
    siteName: "Victor Hugo Portfolio",
    images: [
      {
        url: "/avatar.jpg",
        width: 800,
        height: 600,
      },
    ],
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
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} transition-colors duration-300`}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
