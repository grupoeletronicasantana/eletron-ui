import { useState } from "react";

import {
  FormsContainer,
  InputLabelFieldContainer,
  LabelContainer,
  LabelErrorWrapper,
  ErrorAlertContainer,
  InputContainer,
  InputErrorWrapper,
  Asterisk,
  SecretContainer,
  TextareaContainer,
} from "./styles";

import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
  useFormContext,
} from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import { IoEye, IoEyeOff } from "react-icons/io5";
import { ButtonIcon } from "../Button";

interface FormProps<T extends FieldValues>
  extends Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {
  methods: UseFormReturn<T>;
  onSubmit?: SubmitHandler<T>;
}

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  name: string;
  size?: "sm" | "md";
  withError?: boolean;
}

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  name: string;
  required?: boolean;
  withError?: boolean;
  labelText?: string;
}

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  size?: "sm" | "md" | "lg";
  withError?: boolean;
}

interface InputLabelFieldProps {
  children: [React.ReactElement<LabelProps>, React.ReactElement<InputProps>];
}

function Forms<T extends FieldValues>({
  methods,
  onSubmit,
  children,
  ...props
}: FormProps<T>) {
  return (
    <FormProvider {...methods}>
      <FormsContainer
        onSubmit={onSubmit ? methods.handleSubmit(onSubmit) : undefined}
        {...props}
      >
        {children}
      </FormsContainer>
    </FormProvider>
  );
}

function InputLabelField({ children }: InputLabelFieldProps) {
  return <InputLabelFieldContainer>{children}</InputLabelFieldContainer>;
}

function Label({
  labelText,
  name,
  required,
  withError,
  children,
  ...props
}: LabelProps) {
  return (
    <LabelErrorWrapper>
      <LabelContainer {...props}>
        {children ? children : labelText} {required && <Asterisk />}
      </LabelContainer>
      {withError && <ErrorMessage name={name} as={ErrorAlertContainer} />}
    </LabelErrorWrapper>
  );
}

function Input({ name, size = "md", withError, ...props }: InputProps) {
  const { register } = useFormContext();

  return (
    <InputErrorWrapper>
      <InputContainer $size={size} type="text" {...props} {...register(name)} />
      {withError && <ErrorMessage name={name} as={ErrorAlertContainer} />}
    </InputErrorWrapper>
  );
}

function Secret({ name, size = "md", withError, ...props }: InputProps) {
  const { register } = useFormContext();
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <InputErrorWrapper>
      <SecretContainer>
        <InputContainer
          $size={size}
          type={isPasswordVisible ? "text" : "password"}
          {...props}
          {...register(name)}
        />
        <ButtonIcon
          icon={isPasswordVisible ? IoEyeOff : IoEye}
          type="button"
          onClick={togglePasswordVisibility}
        />
      </SecretContainer>
      {withError && <ErrorMessage name={name} as={ErrorAlertContainer} />}
    </InputErrorWrapper>
  );
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

export { Forms, InputLabelField, Label, Input, Secret, Textarea };
