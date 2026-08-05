"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { perfil } from "@/lib/conteudo";

const links = [
  { nome: "Casos", href: "#casos" },
  { nome: "Como decido", href: "#como-decido" },
  { nome: "Competências", href: "#competencias" },
  { nome: "Escrita", href: "#escrita" },
  { nome: "Contato", href: "#contato" },
];

export default function Header() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="border-b border-linha bg-papel">
      <div className="medida flex items-center justify-between py-7">
        <a href="#inicio" className="font-display text-[17px] font-bold tracking-[-0.01em] md:text-[19px]">
          {perfil.nome}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.nome}
              href={l.href}
              className="font-display text-[15.5px] text-grafite transition-colors hover:text-acento"
            >
              {l.nome}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setAberto(!aberto)}
          className="text-tinta md:hidden"
          aria-label="Abrir menu"
        >
          {aberto ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {aberto && (
        <nav className="border-t border-linha md:hidden">
          <div className="medida flex flex-col py-2">
            {links.map((l) => (
              <a
                key={l.nome}
                href={l.href}
                onClick={() => setAberto(false)}
                className="border-b border-linha py-3.5 font-display text-[17px] last:border-0"
              >
                {l.nome}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
