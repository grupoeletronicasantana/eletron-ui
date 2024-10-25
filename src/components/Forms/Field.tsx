import { FieldContainer } from "./styles";

import { Label } from "./Label";
import { TextInputProps } from "./TextInput";
import { TextareaProps } from "./Textarea";

interface FieldProps {
  id: string;
  name?: string;
  labelText: string;
  required?: boolean;
  withError?: boolean;
  children: React.ReactElement<TextInputProps | TextareaProps>;
}

function Field({ id, labelText, children, ...props }: FieldProps) {
  return (
    <FieldContainer>
      <Label htmlFor={id} {...props}>
        {labelText}
      </Label>
      {children}
    </FieldContainer>
  );
}

export { Field };
