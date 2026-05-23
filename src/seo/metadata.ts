import { businessInfo } from "./businessInfo";
import { localSeoKeywords } from "./keywords";

export interface SeoMetadata {
  title: string;
  description: string;
  canonicalUrl: string;
  locale: string;
  siteName: string;
  businessName: string;
  imageUrl: string;
  keywords: string[];
}

export const landingSeoMetadata: SeoMetadata = {
  title:
    "Reparación de Ordenadores y Portátiles en Barcelona | RBIT Informática",
  description:
    "Servicio técnico informático en Barcelona especializado en reparación de ordenadores, portátiles, MacBook, móviles, instalación de SSD y recuperación de datos en Eixample.",
  canonicalUrl: businessInfo.url,
  locale: businessInfo.locale,
  siteName: businessInfo.name,
  businessName: businessInfo.name,
  imageUrl: businessInfo.imageUrl,
  keywords: localSeoKeywords,
};
