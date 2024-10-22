import { ButtonIconContainer } from "./styles";
import { ReactElement } from "react";

interface ButtonIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactElement;
}

function ButtonIcon({ icon, ...props }: ButtonIconProps) {
  return <ButtonIconContainer {...props}>{icon && icon}</ButtonIconContainer>;
}

export { ButtonIcon };
