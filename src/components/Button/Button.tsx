import { ButtonContainer } from "./styles";
import { LoadSpin } from "../Loading";
import { ReactElement } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactElement;
  iconPosition?: "left" | "right";
  variant?: "primary" | "secondary" | "outline" | "destroy";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

function Button({
  icon,
  iconPosition = "left",
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
      {icon && iconPosition === "left" && icon}
      {loading ? <LoadSpin /> : children}
      {icon && iconPosition === "right" && icon}
    </ButtonContainer>
  );
}

export { Button };
