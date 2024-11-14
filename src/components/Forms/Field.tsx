import { FieldContainer } from "./styles";

import { LabelProps } from "./Label";
import { InputProps } from "./Input";
import { TextareaProps } from "./Textarea";

interface FieldProps {
  children: React.ReactElement<LabelProps | InputProps | TextareaProps>;
}

function Field({ children }: FieldProps) {
  return <FieldContainer>{children}</FieldContainer>;
}

export { Field };
