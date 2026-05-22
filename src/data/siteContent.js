import imgLaptop from "public/images/laptop.jpg";
import imgComputer from "public/images/computer.jpg";
import imgiPhones from "public/images/iphones.webp";
import reparationPhone from "public/images/reparation-phone.png";
import repairPCImage from "public/images/education/repair-ordenador.webp";

export const navItems = [
  "feature",
  "popular",
  "explore",
  "blog",
];

export const serviceCategories = [
  {
    img: imgComputer,
    title: "Reparar ordenadores",
    desc: "Nulla lobortis nunc vitae nisi semper semper.",
  },
  {
    img: imgLaptop,
    title: "Reparar portátiles",
    desc: "Nulla lobortis nunc vitae nisi semper semper.",
  },
  {
    img: reparationPhone,
    title: "Reparar moviles",
    desc: "Nulla lobortis nunc vitae nisi semper semper.",
  },
  {
    img: imgiPhones,
    title: "Reparar iPhones",
    desc: "Nulla lobortis nunc vitae nisi semper semper.",
  },
  {
    img: reparationPhone,
    title: "Reparar Macbooks",
    desc: "Nulla lobortis nunc vitae nisi semper semper.",
  },
];

export const serviceCta = {
  img: imgLaptop,
  title: "TODOS NUESTROS SERVICIOS",
  href: "#",
};

export const featuredServices = [
  {
    img: repairPCImage,
    title: "Reparar Ordenadores",
    rating: 5,
    price: 50,
    desc: "Arregla tu ",
  },
  {
    img: repairPCImage,
    title: "Reparar Pórtatiles",
    rating: 4,
    price: 10,
    desc: "Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…",
  },
  {
    img: repairPCImage,
    title: "Reparar Macbook",
    rating: 5,
    price: 50,
    desc: "Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…",
  },
  {
    img: repairPCImage,
    title: "Vivamus sit amet",
    rating: 3,
    price: 25,
    desc: "Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…",
  },
  {
    img: repairPCImage,
    title: "Vivamus sit amet",
    rating: 5,
    price: 50,
    desc: "Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…",
  },
  {
    img: repairPCImage,
    title: "Vivamus sit amet",
    rating: 5,
    price: 40,
    desc: "Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…",
  },
];

export const testimonials = [
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

export const footerSections = [
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
