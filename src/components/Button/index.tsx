import { ButtonContainer, ButtonIconContainer } from "./styles";
import { LoadSpin } from "../Loading";

import { IconType } from "react-icons";

interface ButtonIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconType;
  size?: number;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconType;
  iconPosition?: "left" | "right";
  iconSize?: number;
  variant?: "primary" | "secundary" | "outline" | "destroy";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

function Button({
  icon: Icon,
  iconPosition = "left",
  iconSize = 20,
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  disabled = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <ButtonContainer
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      disabled={disabled || loading}
      {...props}
    >
      {Icon && iconPosition === "left" && (
        <Icon size={iconSize} style={{ marginRight: "8px" }} />
      )}
      {loading ? <LoadSpin /> : children}
      {Icon && iconPosition === "right" && (
        <Icon size={iconSize} style={{ marginLeft: "8px" }} />
      )}
    </ButtonContainer>
  );
}

function ButtonIcon({ icon: Icon, size = 24, ...props }: ButtonIconProps) {
  return (
    <ButtonIconContainer {...props}>
      {Icon && <Icon size={size} />}
    </ButtonIconContainer>
  );
}

export { Button, ButtonIcon };
