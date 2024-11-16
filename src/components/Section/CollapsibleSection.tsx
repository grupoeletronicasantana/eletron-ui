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
}

function CollapsibleSection({
  id,
  title,
  children,
  defaultOpen = true,
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleSection = () => setIsOpen((prev) => !prev);

  return (
    <SectionContainer id={id}>
      <CollapsibleHeader onClick={toggleSection}>
        <h2>{title}</h2>
        {isOpen ? (
          <ButtonIcon icon={<FaChevronDown size={16} />} />
        ) : (
          <ButtonIcon icon={<FaChevronUp size={16} />} />
        )}
      </CollapsibleHeader>
      <Separator marginBottom="1rem" />
      {isOpen && <SectionContent>{children}</SectionContent>}
    </SectionContainer>
  );
}

export { CollapsibleSection };
