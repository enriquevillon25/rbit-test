import imgLaptop from "public/images/laptop.jpg";
import imgComputer from "public/images/computer.jpg";
import imgiPhones from "public/images/iphones.webp";
import reparationPhone from "public/images/reparation-phone.png";
import repairPCImage from "public/images/education/repair-ordenador.webp";

export type LandingNavItem = "feature" | "explore" | "popular" | "about";

export interface ImageTextItem {
  img: string;
  title: string;
  desc: string;
}

export interface ServiceCta {
  img: string;
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

export const navItems: LandingNavItem[] = [
  "feature",
  "explore",
  "popular",
  "about",
];

export const serviceCategories: ImageTextItem[] = [
  {
    img: imgComputer,
    title: "Reparar ordenadores",
    desc: "Diagnóstico y reparación de PC sobremesa, fuentes, placas base, discos, memoria y problemas de rendimiento.",
  },
  {
    img: imgLaptop,
    title: "Reparar portátiles",
    desc: "Reparación de portátiles Windows, cambio de pantalla, batería, teclado, bisagras, limpieza interna y mantenimiento.",
  },
  {
    img: reparationPhone,
    title: "Reparar moviles",
    desc: "Servicio técnico para móviles con pantalla rota, batería agotada, conectores dañados o fallos de software.",
  },
  {
    img: imgiPhones,
    title: "Reparar iPhones",
    desc: "Reparación de iPhone, cambio de pantalla, batería, cámara, conector de carga y recuperación de datos.",
  },
  {
    img: reparationPhone,
    title: "Reparar Macbooks",
    desc: "Reparación de MacBook, diagnóstico de hardware, reinstalación de macOS, ampliaciones y mantenimiento preventivo.",
  },
];

export const serviceCta: ServiceCta = {
  img: imgLaptop,
  title: "TODOS NUESTROS SERVICIOS",
  href: "#",
};

export const featuredServices: FeaturedService[] = [
  {
    img: repairPCImage,
    title: "Reparar Ordenadores",
    rating: 5,
    price: 50,
    desc: "Reparamos ordenadores lentos, equipos que no arrancan, errores de Windows, discos dañados y fallos de hardware.",
  },
  {
    img: repairPCImage,
    title: "Reparar Portátiles",
    rating: 4,
    price: 10,
    desc: "Solucionamos averías de portátiles de todas las marcas: pantallas, baterías, teclados, ventilación y conectores.",
  },
  {
    img: repairPCImage,
    title: "Reparar Macbook",
    rating: 5,
    price: 50,
    desc: "Servicio técnico para MacBook con problemas de arranque, sobrecalentamiento, batería, pantalla o sistema operativo.",
  },
  {
    img: repairPCImage,
    title: "Recuperación de datos",
    rating: 3,
    price: 25,
    desc: "Recuperamos archivos de discos duros, SSD, memorias USB y equipos dañados siempre que sea técnicamente posible.",
  },
  {
    img: repairPCImage,
    title: "Mantenimiento informático",
    rating: 5,
    price: 50,
    desc: "Limpieza, optimización, antivirus, actualizaciones y mantenimiento preventivo para particulares y empresas.",
  },
  {
    img: repairPCImage,
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
        label: "Carrer de Bailèn, 109, Local 2, Eixample, 08009 Barcelona, España",
        href: "https://www.google.com/maps/search/?api=1&query=Carrer%20de%20Bailen%20109%20Barcelona",
      },
      {
        label: "Lunes a sábado, 10:00-20:00",
        href: "/contact",
      },
      {
        label: "666266295",
        href: "tel:+34666266295",
      },
      {
        label: "jvillonl@rbitinformatica.com",
        href: "mailto:jvillonl@rbitinformatica.com",
      },
    ],
  },
];
