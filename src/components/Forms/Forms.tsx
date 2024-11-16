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
  function preventDefault(event: React.FormEvent) {
    event.preventDefault();
  }

  return (
    <FormProvider {...methods}>
      <FormsContainer
        onSubmit={
          onSubmit
            ? methods.handleSubmit(onSubmit)
            : (e: React.FormEvent) => preventDefault(e)
        }
        {...props}
      >
        {children}
      </FormsContainer>
    </FormProvider>
  );
}

export { Forms };
