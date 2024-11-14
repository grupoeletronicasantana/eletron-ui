import { useState } from "react";

import { SecretContainer, SecretInputContainer } from "./styles";

import { IoEye, IoEyeOff } from "react-icons/io5";
import { ButtonIcon } from "../Button";

import { InputProps } from "./Input";

function Secret({ name, size = "md", ...props }: InputProps) {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <SecretContainer>
      <SecretInputContainer
        $size={size}
        type={isPasswordVisible ? "text" : "password"}
        {...props}
      />
      <ButtonIcon
        icon={isPasswordVisible ? <IoEyeOff /> : <IoEye />}
        type="button"
        onClick={togglePasswordVisibility}
      />
    </SecretContainer>
  );
}

export { Secret };
