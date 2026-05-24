export interface SeoService {
  title: string;
  shortTitle: string;
  description: string;
  imageAlt: string;
}

export const primarySeoServices: SeoService[] = [
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
  {
    title: "Clonación de discos",
    shortTitle: "Clonación de discos",
    description:
      "Migración segura de sistema y datos entre discos duros, SSD y nuevos equipos.",
    imageAlt: "Clonación de discos en Barcelona",
  },
  {
    title: "Limpieza interna y sobrecalentamiento",
    shortTitle: "Limpieza interna",
    description:
      "Limpieza física, mantenimiento térmico y revisión de ventilación para portátiles y ordenadores que se calientan.",
    imageAlt: "Limpieza interna de portátil en Barcelona",
  },
  {
    title: "Eliminación de virus",
    shortTitle: "Eliminar virus",
    description:
      "Revisión de seguridad, eliminación de malware y recuperación de estabilidad del sistema.",
    imageAlt: "Eliminación de virus en ordenador",
  },
  {
    title: "Instalación de Windows",
    shortTitle: "Instalar Windows",
    description:
      "Instalación, reinstalación y configuración de Windows con drivers, actualizaciones y software básico.",
    imageAlt: "Instalación de Windows en Barcelona",
  },
  {
    title: "Montaje de PC",
    shortTitle: "Montaje de PC",
    description:
      "Montaje, ampliación y revisión de ordenadores de sobremesa, equipos gaming y estaciones de trabajo.",
    imageAlt: "Montaje de PC en Barcelona",
  },
  {
    title: "Redes WiFi y soporte a domicilio",
    shortTitle: "Soporte a domicilio",
    description:
      "Configuración de redes WiFi, impresoras, periféricos y soporte técnico a domicilio en Barcelona.",
    imageAlt: "Servicio técnico informático a domicilio en Barcelona",
  },
];

export const featuredSeoServices = primarySeoServices.slice(0, 6);
