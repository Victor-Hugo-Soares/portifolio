"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { criterio } from "@/lib/conteudo";

/**
 * "Como eu decido" — duas coreografias distintas, uma por contexto:
 *
 * DESKTOP: palco pinado. A rolagem não move a cena, avança o tempo dentro dela.
 *          Os três painéis giram no eixo Y em sequência, um destravando o outro.
 *
 * MOBILE:  pilha com sticky. Cada painel gruda no topo e o próximo sobe por cima,
 *          com o de baixo recuando em escala. Pin com scrub em tela pequena é
 *          instável; sticky é o padrão que aguenta.
 */
export default function Criterio() {
  const raiz = useRef<HTMLElement>(null);
  const palco = useRef<HTMLDivElement>(null);
  const pilha = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // ---------------- DESKTOP ----------------
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const paineis = gsap.utils.toArray<HTMLElement>("[data-painel]");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: raiz.current,
            start: "top top",
            end: () => `+=${paineis.length * 62}%`,
            pin: palco.current,
            pinSpacing: true,
            scrub: 0.7,
            anticipatePin: 1,
          },
        });

        paineis.forEach((p, i) => {
          tl.fromTo(
            p,
            { rotateY: -78, opacity: 0, xPercent: 8 },
            { rotateY: 0, opacity: 1, xPercent: 0, ease: "power2.out", duration: 1 },
            i * 0.85
          );
          if (i < paineis.length - 1) {
            tl.to(p, { rotateY: 8, opacity: 0.28, duration: 0.6 }, i * 0.85 + 1.05);
          }
        });
      });

      // ---------------- MOBILE ----------------
      mm.add("(max-width: 1023px) and (prefers-reduced-motion: no-preference)", () => {
        const paineis = gsap.utils.toArray<HTMLElement>("[data-painel]");

        paineis.forEach((p, i) => {
          // entra levantando e girando de leve
          gsap.fromTo(
            p,
            { opacity: 0.25, scale: 0.97 },
            {
              opacity: 1,
              scale: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: p,
                start: "top 96%",
                end: "top 70%",
                scrub: 0.4,
              },
            }
          );

          // os de baixo recuam quando o próximo cobre — dá a sensação de pilha
          if (i < paineis.length - 1) {
            gsap.to(p, {
              scale: 0.94,
              opacity: 0.55,
              ease: "none",
              scrollTrigger: {
                trigger: paineis[i + 1],
                start: "top 80%",
                end: "top 30%",
                scrub: 0.5,
              },
            });
          }
        });
      });

      // ---------------- SEM MOVIMENTO ----------------
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-painel]", {
          opacity: 1,
          y: 0,
          rotateY: 0,
          rotateX: 0,
          xPercent: 0,
          scale: 1,
        });
      });
    }, raiz);

    return () => ctx.revert();
  }, []);

  return (
    <section id="como-decido" ref={raiz} className="bg-papel-fundo">
      <div ref={palco} className="secao lg:flex lg:min-h-screen lg:flex-col lg:justify-center">
        <div className="medida w-full">
          <p className="kicker">como eu decido</p>
          <h2 className="titulo-2 mt-3 max-w-[24ch]">
            Três perguntas antes de escrever qualquer linha
          </h2>

          <div
            ref={pilha}
            className="mt-10 flex flex-col gap-5 pb-[14vh] lg:grid lg:grid-cols-3 lg:gap-6 lg:pb-0 lg:[perspective:1600px] lg:[transform-style:preserve-3d]"
          >
            {criterio.map((c, i) => (
              <div
                key={c.n}
                data-painel
                /* sticky só no mobile: no desktop o palco já é pinado */
                className="sticky origin-left border border-linha bg-papel-claro p-7 shadow-[0_10px_30px_-22px_rgba(60,52,44,0.5)] lg:static lg:p-8 lg:shadow-none lg:will-change-transform"
                style={{ top: `calc(4.5rem + ${i * 14}px)`, zIndex: i + 1 }}
              >
                <span className="font-sans text-[12px] tracking-kicker text-acento">{c.n}</span>
                <h3 className="titulo-3 mt-3 text-[21px] lg:text-[24px]">{c.pergunta}</h3>
                <p className="corpo mt-2.5 text-[15.5px]">{c.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
