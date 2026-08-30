import { businessInfo } from "./businessInfo";

export interface ServicePageFaq {
  question: string;
  answer: string;
}

export interface ServicePageContentBlock {
  title: string;
  body: string;
}

export interface ServicePageData {
  slug: string;
  serviceName: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string;
  primaryKeyword: string;
  relatedKeywords: string[];
  image: string;
  imageAlt: string;
  benefits: string[];
  problems: string[];
  contentBlocks: ServicePageContentBlock[];
  faqs: ServicePageFaq[];
}

const address = "Carrer de Bailèn, 109, Local 2, Eixample, 08009 Barcelona";

export const servicePages: ServicePageData[] = [
  {
    slug: "reparacion-ordenadores-barcelona",
    serviceName: "Reparación de ordenadores",
    title: "Reparación de Ordenadores en Barcelona | RBIT Informática",
    description:
      "Reparación de ordenadores en Barcelona para PC de sobremesa, equipos lentos, errores de Windows, fallos de hardware y mantenimiento informático en Eixample.",
    h1: "Reparación de ordenadores en Barcelona",
    eyebrow: "Servicio técnico de PC en Eixample",
    intro:
      "En RBIT Informática revisamos y reparamos ordenadores de sobremesa en Barcelona con diagnóstico claro, explicación sencilla de la avería y presupuesto antes de avanzar.",
    primaryKeyword: "reparación ordenadores Barcelona",
    relatedKeywords: [
      "reparación PC Barcelona",
      "ordenador lento Barcelona",
      "servicio técnico informático Barcelona",
      "tienda informática Eixample",
    ],
    image: "/images/computer.jpg",
    imageAlt: "Reparación de ordenadores en Barcelona",
    benefits: [
      "Diagnóstico de hardware, Windows y rendimiento",
      "Presupuesto claro antes de reparar",
      "Atención local en Eixample / Bailèn",
      "Soporte para particulares y pequeños negocios",
    ],
    problems: [
      "El ordenador no arranca",
      "Va muy lento",
      "Se reinicia o se apaga solo",
      "Errores de Windows",
      "Disco duro dañado",
      "Virus o malware",
    ],
    contentBlocks: [
      {
        title: "Diagnóstico real antes de reparar",
        body:
          "Comprobamos fuente, placa base, memoria, disco, temperatura, sistema operativo y síntomas de uso para localizar el origen del problema sin cambiar piezas innecesarias.",
      },
      {
        title: "Reparación y mejora de rendimiento",
        body:
          "Además de resolver averías, podemos optimizar el equipo, sustituir discos dañados, instalar SSD, ampliar RAM o reinstalar Windows cuando sea la solución más adecuada.",
      },
    ],
    faqs: [
      {
        question: "¿Reparáis ordenadores de sobremesa en Barcelona?",
        answer:
          "Sí. Reparamos PC de sobremesa en Barcelona con fallos de arranque, lentitud, errores de Windows, problemas de disco, memoria, fuente o placa base.",
      },
      {
        question: "¿Puedo pedir presupuesto antes de reparar?",
        answer:
          "Sí. Revisamos el equipo y te explicamos diagnóstico, viabilidad, coste estimado y plazo antes de confirmar la reparación.",
      },
      {
        question: "¿Dónde puedo llevar mi ordenador?",
        answer: `Puedes traerlo a RBIT Informática en ${address}.`,
      },
    ],
  },
  {
    slug: "reparacion-portatiles-barcelona",
    serviceName: "Reparación de portátiles",
    title: "Reparación de Portátiles en Barcelona | RBIT Informática",
    description:
      "Reparación de portátiles en Barcelona: pantalla, batería, teclado, bisagras, conectores, sobrecalentamiento, SSD, RAM y fallos de arranque.",
    h1: "Reparación de portátiles en Barcelona",
    eyebrow: "Portátiles Windows y equipos de trabajo",
    intro:
      "Reparamos portátiles en Barcelona para usuarios que necesitan recuperar su equipo de trabajo, estudio o negocio con una revisión clara y soluciones adaptadas.",
    primaryKeyword: "reparación portátiles Barcelona",
    relatedKeywords: [
      "reparación portátil cerca de mí",
      "portátil no enciende Barcelona",
      "cambiar SSD portátil Barcelona",
      "servicio técnico Eixample",
    ],
    image: "/images/laptop.jpg",
    imageAlt: "Reparación de portátiles en Barcelona",
    benefits: [
      "Revisión de pantalla, batería, teclado y conectores",
      "Soluciones para portátiles lentos o que no encienden",
      "Cambio de SSD, ampliación de RAM y limpieza interna",
      "Diagnóstico transparente antes de reparar",
    ],
    problems: [
      "Portátil no enciende",
      "Pantalla rota",
      "Batería dañada",
      "Teclado o bisagras dañadas",
      "Sobrecalentamiento",
      "Windows no arranca",
    ],
    contentBlocks: [
      {
        title: "Revisión completa del portátil",
        body:
          "Analizamos los síntomas, el cargador, la placa, el disco, la memoria, la pantalla, la batería y el sistema para detectar si conviene reparar, mejorar o recuperar datos.",
      },
      {
        title: "Reparación orientada al uso diario",
        body:
          "Buscamos que el portátil vuelva a ser fiable para trabajar, estudiar o gestionar tu negocio, priorizando soluciones proporcionadas al valor del equipo.",
      },
    ],
    faqs: [
      {
        question: "¿Reparáis portátiles que no encienden?",
        answer:
          "Sí. Revisamos cargador, batería, placa, disco, memoria y otros componentes para detectar por qué el portátil no enciende.",
      },
      {
        question: "¿Podéis cambiar pantalla o batería?",
        answer:
          "Sí. Revisamos disponibilidad de repuesto y viabilidad antes de confirmar el cambio de pantalla, batería, teclado, bisagras o conectores.",
      },
      {
        question: "¿Dónde está el servicio técnico?",
        answer: `Estamos en ${address}, zona Eixample / Bailèn.`,
      },
    ],
  },
  {
    slug: "reparacion-macbook-barcelona",
    serviceName: "Reparación de MacBook",
    title: "Reparación MacBook en Barcelona | RBIT Informática",
    description:
      "Servicio técnico para reparación de MacBook en Barcelona: batería, pantalla, arranque, sistema operativo, almacenamiento y recuperación de datos.",
    h1: "Reparación MacBook en Barcelona",
    eyebrow: "Servicio técnico MacBook",
    intro:
      "Revisamos MacBook con problemas de arranque, batería, pantalla, almacenamiento, sistema operativo o rendimiento para valorar la reparación más adecuada.",
    primaryKeyword: "reparación MacBook Barcelona",
    relatedKeywords: [
      "servicio técnico MacBook Barcelona",
      "MacBook no enciende Barcelona",
      "recuperación datos MacBook Barcelona",
      "reparación portátiles Barcelona",
    ],
    image: "/images/macbooks.jpeg",
    imageAlt: "Reparación de MacBook en Barcelona",
    benefits: [
      "Diagnóstico de arranque, batería y almacenamiento",
      "Revisión de sistema y rendimiento",
      "Recuperación de datos cuando sea viable",
      "Presupuesto antes de confirmar la reparación",
    ],
    problems: [
      "MacBook no arranca",
      "Batería degradada",
      "Pantalla con fallos",
      "Sistema lento",
      "Problemas de almacenamiento",
      "Pérdida de datos",
    ],
    contentBlocks: [
      {
        title: "Diagnóstico claro para MacBook",
        body:
          "Comprobamos síntomas de hardware y software para explicar si el problema está en batería, pantalla, almacenamiento, sistema o componentes internos.",
      },
      {
        title: "Soluciones proporcionadas al equipo",
        body:
          "Te orientamos sobre reparación, mantenimiento, reinstalación del sistema o recuperación de datos según el estado del MacBook y el coste estimado.",
      },
    ],
    faqs: [
      {
        question: "¿Reparáis MacBook en Barcelona?",
        answer:
          "Sí. Diagnosticamos MacBook con problemas de arranque, batería, pantalla, software, almacenamiento, sobrecalentamiento o pérdida de datos.",
      },
      {
        question: "¿Podéis recuperar datos de un MacBook?",
        answer:
          "Sí, valoramos la recuperación de datos siempre que el estado del disco o almacenamiento lo permita técnicamente.",
      },
      {
        question: "¿Dais presupuesto antes de reparar?",
        answer:
          "Sí. Te explicamos la avería, la viabilidad y el presupuesto estimado antes de avanzar.",
      },
    ],
  },
  {
    slug: "recuperacion-datos-barcelona",
    serviceName: "Recuperación de datos",
    title: "Recuperación de Datos en Barcelona | RBIT Informática",
    description:
      "Recuperación de datos en Barcelona para discos duros, SSD, memorias USB, ordenadores y portátiles dañados. Diagnóstico y viabilidad antes de actuar.",
    h1: "Recuperación de datos en Barcelona",
    eyebrow: "Discos duros, SSD y equipos dañados",
    intro:
      "Si has perdido archivos importantes, revisamos el soporte o equipo dañado para valorar la viabilidad de recuperación de datos con un diagnóstico prudente.",
    primaryKeyword: "recuperación de datos Barcelona",
    relatedKeywords: [
      "recuperar datos disco duro Barcelona",
      "recuperación SSD Barcelona",
      "recuperar archivos ordenador Barcelona",
      "disco duro dañado Barcelona",
    ],
    image: "/images/education/repair-ordenador.webp",
    imageAlt: "Recuperación de datos en Barcelona",
    benefits: [
      "Evaluación de viabilidad antes de intervenir",
      "Revisión de discos duros, SSD y USB",
      "Soporte para portátiles y ordenadores dañados",
      "Orientación clara sobre riesgos y opciones",
    ],
    problems: [
      "Disco no reconocido",
      "Archivos borrados",
      "Windows no arranca",
      "SSD con fallos",
      "USB dañada",
      "Equipo mojado o golpeado",
    ],
    contentBlocks: [
      {
        title: "Primero protegemos la información",
        body:
          "En recuperación de datos es importante evitar manipulaciones innecesarias. Revisamos el caso y te explicamos las opciones antes de hacer cambios que puedan reducir la viabilidad.",
      },
      {
        title: "Recuperación según el tipo de avería",
        body:
          "Cada caso depende del estado físico y lógico del soporte. Podemos valorar discos, SSD, memorias USB y equipos que no arrancan para intentar recuperar archivos importantes.",
      },
    ],
    faqs: [
      {
        question: "¿Recuperáis datos de discos duros dañados?",
        answer:
          "Sí. Revisamos discos duros, SSD, memorias USB y equipos dañados para valorar si la recuperación es técnicamente viable.",
      },
      {
        question: "¿Qué hago si mi disco no aparece?",
        answer:
          "Evita seguir forzando el disco o instalar programas al azar. Lo mejor es revisar el soporte para reducir el riesgo de empeorar la pérdida de datos.",
      },
      {
        question: "¿La recuperación está garantizada?",
        answer:
          "No siempre es posible garantizarla. Primero valoramos el estado del soporte y explicamos la viabilidad antes de avanzar.",
      },
    ],
  },
  {
    slug: "reparacion-moviles-barcelona",
    serviceName: "Reparación de móviles",
    title: "Reparación de Móviles en Barcelona | RBIT Informática",
    description:
      "Reparación de móviles en Barcelona para pantalla rota, batería dañada, conectores, iPhone, fallos de software y recuperación de datos en Eixample.",
    h1: "Reparación de móviles en Barcelona",
    eyebrow: "Móviles, iPhone y dispositivos",
    intro:
      "Revisamos móviles e iPhone con pantalla rota, batería dañada, problemas de carga, fallos de software o pérdida de datos para valorar la reparación más adecuada.",
    primaryKeyword: "reparación móviles Barcelona",
    relatedKeywords: [
      "reparación iPhone Barcelona",
      "cambiar batería móvil Barcelona",
      "pantalla rota móvil Barcelona",
      "servicio técnico móvil Eixample",
    ],
    image: "/images/moviles.jpg",
    imageAlt: "Reparación de móviles en Barcelona",
    benefits: [
      "Revisión de pantalla, batería y conectores",
      "Diagnóstico de fallos de software",
      "Soporte para iPhone y otros móviles",
      "Presupuesto antes de confirmar la reparación",
    ],
    problems: [
      "Pantalla rota",
      "Batería agotada",
      "Conector de carga defectuoso",
      "Móvil no enciende",
      "Fallos de software",
      "Pérdida de datos",
    ],
    contentBlocks: [
      {
        title: "Diagnóstico antes de cambiar piezas",
        body:
          "Comprobamos el síntoma real del móvil para valorar si hace falta reparar pantalla, batería, conector, software o recuperar información.",
      },
      {
        title: "Reparación con explicación clara",
        body:
          "Te indicamos la viabilidad, disponibilidad de repuestos y presupuesto estimado antes de confirmar cualquier reparación.",
      },
    ],
    faqs: [
      {
        question: "¿Reparáis móviles e iPhone en Barcelona?",
        answer:
          "Sí. Revisamos móviles e iPhone con pantalla rota, batería dañada, conector de carga defectuoso, fallos de software o pérdida de datos.",
      },
      {
        question: "¿Dais presupuesto antes de reparar?",
        answer:
          "Sí. Primero revisamos el dispositivo y explicamos la viabilidad y el coste estimado.",
      },
      {
        question: "¿Dónde puedo llevar mi móvil?",
        answer: `Puedes traerlo a RBIT Informática en ${address}.`,
      },
    ],
  },
  {
    slug: "cambio-ssd-portatil-barcelona",
    serviceName: "Cambio e instalación de SSD",
    title: "Cambio de SSD en Portátil Barcelona | RBIT Informática",
    description:
      "Cambio e instalación de SSD en portátiles y PC en Barcelona. Clonación de datos, ampliación de RAM y mejora de rendimiento en Eixample.",
    h1: "Cambio de SSD en portátil en Barcelona",
    eyebrow: "Mejora de rendimiento",
    intro:
      "Si tu portátil u ordenador va lento, instalar un SSD y ampliar RAM puede mejorar mucho el arranque, la carga de programas y la estabilidad del equipo.",
    primaryKeyword: "cambiar SSD portátil Barcelona",
    relatedKeywords: [
      "instalación SSD Barcelona",
      "ampliación RAM Barcelona",
      "ordenador lento Barcelona",
      "clonación de discos Barcelona",
    ],
    image: "/images/laptop.jpg",
    imageAlt: "Instalación de SSD en portátil en Barcelona",
    benefits: [
      "Sustitución de disco duro por SSD",
      "Clonación de datos cuando sea posible",
      "Ampliación de RAM compatible",
      "Optimización para mejorar arranque y rendimiento",
    ],
    problems: [
      "Portátil lento",
      "Arranque muy largo",
      "Disco duro antiguo",
      "Poca memoria RAM",
      "Programas tardan en abrir",
      "Windows se bloquea",
    ],
    contentBlocks: [
      {
        title: "Una mejora práctica para equipos lentos",
        body:
          "En muchos portátiles, cambiar el disco duro mecánico por un SSD es una de las mejoras más efectivas para recuperar velocidad sin comprar un equipo nuevo.",
      },
      {
        title: "Clonación y configuración",
        body:
          "Cuando el disco original está en buen estado, podemos valorar la clonación para conservar sistema y archivos. Si no conviene, planteamos instalación limpia y recuperación de datos.",
      },
    ],
    faqs: [
      {
        question: "¿Podéis cambiar el disco duro por un SSD?",
        answer:
          "Sí. Revisamos compatibilidad, estado del disco actual y opciones de clonación o instalación limpia antes de hacer el cambio.",
      },
      {
        question: "¿Se pueden conservar mis archivos?",
        answer:
          "En muchos casos sí, mediante clonación o copia de datos. Depende del estado del disco original.",
      },
      {
        question: "¿También ampliáis RAM?",
        answer:
          "Sí. Revisamos el modelo del equipo y la memoria compatible para valorar la ampliación.",
      },
    ],
  },
  {
    slug: "servicio-tecnico-informatico-eixample",
    serviceName: "Servicio técnico informático en Eixample",
    title: "Servicio Técnico Informático en Eixample | RBIT Informática",
    description:
      "Servicio técnico informático en Eixample, Barcelona. Reparación de ordenadores, portátiles, MacBook, móviles, SSD, Windows y recuperación de datos.",
    h1: "Servicio técnico informático en Eixample",
    eyebrow: "Taller local en Carrer de Bailèn",
    intro:
      "RBIT Informática ofrece servicio técnico informático en Eixample para particulares y empresas que necesitan diagnóstico, reparación o mejora de sus equipos.",
    primaryKeyword: "servicio técnico Eixample",
    relatedKeywords: [
      "servicio técnico informático Barcelona",
      "servicio técnico Bailèn Barcelona",
      "tienda informática Eixample",
      "reparación portátil cerca de mí",
    ],
    image: "/images/education/repair-ordenador.webp",
    imageAlt: "Servicio técnico informático en Eixample",
    benefits: [
      "Atención local en Carrer de Bailèn",
      "Reparación de PC, portátiles, MacBook y móviles",
      "Diagnóstico y presupuesto antes de reparar",
      "Soporte para hardware, software y datos",
    ],
    problems: [
      "Equipo lento",
      "Portátil no arranca",
      "Problemas de Windows",
      "Pérdida de datos",
      "Móvil con pantalla o batería dañada",
      "Red WiFi o periféricos",
    ],
    contentBlocks: [
      {
        title: "Soporte informático cerca de Bailèn",
        body:
          "Estamos en Eixample, cerca de Carrer de Bailèn, para atender reparaciones y consultas informáticas con trato cercano y explicaciones claras.",
      },
      {
        title: "Soluciones para casa y negocio",
        body:
          "Podemos revisar ordenadores, portátiles, MacBook, móviles, redes, Windows, discos y rendimiento para elegir una solución proporcional a cada caso.",
      },
    ],
    faqs: [
      {
        question: "¿RBIT está en Eixample?",
        answer: `Sí. Estamos en ${address}.`,
      },
      {
        question: "¿Atendéis empresas y particulares?",
        answer:
          "Sí. Ayudamos tanto a particulares como a pequeños negocios con reparación, mantenimiento y soporte informático.",
      },
      {
        question: "¿Puedo contactar por WhatsApp?",
        answer:
          "Sí. Puedes pedir orientación inicial por WhatsApp antes de traer el equipo o visitar el local.",
      },
    ],
  },
  {
    slug: "tienda-informatica-eixample",
    serviceName: "Tienda informática en Eixample",
    title: "Tienda Informática en Eixample Barcelona | RBIT Informática",
    description:
      "Tienda informática en Eixample, Barcelona, con servicio técnico, reparación de ordenadores, portátiles, MacBook, móviles, SSD y recuperación de datos.",
    h1: "Tienda informática en Eixample, Barcelona",
    eyebrow: "RBIT Informática en Bailèn",
    intro:
      "En RBIT Informática combinamos atención de tienda informática y servicio técnico para revisar, reparar y mejorar equipos en Barcelona.",
    primaryKeyword: "tienda informática Eixample",
    relatedKeywords: [
      "tienda informática Barcelona",
      "servicio técnico informático Barcelona",
      "reparación ordenadores Barcelona",
      "servicio técnico Bailèn Barcelona",
    ],
    image: "/images/logo-rbit.jpg",
    imageAlt: "Tienda informática RBIT en Eixample Barcelona",
    benefits: [
      "Atención cercana en tienda",
      "Revisión de ordenadores, portátiles y móviles",
      "Mejoras de SSD, RAM y sistema",
      "Servicio técnico local en Barcelona",
    ],
    problems: [
      "Necesitas diagnóstico",
      "Equipo lento",
      "No sabes si reparar o cambiar",
      "Quieres mejorar rendimiento",
      "Has perdido datos",
      "Necesitas soporte informático",
    ],
    contentBlocks: [
      {
        title: "Atención técnica con enfoque práctico",
        body:
          "Te orientamos sobre reparación, mantenimiento, ampliación o recuperación de datos para tomar una decisión clara antes de invertir en el equipo.",
      },
      {
        title: "Tienda y servicio técnico en Barcelona",
        body:
          "Desde Eixample atendemos incidencias informáticas habituales en ordenadores, portátiles, MacBook, móviles, discos, Windows y redes.",
      },
    ],
    faqs: [
      {
        question: "¿Dónde está la tienda informática?",
        answer: `RBIT Informática está en ${address}.`,
      },
      {
        question: "¿Puedo pedir diagnóstico?",
        answer:
          "Sí. Revisamos el equipo y explicamos la avería, opciones y presupuesto antes de reparar.",
      },
      {
        question: "¿Reparáis portátiles y ordenadores?",
        answer:
          "Sí. Reparamos ordenadores, portátiles, MacBook, móviles y también hacemos mejoras de SSD, RAM y recuperación de datos.",
      },
    ],
  },
];

export const servicePageSlugs = servicePages.map((service) => service.slug);

export function getServicePageBySlug(slug: string): ServicePageData | undefined {
  return servicePages.find((service) => service.slug === slug);
}

export function getServicePageUrl(service: ServicePageData): string {
  return new URL(`/${service.slug}/`, businessInfo.url).toString();
}

export function getServicePageByName(serviceName: string): ServicePageData | undefined {
  return servicePages.find((service) => service.serviceName === serviceName);
}
