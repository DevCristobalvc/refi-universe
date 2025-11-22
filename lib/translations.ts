export type Locale = "es" | "en" | "pt"

export const translations = {
  es: {
    nav: {
      camera: "CÁMARA",
      map: "MAPA",
      wallet: "ZK-WALLET",
      docs: "DOCUMENTACIÓN",
      tech: "TECNOLOGÍA",
      roadmap: "ROADMAP",
      faq: "FAQ",
    },
    hero: {
      badge: "DEVCONNECT BUENOS AIRES // NOV 15, 2025",
      title1: "EL 15 DE NOV DE 2025,",
      title2: "EN DEVCONNECT,",
      title3: "EL CIELO SE CAYÓ.",
      subtitle: "VIENTO, LLUVIA, CALOR EXTREMO EN 24 HORAS, en un mes de verano",
    },
    critical: {
      title: "Mientras el clima colapsaba afuera, adentro seguíamos optimizando rendimientos APY del 0.001%.",
      description:
        "web3 nació para coordinar a la humanidad, no solo para especular con ella. El 99% de las dApps hoy son casinos glorificados.",
      highlight: "Hemos fallado a la visión original.",
    },
    solution: {
      title1: "NO SOMOS DEFI.",
      title2: "SOMOS REFI.",
      subtitle: "RECUPERAMOS EL MUNDO FÍSICO DESDE EL DIGITAL.",
      anonymous: {
        title: "100% ANÓNIMO",
        desc: "Zero Knowledge Proofs protegen tu identidad",
      },
      ai: {
        title: "AI-POWERED",
        desc: "Standards x402 & 8002 validan impacto real",
      },
      gasless: {
        title: "SIN GAS",
        desc: "Sin permisos. Solo impacto verificable.",
      },
    },
    cta: {
      button: "PROOF OF CLEANUP // CAPTURE NOW",
      subtitle: "Toma una foto. Verifica el impacto. Gana recompensas. Todo anónimo.",
    },
    stats: {
      heading: "IMPACTO EN VIVO",
      cleanups: "Cleanups Verificados",
      agents: "AI Agents Activos",
      waste: "Toneladas Removidas",
      privacy: "Privacidad ZK",
    },
    cases: {
      heading: "CASOS DE USO",
      a: {
        label: "CASO_A://",
        title: "The Shadow Walker",
        desc: "Un cypherpunk que odia el KYC. Limpia su barrio, gana tokens, mantiene su identidad oculta con ZK-Proofs.",
        footer: "→ Impacto público, identidad privada.",
      },
      b: {
        label: "CASO_B://",
        title: "The AI Auditor",
        desc: "Agente autónomo ERC-8002 cruza datos satelitales con fotos. Detecta fraude automáticamente on-chain.",
        footer: "→ Confianza programática. No confíes, verifica.",
      },
      c: {
        label: "CASO_C://",
        title: "The Tax Hacker",
        desc: "Corporaciones compran Impact Certificates. No saben quién limpió, pero saben matemáticamente que ocurrió.",
        footer: "→ Bonos verdes verificables. Compliance instantáneo.",
      },
    },
    howto: {
      heading: "CÓMO FUNCIONA",
      step1: {
        title: "Captura",
        desc: "Toma una foto del área que limpiaste con tu smartphone",
      },
      step2: {
        title: "AI Valida",
        desc: "Agentes ERC-8002 verifican tu impacto contra datos satelitales",
      },
      step3: {
        title: "ZK Protege",
        desc: "Tu identidad permanece 100% anónima con ZK-STARKs",
      },
      step4: {
        title: "Gana Rewards",
        desc: "Recibe tokens + Impact Certificates verificables on-chain",
      },
    },
    tech: {
      heading: "Technical Stack",
      items: {
        zk: { title: "ZK-STARKs", desc: "Privacy Layer" },
        x402: { title: "x402 Standard", desc: "AI Agent Work" },
        erc: { title: "ERC-8002", desc: "Hybrid AI Logic" },
        circular: { title: "Circular Economy", desc: "Impact → Value" },
      },
    },
    roadmap: {
      heading: "ROADMAP PÚBLICO",
      phase1: {
        title: "MÓDULO 1: MVP MANUAL (DevConnect Hackathon)",
        items: [
          "Operador humano recibe fotos de limpieza vía app simple",
          "Lista de wallets para distribuir recompensas manualmente",
          "Validación básica: foto + ubicación + timestamp",
          "Primera distribución de tokens a limpiadores verificados",
          "Deploy de Safe Wallet para recibir donaciones corporativas",
        ],
      },
      phase2: {
        title: "MÓDULO 2: DAO DE 5 AGENTES AI",
        items: [
          "Deploy de 5 Agentes AI autónomos (ERC-8002)",
          "DAO para gobernanza: agentes votan validaciones",
          "Integración con datos satelitales para validación automática",
          "Corporaciones reciben NFT de reducción de impuestos verdes",
          "Safe Wallet gestiona fondos de forma descentralizada",
        ],
      },
      phase3: {
        title: "MÓDULO 3: PRIVACIDAD ZK + ESCALA GLOBAL",
        items: [
          "Implementación completa de ZK-STARKs para anonimato",
          "Marketplace de Impact Certificates verificables on-chain",
          "Expansión a 10 ciudades latinoamericanas",
          "Standard x402 como protocolo abierto",
          "Partnerships con gobiernos y ONGs locales",
        ],
      },
    },
    faq: {
      heading: "PREGUNTAS FRECUENTES",
      q1: {
        q: "¿Por qué ZK-Proofs?",
        a: "Porque la privacidad no es opcional. Si tu identidad está atada a cada acción, no eres libre. ZK-STARKs prueban el impacto sin revelar quién eres.",
      },
      q2: {
        q: "¿Cómo evitan el fraude?",
        a: "AI Agents (ERC-8002) cruzan tus fotos con datos satelitales y modelos de detección de objetos. No puedes falsificar el impacto porque la validación es matemática.",
      },
      q3: {
        q: "¿Quién paga las recompensas?",
        a: "Corporaciones que necesitan compliance ESG real. Compran Impact Certificates verificables on-chain. Es economía circular: impacto real genera valor real.",
      },
      q4: {
        q: "¿Es esto solo para crypto-nerds?",
        a: "No. Es una app con cámara. Tomas foto, ganas tokens. La complejidad técnica está oculta. El impacto es visible.",
      },
    },
    whitepaper: {
      title: "ReFi Universe Protocol (ReFiUP)",
      subtitle: "White-Paper Style · Typewriter Font · Black & White · No Scroll · No Buttons",
      subtitle_small: "white paper • bienes comunes • código abierto",
      tagline: '"Como Pokémon Go — pero en lugar de atrapar Pokémon, recolectas basura. Salva el mundo. Diviértete."',
      description:
        "Un protocolo de finanzas regenerativas para la humanidad. Vibes OG. Energía Cypher. Un mensaje del futuro disfrazado como white paper.",
      energy: "🜁 Powered by Open-Source Humanity",
      alerts: {
        defi: "SI ESTÁS CONSTRUYENDO DEFI NO ERES HUMANO 🖕",
        refi: "FXK DEFI — CONSTRUYE REFI.",
      },
      powered: {
        heading: "Powered by Open-Source Humanity",
      },
      inspiration: {
        heading: "Inspiration",
        video: '※ Video reference: "Hombre en África"',
      },
      modules: {
        heading: "Core Modules",
        tech: "Tech",
        context: "Context",
        history: "History",
        ux: "UX",
        empty: "(Open to fill later)",
      },
      manifesto: {
        p1: "El clima colapsó el 15 de noviembre de 2025 en DevConnect Buenos Aires. Mientras afuera había viento, lluvia y calor extremo en 24 horas, adentro seguíamos optimizando rendimientos del 0.001%. web3 nació para coordinar a la humanidad, no solo para especular.",
        p2: "ReFi Universe Protocol usa Zero Knowledge Proofs para proteger tu privacidad mientras verificas impacto real. AI Agents (x402, ERC-8002) validan cada limpieza contra datos satelitales. No más greenwashing. No más KYC. Solo matemática, impacto y recompensas.",
        p3: "Esta es la visión original de web3: coordinar humanos para resolver problemas reales. No casinos. No especulación. Regeneración.",
      },
      footer: {
        heading: "Footer",
        message: "A message from the future disguised as a white paper. Built with OG Cypher energy.",
      },
    },
    footer: {
      powered: "Powered by ReFi Universe // ZK-STARKs // x402 AI",
      links: {
        docs: "Docs",
        github: "GitHub",
        discord: "Discord",
      },
    },
    home: {
      title: "Protocolo ReFi Universe",
      tagline: "Coordina humanos para limpiar el planeta. Verifica el impacto con IA. Protege la privacidad con ZK.",
      problem: {
        title: "→ Problema",
        desc: "La huella de carbono de la actividad humana está destruyendo el planeta. Los sistemas actuales no pueden coordinar la limpieza a escala mientras protegen la privacidad.",
      },
      solution: {
        title: "→ Solución",
        desc: "Coordinación humana a través de incentivos. Toma foto de limpieza → IA valida el impacto → Gana recompensas. Todo anónimo con Zero Knowledge Proofs.",
      },
      model: {
        title: "→ Modelo",
        desc: "DAO de 5 Agentes IA + Safe Wallet. Corporaciones donan para NFTs de reducción de impuestos verdes. MVP manual: operador distribuye recompensas a lista de wallets. Escala a automatización completa.",
      },
    },
  },
  en: {
    nav: {
      camera: "CAMERA",
      map: "MAP",
      wallet: "ZK-WALLET",
      docs: "DOCUMENTATION",
      tech: "TECHNOLOGY",
      roadmap: "ROADMAP",
      faq: "FAQ",
    },
    hero: {
      badge: "DEVCONNECT BUENOS AIRES // NOV 15, 2025",
      title1: "ON NOV 15, 2025,",
      title2: "AT DEVCONNECT,",
      title3: "THE SKY FELL DOWN.",
      subtitle: "WIND, RAIN, EXTREME HEAT IN 24 HOURS. in a summer month",
    },
    critical: {
      title: "While climate collapsed outside, inside we kept optimizing 0.001% APY yields.",
      description:
        "web3 was born to coordinate humanity, not just speculate with it. 99% of dApps today are glorified casinos.",
      highlight: "We have failed the original vision.",
    },
    solution: {
      title1: "WE'RE NOT DEFI.",
      title2: "WE'RE REFI.",
      subtitle: "WE RECLAIM THE PHYSICAL WORLD FROM THE DIGITAL.",
      anonymous: {
        title: "100% ANONYMOUS",
        desc: "Zero Knowledge Proofs protect your identity",
      },
      ai: {
        title: "AI-POWERED",
        desc: "Standards x402 & 8002 validate real impact",
      },
      gasless: {
        title: "GASLESS",
        desc: "Permissionless. Only verifiable impact.",
      },
    },
    cta: {
      button: "PROOF OF CLEANUP // CAPTURE NOW",
      subtitle: "Take a photo. Verify the impact. Earn rewards. All anonymous.",
    },
    stats: {
      heading: "LIVE IMPACT",
      cleanups: "Verified Cleanups",
      agents: "Active AI Agents",
      waste: "Tons Removed",
      privacy: "ZK Privacy",
    },
    cases: {
      heading: "USE CASES",
      a: {
        label: "CASE_A://",
        title: "The Shadow Walker",
        desc: "A cypherpunk who hates KYC. Cleans their neighborhood, earns tokens, keeps identity hidden with ZK-Proofs.",
        footer: "→ Public impact, private identity.",
      },
      b: {
        label: "CASE_B://",
        title: "The AI Auditor",
        desc: "Autonomous ERC-8002 agent crosses satellite data with photos. Detects fraud automatically on-chain.",
        footer: "→ Programmatic trust. Don't trust, verify.",
      },
      c: {
        label: "CASE_C://",
        title: "The Tax Hacker",
        desc: "Corporations buy Impact Certificates. They don't know who cleaned, but they know mathematically that it happened.",
        footer: "→ Verifiable green bonds. Instant compliance.",
      },
    },
    howto: {
      heading: "HOW IT WORKS",
      step1: {
        title: "Capture",
        desc: "Take a photo of the area you cleaned with your smartphone",
      },
      step2: {
        title: "AI Validates",
        desc: "ERC-8002 agents verify your impact against satellite data",
      },
      step3: {
        title: "ZK Protects",
        desc: "Your identity remains 100% anonymous with ZK-STARKs",
      },
      step4: {
        title: "Earn Rewards",
        desc: "Receive tokens + verifiable Impact Certificates on-chain",
      },
    },
    tech: {
      heading: "Technical Stack",
      items: {
        zk: { title: "ZK-STARKs", desc: "Privacy Layer" },
        x402: { title: "x402 Standard", desc: "AI Agent Work" },
        erc: { title: "ERC-8002", desc: "Hybrid AI Logic" },
        circular: { title: "Circular Economy", desc: "Impact → Value" },
      },
    },
    roadmap: {
      heading: "PUBLIC ROADMAP",
      phase1: {
        title: "MODULE 1: MANUAL MVP (DevConnect Hackathon)",
        items: [
          "Human operator receives cleanup photos via simple app",
          "Wallet list for manual reward distribution",
          "Basic validation: photo + location + timestamp",
          "First token distribution to verified cleaners",
          "Deploy Safe Wallet to receive corporate donations",
        ],
      },
      phase2: {
        title: "MODULE 2: 5 AI AGENTS DAO",
        items: [
          "Deploy 5 autonomous AI Agents (ERC-8002)",
          "DAO for governance: agents vote on validations",
          "Satellite data integration for automatic validation",
          "Corporations receive green tax reduction NFTs",
          "Safe Wallet manages funds in decentralized way",
        ],
      },
      phase3: {
        title: "MODULE 3: ZK PRIVACY + GLOBAL SCALE",
        items: [
          "Full ZK-STARKs implementation for anonymity",
          "Impact Certificates marketplace verifiable on-chain",
          "Expansion to 10 Latin American cities",
          "x402 Standard as open protocol",
          "Partnerships with governments and local NGOs",
        ],
      },
    },
    faq: {
      heading: "FREQUENTLY ASKED QUESTIONS",
      q1: {
        q: "Why ZK-Proofs?",
        a: "Because privacy is not optional. If your identity is tied to every action, you're not free. ZK-STARKs prove impact without revealing who you are.",
      },
      q2: {
        q: "How do you prevent fraud?",
        a: "AI Agents (ERC-8002) cross your photos with satellite data and object detection models. You can't fake impact because validation is mathematical.",
      },
      q3: {
        q: "Who pays the rewards?",
        a: "Corporations that need real ESG compliance. They buy verifiable Impact Certificates on-chain. It's circular economy: real impact generates real value.",
      },
      q4: {
        q: "Is this only for crypto-nerds?",
        a: "No. It's an app with a camera. Take photo, earn tokens. Technical complexity is hidden. Impact is visible.",
      },
    },
    whitepaper: {
      title: "ReFi Universe Protocol (ReFiUP)",
      subtitle: "White-Paper Style · Typewriter Font · Black & White · No Scroll · No Buttons",
      subtitle_small: "white paper • common goods • open source powered",
      tagline: '"Like Pokémon Go — but instead of catching Pokémon, you collect trash. Save the world. Have fun."',
      description:
        "A regenerative finance protocol for humanity. OG vibes. Cypher energy. A message from the future disguised as a white paper.",
      energy: "🜁 Powered by Open-Source Humanity",
      alerts: {
        defi: "IF YOU'RE BUILDING DEFI YOU ARE NOT HUMAN 🖕",
        refi: "FXK DEFI — BUILD REFI.",
      },
      powered: {
        heading: "Powered by Open-Source Humanity",
      },
      inspiration: {
        heading: "Inspiration",
        video: '※ Video reference: "Hombre en África"',
      },
      modules: {
        heading: "Core Modules",
        tech: "Tech",
        context: "Context",
        history: "History",
        ux: "UX",
        empty: "(Open to fill later)",
      },
      manifesto: {
        p1: "Climate collapsed on November 15, 2025 at DevConnect Buenos Aires. While outside there was wind, rain, and extreme heat in 24 hours, inside we kept optimizing 0.001% yields. web3 was born to coordinate humanity, not just to speculate.",
        p2: "ReFi Universe Protocol uses Zero Knowledge Proofs to protect your privacy while verifying real impact. AI Agents (x402, ERC-8002) validate each cleanup against satellite data. No more greenwashing. No more KYC. Just math, impact, and rewards.",
        p3: "This is web3 original vision: coordinate humans to solve real problems. No casinos. No speculation. Regeneration.",
      },
      footer: {
        heading: "Footer",
        message: "A message from the future disguised as a white paper. Built with OG Cypher energy.",
      },
    },
    footer: {
      powered: "Powered by ReFi Universe // ZK-STARKs // x402 AI",
      links: {
        docs: "Docs",
        github: "GitHub",
        discord: "Discord",
      },
    },
    home: {
      title: "ReFi Universe Protocol",
      tagline: "Coordinate humans to clean the planet. Verify impact with AI. Protect privacy with ZK.",
      problem: {
        title: "→ Problem",
        desc: "Carbon footprint from human activity is destroying the planet. Current systems can't coordinate cleanup at scale while protecting privacy.",
      },
      solution: {
        title: "→ Solution",
        desc: "Human coordination through incentives. Take photo of cleanup → AI validates impact → Earn rewards. All anonymous with Zero Knowledge Proofs.",
      },
      model: {
        title: "→ Model",
        desc: "5 AI Agents DAO + Safe Wallet. Corporations donate for green tax reduction NFTs. Manual MVP: operator distributes rewards to wallet list. Scales to full automation.",
      },
    },
  },
  pt: {
    nav: {
      camera: "CÂMERA",
      map: "MAPA",
      wallet: "ZK-WALLET",
      docs: "DOCUMENTAÇÃO",
      tech: "TECNOLOGIA",
      roadmap: "ROADMAP",
      faq: "FAQ",
    },
    hero: {
      badge: "DEVCONNECT BUENOS AIRES // 15 NOV, 2025",
      title1: "EM 15 DE NOV DE 2025,",
      title2: "NO DEVCONNECT,",
      title3: "O CÉU CAIU.",
      subtitle: "VENTO, CHUVA, CALOR EXTREMO EM 24 HORAS. em um mês de verão",
    },
    critical: {
      title: "Enquanto o clima colapsava lá fora, dentro continuávamos otimizando rendimentos de 0.001% APY.",
      description:
        "web3 nasceu para coordenar a humanidade, não apenas especular com ela. 99% dos dApps hoje são cassinos glorificados.",
      highlight: "Falhamos com a visão original.",
    },
    solution: {
      title1: "NÃO SOMOS DEFI.",
      title2: "SOMOS REFI.",
      subtitle: "RECUPERAMOS O MUNDO FÍSICO DO DIGITAL.",
      anonymous: {
        title: "100% ANÔNIMO",
        desc: "Zero Knowledge Proofs protegem sua identidade",
      },
      ai: {
        title: "POWERED BY AI",
        desc: "Padrões x402 & 8002 validam impacto real",
      },
      gasless: {
        title: "SEM GAS",
        desc: "Sem permissões. Apenas impacto verificável.",
      },
    },
    cta: {
      button: "PROOF OF CLEANUP // CAPTURE AGORA",
      subtitle: "Tire uma foto. Verifique o impacto. Ganhe recompensas. Tudo anônimo.",
    },
    stats: {
      heading: "IMPACTO AO VIVO",
      cleanups: "Limpezas Verificadas",
      agents: "Agentes AI Ativos",
      waste: "Toneladas Removidas",
      privacy: "Privacidade ZK",
    },
    cases: {
      heading: "CASOS DE USO",
      a: {
        label: "CASO_A://",
        title: "The Shadow Walker",
        desc: "Um cypherpunk que odeia KYC. Limpa seu bairro, ganha tokens, mantém identidade oculta com ZK-Proofs.",
        footer: "→ Impacto público, identidade privada.",
      },
      b: {
        label: "CASO_B://",
        title: "The AI Auditor",
        desc: "Agente autônomo ERC-8002 cruza dados de satélite com fotos. Detecta fraude automaticamente on-chain.",
        footer: "→ Confiança programática. Não confie, verifique.",
      },
      c: {
        label: "CASO_C://",
        title: "The Tax Hacker",
        desc: "Corporações compram Certificados de Impacto. Elas não sabem quem limpou, mas sabem matematicamente que aconteceu.",
        footer: "→ Títulos verdes verificáveis. Compliance instantâneo.",
      },
    },
    howto: {
      heading: "COMO FUNCIONA",
      step1: {
        title: "Capture",
        desc: "Tire uma foto da área que você limpou com seu smartphone",
      },
      step2: {
        title: "AI Valida",
        desc: "Agentes ERC-8002 verificam seu impacto contra dados de satélite",
      },
      step3: {
        title: "ZK Protege",
        desc: "Sua identidade permanece 100% anônima com ZK-STARKs",
      },
      step4: {
        title: "Ganhe Recompensas",
        desc: "Receba tokens + Certificados de Impacto verificáveis on-chain",
      },
    },
    tech: {
      heading: "Stack Técnico",
      items: {
        zk: { title: "ZK-STARKs", desc: "Camada de Privacidade" },
        x402: { title: "Padrão x402", desc: "Trabalho de Agente AI" },
        erc: { title: "ERC-8002", desc: "Lógica AI Híbrida" },
        circular: { title: "Economia Circular", desc: "Impacto → Valor" },
      },
    },
    roadmap: {
      heading: "ROADMAP PÚBLICO",
      phase1: {
        title: "MÓDULO 1: MVP MANUAL (DevConnect Hackathon)",
        items: [
          "Operador humano recebe fotos de limpeza via app simples",
          "Lista de wallets para distribuir recompensas manualmente",
          "Validação básica: foto + localização + timestamp",
          "Primeira distribuição de tokens para limpadores verificados",
          "Deploy de Safe Wallet para receber doações corporativas",
        ],
      },
      phase2: {
        title: "MÓDULO 2: DAO DE 5 AGENTES AI",
        items: [
          "Deploy de 5 Agentes AI autônomos (ERC-8002)",
          "DAO para governança: agentes votam validações",
          "Integração com dados de satélite para validação automática",
          "Corporações recebem NFT de redução de impostos verdes",
          "Safe Wallet gerencia fundos de forma descentralizada",
        ],
      },
      phase3: {
        title: "MÓDULO 3: PRIVACIDADE ZK + ESCALA GLOBAL",
        items: [
          "Implementação completa de ZK-STARKs para anonimato",
          "Marketplace de Certificados de Impacto verificáveis on-chain",
          "Expansão para 10 cidades latino-americanas",
          "Padrão x402 como protocolo aberto",
          "Parcerias com governos e ONGs locais",
        ],
      },
    },
    faq: {
      heading: "PERGUNTAS FREQUENTES",
      q1: {
        q: "Por que ZK-Proofs?",
        a: "Porque privacidade não é opcional. Se sua identidade está ligada a cada ação, você não é livre. ZK-STARKs provam impacto sem revelar quem você é.",
      },
      q2: {
        q: "Como vocês previnem fraude?",
        a: "Agentes AI (ERC-8002) cruzam suas fotos com dados de satélite e modelos de detecção de objetos. Você não pode falsificar impacto porque a validação é matemática.",
      },
      q3: {
        q: "Quem paga as recompensas?",
        a: "Corporações que precisam de compliance ESG real. Elas compram Certificados de Impacto verificáveis on-chain. É economia circular: impacto real gera valor real.",
      },
      q4: {
        q: "Isso é só para crypto-nerds?",
        a: "Não. É um app com câmera. Tire foto, ganhe tokens. A complexidade técnica está oculta. O impacto é visível.",
      },
    },
    whitepaper: {
      title: "ReFi Universe Protocol (ReFiUP)",
      subtitle: "Estilo White-Paper · Fonte Typewriter · Preto & Branco · Sem Scroll · Sem Botões",
      subtitle_small: "white paper • bens comuns • código aberto",
      tagline: '"Como Pokémon Go — mas ao invés de capturar Pokémon, você coleta lixo. Salve o mundo. Divirta-se."',
      description:
        "Um protocolo de finanças regenerativas para a humanidade. Vibes OG. Energia Cypher. Uma mensagem do futuro disfarçada como white paper.",
      energy: "🜁 Powered by Open-Source Humanity",
      alerts: {
        defi: "SE VOCÊ ESTÁ CONSTRUINDO DEFI VOCÊ NÃO É HUMANO 🖕",
        refi: "FXK DEFI — CONSTRUA REFI.",
      },
      powered: {
        heading: "Powered by Open-Source Humanity",
      },
      inspiration: {
        heading: "Inspiração",
        video: '※ Referência de vídeo: "Homem na África"',
      },
      modules: {
        heading: "Módulos Principais",
        tech: "Tech",
        context: "Context",
        history: "History",
        ux: "UX",
        empty: "(Aberto para preencher depois)",
      },
      manifesto: {
        p1: "O clima colapsou em 15 de novembro de 2025 no DevConnect Buenos Aires. Enquanto lá fora havia vento, chuva e calor extremo em 24 horas, dentro continuávamos otimizando rendimentos de 0.001%. web3 nasceu para coordenar a humanidade, não apenas para especular.",
        p2: "ReFi Universe Protocol usa Zero Knowledge Proofs para proteger sua privacidade enquanto verifica impacto real. Agentes AI (x402, ERC-8002) validam cada limpeza contra dados de satélite. Sem mais greenwashing. Sem mais KYC. Apenas matemática, impacto e recompensas.",
        p3: "Esta é a visão original do web3: coordenar humanos para resolver problemas reais. Sem cassinos. Sem especulação. Regeneração.",
      },
      footer: {
        heading: "Rodapé",
        message: "Uma mensagem do futuro disfarçada como white paper. Construído com energia OG Cypher.",
      },
    },
    footer: {
      powered: "Powered by ReFi Universe // ZK-STARKs // x402 AI",
      links: {
        docs: "Docs",
        github: "GitHub",
        discord: "Discord",
      },
    },
    home: {
      title: "Protocolo ReFi Universe",
      tagline: "Coordena humanos para limpar o planeta. Verifica o impacto com IA. Protege a privacidade com ZK.",
      problem: {
        title: "→ Problema",
        desc: "A pegada de carbono da atividade humana está destruindo o planeta. Os sistemas atuais não podem coordenar a limpeza em escala enquanto protegem a privacidade.",
      },
      solution: {
        title: "→ Solução",
        desc: "Coordenação humana através de incentivos. Tire foto da limpeza → IA valida o impacto → Ganhe recompensas. Tudo anônimo com Zero Knowledge Proofs.",
      },
      model: {
        title: "→ Modelo",
        desc: "DAO de 5 Agentes IA + Safe Wallet. Corporações doam para NFTs de redução de impostos verdes. MVP manual: operador distribui recompensas para lista de carteiras. Escala para automação completa.",
      },
    },
  },
}

export function useTranslation(locale: Locale) {
  return translations[locale]
}
