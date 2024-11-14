import { InputErrorWrapper, TextareaContainer } from "./styles";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  size?: "sm" | "md" | "lg";
}

function Textarea({ name, size = "sm", ...props }: TextareaProps) {
  return <TextareaContainer $size={size} {...props} />;
}

export { Textarea };
export type { TextareaProps };
