import { ButtonIconContainer } from "./styles";

import { IconType } from "react-icons";

interface ButtonIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactElement<IconType>;
}

function ButtonIcon({ icon, ...props }: ButtonIconProps) {
  return <ButtonIconContainer {...props}>{icon && icon}</ButtonIconContainer>;
}

export { ButtonIcon };
