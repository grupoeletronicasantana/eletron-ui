import React, { useState } from "react";

import { SecretContainer, SecretInputContainer } from "./styles";

import { IoEye, IoEyeOff } from "react-icons/io5";
import { ButtonIcon } from "../Button";

import { InputProps } from "./Input";

const Secret = React.forwardRef<HTMLInputElement, InputProps>(function Secret(
  { size = "md", ...props },
  ref
) {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <SecretContainer>
      <SecretInputContainer
        ref={ref}
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
});

export { Secret };
