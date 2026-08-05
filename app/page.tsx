import Hero from "@/components/Hero";
import Resolvo from "@/components/Resolvo";
import Criterio from "@/components/Criterio";
import Casos from "@/components/Casos";
import Competencias from "@/components/Competencias";
import TambemConstrui from "@/components/TambemConstrui";
import Escrita from "@/components/Escrita";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <Hero />
      <Resolvo />
      <Criterio />
      <Casos />
      <Competencias />
      <TambemConstrui />
      <Escrita />
      <Contact />
    </main>
  );
}
