import { businessInfo } from "seo/businessInfo";

export interface HomeService {
  title: string;
  description: string;
  href: string;
}

export interface HomeTextItem {
  title: string;
  description?: string;
}

export const homeHero = {
  title: "Reparación de ordenadores y portátiles en Barcelona",
  subtitle:
    "Servicio técnico en Eixample / Bailèn para PC, portátiles, MacBook, móviles, SSD y recuperación de datos.",
  primaryCta: "Solicitar diagnóstico por WhatsApp",
  secondaryCta: "Ver servicios",
  location: "Carrer de Bailèn, 109 · Eixample · Barcelona",
  image: "/images/education/repair-ordenador.webp",
  imageAlt: "Reparación de ordenadores y portátiles en Barcelona",
  trustItems: ["Diagnóstico claro", "Presupuesto antes de reparar", "Atención local"],
};

export const homeServices: HomeService[] = [
  {
    title: "Reparación de portátiles",
    description:
      "Diagnosticamos y reparamos portátiles en Barcelona con fallos de arranque, pantalla, batería, teclado o sobrecalentamiento.",
    href: "#contact",
  },
  {
    title: "Reparación de ordenadores",
    description:
      "Servicio técnico para PC de sobremesa, ordenadores lentos, errores de Windows, discos dañados y problemas de hardware.",
    href: "#contact",
  },
  {
    title: "Reparación MacBook",
    description:
      "Revisión y reparación de MacBook en Barcelona por problemas de batería, pantalla, sistema operativo o almacenamiento.",
    href: "#contact",
  },
  {
    title: "Reparación de móviles",
    description:
      "Reparamos móviles e iPhone con pantalla rota, batería dañada, conectores defectuosos o fallos de software.",
    href: "#contact",
  },
  {
    title: "Cambio de SSD y ampliación RAM",
    description:
      "Mejoramos el rendimiento de portátiles y PC con instalación de SSD, ampliación de RAM y clonación de datos.",
    href: "#contact",
  },
  {
    title: "Recuperación de datos",
    description:
      "Recuperación de datos en Barcelona para discos duros, SSD, memorias USB y equipos dañados siempre que sea viable.",
    href: "#contact",
  },
];

export const solvedProblems: HomeTextItem[] = [
  { title: "El portátil no enciende" },
  { title: "Ordenador lento" },
  { title: "Pantalla rota" },
  { title: "Batería dañada" },
  { title: "Virus o malware" },
  { title: "Pérdida de datos" },
  { title: "Windows no arranca" },
  { title: "Sobrecalentamiento" },
];

export const trustReasons: HomeTextItem[] = [
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
];

export const workSteps: HomeTextItem[] = [
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
];

export const localServiceInfo = {
  title: "Servicio técnico en Eixample, Barcelona",
  address: "Carrer de Bailèn, 109, Local 2 · Eixample · 08009 Barcelona",
  schedule:
    businessInfo.openingHours[0] || "TODO_SCHEDULE: confirmar horario de atención",
  phone:
    businessInfo.contact.telephone ||
    "TODO_PHONE: confirmar teléfono o WhatsApp",
  description:
    "RBIT Informática ofrece servicio técnico informático en Barcelona desde Carrer de Bailèn, en la zona de Eixample. Atendemos reparaciones de ordenadores, portátiles, MacBook, móviles, cambio de SSD, instalación de Windows y recuperación de datos con diagnóstico claro y trato cercano.",
};
