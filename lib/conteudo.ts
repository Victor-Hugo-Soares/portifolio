/**
 * Fonte única do conteúdo do site.
 * Posicionamento: problema → decisão → resultado. Stack nunca é protagonista.
 * Confidencialidade: sem nome de sistema interno, métrica interna ou dado de cliente.
 * Densidade: texto curto. O site é lido em 40 segundos, não em 5 minutos.
 */

export const perfil = {
  nome: "Victor Hugo Soares Lins",
  cargo: "Especialista em Inteligência Artificial e Automação",
  manchete: ["Processos manuais viram", "sistemas que se resolvem sozinhos."],
  lead:
    "Levo Inteligência Artificial do experimento à produção — e respondo pelo custo por operação depois que ela entra.",
  sub:
    "Conduzo a frente de IA da Loma Bem Protegido, com cerca de 20 mil clientes, e sou sócio de tecnologia da Arnia Brasil.",
  email: "vsoareslins452@gmail.com",
  linkedin: "https://www.linkedin.com/in/victorhugolins",
  github: "https://github.com/Victor-Hugo-Soares",
  curriculo: "/cv_victor_hugo.pdf",
  local: "Franco da Rocha, São Paulo",
};

export const metricas = [
  { valor: 0.02, prefixo: "US$ ", decimais: 2, rotulo: "por avaliação com visão computacional" },
  { valor: 4, sufixo: " sistemas", rotulo: "com IA em produção, do zero ao deploy" },
  { valor: 20, prefixo: "~", sufixo: " mil", rotulo: "clientes na operação que automatizo" },
];

export const resolvo = [
  {
    titulo: "Atendimento que se resolve",
    texto: "Agentes de IA conduzem a conversa, consultam o sistema e respondem — sem fila.",
  },
  {
    titulo: "Decisão sem analista",
    texto: "Um modelo lê os indicadores do dia e diz o que aconteceu e o que fazer.",
  },
  {
    titulo: "Análise sem especialista presente",
    texto: "Visão computacional avalia a imagem e devolve laudo com confiança por item.",
  },
  {
    titulo: "Processo que deixa de ser manual",
    texto: "CRM, ERP e pagamentos integrados fecham o fluxo que passava por planilha.",
  },
];

export const criterio = [
  {
    n: "01",
    pergunta: "Qual decisão isso destrava?",
    texto: "Se ninguém decide diferente com a saída, não é projeto — é demonstração.",
  },
  {
    n: "02",
    pergunta: "Quanto custa por operação?",
    texto: "IA que funciona mas custa mais que o problema não chega à produção.",
  },
  {
    n: "03",
    pergunta: "O que acontece quando erra?",
    texto: "Todo modelo erra. Sem resposta para o erro, o piloto não sai do papel.",
  },
];

export type Caso = {
  slug: string;
  numero: string;
  eixo: string;
  titulo: string;
  problema: string;
  decisao: string;
  resultado: string;
  imagem?: string;
  legenda?: string;
  link?: string;
  linkRotulo?: string;
  stack: string;
};

/** Casos em destaque — recebem pin + scrub 3D. Máximo 3, para não cansar. */
export const casos: Caso[] = [
  {
    slug: "saas-que-se-explica",
    numero: "01",
    eixo: "LLM em produção",
    titulo: "O gestor recebia os números e não tinha tempo de ler",
    problema:
      "A decisão travava por falta de leitura, não de dado. Todo dia o sistema acumulava indicadores que ninguém abria.",
    decisao:
      "Um modelo passou a interpretar os números e escrever a recomendação de ação. Isolei a chamada num único ponto — o que permitiu trocar de fornecedor em uma tarde quando o acesso foi bloqueado sem aviso.",
    resultado: "decisão diária sem depender de analista",
    imagem: "/casos/vrd-painel-ia.png",
    legenda: "fig. 1 — o painel em produção, com a análise gerada pelo modelo.",
    link: "https://www.vrdsystem.com.br",
    linkRotulo: "ver no ar",
    stack: "Llama 3.3 via Groq · Node.js · PostgreSQL",
  },
  {
    slug: "avaliacao-veicular",
    numero: "02",
    eixo: "visão computacional",
    titulo: "Avaliar um veículo exigia especialista no local",
    problema:
      "A pessoa com olho treinado era o gargalo: limita quantas avaliações cabem no dia e quanto custa cada uma.",
    decisao:
      "Visão computacional analisa as fotos e devolve laudo com confiança por item. A decisão que importou não foi técnica: o sistema marca o que ficou inconclusivo em vez de arriscar um palpite.",
    resultado: "dois centavos de dólar por avaliação, sem deslocamento",
    stack: "Python · FastAPI · fila assíncrona",
  },
  {
    slug: "analise-forense",
    numero: "03",
    eixo: "IA multimodal",
    titulo: "Analisar um evento era ler tudo e confiar na memória",
    problema:
      "Relato, documentos, fotos e áudio de atendimento. Cruzar à mão é lento e contradição passa batido.",
    decisao:
      "Pipeline multimodal: transcrição com separação de falantes, leitura de documentos por visão e checagem de imagem adulterada. O sistema não decide — entrega linha do tempo e contradições. E cada decisão do especialista passa a orientar as próximas análises, sem retreinar modelo.",
    resultado: "IA como segunda opinião do especialista, não como substituta",
    stack: "Whisper · GPT-4o visão · Next.js",
  },
];

/** Casos secundários — entram como lista, sem animação pesada. */
export const casosSecundarios = [
  {
    titulo: "Produto de IA do zero ao tráfego pago",
    texto:
      "IA conversacional para público 45+, com PIX recorrente e liberação de acesso em tempo real. Sem operação humana.",
    resultado: "no ar, vendendo sozinho",
    imagem: "/casos/produto-ia-landing.png",
    legenda: "fig. 2 — o produto no ar.",
  },
  {
    titulo: "Esteira de agentes que se revisam",
    texto:
      "Orquestração, design, implementação, QA e um gate que reprova o que não passa. Num lote com testes verdes, a revisão achou seis falhas reais.",
    resultado: "qualidade que escala sem mais revisores",
  },
];

export const competencias = [
  { grupo: "IA aplicada", itens: ["IA generativa e LLMs", "Agentes de IA", "Visão computacional"] },
  { grupo: "Decisão", itens: ["Viabilidade e retorno", "Custo por operação", "LGPD aplicada"] },
  { grupo: "Construção", itens: ["Python e FastAPI", "TypeScript e Next.js", "PostgreSQL e APIs"] },
  { grupo: "Integração", itens: ["CRM e ERPs", "Meios de pagamento", "Automação de fluxos"] },
];

export const tambemConstrui = [
  {
    nome: "VRD System",
    desc: "SaaS de gestão de armazém, 13 módulos",
    link: "https://www.vrdsystem.com.br",
  },
  {
    nome: "Super Fitness Store",
    desc: "loja e catálogo B2B",
    link: "https://superfitness-store.vercel.app",
  },
  {
    nome: "Genius Informática",
    desc: "landing de captação para Ads",
    link: "https://genius-informatica.vercel.app",
  },
  {
    nome: "Yumi Nakamura",
    desc: "e-commerce com pagamentos e painel",
    link: "https://yuminakamura.com.br",
  },
  { nome: "Law Match", desc: "jogo de estudo de direito", link: "https://law-match.vercel.app" },
  {
    nome: "Talitha Pedroso",
    desc: "site para clínica de estética",
    link: "https://talitha-pedroso-ipsi.vercel.app",
  },
];
