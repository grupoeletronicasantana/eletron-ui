import { ButtonContainer } from "./styles";

import { IconType } from "react-icons";

import { Spinner } from "../Spinner";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactElement<IconType>;
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
      {loading ? (
        <Spinner size={size === "lg" ? "md" : "sm"} />
      ) : (
        <>
          {icon && iconPosition === "left" && icon}
          {children}
          {icon && iconPosition === "right" && icon}
        </>
      )}
    </ButtonContainer>
  );
}

export { Button };
