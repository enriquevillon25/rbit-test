import { businessInfo } from "seo/businessInfo";
import type { SeoFaq } from "seo/faqs";
import type { SeoMetadata } from "seo/metadata";
import type { SeoService } from "seo/services";
import { getCanonicalUrl } from "./routes";
import type { SupportedLanguage } from "./languages";

export interface HomeService {
  title: string;
  description: string;
  href: string;
}

export interface HomeTextItem {
  title: string;
  description?: string;
}

export interface LocalServiceInfo {
  title: string;
  eyebrow: string;
  contactTitle: string;
  address: string;
  scheduleLabel: string;
  phoneLabel: string;
  schedule: string;
  phone: string;
  description: string;
  cta: string;
}

export interface HomeHeroContent {
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  location: string;
  image: string;
  imageAlt: string;
  imageCaptionLabel: string;
  imageCaptionText: string;
  trustItems: string[];
}

export interface LandingContent {
  language: SupportedLanguage;
  htmlLang: string;
  locale: string;
  route: string;
  translations: Record<string, unknown>;
  metadata: SeoMetadata;
  keywords: string[];
  services: SeoService[];
  featuredServices: SeoService[];
  faqs: SeoFaq[];
  hero: HomeHeroContent;
  homeServices: HomeService[];
  solvedProblems: HomeTextItem[];
  trustReasons: HomeTextItem[];
  workSteps: HomeTextItem[];
  localServiceInfo: LocalServiceInfo;
  sections: {
    servicesEyebrow: string;
    servicesTitle: string;
    servicesText: string;
    serviceButton: string;
    problemsEyebrow: string;
    problemsTitle: string;
    problemsText: string;
    trustTitle: string;
    processTitle: string;
    faqTitle: string;
    faqSubtitle: string;
    testimonialsTitle: string;
    testimonialsText: string;
    subscribeTitle: string;
    subscribeSubtitle: string;
    subscribeButton: string;
  };
  footer: {
    description: string;
    copyright: string;
    sectionTitle: string;
  };
}

const baseKeywords = {
  es: [
    "reparación ordenadores Barcelona",
    "reparación portátiles Barcelona",
    "servicio técnico informático Barcelona",
    "tienda informática Barcelona",
    "reparación PC Barcelona",
    "reparación MacBook Barcelona",
    "recuperación de datos Barcelona",
    "cambiar SSD portátil Barcelona",
    "ordenador lento Barcelona",
    "portátil no enciende Barcelona",
    "servicio técnico Eixample",
    "tienda informática Eixample",
    "servicio técnico Bailèn Barcelona",
    "reparación portátil cerca de mí",
  ],
  ca: [
    "reparació ordinadors Barcelona",
    "reparació portàtils Barcelona",
    "servei tècnic informàtic Barcelona",
    "botiga informàtica Barcelona",
    "reparació PC Barcelona",
    "reparació MacBook Barcelona",
    "recuperació de dades Barcelona",
    "canviar SSD portàtil Barcelona",
    "ordinador lent Barcelona",
    "portàtil no encén Barcelona",
    "servei tècnic Eixample",
    "botiga informàtica Eixample",
    "servei tècnic Bailèn Barcelona",
    "reparació portàtil a prop meu",
  ],
  en: [
    "computer repair Barcelona",
    "laptop repair Barcelona",
    "IT repair service Barcelona",
    "computer shop Barcelona",
    "PC repair Barcelona",
    "MacBook repair Barcelona",
    "data recovery Barcelona",
    "laptop SSD upgrade Barcelona",
    "slow computer Barcelona",
    "laptop does not turn on Barcelona",
    "IT support Eixample",
    "computer shop Eixample",
    "IT repair Bailen Barcelona",
    "laptop repair near me",
  ],
};

const routeByLanguage: Record<SupportedLanguage, string> = {
  es: "/",
  ca: "/ca/",
  en: "/en/",
};

const sharedBusiness = {
  location: "Carrer de Bailèn, 109 · Eixample · Barcelona",
  address: "Carrer de Bailèn, 109, Local 2 · Eixample · 08009 Barcelona",
  schedule:
    businessInfo.openingHours[0] || "TODO_SCHEDULE: confirmar horario de atención",
  phone:
    businessInfo.contact.telephone ||
    "TODO_PHONE: confirmar teléfono o WhatsApp",
};

const contentByLanguage: Record<SupportedLanguage, LandingContent> = {
  es: {
    language: "es",
    htmlLang: "es-ES",
    locale: "es_ES",
    route: routeByLanguage.es,
    keywords: baseKeywords.es,
    translations: {
      es: "Español",
      ca: "Catalán",
      en: "Inglés",
      "education-landing": {
        header_home: "Inicio",
        header_services: "Servicios",
        header_problems: "Problemas",
        header_local: "Carrer de Bailèn 109",
        header_faq: "Preguntas",
        header_testimonials: "Testimonios",
        header_contact: "Contacto",
        header_language: "Idioma",
        subscribe_title: "¿Necesitas reparar tu ordenador, portátil o móvil?",
        subscribe_subtitle:
          "Escríbenos por WhatsApp y te orientamos con el diagnóstico, la viabilidad y el presupuesto antes de reparar.",
      },
    },
    metadata: {
      title:
        "Reparación de Ordenadores y Portátiles en Barcelona | RBIT Informática",
      description:
        "Servicio técnico informático en Barcelona. Reparación de portátiles, ordenadores, MacBook, móviles, cambio de SSD, instalación de Windows y recuperación de datos en RBIT Informática.",
      canonicalUrl: getCanonicalUrl(businessInfo.url, "es"),
      locale: "es_ES",
      siteName: businessInfo.name,
      businessName: businessInfo.name,
      imageUrl: businessInfo.imageUrl,
      keywords: baseKeywords.es,
    },
    services: [
      {
        title: "Reparación de ordenadores",
        shortTitle: "Reparar ordenadores",
        description:
          "Diagnóstico y reparación de PC de sobremesa, fuentes, placas base, discos, memoria, Windows y problemas de rendimiento.",
        imageAlt: "Reparación de ordenadores en Barcelona",
      },
      {
        title: "Reparación de portátiles",
        shortTitle: "Reparar portátiles",
        description:
          "Reparación de portátiles Windows, cambio de pantalla, batería, teclado, bisagras, conectores y limpieza interna.",
        imageAlt: "Reparación de portátiles en Barcelona",
      },
      {
        title: "Reparación de MacBook",
        shortTitle: "Reparar MacBook",
        description:
          "Servicio técnico para MacBook con problemas de arranque, batería, pantalla, sobrecalentamiento o sistema operativo.",
        imageAlt: "Reparación de MacBook en Barcelona",
      },
      {
        title: "Reparación de móviles",
        shortTitle: "Reparar móviles",
        description:
          "Reparación de móviles, iPhone y dispositivos con pantalla rota, batería agotada, conectores dañados o fallos de software.",
        imageAlt: "Reparación de móviles en Barcelona",
      },
      {
        title: "Recuperación de datos",
        shortTitle: "Recuperación de datos",
        description:
          "Recuperación de archivos en discos duros, SSD, memorias USB y equipos dañados siempre que sea técnicamente viable.",
        imageAlt: "Recuperación de datos en Barcelona",
      },
      {
        title: "Cambio e instalación de SSD",
        shortTitle: "Cambio SSD y RAM",
        description:
          "Sustitución de disco duro por SSD, ampliación de RAM, clonación de datos y optimización para mejorar arranque y rendimiento.",
        imageAlt: "Instalación de SSD en portátil",
      },
    ],
    featuredServices: [],
    faqs: [
      {
        question: "¿Reparáis portátiles en Barcelona?",
        answer:
          "Sí. En RBIT Informática reparamos portátiles en Barcelona con problemas de arranque, pantalla, batería, teclado, disco, ventilación o rendimiento.",
      },
      {
        question: "¿Hacéis diagnóstico antes de reparar?",
        answer:
          "Sí. Revisamos el equipo para explicar la avería, la viabilidad, el presupuesto y el plazo estimado antes de confirmar la reparación.",
      },
      {
        question: "¿Podéis cambiar SSD o ampliar RAM?",
        answer:
          "Sí. Podemos instalar SSD, clonar datos cuando sea posible, ampliar RAM y optimizar portátiles o PC para mejorar el rendimiento.",
      },
      {
        question: "¿Reparáis MacBook?",
        answer:
          "Sí. Realizamos diagnóstico y reparación de MacBook con problemas de arranque, batería, pantalla, sobrecalentamiento, software o almacenamiento.",
      },
      {
        question: "¿Recuperáis datos de discos dañados?",
        answer:
          "Sí. Revisamos discos duros, SSD, memorias USB y equipos dañados para valorar la recuperación de datos siempre que sea técnicamente viable.",
      },
      {
        question: "¿Dónde está RBIT Informática?",
        answer:
          "Estamos en Carrer de Bailèn, 109, Local 2, zona Eixample, 08009 Barcelona.",
      },
    ],
    hero: {
      title: "Reparación de ordenadores y portátiles en Barcelona",
      subtitle:
        "Servicio técnico en Eixample / Bailèn para PC, portátiles, MacBook, móviles, SSD y recuperación de datos.",
      primaryCta: "Solicitar diagnóstico por WhatsApp",
      secondaryCta: "Ver servicios",
      location: sharedBusiness.location,
      image: "/images/education/repair-ordenador.webp",
      imageAlt: "Reparación de ordenadores y portátiles en Barcelona",
      imageCaptionLabel: "Servicio técnico local",
      imageCaptionText:
        "Reparación, mejora y recuperación de equipos en Barcelona.",
      trustItems: ["Diagnóstico claro", "Presupuesto antes de reparar", "Atención local"],
    },
    homeServices: [],
    solvedProblems: [
      { title: "El portátil no enciende" },
      { title: "Ordenador lento" },
      { title: "Pantalla rota" },
      { title: "Batería dañada" },
      { title: "Virus o malware" },
      { title: "Pérdida de datos" },
      { title: "Windows no arranca" },
      { title: "Sobrecalentamiento" },
    ],
    trustReasons: [
      {
        title: "Presupuesto claro antes de reparar",
        description:
          "Revisamos la avería y te explicamos la viabilidad antes de confirmar cualquier reparación.",
      },
      {
        title: "Atención cercana en Barcelona",
        description:
          "Trabajamos con trato directo para clientes de Eixample, Bailèn y otras zonas de Barcelona.",
      },
      {
        title: "Experiencia en portátiles, PC, MacBook y móviles",
        description:
          "Solucionamos incidencias de hardware, software, almacenamiento y rendimiento en distintos dispositivos.",
      },
      {
        title: "Reparaciones, mejoras y recuperación de datos",
        description:
          "Además de reparar, instalamos SSD, ampliamos RAM, reinstalamos Windows y recuperamos archivos.",
      },
    ],
    workSteps: [
      {
        title: "Nos contactas por WhatsApp o visitas el local",
        description: "Nos cuentas qué le ocurre al equipo y coordinamos la revisión.",
      },
      {
        title: "Revisamos el equipo",
        description: "Comprobamos síntomas, componentes y posibles causas de la avería.",
      },
      {
        title: "Te damos diagnóstico y presupuesto",
        description: "Explicamos el problema, el coste estimado y el plazo antes de avanzar.",
      },
      {
        title: "Reparamos y entregamos el equipo probado",
        description: "Realizamos la reparación y validamos que el equipo funcione correctamente.",
      },
    ],
    localServiceInfo: {
      title: "Servicio técnico en Eixample, Barcelona",
      eyebrow: "Servicio técnico local",
      contactTitle: "Datos de contacto",
      address: sharedBusiness.address,
      scheduleLabel: "Horario",
      phoneLabel: "WhatsApp/Teléfono",
      schedule: sharedBusiness.schedule,
      phone: sharedBusiness.phone,
      description:
        "RBIT Informática ofrece servicio técnico informático en Barcelona desde Carrer de Bailèn, en la zona de Eixample. Atendemos reparaciones de ordenadores, portátiles, MacBook, móviles, cambio de SSD, instalación de Windows y recuperación de datos con diagnóstico claro y trato cercano.",
      cta: "Contactar por WhatsApp",
    },
    sections: {
      servicesEyebrow: "Servicios principales",
      servicesTitle:
        "Reparación informática en Barcelona para equipos que necesitas cada día",
      servicesText:
        "Soluciones claras para portátiles, ordenadores, MacBook, móviles, cambio de SSD, ampliaciones y recuperación de datos.",
      serviceButton: "Ver servicio",
      problemsEyebrow: "Problemas frecuentes",
      problemsTitle: "Problemas que solucionamos",
      problemsText:
        "Si tu equipo falla, se calienta, va lento o no arranca, podemos revisarlo y explicarte la mejor solución.",
      trustTitle: "¿Por qué elegir RBIT?",
      processTitle: "Cómo trabajamos",
      faqTitle: "Preguntas frecuentes sobre reparación informática en Barcelona",
      faqSubtitle:
        "Respuestas rápidas para clientes que buscan servicio técnico, reparación de portátiles, recuperación de datos o mejora de rendimiento en Barcelona.",
      testimonialsTitle: "Clientes que confían en RBIT",
      testimonialsText:
        "Opiniones de clientes sobre reparación informática en Barcelona.",
      subscribeTitle: "¿Necesitas reparar tu ordenador, portátil o móvil?",
      subscribeSubtitle:
        "Escríbenos por WhatsApp y te orientamos con el diagnóstico, la viabilidad y el presupuesto antes de reparar.",
      subscribeButton: "Contactar por WhatsApp",
    },
    footer: {
      description: "Soluciones informáticas claras para Barcelona.",
      copyright: "RBIT Servicios 2026",
      sectionTitle: "Empresa",
    },
  },
  ca: {} as LandingContent,
  en: {} as LandingContent,
};

contentByLanguage.es.homeServices = contentByLanguage.es.services.map((service) => ({
  title: service.title,
  description: service.description,
  href: "#contact",
}));
contentByLanguage.es.featuredServices = contentByLanguage.es.services.slice(0, 6);

contentByLanguage.ca = {
  ...contentByLanguage.es,
  language: "ca",
  htmlLang: "ca-ES",
  locale: "ca_ES",
  route: routeByLanguage.ca,
  keywords: baseKeywords.ca,
  translations: {
    es: "Espanyol",
    ca: "Català",
    en: "Anglès",
    "education-landing": {
      header_home: "Inici",
      header_services: "Serveis",
      header_problems: "Problemes",
      header_local: "Carrer de Bailèn 109",
      header_faq: "Dubtes",
      header_testimonials: "Testimonis",
      header_contact: "Contacte",
      header_language: "Idioma",
      subscribe_title: "Necessites reparar el teu ordinador, portàtil o mòbil?",
      subscribe_subtitle:
        "Escriu-nos per WhatsApp i t'orientem amb el diagnòstic, la viabilitat i el pressupost abans de reparar.",
    },
  },
  metadata: {
    title:
      "Reparació d'Ordinadors i Portàtils a Barcelona | RBIT Informàtica",
    description:
      "Servei tècnic informàtic a Barcelona. Reparació de portàtils, ordinadors, MacBook, mòbils, canvi de SSD, instal·lació de Windows i recuperació de dades a RBIT Informàtica.",
    canonicalUrl: getCanonicalUrl(businessInfo.url, "ca"),
    locale: "ca_ES",
    siteName: businessInfo.name,
    businessName: businessInfo.name,
    imageUrl: businessInfo.imageUrl,
    keywords: baseKeywords.ca,
  },
  services: [
    {
      title: "Reparació d'ordinadors",
      shortTitle: "Reparar ordinadors",
      description:
        "Diagnòstic i reparació de PC de sobretaula, fonts, plaques base, discs, memòria, Windows i problemes de rendiment.",
      imageAlt: "Reparació d'ordinadors a Barcelona",
    },
    {
      title: "Reparació de portàtils",
      shortTitle: "Reparar portàtils",
      description:
        "Reparació de portàtils Windows, canvi de pantalla, bateria, teclat, frontisses, connectors i neteja interna.",
      imageAlt: "Reparació de portàtils a Barcelona",
    },
    {
      title: "Reparació de MacBook",
      shortTitle: "Reparar MacBook",
      description:
        "Servei tècnic per a MacBook amb problemes d'arrencada, bateria, pantalla, sobreescalfament o sistema operatiu.",
      imageAlt: "Reparació de MacBook a Barcelona",
    },
    {
      title: "Reparació de mòbils",
      shortTitle: "Reparar mòbils",
      description:
        "Reparació de mòbils, iPhone i dispositius amb pantalla trencada, bateria esgotada, connectors danyats o errors de programari.",
      imageAlt: "Reparació de mòbils a Barcelona",
    },
    {
      title: "Recuperació de dades",
      shortTitle: "Recuperació de dades",
      description:
        "Recuperació d'arxius en discs durs, SSD, memòries USB i equips danyats sempre que sigui tècnicament viable.",
      imageAlt: "Recuperació de dades a Barcelona",
    },
    {
      title: "Canvi i instal·lació de SSD",
      shortTitle: "Canvi SSD i RAM",
      description:
        "Substitució de disc dur per SSD, ampliació de RAM, clonació de dades i optimització per millorar arrencada i rendiment.",
      imageAlt: "Instal·lació de SSD en portàtil",
    },
  ],
  faqs: [
    {
      question: "Repareu portàtils a Barcelona?",
      answer:
        "Sí. A RBIT Informàtica reparem portàtils a Barcelona amb problemes d'arrencada, pantalla, bateria, teclat, disc, ventilació o rendiment.",
    },
    {
      question: "Feu diagnòstic abans de reparar?",
      answer:
        "Sí. Revisem l'equip per explicar l'avaria, la viabilitat, el pressupost i el termini estimat abans de confirmar la reparació.",
    },
    {
      question: "Podeu canviar SSD o ampliar RAM?",
      answer:
        "Sí. Podem instal·lar SSD, clonar dades quan sigui possible, ampliar RAM i optimitzar portàtils o PC per millorar el rendiment.",
    },
    {
      question: "Repareu MacBook?",
      answer:
        "Sí. Fem diagnòstic i reparació de MacBook amb problemes d'arrencada, bateria, pantalla, sobreescalfament, programari o emmagatzematge.",
    },
    {
      question: "Recupereu dades de discs danyats?",
      answer:
        "Sí. Revisem discs durs, SSD, memòries USB i equips danyats per valorar la recuperació de dades sempre que sigui tècnicament viable.",
    },
    {
      question: "On és RBIT Informàtica?",
      answer:
        "Som al Carrer de Bailèn, 109, Local 2, zona Eixample, 08009 Barcelona.",
    },
  ],
  hero: {
    ...contentByLanguage.es.hero,
    title: "Reparació d'ordinadors i portàtils a Barcelona",
    subtitle:
      "Servei tècnic a l'Eixample / Bailèn per a PC, portàtils, MacBook, mòbils, SSD i recuperació de dades.",
    primaryCta: "Sol·licitar diagnòstic per WhatsApp",
    secondaryCta: "Veure serveis",
    imageAlt: "Reparació d'ordinadors i portàtils a Barcelona",
    imageCaptionLabel: "Servei tècnic local",
    imageCaptionText:
      "Reparació, millora i recuperació d'equips a Barcelona.",
    trustItems: ["Diagnòstic clar", "Pressupost abans de reparar", "Atenció local"],
  },
  solvedProblems: [
    { title: "El portàtil no encén" },
    { title: "Ordinador lent" },
    { title: "Pantalla trencada" },
    { title: "Bateria danyada" },
    { title: "Virus o malware" },
    { title: "Pèrdua de dades" },
    { title: "Windows no arrenca" },
    { title: "Sobreescalfament" },
  ],
  trustReasons: [
    {
      title: "Pressupost clar abans de reparar",
      description:
        "Revisem l'avaria i t'expliquem la viabilitat abans de confirmar qualsevol reparació.",
    },
    {
      title: "Atenció propera a Barcelona",
      description:
        "Treballem amb tracte directe per a clients de l'Eixample, Bailèn i altres zones de Barcelona.",
    },
    {
      title: "Experiència en portàtils, PC, MacBook i mòbils",
      description:
        "Solucionem incidències de maquinari, programari, emmagatzematge i rendiment en diferents dispositius.",
    },
    {
      title: "Reparacions, millores i recuperació de dades",
      description:
        "A més de reparar, instal·lem SSD, ampliem RAM, reinstal·lem Windows i recuperem arxius.",
    },
  ],
  workSteps: [
    {
      title: "Ens contactes per WhatsApp o visites el local",
      description: "Ens expliques què li passa a l'equip i coordinem la revisió.",
    },
    {
      title: "Revisem l'equip",
      description: "Comprovem símptomes, components i possibles causes de l'avaria.",
    },
    {
      title: "Et donem diagnòstic i pressupost",
      description: "Expliquem el problema, el cost estimat i el termini abans d'avançar.",
    },
    {
      title: "Reparem i entreguem l'equip provat",
      description: "Fem la reparació i validem que l'equip funcioni correctament.",
    },
  ],
  localServiceInfo: {
    ...contentByLanguage.es.localServiceInfo,
    title: "Servei tècnic a l'Eixample, Barcelona",
    eyebrow: "Servei tècnic local",
    contactTitle: "Dades de contacte",
    scheduleLabel: "Horari",
    phoneLabel: "WhatsApp/Telèfon",
    description:
      "RBIT Informàtica ofereix servei tècnic informàtic a Barcelona des del Carrer de Bailèn, a la zona de l'Eixample. Atenem reparacions d'ordinadors, portàtils, MacBook, mòbils, canvi de SSD, instal·lació de Windows i recuperació de dades amb diagnòstic clar i tracte proper.",
    cta: "Contactar per WhatsApp",
  },
  sections: {
    servicesEyebrow: "Serveis principals",
    servicesTitle:
      "Reparació informàtica a Barcelona per als equips que necessites cada dia",
    servicesText:
      "Solucions clares per a portàtils, ordinadors, MacBook, mòbils, canvi de SSD, ampliacions i recuperació de dades.",
    serviceButton: "Veure servei",
    problemsEyebrow: "Problemes freqüents",
    problemsTitle: "Problemes que solucionem",
    problemsText:
      "Si el teu equip falla, s'escalfa, va lent o no arrenca, podem revisar-lo i explicar-te la millor solució.",
    trustTitle: "Per què triar RBIT?",
    processTitle: "Com treballem",
    faqTitle: "Preguntes freqüents sobre reparació informàtica a Barcelona",
    faqSubtitle:
      "Respostes ràpides per a clients que busquen servei tècnic, reparació de portàtils, recuperació de dades o millora de rendiment a Barcelona.",
    testimonialsTitle: "Clients que confien en RBIT",
    testimonialsText:
      "Opinions de clients sobre reparació informàtica a Barcelona.",
    subscribeTitle: "Necessites reparar el teu ordinador, portàtil o mòbil?",
    subscribeSubtitle:
      "Escriu-nos per WhatsApp i t'orientem amb el diagnòstic, la viabilitat i el pressupost abans de reparar.",
    subscribeButton: "Contactar per WhatsApp",
  },
  footer: {
    description: "Solucions informàtiques clares per a Barcelona.",
    copyright: "RBIT Serveis 2026",
    sectionTitle: "Empresa",
  },
};

contentByLanguage.ca.homeServices = contentByLanguage.ca.services.map((service) => ({
  title: service.title,
  description: service.description,
  href: "#contact",
}));
contentByLanguage.ca.featuredServices = contentByLanguage.ca.services.slice(0, 6);

contentByLanguage.en = {
  ...contentByLanguage.es,
  language: "en",
  htmlLang: "en",
  locale: "en_US",
  route: routeByLanguage.en,
  keywords: baseKeywords.en,
  translations: {
    es: "Spanish",
    ca: "Catalan",
    en: "English",
    "education-landing": {
      header_home: "Home",
      header_services: "Services",
      header_problems: "Problems",
      header_local: "Carrer de Bailèn 109",
      header_faq: "Questions",
      header_testimonials: "Reviews",
      header_contact: "Contact",
      header_language: "Language",
      subscribe_title: "Need to repair your computer, laptop or phone?",
      subscribe_subtitle:
        "Message us on WhatsApp and we will guide you through diagnosis, feasibility and budget before repair.",
    },
  },
  metadata: {
    title: "Computer and Laptop Repair in Barcelona | RBIT Informática",
    description:
      "IT repair service in Barcelona. Laptop, desktop, MacBook and mobile repair, SSD upgrades, Windows installation and data recovery at RBIT Informática.",
    canonicalUrl: getCanonicalUrl(businessInfo.url, "en"),
    locale: "en_US",
    siteName: businessInfo.name,
    businessName: businessInfo.name,
    imageUrl: businessInfo.imageUrl,
    keywords: baseKeywords.en,
  },
  services: [
    {
      title: "Computer repair",
      shortTitle: "Computer repair",
      description:
        "Diagnosis and repair of desktop PCs, power supplies, motherboards, drives, memory, Windows and performance issues.",
      imageAlt: "Computer repair in Barcelona",
    },
    {
      title: "Laptop repair",
      shortTitle: "Laptop repair",
      description:
        "Windows laptop repair, screen replacement, battery, keyboard, hinges, connectors and internal cleaning.",
      imageAlt: "Laptop repair in Barcelona",
    },
    {
      title: "MacBook repair",
      shortTitle: "MacBook repair",
      description:
        "Technical service for MacBook devices with startup, battery, screen, overheating or operating system problems.",
      imageAlt: "MacBook repair in Barcelona",
    },
    {
      title: "Mobile phone repair",
      shortTitle: "Phone repair",
      description:
        "Repair for mobile phones, iPhone and devices with broken screens, worn batteries, damaged connectors or software issues.",
      imageAlt: "Mobile phone repair in Barcelona",
    },
    {
      title: "Data recovery",
      shortTitle: "Data recovery",
      description:
        "File recovery from hard drives, SSDs, USB drives and damaged computers whenever technically viable.",
      imageAlt: "Data recovery in Barcelona",
    },
    {
      title: "SSD upgrade and installation",
      shortTitle: "SSD and RAM upgrade",
      description:
        "Hard drive replacement with SSD, RAM upgrades, data cloning and optimization to improve startup and performance.",
      imageAlt: "Laptop SSD installation",
    },
  ],
  faqs: [
    {
      question: "Do you repair laptops in Barcelona?",
      answer:
        "Yes. At RBIT Informática we repair laptops in Barcelona with startup, screen, battery, keyboard, disk, ventilation or performance issues.",
    },
    {
      question: "Do you diagnose the device before repairing it?",
      answer:
        "Yes. We inspect the device to explain the fault, feasibility, estimate and expected turnaround before confirming the repair.",
    },
    {
      question: "Can you replace an SSD or upgrade RAM?",
      answer:
        "Yes. We can install SSDs, clone data when possible, upgrade RAM and optimize laptops or PCs for better performance.",
    },
    {
      question: "Do you repair MacBooks?",
      answer:
        "Yes. We diagnose and repair MacBooks with startup, battery, screen, overheating, software or storage problems.",
    },
    {
      question: "Do you recover data from damaged drives?",
      answer:
        "Yes. We inspect hard drives, SSDs, USB drives and damaged computers to assess data recovery whenever technically viable.",
    },
    {
      question: "Where is RBIT Informática located?",
      answer:
        "We are at Carrer de Bailèn, 109, Local 2, Eixample area, 08009 Barcelona.",
    },
  ],
  hero: {
    ...contentByLanguage.es.hero,
    title: "Computer and laptop repair in Barcelona",
    subtitle:
      "IT repair service in Eixample / Bailèn for PCs, laptops, MacBook, mobiles, SSD upgrades and data recovery.",
    primaryCta: "Request diagnosis on WhatsApp",
    secondaryCta: "View services",
    imageAlt: "Computer and laptop repair in Barcelona",
    imageCaptionLabel: "Local IT repair service",
    imageCaptionText:
      "Repair, upgrades and data recovery for devices in Barcelona.",
    trustItems: ["Clear diagnosis", "Estimate before repair", "Local support"],
  },
  solvedProblems: [
    { title: "Laptop does not turn on" },
    { title: "Slow computer" },
    { title: "Broken screen" },
    { title: "Damaged battery" },
    { title: "Virus or malware" },
    { title: "Data loss" },
    { title: "Windows will not boot" },
    { title: "Overheating" },
  ],
  trustReasons: [
    {
      title: "Clear estimate before repair",
      description:
        "We review the fault and explain the feasibility before confirming any repair.",
    },
    {
      title: "Close support in Barcelona",
      description:
        "We work directly with customers in Eixample, Bailèn and other Barcelona areas.",
    },
    {
      title: "Experience with laptops, PCs, MacBook and phones",
      description:
        "We solve hardware, software, storage and performance issues across different devices.",
    },
    {
      title: "Repairs, upgrades and data recovery",
      description:
        "Beyond repair, we install SSDs, upgrade RAM, reinstall Windows and recover files.",
    },
  ],
  workSteps: [
    {
      title: "Contact us on WhatsApp or visit the shop",
      description: "Tell us what is happening and we arrange the inspection.",
    },
    {
      title: "We inspect the device",
      description: "We check symptoms, components and possible causes of the fault.",
    },
    {
      title: "You receive diagnosis and estimate",
      description: "We explain the problem, estimated cost and timing before moving forward.",
    },
    {
      title: "We repair and deliver it tested",
      description: "We complete the repair and verify the device works correctly.",
    },
  ],
  localServiceInfo: {
    ...contentByLanguage.es.localServiceInfo,
    title: "IT repair service in Eixample, Barcelona",
    eyebrow: "Local IT repair service",
    contactTitle: "Contact details",
    scheduleLabel: "Opening hours",
    phoneLabel: "WhatsApp/Phone",
    description:
      "RBIT Informática provides IT repair service in Barcelona from Carrer de Bailèn, in the Eixample area. We handle computer, laptop, MacBook and mobile repairs, SSD upgrades, Windows installation and data recovery with clear diagnosis and close support.",
    cta: "Contact on WhatsApp",
  },
  sections: {
    servicesEyebrow: "Main services",
    servicesTitle: "IT repair in Barcelona for the devices you use every day",
    servicesText:
      "Clear solutions for laptops, desktops, MacBook, mobiles, SSD upgrades, expansions and data recovery.",
    serviceButton: "View service",
    problemsEyebrow: "Common problems",
    problemsTitle: "Problems we solve",
    problemsText:
      "If your device fails, overheats, runs slowly or will not boot, we can inspect it and explain the best solution.",
    trustTitle: "Why choose RBIT?",
    processTitle: "How we work",
    faqTitle: "Frequently asked questions about IT repair in Barcelona",
    faqSubtitle:
      "Quick answers for customers looking for technical service, laptop repair, data recovery or performance upgrades in Barcelona.",
    testimonialsTitle: "Customers who trust RBIT",
    testimonialsText: "Customer opinions about IT repair in Barcelona.",
    subscribeTitle: "Need to repair your computer, laptop or phone?",
    subscribeSubtitle:
      "Message us on WhatsApp and we will guide you through diagnosis, feasibility and budget before repair.",
    subscribeButton: "Contact on WhatsApp",
  },
  footer: {
    description: "Clear IT repair solutions for Barcelona.",
    copyright: "RBIT Services 2026",
    sectionTitle: "Company",
  },
};

contentByLanguage.en.homeServices = contentByLanguage.en.services.map((service) => ({
  title: service.title,
  description: service.description,
  href: "#contact",
}));
contentByLanguage.en.featuredServices = contentByLanguage.en.services.slice(0, 6);

export function getLocalizedContent(language: SupportedLanguage): LandingContent {
  return contentByLanguage[language] || contentByLanguage.es;
}

export const defaultLandingContent = contentByLanguage.es;
