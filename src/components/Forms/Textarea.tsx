import {
  ErrorAlertContainer,
  InputErrorWrapper,
  TextareaContainer,
} from "./styles";

import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  size?: "sm" | "md" | "lg";
  withError?: boolean;
}

function Textarea({ name, size = "sm", withError, ...props }: TextareaProps) {
  const { register } = useFormContext();

  return (
    <InputErrorWrapper>
      <TextareaContainer $size={size} {...props} {...register(name)} />
      {withError && <ErrorMessage name={name} as={ErrorAlertContainer} />}
    </InputErrorWrapper>
  );
}

export { Textarea };
export type { TextareaProps };
