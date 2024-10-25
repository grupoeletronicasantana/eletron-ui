import {
  ErrorAlertContainer,
  InputContainer,
  InputErrorWrapper,
} from "./styles";

import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  id: string;
  name: string;
  size?: "sm" | "md";
  withError?: boolean;
}

function TextInput({
  name,
  size = "md",
  type = "text",
  withError,
  ...props
}: TextInputProps) {
  const { register } = useFormContext();

  return (
    <InputErrorWrapper>
      <InputContainer $size={size} type={type} {...props} {...register(name)} />
      {withError && <ErrorMessage name={name} as={ErrorAlertContainer} />}
    </InputErrorWrapper>
  );
}

export { TextInput };
export type { TextInputProps };
