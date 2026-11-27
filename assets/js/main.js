// MC GESSO - Soluções Arquitetônicas
// Vanilla JS - Interações da Página Estática

// Dados de Serviços para o Modal
const servicesData = {
  forros: {
    number: "01",
    title: "FORROS DE GESSO",
    subtitle: "Rebaixamento monolítico e forros acústicos",
    description: "Sistemas de forros contínuos com juntas invisíveis, proporcionando superfícies perfeitamente planas com integração de cortineiros, caixas de som e climatização.",
    highlights: [
      "Forro tabicado com dilatação perimetral",
      "Forros acústicos para conforto sonoro",
      "Previsão de reforços para pendentes e climatização"
    ],
    specs: "Placas ST/RU · Perfis F530 galvanizados · Nível de acabamento Q4",
    image: "assets/portfolio/portfolio_06.png"
  },
  drywall: {
    number: "02",
    title: "DRYWALL E PAREDES",
    subtitle: "Estruturas leves, versáteis e resistentes",
    description: "Construção a seco de alta precisão para paredes internas, fechamentos acústicos e shaft técnico. Agilidade com redução drástica de entulho no canteiro.",
    highlights: [
      "Paredes com isolamento em lã mineral",
      "Resistência mecânica e suporte a cargas",
      "Agilidade executiva até 3x mais rápida que alvenaria"
    ],
    specs: "Montantes de 48/70/90mm · Tratamento de juntas com fita de alta tenacidade",
    image: "assets/portfolio/portfolio_04.png"
  },
  sancas: {
    number: "03",
    title: "SANCAS E ILUMINAÇÃO",
    subtitle: "Rasgos de luz, sancas invertidas e perfis LED",
    description: "Design luminotécnico integrado ao forro. Criação de cenários de luz indireta, sancas abertas, ilhas flutuantes e nichos embutidos sem imperfeições.",
    highlights: [
      "Sancas invertidas com iluminação indireta",
      "Rasgos no forro para perfis de LED sem difusores aparentes",
      "Alinhamento com projetos luminotécnicos complexos"
    ],
    specs: "Acabamento de borda com cantoneira perfurada de alumínio",
    image: "assets/portfolio/portfolio_05.png"
  },
  divisorias: {
    number: "04",
    title: "DIVISÓRIAS CORPORATIVAS",
    subtitle: "Otimização espacial e privacidade acústica",
    description: "Divisórias inteligentes para escritórios, clínicas e lojas. Configurações modulares que permitem reorganização rápida e excelente atenuação de ruído.",
    highlights: [
      "Aproveitamento inteligente da área útil",
      "Privacidade sonora entre salas e consultórios",
      "Passagem facilitada de infraestrutura elétrica e cabeamento"
    ],
    specs: "Isolamento acústico de até 52dB com placas duplas",
    image: "assets/portfolio/portfolio_02.png"
  },
  acabamentos: {
    number: "05",
    title: "ACABAMENTOS ESPECIAIS",
    subtitle: "Superfícies de alto padrão preparadas para pintura fina",
    description: "Tratamento meticuloso de juntas, fitamento de cantos e lixamento técnico com controle de luz rasante para garantir ausência total de sombras ou ondulações.",
    highlights: [
      "Lixamento com aspiração para redução de pó",
      "Controle de qualidade com luz rasante",
      "Entrega pronta para receber pintura fosca ou acetinada"
    ],
    specs: "Massas de rejunte de secagem controlada e lixas de grão fino",
    image: "assets/portfolio/portfolio_01.png"
  }
};

// Dados de Etapas do Processo
const processSteps = [
  {
    number: "01",
    phase: "Briefing & Compatibilização",
    title: "ENTENDIMENTO",
    description: "Reunião técnica inicial com arquiteto, engenheiro ou cliente. Análise rigorosa das pranchas arquitetônicas, projetos de elétrica, hidráulica e ar-condicionado.",
    technicalAnnotation: "LEVANTAMENTO TÉCNICO IN LOCO",
    annotation: "COMPATIBILIZAÇÃO // GESSO + ELÉTRICA + CLIMATIZAÇÃO",
    specs: "Tolerância: 0mm na modulação",
    image: "assets/portfolio/portfolio_03.png",
    details: [
      "Verificação de prumo e nível do suporte estrutural",
      "Identificação de interferências luminotécnicas e dutos",
      "Alinhamento das expectativas de prazo e entrega"
    ]
  },
  {
    number: "02",
    phase: "Quantitativo & Modulação",
    title: "PLANEJAMENTO",
    description: "Dimensionamento dos materiais, paginação de placas, definição das estruturas de sustentação e cronograma físico de entrega por ambiente.",
    technicalAnnotation: "ESPECIFICAÇÃO DE PERFIS & CARGAS",
    annotation: "ESTRUTURA METÁLICA // MONTANTES E GUIAS GALVANIZADAS",
    specs: "Norma: ABNT NBR 15758",
    image: "assets/portfolio/portfolio_04.png",
    details: [
      "Cálculo de sobrecargas e reforços necessários",
      "Plano de descarga e logística limpa de insumos",
      "Aprovação prévia das amostras e detalhes de sanca"
    ]
  },
  {
    number: "03",
    phase: "Montagem & Fechamento",
    title: "EXECUÇÃO",
    description: "Instalação da malha estrutural com alinhamento a laser, fixação precisa de tirantes e fechamento com placas de drywall ou forro monolítico.",
    technicalAnnotation: "NIVELAMENTO A LASER & FIXAÇÃO SEGURA",
    annotation: "FORRO DE GESSO TABICADO // NÍVEL LASER DE PRECISÃO",
    specs: "Verificação contínua de flechas e prumo",
    image: "assets/portfolio/portfolio_01.png",
    details: [
      "Equipe com EPIs e uniformizada padrão MC Gesso",
      "Controle diário de prumo, esquadro e folgas",
      "Canteiro de obras organizado e livre de resíduos"
    ]
  },
  {
    number: "04",
    phase: "Acabamento & Entrega Técnica",
    title: "RESULTADO",
    description: "Tratamento de juntas em múltiplas demãos, calafetação perimetral, verificação minuciosa sob luz rasante e entrega do ambiente pronto para pintura.",
    technicalAnnotation: "CONTROLE DE QUALIDADE NÍVEL Q4",
    annotation: "ILUMINAÇÃO INTEGRADA // ACABAMENTO FINAL NÍVEL Q4",
    specs: "Superfície pronta para pintura acetinada",
    image: "assets/portfolio/portfolio_06.png",
    details: [
      "Inspeção final com checklist de entrega",
      "Superfícies sem desníveis ou microfissuras",
      "Espaços impecáveis que valorizam a arquitetura"
    ]
  }
];

// Dados dos Segmentos
const segmentsData = {
  residencial: {
    title: "RESIDENCIAL",
    subtitle: "Casas contemporâneas & Apartamentos de alto padrão",
    description: "Projetos personalizados que exigem acabamento refinado, detalhes esculturais de forro, sancas orgânicas ou minimalistas e conforto acústico em dormitórios e home theaters.",
    focus: [
      "Forros contínuos com cortineiros iluminados",
      "Isolamento acústico para suítes",
      "Sancas e nichos sob medida"
    ]
  },
  comercial: {
    title: "COMERCIAL",
    subtitle: "Lojas, Boutiques, Showrooms & Restaurantes",
    description: "Velocidade na execução para abertura pontual do ponto comercial, com soluções de forros e divisórias que traduzem a identidade visual da marca.",
    focus: [
      "Cumprimento estrito de prazos de inauguração",
      "Forros com design cenográfico para varejo",
      "Resistência ao tráfego e facilidade de manutenção"
    ]
  },
  corporativo: {
    title: "CORPORATIVO",
    subtitle: "Sedes de Empresas, Coworkings & Consultórios",
    description: "Ambientes de trabalho que combinam produtividade, acústica impecável e estética profissional moderna. Divisórias modulares e forros técnicos de alta performance.",
    focus: [
      "Atenuação sonora entre salas de reunião",
      "Integração com sistemas de cabeamento e HVAC",
      "Flexibilidade de layout para expansão"
    ]
  },
  construtoras: {
    title: "CONSTRUTORAS & FRANQUIAS",
    subtitle: "Obras em Escala & Padronização de Redes",
    description: "Capacidade operacional para atender empreendimentos imobiliários e redes de franquias que demandam rigoroso controle de qualidade, segurança e entrega sistemática.",
    focus: [
      "Padronização construtiva conforme manual da franquia",
      "Capacidade de volume com consistência técnica",
      "Documentação, segurança do trabalho e conformidade"
    ]
  }
};

// Dados de Clientes para o Modal
const clientsData = {
  "raia-drogasil": {
    name: "Droga Raia / Drogasil",
    category: "Farmácias",
    badge: "RD // REDE NACIONAL",
    segmentLabel: "Rede Farmacêutica Líder",
    scope: "Forros tabicados, iluminação embutida de alto IRC e divisórias acústicas para consultórios farmacêuticos.",
    highlights: ["Padronização executiva", "Forros com isolamento termoacústico", "Cumprimento ágil de inaugurações"]
  },
  "drogarias-pacheco": {
    name: "Drogarias Pacheco",
    category: "Farmácias",
    badge: "PACHECO // EXPANSÃO",
    segmentLabel: "Rede Tradicional Farmacêutica",
    scope: "Montagem em drywall para fachadas internas, forros monolíticos e fechamento de salas de atendimento.",
    highlights: ["Turnos rápidos", "Redução drástica de resíduos", "Planicidade perfeita para iluminação de prateleira"]
  },
  "pague-menos": {
    name: "Farmácias Pague Menos",
    category: "Farmácias",
    badge: "PAGUE MENOS // BRASIL",
    segmentLabel: "Rede Farmacêutica Nacional",
    scope: "Fechamentos modulares, sancas técnicas e forros contínuos com shafts de climatização integrados.",
    highlights: ["Canteiro seguro e limpo", "Respeito às normas ANVISA", "Agilidade em retrofit de lojas"]
  },
  "drogaria-sao-paulo": {
    name: "Drogaria São Paulo (DPSP)",
    category: "Farmácias",
    badge: "DPSP // VAREJO FARMA",
    segmentLabel: "Grupo DPSP",
    scope: "Instalação de forros acústicos e paredes em drywall resistente a impactos para grande circulação.",
    highlights: ["Placas de alta densidade", "Tratamento de juntas Q4", "Integração luminotécnica"]
  },
  "ultrafarma": {
    name: "Ultrafarma",
    category: "Farmácias",
    badge: "ULTRAFARMA // MEGA STORE",
    segmentLabel: "Mega Lojas & Atendimento",
    scope: "Grandes vãos de forro estruturado, sancas iluminadas e setores administrativos com paredes acústicas.",
    highlights: ["Grandes metragens", "Agilidade de montagem", "Alinhamento milimétrico a laser"]
  },
  "carrefour": {
    name: "Carrefour",
    category: "Supermercados",
    badge: "CARREFOUR // GALERIAS",
    segmentLabel: "Hipermercados & Galerias",
    scope: "Forros técnicos para galerias comerciais, fechamentos corta-fogo em drywall e áreas de checkout.",
    highlights: ["Paredes resistentes ao fogo", "Forros para grandes áreas", "Segurança do trabalho padrão industrial"]
  },
  "pao-de-acucar": {
    name: "Pão de Açúcar",
    category: "Supermercados",
    badge: "GPA // GOURMET & RETAIL",
    segmentLabel: "Supermercados Premium & Gourmet",
    scope: "Sancas decorativas, forros rebaixados em ilhas de frios/vinhos e iluminação cênica de alta sofisticação.",
    highlights: ["Acabamento visual refinado", "Sancas invertidas e luz difusa", "Compatibilização arquitetônica de ponta"]
  },
  "assai-atacadista": {
    name: "Assaí Atacadista",
    category: "Supermercados",
    badge: "ASSAÍ // ATACAREJO",
    segmentLabel: "Atacarejo Líder",
    scope: "Montagem de divisórias de drywall para salas operacionais, refeitórios, tesouraria e forros de escritórios.",
    highlights: ["Execução em grande porte", "Isolamento acústico", "Prazos rigorosos de entrega"]
  },
  "atacadao": {
    name: "Atacadão",
    category: "Supermercados",
    badge: "ATACADÃO // EXPANSÃO",
    segmentLabel: "Rede Atacadista Nacional",
    scope: "Estruturas leves em drywall para fechamentos prediais internos, sanitários e áreas administrativas.",
    highlights: ["Alta produtividade diária", "Normas de canteiro", "Soluções técnicas duráveis"]
  },
  "st-marche": {
    name: "St. Marche",
    category: "Supermercados",
    badge: "ST. MARCHE // PREMIUM",
    segmentLabel: "Boutique de Alimentos & Experiência",
    scope: "Forros com design personalizado, nichos arquitetônicos em gesso e integração luminotécnica com perfis LED.",
    highlights: ["Atenção extrema aos detalhes", "Forros monolíticos impecáveis", "Ambientes que valorizam o cliente"]
  },
  "cacau-show": {
    name: "Cacau Show",
    category: "Franquias",
    badge: "FRANQUIA // SHOPPING & RUA",
    segmentLabel: "Maior Rede de Chocolates Finos",
    scope: "Padronização de forros tabicados e sancas luminosas em conformidade exata com o manual da franquia.",
    highlights: ["Obras em tempo recorde", "Padronização nacional de lojas", "Execução noturna em shoppings"]
  },
  "smart-fit": {
    name: "Smart Fit",
    category: "Franquias",
    badge: "SMART FIT // FITNESS",
    segmentLabel: "Maior Rede de Academias da América Latina",
    scope: "Divisórias com tratamento termoacústico de alto desempenho, forros modulares e reforços para espelhos.",
    highlights: ["Atenuação sonora pesada", "Paredes com lã mineral", "Resistência estrutural comprovada"]
  },
  "outback": {
    name: "Outback Steakhouse",
    category: "Franquias",
    badge: "OUTBACK // CASUAL DINING",
    segmentLabel: "Restaurantes & Hospitalidade",
    scope: "Cenários luminotécnicos com sancas indiretas, forros acústicos para conforto conversacional e drywall técnico.",
    highlights: ["Conforto acústico", "Iluminação intimista", "Entrega sem poeira pronta para mobiliário"]
  },
  "vivara": {
    name: "Vivara",
    category: "Franquias",
    badge: "VIVARA // ALTO LUXO",
    segmentLabel: "Joalheria & Luxo",
    scope: "Nível de acabamento Q4 com controle sob luz rasante, rasgos milimétricos para iluminação de joias.",
    highlights: ["Tolerância zero de imperfeições", "Sancas ultrafinas", "Superfície pronta para pintura acetinada"]
  },
  "burger-king": {
    name: "Burger King",
    category: "Franquias",
    badge: "BK // PRAÇAS DE ALIMENTAÇÃO",
    segmentLabel: "Fast Food Internacional",
    scope: "Execução noturna em praças de alimentação de shoppings, forros resistentes a gordura e vapor e drywall corta-fogo.",
    highlights: ["Turnos 100% noturnos", "Velocidade extrema de montagem", "Conformidade com Corpo de Bombeiros"]
  },
  "boticario": {
    name: "O Boticário",
    category: "Franquias",
    badge: "BOTICÁRIO // FRANQUIAS",
    segmentLabel: "Rede de Cosméticos e Perfumaria",
    scope: "Forros contínuos com cortineiros e sancas invertidas que valorizam os expositores e frascos de produtos.",
    highlights: ["Fidelidade ao projeto luminotécnico", "Entrega impecável", "Padronização em diversas cidades"]
  }
};

// Dados de Depoimentos
const testimonials = [
  {
    name: "Ana Beatriz",
    role: "Arquiteta Sênior",
    company: "Estúdio Arquitetura & Design",
    text: "A precisão da MC Gesso é um diferencial fundamental para nossos projetos de alto padrão. O nível de acabamento, especialmente na preparação para iluminação, é impecável."
  },
  {
    name: "Ricardo Mendes",
    role: "Gerente de Expansão",
    company: "Rede Farmacêutica Nacional",
    text: "Atender prazos de inauguração de lojas exige parceria e velocidade. A MC Gesso provou ser nossa parceira mais confiável na expansão pelo Brasil, mantendo o padrão mesmo em turnos noturnos."
  },
  {
    name: "Fernanda Costa",
    role: "Diretora de Operações",
    company: "Grupo Varejo Premium",
    text: "Trabalhar com a MC Gesso é ter a garantia de que o projeto será executado exatamente como concebido. Organização impecável e um respeito inabalável pelas normas de canteiro."
  }
];

// Dados de Portfólio para Lightbox
const portfolioData = {
  p1: {
    title: "Supervisão Técnica e Controle em Canteiro",
    category: "Obras",
    tag: "P01 · SUPERVISÃO TÉCNICA",
    image: "assets/portfolio/portfolio_01.png",
    description: "Acompanhamento rigoroso de montagem de forros e divisórias com alinhamento a laser e supervisão executiva contínua.",
    details: "Inspeção dimensional in loco em sintonia com a equipe de arquitetura e gerenciamento predial."
  },
  p2: {
    title: "Soluções para Operações Comerciais & Lojas",
    category: "Corporativo",
    tag: "P02 · SOLUÇÕES COMERCIAIS",
    image: "assets/portfolio/portfolio_02.png",
    description: "Padrão, agilidade e acabamento para redes, lojas, consultórios e franquias com sancas iluminadas e drywall técnico.",
    details: "Fechamentos modulares e cortineiros com nichos luminotécnicos integrados ao mobiliário comercial."
  },
  p3: {
    title: "Alinhamento de Projetos e Engenharia",
    category: "Drywall",
    tag: "P03 · PROJETOS E ENGENHARIA",
    image: "assets/portfolio/portfolio_03.png",
    description: "Planejamento colaborativo entre nossa liderança técnica e o escritório de arquitetura sobre as pranchas executivas.",
    details: "Compatibilização prévia de interferências de ar-condicionado, automação e luminotécnica."
  },
  p4: {
    title: "Materiais Certificados e Perfis Normatizados",
    category: "Acabamentos",
    tag: "P04 · MATERIAIS E PERFIS",
    image: "assets/portfolio/portfolio_04.png",
    description: "Placas em drywall de primeira linha, perfis galvanizados estruturais, fitas de alta tenacidade e ferramentas de precisão.",
    details: "Garantia de estabilidade dimensional, resistência ao impacto e conformidade com normas ABNT."
  },
  p5: {
    title: "Inspeção e Entrega Técnica Premium",
    category: "Forros",
    tag: "P05 · INSPEÇÃO E ENTREGA",
    image: "assets/portfolio/portfolio_05.png",
    description: "Controle meticuloso de planicidade sob luz rasante, conferência de cotas e entrega da obra pronta para pintura fina.",
    details: "Verificação checklist nível Q4 com ausência total de ondulações ou microfissuras nas juntas."
  },
  p6: {
    title: "Ambientes Corporativos de Alto Padrão",
    category: "Corporativo",
    tag: "P06 · AMBIENTE PRONTO",
    image: "assets/portfolio/portfolio_06.png",
    description: "Recepção corporativa com forro monolítico, sanca invertida de luz difusa e integração perfeita com painéis de mármore e vidro.",
    details: "Design sofisticado e conforto acústico ideal para sedes de empresas e consultórios executivos."
  }
};

let currentTestimonialIndex = 0;
let currentProcessIndex = 0;

// Inicialização após carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initHeroVideo();
  initProcess();
  initSegments();
  initClientsFilter();
  initTestimonials();
  initCounters();
  initPortfolioFilter();
  initFaqAccordion();
  initBudgetForm();
  initModals();
});

// 1. Header scroll effect
function initHeader() {
  const header = document.getElementById('main-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.remove('bg-gradient-to-b', 'from-[#0D0D0D]/90', 'via-[#0D0D0D]/40', 'to-transparent', 'py-6');
      header.classList.add('bg-[#0D0D0D]/95', 'backdrop-blur-md', 'py-4', 'border-b', 'border-[#2E2E2E]', 'shadow-2xl');
    } else {
      header.classList.add('bg-gradient-to-b', 'from-[#0D0D0D]/90', 'via-[#0D0D0D]/40', 'to-transparent', 'py-6');
      header.classList.remove('bg-[#0D0D0D]/95', 'backdrop-blur-md', 'py-4', 'border-b', 'border-[#2E2E2E]', 'shadow-2xl');
    }
  });
}

// 2. Hero Video Controls
function initHeroVideo() {
  const video = document.getElementById('hero-video');
  const playBtn = document.getElementById('video-toggle-play');
  const muteBtn = document.getElementById('video-toggle-mute');

  if (!video) return;

  // Autoplay garantido com mudo
  video.muted = true;
  video.play().catch(e => console.warn("Autoplay aguardando interação:", e));

  if (playBtn) {
    playBtn.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        playBtn.textContent = 'PAUSAR ❚❚';
      } else {
        video.pause();
        playBtn.textContent = 'REPRODUZIR ▶';
      }
    });
  }

  if (muteBtn) {
    muteBtn.addEventListener('click', () => {
      video.muted = !video.muted;
      muteBtn.textContent = video.muted ? 'ÁUDIO: OFF' : 'ÁUDIO: ON';
    });
  }
}

// 3. Process Steps Switcher
function initProcess() {
  renderProcessStep(0);

  const prevBtn = document.getElementById('process-prev');
  const nextBtn = document.getElementById('process-next');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentProcessIndex = currentProcessIndex > 0 ? currentProcessIndex - 1 : 3;
      renderProcessStep(currentProcessIndex);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentProcessIndex = currentProcessIndex < 3 ? currentProcessIndex + 1 : 0;
      renderProcessStep(currentProcessIndex);
    });
  }

  document.querySelectorAll('.process-step-btn').forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      currentProcessIndex = idx;
      renderProcessStep(idx);
    });
  });
}

function renderProcessStep(index) {
  const step = processSteps[index];
  if (!step) return;

  // Atualizar visual dos botões
  document.querySelectorAll('.process-step-btn').forEach((btn, idx) => {
    const indicator = btn.querySelector('.step-active-indicator');
    const num = btn.querySelector('.step-num');
    const title = btn.querySelector('.step-title');

    if (idx === index) {
      btn.className = "process-step-btn p-5 text-left border transition-all duration-300 relative bg-[#0D0D0D] border-[#D6B58B] shadow-lg cursor-pointer";
      if (indicator) indicator.classList.remove('hidden');
      if (num) { num.className = "step-num text-2xl font-bold font-mono text-[#D6B58B]"; }
      if (title) { title.className = "step-title text-sm font-bold uppercase tracking-wider text-[#F7F7F7]"; }
    } else {
      btn.className = "process-step-btn p-5 text-left border transition-all duration-300 relative bg-[#0D0D0D]/60 border-[#2E2E2E] hover:border-[#D6B58B]/50 cursor-pointer";
      if (indicator) indicator.classList.add('hidden');
      if (num) { num.className = "step-num text-2xl font-bold font-mono text-[#2E2E2E]"; }
      if (title) { title.className = "step-title text-sm font-bold uppercase tracking-wider text-[#F7F7F7]/70"; }
    }
  });

  // Atualizar Display da Etapa
  const imgEl = document.getElementById('process-image');
  const tagEl = document.getElementById('process-tag');
  const annEl = document.getElementById('process-annotation');
  const specEl = document.getElementById('process-specs');
  const numBadge = document.getElementById('process-num-badge');
  const phaseEl = document.getElementById('process-phase');
  const titleEl = document.getElementById('process-title');
  const descEl = document.getElementById('process-description');
  const detailsEl = document.getElementById('process-details');
  const countEl = document.getElementById('process-counter');
  const bgNote = document.getElementById('process-bg-note');

  if (imgEl) imgEl.src = step.image;
  if (tagEl) tagEl.textContent = step.technicalAnnotation;
  if (annEl) annEl.textContent = step.annotation;
  if (specEl) specEl.textContent = step.specs;
  if (numBadge) numBadge.textContent = `ETAPA ${step.number}`;
  if (phaseEl) phaseEl.textContent = step.phase;
  if (titleEl) titleEl.textContent = step.title;
  if (descEl) descEl.textContent = step.description;
  if (countEl) countEl.textContent = `0${index + 1} / 04`;
  if (bgNote) bgNote.textContent = `MC_METROLOGIA_ETAPA_0${index + 1}`;

  if (detailsEl) {
    detailsEl.innerHTML = step.details.map((d, i) => `
      <div class="flex items-start gap-3 text-xs text-[#F7F7F7]/85 font-normal">
        <span class="text-[#D6B58B] font-mono text-[11px] mt-0.5">0${i + 1}.</span>
        <span>${d}</span>
      </div>
    `).join('');
  }
}

// 4. Segments Switcher
function initSegments() {
  document.querySelectorAll('.segment-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const segId = btn.getAttribute('data-segment');
      selectSegment(segId);
    });
  });
}

function selectSegment(segId) {
  const seg = segmentsData[segId];
  if (!seg) return;

  document.querySelectorAll('.segment-btn').forEach(btn => {
    const isCurrent = btn.getAttribute('data-segment') === segId;
    const title = btn.querySelector('.seg-title');
    const status = btn.querySelector('.seg-status');
    const indicator = btn.querySelector('.seg-indicator');

    if (isCurrent) {
      btn.className = "segment-btn p-6 text-left border transition-all duration-300 relative flex flex-col justify-between min-h-[160px] bg-[#141414] border-[#D6B58B] shadow-xl cursor-pointer";
      if (title) title.className = "seg-title text-base font-bold uppercase tracking-wider text-[#E8C49F]";
      if (status) status.innerHTML = "<span>SELECIONADO</span><span>●</span>";
      if (indicator) indicator.classList.remove('hidden');
    } else {
      btn.className = "segment-btn p-6 text-left border transition-all duration-300 relative flex flex-col justify-between min-h-[160px] bg-[#141414]/50 border-[#2E2E2E] hover:border-[#D6B58B]/50 cursor-pointer";
      if (title) title.className = "seg-title text-base font-bold uppercase tracking-wider text-[#F7F7F7]";
      if (status) status.innerHTML = "<span>EXPLORAR</span><span>→</span>";
      if (indicator) indicator.classList.add('hidden');
    }
  });

  const titleEl = document.getElementById('segment-detail-title');
  const tagEl = document.getElementById('segment-detail-tag');
  const descEl = document.getElementById('segment-detail-desc');
  const focusEl = document.getElementById('segment-detail-focus');
  const ctaEl = document.getElementById('segment-detail-cta');

  if (titleEl) titleEl.textContent = seg.subtitle;
  if (tagEl) tagEl.textContent = `SOLUÇÃO TAILOR-MADE // ${seg.title}`;
  if (descEl) descEl.textContent = seg.description;
  if (ctaEl) {
    ctaEl.textContent = `Solicitar Proposta para ${seg.title}`;
    ctaEl.href = "#orcamento";
  }

  if (focusEl) {
    focusEl.innerHTML = seg.focus.map(item => `
      <div class="flex items-center gap-2 p-3 bg-[#0D0D0D] border border-[#2E2E2E]/80 text-xs text-[#F7F7F7]">
        <span class="text-[#D6B58B]">✓</span>
        <span>${item}</span>
      </div>
    `).join('');
  }
}

// 5. Clients Filter & Detail Modal
function initClientsFilter() {
  document.querySelectorAll('.client-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-cat');
      
      // Estilo do botão ativo
      document.querySelectorAll('.client-filter-btn').forEach(b => {
        if (b === btn) {
          b.className = "client-filter-btn px-5 py-2 text-xs font-medium tracking-wider uppercase transition-all duration-200 border rounded-none cursor-pointer bg-[#D6B58B] text-[#0D0D0D] border-[#D6B58B] font-bold shadow-md";
        } else {
          b.className = "client-filter-btn px-5 py-2 text-xs font-medium tracking-wider uppercase transition-all duration-200 border rounded-none cursor-pointer bg-[#141414] text-[#F7F7F7]/70 border-[#2E2E2E] hover:border-[#E8C49F] hover:text-[#F7F7F7]";
        }
      });

      // Filtragem dos cards
      document.querySelectorAll('.client-card').forEach(card => {
        const cardCat = card.getAttribute('data-cat');
        if (cat === 'Todos' || cardCat === cat) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // Abrir modal ao clicar em qualquer card de cliente
  document.querySelectorAll('.client-card').forEach(card => {
    card.addEventListener('click', () => {
      const clientId = card.getAttribute('data-client-id');
      openClientModal(clientId);
    });
  });
}

function openClientModal(clientId) {
  const c = clientsData[clientId];
  if (!c) return;

  const modal = document.getElementById('client-modal');
  if (!modal) return;

  document.getElementById('modal-client-badge').textContent = `${c.badge} // ${c.category}`;
  document.getElementById('modal-client-name').textContent = c.name;
  document.getElementById('modal-client-sub').textContent = c.segmentLabel;
  document.getElementById('modal-client-scope').textContent = c.scope;
  
  const highlightsEl = document.getElementById('modal-client-highlights');
  if (highlightsEl) {
    highlightsEl.innerHTML = c.highlights.map(h => `
      <li class="text-xs text-[#E8DED1] flex items-start gap-2">
        <span class="text-[#D6B58B]">✔</span>
        <span>${h}</span>
      </li>
    `).join('');
  }

  const budgetLink = document.getElementById('modal-client-budget-link');
  if (budgetLink) {
    budgetLink.href = `https://wa.me/5511986504178?text=${encodeURIComponent(
      `Olá! Gostaria de um orçamento para obra comercial similar ao padrão executado para ${c.name}.`
    )}`;
  }

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeClientModal() {
  const modal = document.getElementById('client-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'unset';
  }
}

// 6. Testimonials Carousel
function initTestimonials() {
  renderTestimonial(0);

  const prevBtn = document.getElementById('testimonial-prev');
  const nextBtn = document.getElementById('testimonial-next');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentTestimonialIndex = currentTestimonialIndex > 0 ? currentTestimonialIndex - 1 : testimonials.length - 1;
      renderTestimonial(currentTestimonialIndex);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentTestimonialIndex = currentTestimonialIndex < testimonials.length - 1 ? currentTestimonialIndex + 1 : 0;
      renderTestimonial(currentTestimonialIndex);
    });
  }
}

function renderTestimonial(index) {
  const t = testimonials[index];
  if (!t) return;

  const textEl = document.getElementById('testimonial-text');
  const nameEl = document.getElementById('testimonial-name');
  const roleEl = document.getElementById('testimonial-role');

  if (textEl) textEl.textContent = `"${t.text}"`;
  if (nameEl) nameEl.textContent = t.name;
  if (roleEl) roleEl.textContent = `${t.role} · ${t.company}`;
}

// 7. Counters Animated on Scroll
function initCounters() {
  const countersSection = document.getElementById('counters-section');
  if (!countersSection) return;

  let triggered = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !triggered) {
        triggered = true;
        animateCounter('counter-years', 15, 1800);
        animateCounter('counter-projects', 850, 2000);
        animateCounter('counter-clients', 420, 2000);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(countersSection);
}

function animateCounter(id, target, duration) {
  const el = document.getElementById(id);
  if (!el) return;

  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out cubic curve
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    const currentValue = Math.floor(easeProgress * target);

    el.textContent = currentValue.toLocaleString('pt-BR');

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = target.toLocaleString('pt-BR');
    }
  }

  requestAnimationFrame(update);
}

// 8. Portfolio Filter & Lightbox
function initPortfolioFilter() {
  document.querySelectorAll('.portfolio-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-cat');

      document.querySelectorAll('.portfolio-filter-btn').forEach(b => {
        if (b === btn) {
          b.className = "portfolio-filter-btn px-5 py-2 text-xs font-medium tracking-wider uppercase transition-all duration-200 border bg-[#D6B58B] text-[#0D0D0D] border-[#D6B58B] font-bold shadow-md cursor-pointer";
        } else {
          b.className = "portfolio-filter-btn px-5 py-2 text-xs font-medium tracking-wider uppercase transition-all duration-200 border bg-[#0D0D0D] text-[#F7F7F7]/70 border-[#2E2E2E] hover:border-[#E8C49F] hover:text-[#F7F7F7] cursor-pointer";
        }
      });

      document.querySelectorAll('.portfolio-item').forEach(card => {
        const itemCat = card.getAttribute('data-cat');
        if (cat === 'Todos' || itemCat === cat) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  document.querySelectorAll('.portfolio-item').forEach(card => {
    card.addEventListener('click', () => {
      const pId = card.getAttribute('data-portfolio-id');
      openPortfolioLightbox(pId);
    });
  });
}

function openPortfolioLightbox(pId) {
  const p = portfolioData[pId];
  if (!p) return;

  const modal = document.getElementById('portfolio-lightbox');
  if (!modal) return;

  document.getElementById('lightbox-tag').textContent = `${p.tag} // ${p.category}`;
  document.getElementById('lightbox-title').textContent = p.title;
  document.getElementById('lightbox-img').src = p.image;
  document.getElementById('lightbox-desc').textContent = p.description;
  document.getElementById('lightbox-details').textContent = p.details;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closePortfolioLightbox() {
  const modal = document.getElementById('portfolio-lightbox');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'unset';
  }
}

// 9. FAQ Accordion
function initFaqAccordion() {
  document.querySelectorAll('.faq-toggle-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const content = item.querySelector('.faq-content');
      const icon = item.querySelector('.faq-icon');

      const isHidden = content.classList.contains('hidden');

      // Fecha todos os outros
      document.querySelectorAll('.faq-item').forEach(other => {
        other.querySelector('.faq-content').classList.add('hidden');
        other.querySelector('.faq-icon').classList.remove('rotate-180');
      });

      if (isHidden) {
        content.classList.remove('hidden');
        icon.classList.add('rotate-180');
      }
    });
  });
}

// 10. Budget Form
let selectedServices = ["Forros de Gesso Monolíticos"];

function initBudgetForm() {
  document.querySelectorAll('.budget-service-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const srvName = btn.getAttribute('data-service');
      toggleBudgetService(srvName, btn);
    });
  });

  const form = document.getElementById('budget-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      handleSendWhatsApp();
    });
  }

  const copyBtn = document.getElementById('copy-budget-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      handleCopyBudget();
    });
  }
}

function toggleBudgetService(srvName, btn) {
  const idx = selectedServices.indexOf(srvName);
  if (idx > -1) {
    if (selectedServices.length > 1) {
      selectedServices.splice(idx, 1);
    }
  } else {
    selectedServices.push(srvName);
  }
  updateServiceButtonsUI();
}

function updateServiceButtonsUI() {
  document.querySelectorAll('.budget-service-btn').forEach(btn => {
    const srvName = btn.getAttribute('data-service');
    const isSelected = selectedServices.includes(srvName);
    const box = btn.querySelector('.check-box');

    if (isSelected) {
      btn.className = "budget-service-btn p-3 text-left border text-xs font-medium transition-all bg-[#1C1C1C] border-[#D6B58B] text-[#E8C49F] cursor-pointer";
      if (box) box.textContent = "☑";
    } else {
      btn.className = "budget-service-btn p-3 text-left border text-xs font-medium transition-all bg-[#141414] border-[#2E2E2E] text-[#F7F7F7]/70 hover:border-[#2E2E2E]/80 cursor-pointer";
      if (box) box.textContent = "☐";
    }
  });
}

function generateSummaryText() {
  const name = document.getElementById('form-name')?.value || 'Não informado';
  const whatsapp = document.getElementById('form-whatsapp')?.value || 'Não informado';
  const cityState = document.getElementById('form-city')?.value || 'Não informado';
  const projectType = document.getElementById('form-project-type')?.value || 'Residencial';
  const description = document.getElementById('form-desc')?.value || 'Em análise';

  return `*SOLICITAÇÃO DE ORÇAMENTO - MC GESSO*\n\n` +
    `*Nome:* ${name}\n` +
    `*WhatsApp:* ${whatsapp}\n` +
    `*Cidade/UF:* ${cityState}\n` +
    `*Tipo de Projeto:* ${projectType}\n` +
    `*Serviços Desejados:* ${selectedServices.join(', ')}\n` +
    `*Descrição da Obra:* ${description}\n\n` +
    `_Enviado através do site oficial MC Gesso_`;
}

function handleSendWhatsApp() {
  const name = document.getElementById('form-name')?.value.trim();
  const whatsapp = document.getElementById('form-whatsapp')?.value.trim();
  const cityState = document.getElementById('form-city')?.value.trim();
  const consent = document.getElementById('form-consent')?.checked;
  const errorEl = document.getElementById('budget-form-error');

  if (!name || !whatsapp || !cityState) {
    if (errorEl) {
      errorEl.textContent = '⚠ Por favor, preencha Nome, WhatsApp e Cidade/UF para continuar.';
      errorEl.classList.remove('hidden');
    }
    return;
  }

  if (!consent) {
    if (errorEl) {
      errorEl.textContent = '⚠ É necessário autorizar o contato para envio da proposta técnica.';
      errorEl.classList.remove('hidden');
    }
    return;
  }

  if (errorEl) errorEl.classList.add('hidden');

  const text = generateSummaryText();
  const url = `https://wa.me/5511986504178?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

function handleCopyBudget() {
  const name = document.getElementById('form-name')?.value.trim();
  const whatsapp = document.getElementById('form-whatsapp')?.value.trim();
  const errorEl = document.getElementById('budget-form-error');
  const copyBtn = document.getElementById('copy-budget-btn');

  if (!name || !whatsapp) {
    if (errorEl) {
      errorEl.textContent = '⚠ Por favor, preencha pelo menos o Nome e WhatsApp antes de copiar.';
      errorEl.classList.remove('hidden');
    }
    return;
  }

  if (errorEl) errorEl.classList.add('hidden');

  const text = generateSummaryText();
  navigator.clipboard.writeText(text);

  if (copyBtn) {
    copyBtn.textContent = '✓ Dados Copiados com Sucesso!';
    setTimeout(() => {
      copyBtn.textContent = 'Copiar Dados do Orçamento';
    }, 4000);
  }
}

// 11. Modal Handlers
function initModals() {
  // Menu Drawer
  const menuBtn = document.getElementById('menu-btn');
  const menuDrawer = document.getElementById('menu-drawer');
  const closeMenuBtn = document.getElementById('close-menu-btn');
  const menuBackdrop = document.getElementById('menu-backdrop');

  function openMenu() {
    if (menuDrawer) menuDrawer.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    if (menuDrawer) menuDrawer.classList.add('hidden');
    document.body.style.overflow = 'unset';
  }

  if (menuBtn) menuBtn.addEventListener('click', openMenu);
  if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMenu);
  if (menuBackdrop) menuBackdrop.addEventListener('click', closeMenu);

  document.querySelectorAll('.drawer-nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Services Modal
  document.querySelectorAll('.open-service-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const srvId = btn.getAttribute('data-service-id');
      openServiceModal(srvId);
    });
  });

  document.getElementById('service-modal-close')?.addEventListener('click', closeServiceModal);
  document.getElementById('service-modal-back')?.addEventListener('click', closeServiceModal);
  document.getElementById('service-modal-backdrop')?.addEventListener('click', closeServiceModal);

  document.getElementById('service-modal-quote')?.addEventListener('click', () => {
    const srvTitle = document.getElementById('modal-service-title')?.textContent;
    closeServiceModal();
    if (srvTitle) {
      if (!selectedServices.includes(srvTitle)) {
        selectedServices = [srvTitle];
        updateServiceButtonsUI();
      }
    }
    document.getElementById('orcamento')?.scrollIntoView({ behavior: 'smooth' });
  });

  // Client Modal close
  document.getElementById('client-modal-close')?.addEventListener('click', closeClientModal);
  document.getElementById('client-modal-backdrop')?.addEventListener('click', closeClientModal);

  // Portfolio Lightbox close
  document.getElementById('lightbox-close')?.addEventListener('click', closePortfolioLightbox);
  document.getElementById('lightbox-backdrop')?.addEventListener('click', closePortfolioLightbox);

  // Brand Guide Modal
  const brandGuideModal = document.getElementById('brand-guide-modal');
  const openGuideBtns = document.querySelectorAll('.open-brand-guide-btn');
  const closeGuideBtn = document.getElementById('close-brand-guide-btn');
  const closeGuideBottomBtn = document.getElementById('close-brand-guide-bottom-btn');
  const guideBackdrop = document.getElementById('brand-guide-backdrop');

  function openBrandGuide() {
    closeMenu();
    if (brandGuideModal) brandGuideModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeBrandGuide() {
    if (brandGuideModal) brandGuideModal.classList.add('hidden');
    document.body.style.overflow = 'unset';
  }

  openGuideBtns.forEach(btn => btn.addEventListener('click', openBrandGuide));
  if (closeGuideBtn) closeGuideBtn.addEventListener('click', closeBrandGuide);
  if (closeGuideBottomBtn) closeGuideBottomBtn.addEventListener('click', closeBrandGuide);
  if (guideBackdrop) guideBackdrop.addEventListener('click', closeBrandGuide);

  // Tecla Escape fecha qualquer modal aberto
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenu();
      closeServiceModal();
      closeClientModal();
      closePortfolioLightbox();
      closeBrandGuide();
    }
  });
}

function openServiceModal(srvId) {
  const srv = servicesData[srvId];
  if (!srv) return;

  const modal = document.getElementById('service-modal');
  if (!modal) return;

  document.getElementById('modal-service-num').textContent = `${srv.number} //`;
  document.getElementById('modal-service-title').textContent = srv.title;
  document.getElementById('modal-service-sub').textContent = srv.subtitle;
  document.getElementById('modal-service-img').src = srv.image;
  document.getElementById('modal-service-desc').textContent = srv.description;
  document.getElementById('modal-service-specs').textContent = srv.specs;

  const highlightsEl = document.getElementById('modal-service-highlights');
  if (highlightsEl) {
    highlightsEl.innerHTML = srv.highlights.map(h => `
      <li class="text-xs text-[#E8DED1] flex items-start gap-2">
        <span class="text-[#D6B58B] mt-0.5">▪</span>
        <span>${h}</span>
      </li>
    `).join('');
  }

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
  const modal = document.getElementById('service-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'unset';
  }
}
