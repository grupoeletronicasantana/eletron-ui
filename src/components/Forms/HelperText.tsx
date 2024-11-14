import { HelperTextContainer } from "./styles";

interface HelperTextProps {
  children: string;
}

function HelperText({ children }: HelperTextProps) {
  return <HelperTextContainer>{children}</HelperTextContainer>;
}

export { HelperText };
