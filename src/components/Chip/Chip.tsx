import {
  ChipContainer,
  IconContainer,
  TextContainer,
  DeleteContainer,
} from "./styles";

import { ButtonIcon } from "../Button";

import { FaCircleXmark } from "react-icons/fa6";
import { IconType } from "react-icons";

interface ChipProps {
  icon?: React.ReactElement<IconType>;
  label: string;
  onDelete?: () => void;
  variant?: "solid" | "outline" | "subtle";
}

function Chip({ icon, label, onDelete, variant = "solid" }: ChipProps) {
  return (
    <ChipContainer $variant={variant}>
      {icon && <IconContainer>{icon}</IconContainer>}

      <TextContainer>{label}</TextContainer>

      {onDelete && (
        <DeleteContainer onClick={onDelete}>
          {<FaCircleXmark size={16} />}
        </DeleteContainer>
      )}
    </ChipContainer>
  );
}

export { Chip };
