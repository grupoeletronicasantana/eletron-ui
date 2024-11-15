import React from "react";
import { InputContainer } from "./styles";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  id?: string;
  size?: "sm" | "md";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  { size = "md", type = "text", ...props },
  ref
) {
  return <InputContainer ref={ref} $size={size} type={type} {...props} />;
});

export { Input };
export type { InputProps };
