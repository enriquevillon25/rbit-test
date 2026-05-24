import type { ComponentType } from "react";
import type { SupportedLanguage } from "i18n/languages";

export type LandingSectionSpacing = "top" | "topShort";

export interface LandingPageProps {
  onToggleDark: () => void;
  onToggleDir: () => void;
  language?: SupportedLanguage;
}

export interface LandingSectionConfig {
  id: string;
  Component: ComponentType;
  spacing?: LandingSectionSpacing;
}

export interface LandingLayoutState {
  isTablet: boolean;
  isMounted: boolean;
  showPageNav: boolean;
}

export interface PostalAddress {
  streetAddress: string;
  addressLocality: string;
  postalCode: string;
  addressCountry: string;
  addressRegion: string;
}

export interface LandingSeoMetadata {
  siteName: string;
  businessName: string;
  title: string;
  description: string;
  canonicalUrl: string;
  imageUrl: string;
  locale: string;
  phone: string;
  email: string;
  address: PostalAddress;
  keywords: string[];
}

export type JsonLdSchema = Record<string, unknown>;
