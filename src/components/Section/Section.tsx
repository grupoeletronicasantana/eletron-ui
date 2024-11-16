import { SectionContainer, SectionHeader, SectionContent } from "./styles";

import { Separator } from "../Separator";

interface SectionProps {
  id: string;
  titleAlign?: "left" | "center" | "right";
  title: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

function Section({
  id,
  titleAlign = "left",
  title,
  variant = "primary",
  children,
}: SectionProps) {
  return (
    <SectionContainer id={id} $variant={variant}>
      <SectionHeader $titleAlign={titleAlign}>
        {variant === "primary" ? <h2>{title}</h2> : <h4>{title}</h4>}
      </SectionHeader>
      <Separator marginBottom="1rem" />
      {children}
    </SectionContainer>
  );
}

export { Section };
