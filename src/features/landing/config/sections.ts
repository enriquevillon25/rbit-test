import Banner from "components/Banner";
import Testimonials from "components/Testimonials";
import Subscribe from "components/SubscribeForm";
import SEOFaqSection from "components/seo/SEOFaqSection";
import type { LandingSectionConfig } from "../types";
import {
  LocalServiceSection,
  MainServicesSection,
  ProblemSolutionsSection,
  TrustSection,
  WorkProcessSection,
} from "../components/HomeSections";

export const landingSections: LandingSectionConfig[] = [
  {
    id: "home",
    Component: Banner,
  },
  {
    id: "services",
    Component: MainServicesSection,
  },
  {
    id: "problems",
    Component: ProblemSolutionsSection,
  },
  {
    id: "why-rbit",
    Component: TrustSection,
  },
  {
    id: "process",
    Component: WorkProcessSection,
  },
  {
    id: "local",
    Component: LocalServiceSection,
  },
  {
    id: "testimonials",
    Component: Testimonials,
    spacing: "top",
  },
  {
    id: "faq",
    Component: SEOFaqSection,
  },
  {
    id: "contact",
    Component: Subscribe,
    spacing: "topShort",
  },
];
