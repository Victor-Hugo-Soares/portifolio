import React from "react";
import { perfil } from "@/lib/conteudo";

export default function Footer() {
  return (
    <footer className="border-t-2 border-tinta">
      <div className="medida flex flex-col gap-3 py-10 sm:flex-row sm:items-baseline sm:justify-between">
        <p className="font-display text-[15.5px] text-grafite">
          {perfil.nome} · {perfil.cargo}
        </p>
        <p className="font-display text-[14.5px] text-grafite">
          © {new Date().getFullYear()} — feito e mantido por mim
        </p>
      </div>
    </footer>
  );
}
