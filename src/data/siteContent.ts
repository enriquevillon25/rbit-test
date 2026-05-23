import imgLaptop from "public/images/laptop.jpg";
import imgComputer from "public/images/computer.jpg";
import imgiPhones from "public/images/iphones.webp";
import reparationPhone from "public/images/reparation-phone.png";
import repairPCImage from "public/images/education/repair-ordenador.webp";
import { businessInfo } from "seo/businessInfo";
import { featuredSeoServices, primarySeoServices } from "seo/services";

export type LandingNavItem =
  | "services"
  | "problems"
  | "local"
  | "testimonials"
  | "faq";

export interface ImageTextItem {
  img: string;
  imgAlt: string;
  title: string;
  desc: string;
}

export interface ServiceCta {
  img: string;
  imgAlt: string;
  title: string;
  href: string;
}

export interface FeaturedService extends ImageTextItem {
  rating: number;
  price: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  text: string;
  name: string;
  rating: number;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

function formatBusinessAddress(): string {
  const { address } = businessInfo;

  return [
    address.streetAddress,
    businessInfo.areaServed.includes("Eixample") ? "Eixample" : undefined,
    address.addressLocality,
    address.postalCode,
    address.addressCountry === "ES" ? "España" : address.addressCountry,
  ]
    .filter(Boolean)
    .join(", ");
}

function buildBusinessMapUrl(): string {
  const query = encodeURIComponent(formatBusinessAddress());

  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

export const navItems: LandingNavItem[] = [
  "services",
  "problems",
  "local",
  "testimonials",
  "faq",
];

export const serviceCategories: ImageTextItem[] = [
  {
    img: imgComputer,
    imgAlt: primarySeoServices[0].imageAlt,
    title: primarySeoServices[0].shortTitle,
    desc: primarySeoServices[0].description,
  },
  {
    img: imgLaptop,
    imgAlt: primarySeoServices[1].imageAlt,
    title: primarySeoServices[1].shortTitle,
    desc: primarySeoServices[1].description,
  },
  {
    img: reparationPhone,
    imgAlt: primarySeoServices[3].imageAlt,
    title: primarySeoServices[3].shortTitle,
    desc: primarySeoServices[3].description,
  },
  {
    img: imgiPhones,
    imgAlt: "Reparación de iPhone en Barcelona",
    title: "Reparar iPhones",
    desc: "Reparación de iPhone, cambio de pantalla, batería, cámara, conector de carga y recuperación de datos.",
  },
  {
    img: reparationPhone,
    imgAlt: primarySeoServices[2].imageAlt,
    title: primarySeoServices[2].shortTitle,
    desc: primarySeoServices[2].description,
  },
];

export const serviceCta: ServiceCta = {
  img: imgLaptop,
  imgAlt: "Servicio técnico informático en Eixample",
  title: "TODOS NUESTROS SERVICIOS",
  href: "#",
};

export const featuredServices: FeaturedService[] = featuredSeoServices.map(
  (service, index) => ({
    img: repairPCImage,
    imgAlt: service.imageAlt,
    title: service.title,
    rating: index === 1 ? 4 : index === 4 ? 5 : index === 3 ? 3 : 5,
    price: [50, 10, 50, 25, 50, 40][index] || 50,
    desc: service.description,
  })
);

export const legacyFeaturedServices: FeaturedService[] = [
  {
    img: repairPCImage,
    imgAlt: "Reparación de ordenadores en Barcelona",
    title: "Reparar Ordenadores",
    rating: 5,
    price: 50,
    desc: "Reparamos ordenadores lentos, equipos que no arrancan, errores de Windows, discos dañados y fallos de hardware.",
  },
  {
    img: repairPCImage,
    imgAlt: "Reparación de portátiles en Barcelona",
    title: "Reparar Portátiles",
    rating: 4,
    price: 10,
    desc: "Solucionamos averías de portátiles de todas las marcas: pantallas, baterías, teclados, ventilación y conectores.",
  },
  {
    img: repairPCImage,
    imgAlt: "Reparación de MacBook en Barcelona",
    title: "Reparar Macbook",
    rating: 5,
    price: 50,
    desc: "Servicio técnico para MacBook con problemas de arranque, sobrecalentamiento, batería, pantalla o sistema operativo.",
  },
  {
    img: repairPCImage,
    imgAlt: "Recuperación de datos en Barcelona",
    title: "Recuperación de datos",
    rating: 3,
    price: 25,
    desc: "Recuperamos archivos de discos duros, SSD, memorias USB y equipos dañados siempre que sea técnicamente posible.",
  },
  {
    img: repairPCImage,
    imgAlt: "Mantenimiento informático en Barcelona",
    title: "Mantenimiento informático",
    rating: 5,
    price: 50,
    desc: "Limpieza, optimización, antivirus, actualizaciones y mantenimiento preventivo para particulares y empresas.",
  },
  {
    img: repairPCImage,
    imgAlt: "Servicio técnico informático a domicilio en Barcelona",
    title: "Asistencia a domicilio",
    rating: 5,
    price: 40,
    desc: "Soporte técnico en Barcelona para redes, impresoras, configuración de equipos y resolución de incidencias.",
  },
];

export const seoFaqs: FaqItem[] = [
  {
    question: "¿Reparáis ordenadores y portátiles en Barcelona?",
    answer:
      "Sí. En RBIT Informática realizamos diagnóstico, reparación y mantenimiento de ordenadores de sobremesa y portátiles en Barcelona.",
  },
  {
    question: "¿Puedo pedir un diagnóstico antes de reparar?",
    answer:
      "Sí. Puedes solicitar un diagnóstico para conocer la avería, la viabilidad de reparación y el presupuesto antes de confirmar el servicio.",
  },
  {
    question: "¿También reparáis móviles, iPhone y MacBook?",
    answer:
      "Sí. Trabajamos con móviles, iPhone, MacBook, iPad y otros dispositivos, incluyendo cambios de pantalla, batería, conectores y problemas de software.",
  },
  {
    question: "¿Dónde está RBIT Informática?",
    answer:
      "Estamos en Carrer de Bailèn, 109, Local 2, Eixample, 08009 Barcelona.",
  },
];

export const testimonials: Testimonial[] = [
  {
    text: "José es nuestro informático de confianza desde hace años. Profesional, rápido y con un trato excelente. 100% recomendable.",
    name: "Andrea deDo",
    rating: 5,
  },
  {
    text: "Llevé mi móvil con un problema grave y lo solucionaron rápido y a buen precio. Servicio transparente y profesional.",
    name: "Peter Johansson",
    rating: 5,
  },
  {
    text: "Los mejores profesionales en recuperación de datos. Recuperaron mi disco duro de 10TB cuando lo daba por perdido.",
    name: "Jose Antonio Rodriguez",
    rating: 5,
  },
  {
    text: "Siempre resuelve cualquier problema informático, grande o pequeño. Servicio rápido, eficiente y de primera.",
    name: "Jessika Klingspor",
    rating: 5,
  },
  {
    text: "Me dejó el ordenador como nuevo. Trato cercano y profesional. Excelente trabajo.",
    name: "Luis Tajada",
    rating: 4.5,
  },
  {
    text: "Reparó mi iPhone rápidamente en fechas complicadas. Siempre bien atendido.",
    name: "Laure Zizine",
    rating: 5,
  },
  {
    text: "Instalación en casa impecable. Profesional de toda confianza.",
    name: "Joaquim Clos",
    rating: 4.9,
  },
  {
    text: "Profesional rápido, inteligente y muy amable. Precio acorde a la calidad que recibes.",
    name: "Nicolas Cortes",
    rating: 5,
  },
];

export const footerSections: FooterSection[] = [
  {
    title: "Empresa",
    links: [
      {
        label: formatBusinessAddress(),
        href: buildBusinessMapUrl(),
      },
      {
        label: "Lunes a sábado, 10:00-20:00",
        href: "/contact",
      },
      {
        label: businessInfo.contact.telephone?.replace("+34", "") || "",
        href: `tel:${businessInfo.contact.telephone || ""}`,
      },
      {
        label: businessInfo.contact.email || "",
        href: `mailto:${businessInfo.contact.email || ""}`,
      },
    ],
  },
];
