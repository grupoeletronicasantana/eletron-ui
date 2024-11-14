import { InputContainer, InputErrorWrapper } from "./styles";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  id: string;
  name: string;
  size?: "sm" | "md";
}

function Input({ name, size = "md", type = "text", ...props }: InputProps) {
  return <InputContainer $size={size} type={type} {...props} />;
}

export { Input };
export type { InputProps };
