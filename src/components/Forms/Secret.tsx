import { useState } from "react";

import {
  ErrorAlertContainer,
  InputErrorWrapper,
  SecretContainer,
  SecretInput,
} from "./styles";

import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import { IoEye, IoEyeOff } from "react-icons/io5";
import { ButtonIcon } from "../Button";

import { TextInputProps } from "./TextInput";

function Secret({ name, size = "md", withError, ...props }: TextInputProps) {
  const { register } = useFormContext();
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <InputErrorWrapper>
      <SecretContainer>
        <SecretInput
          $size={size}
          type={isPasswordVisible ? "text" : "password"}
          {...props}
          {...register(name)}
        />
        <ButtonIcon
          icon={isPasswordVisible ? <IoEyeOff /> : <IoEye />}
          type="button"
          onClick={togglePasswordVisibility}
        />
      </SecretContainer>
      {withError && <ErrorMessage name={name} as={ErrorAlertContainer} />}
    </InputErrorWrapper>
  );
}

export { Secret };
