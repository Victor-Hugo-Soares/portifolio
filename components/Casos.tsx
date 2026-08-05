"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { casos, casosSecundarios } from "@/lib/conteudo";

/**
 * Casos em destaque com pin + scrub.
 * Técnica: a seção é pinada e a rolagem não move a cena — avança o tempo dentro dela.
 * O print entra deitado no eixo X (rotateX) e "gira" até ficar reto conforme o scroll.
 * Só animamos transform e opacity, para o trabalho ficar no compositor.
 */
export default function Casos() {
  const raiz = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // ---------- DESKTOP: pin + giro 3D ----------
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const blocos = gsap.utils.toArray<HTMLElement>("[data-caso]");

        blocos.forEach((bloco) => {
          const figura = bloco.querySelector<HTMLElement>("[data-figura]");
          const texto = bloco.querySelectorAll<HTMLElement>("[data-texto] > *");

          // o painel gira: deitado -> reto, escrubado pela rolagem
          if (figura) {
            gsap.fromTo(
              figura,
              { rotateX: 34, y: 70, scale: 0.9, opacity: 0.45 },
              {
                rotateX: 0,
                y: 0,
                scale: 1,
                opacity: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: bloco,
                  start: "top 88%",
                  end: "center 55%",
                  scrub: 0.6,
                },
              }
            );
          }

          // texto sobe em cascata quando o bloco entra
          gsap.from(texto, {
            opacity: 0,
            y: 26,
            duration: 0.7,
            stagger: 0.07,
            ease: "power3.out",
            scrollTrigger: { trigger: bloco, start: "top 78%" },
          });
        });

        // a régua de progresso da seção cresce com o scroll
        gsap.fromTo(
          "[data-trilha]",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            transformOrigin: "top center",
            scrollTrigger: {
              trigger: raiz.current,
              start: "top 60%",
              end: "bottom 80%",
              scrub: true,
            },
          }
        );
      });

      // ---------- MOBILE: sem 3D, só entrada leve ----------
      mm.add("(max-width: 1023px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("[data-caso]").forEach((bloco) => {
          gsap.from(bloco.querySelectorAll<HTMLElement>("[data-texto] > *, [data-figura]"), {
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.06,
            ease: "power2.out",
            scrollTrigger: { trigger: bloco, start: "top 85%" },
          });
        });
      });

      // ---------- SEM MOVIMENTO ----------
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-figura], [data-texto] > *", { opacity: 1, y: 0, rotateX: 0, scale: 1 });
      });
    }, raiz);

    return () => ctx.revert();
  }, []);

  return (
    <section id="casos" className="secao">
      <div className="medida">
        <p className="kicker">casos</p>
        <h2 className="titulo-2 mt-3 max-w-[22ch]">Problema, decisão e resultado</h2>

        <div ref={raiz} className="relative mt-12">
          {/* trilha vertical que cresce conforme a leitura avança */}
          <span
            data-trilha
            aria-hidden
            className="absolute left-0 top-0 hidden h-full w-[2px] bg-acento/70 lg:block"
          />

          {casos.map((c) => (
            <article
              key={c.slug}
              data-caso
              className={`grid gap-9 border-t border-linha-forte py-12 lg:gap-14 lg:pl-10 ${
                c.imagem ? "lg:grid-cols-[1fr_1.05fr]" : "lg:grid-cols-1"
              }`}
            >
              <div data-texto className={c.imagem ? "" : "max-w-[72ch]"}>
                <p className="kicker">
                  caso {c.numero} · {c.eixo}
                </p>
                <h3 className="titulo-3 mt-3 text-[24px] sm:text-[28px] lg:text-[32px]">
                  {c.titulo}
                </h3>
                <p className="corpo mt-3.5">{c.problema}</p>
                <p className="corpo mt-4 text-tinta-suave">{c.decisao}</p>
                <p className="resultado mt-5">{c.resultado}</p>
                <p className="font-sans mt-5 text-[13px] text-grafite">{c.stack}</p>
                {c.link && (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans mt-4 inline-flex items-center gap-1.5 text-[15px] text-acento underline decoration-acento/40 underline-offset-4 hover:decoration-acento"
                  >
                    {c.linkRotulo ?? "ver no ar"}
                    <ArrowUpRight size={15} />
                  </a>
                )}
              </div>

              {c.imagem && (
                <figure
                  className="[perspective:1400px]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div data-figura className="will-change-transform">
                    <Image
                      src={c.imagem}
                      alt={c.titulo}
                      width={1440}
                      height={820}
                      className="figura shadow-[0_24px_60px_-30px_rgba(60,52,44,0.45)]"
                    />
                  </div>
                  {c.legenda && <figcaption className="legenda mt-3">{c.legenda}</figcaption>}
                </figure>
              )}
            </article>
          ))}
        </div>

        {/* secundários: lista sóbria, sem peso de animação */}
        <div className="mt-14 border-t border-linha-forte pt-10">
          <p className="kicker">também em produção</p>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            {casosSecundarios.map((c) => (
              <div key={c.titulo} className="revelar">
                <h3 className="font-display text-[20px] font-bold">{c.titulo}</h3>
                <p className="corpo mt-2">{c.texto}</p>
                <p className="resultado mt-3 text-[16px]">{c.resultado}</p>
                {"imagem" in c && c.imagem && (
                  <figure className="mt-5">
                    <Image
                      src={c.imagem as string}
                      alt={c.titulo}
                      width={1440}
                      height={820}
                      className="figura"
                    />
                    {"legenda" in c && c.legenda && (
                      <figcaption className="legenda mt-2.5">{c.legenda as string}</figcaption>
                    )}
                  </figure>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
