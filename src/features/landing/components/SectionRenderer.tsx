import React from "react";
import type { LandingSectionConfig, LandingSectionSpacing } from "../types";

interface SectionRendererProps {
  sections: LandingSectionConfig[];
  getSectionClass: (spacing?: LandingSectionSpacing) => string | undefined;
}

function SectionRenderer(props: SectionRendererProps): JSX.Element {
  const { sections, getSectionClass } = props;

  return (
    <>
      {sections.map(({ id, Component, spacing }) => (
        <section key={id} id={id} className={getSectionClass(spacing)}>
          <Component />
        </section>
      ))}
    </>
  );
}

export default SectionRenderer;
