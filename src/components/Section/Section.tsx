import { SectionContainer, SectionHeader, SectionContent } from "./styles";

import { Separator } from "../Separator";

interface SectionProps {
  id: string;
  titleAlign?: "left" | "center" | "right";
  title: string;
  children: React.ReactNode;
}

function Section({ id, titleAlign = "left", title, children }: SectionProps) {
  return (
    <SectionContainer id={id}>
      <SectionHeader $titleAlign={titleAlign}>
        <h2>{title}</h2>
      </SectionHeader>
      <Separator marginBottom="1rem" />
      {children}
    </SectionContainer>
  );
}

export { Section };
