import Banner from "components/Banner";
import Feature from "components/Feature";
import Explore from "components/Explore";
import PopularCourse from "components/PopularCourse";
import About from "components/About";
import Testimonials from "components/Testimonials";
import Subscribe from "components/SubscribeForm";
import type { LandingSectionConfig } from "../types";

export const landingSections: LandingSectionConfig[] = [
  {
    id: "home",
    Component: Banner,
  },
  {
    id: "feature",
    Component: Feature,
    spacing: "top",
  },
  {
    id: "explore",
    Component: Explore,
  },
  {
    id: "popular",
    Component: PopularCourse,
    spacing: "topShort",
  },
  {
    id: "about",
    Component: About,
  },
  {
    id: "testimonials",
    Component: Testimonials,
    spacing: "top",
  },
  {
    id: "subscribe",
    Component: Subscribe,
    spacing: "topShort",
  },
];
