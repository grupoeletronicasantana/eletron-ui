import { useState } from "react";
import { SectionContainer, CollapsibleHeader, SectionContent } from "./styles";

import { Separator } from "../Separator";
import { ButtonIcon } from "../Button";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface CollapsibleSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  variant?: "primary" | "secondary";
}

function CollapsibleSection({
  id,
  title,
  children,
  variant = "primary",
  defaultOpen = true,
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleSection = () => setIsOpen((prev) => !prev);

  return (
    <SectionContainer id={id} $variant={variant}>
      <CollapsibleHeader onClick={toggleSection}>
        {variant === "primary" ? <h2>{title}</h2> : <h4>{title}</h4>}
        {isOpen ? (
          <ButtonIcon
            icon={<FaChevronDown size={variant === "primary" ? 16 : 14} />}
          />
        ) : (
          <ButtonIcon
            icon={<FaChevronUp size={variant === "primary" ? 16 : 14} />}
          />
        )}
      </CollapsibleHeader>
      <Separator marginBottom="1rem" />
      {isOpen && <SectionContent>{children}</SectionContent>}
    </SectionContainer>
  );
}

export { CollapsibleSection };
