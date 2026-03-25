"use client";

import React from "react";
import Image from "next/image";
import { Download, MessageCircle } from "lucide-react";

export default function Hero() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-primary-500 font-medium mb-4 block">Olá, meu nome é</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Victor Hugo <span className="gradient-text">Soares Lins</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
            Desenvolvedor Fullstack | Automações, APIs e IA
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-10 max-w-lg">
            Franco da Rocha, SP | 22 anos. <br />
            Apaixonado por criar interfaces inteligentes e integrações que resolvem problemas reais.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/cv_victor_hugo.pdf"
              download
              className="flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-full font-medium transition-all"
            >
              <Download size={18} />
              Download CV
            </a>
            <button
              onClick={scrollToContact}
              className="flex items-center justify-center gap-2 border border-primary-500 text-primary-500 hover:bg-primary-50/50 dark:hover:bg-primary-900/20 px-8 py-3 rounded-full font-medium transition-all"
            >
              <MessageCircle size={18} />
              Entrar em contato
            </button>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-primary-500 shadow-2xl">
            <Image
              src="/avatar.jpg"
              alt="Victor Hugo Soares Lins"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
