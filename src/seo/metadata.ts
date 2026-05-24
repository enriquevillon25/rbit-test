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
    "Servicio técnico informático en Barcelona. Reparación de portátiles, ordenadores, MacBook, móviles, cambio de SSD, instalación de Windows y recuperación de datos en RBIT Informática.",
  canonicalUrl: businessInfo.url,
  locale: businessInfo.locale,
  siteName: businessInfo.name,
  businessName: businessInfo.name,
  imageUrl: businessInfo.imageUrl,
  keywords: localSeoKeywords,
};
