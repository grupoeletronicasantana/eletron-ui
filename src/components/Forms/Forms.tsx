import { FormsContainer } from "./styles";

import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";

interface FormProps<T extends FieldValues>
  extends Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {
  id: string;
  methods: UseFormReturn<T>;
  onSubmit?: SubmitHandler<T>;
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

export { Forms };
