import type { Meta } from "@storybook/react";

import {
  Forms,
  Field,
  Input,
  Textarea,
  Label,
  LabelError,
  HelperText,
  ErrorText,
} from "@components/Forms";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

const meta = {
  tags: ["autodocs"],
  component: Field,
  parameters: {
    docs: {
      description: {
        component:
          "Usado para adicionar acessórios aos campos do formulário como Labels, HelperText e Erros",
      },
    },
  },
  argTypes: {
    children: {
      control: false,
    },
  },
} satisfies Meta<typeof Field>;

export default meta;

export const WithInput = {
  parameters: {
    docs: {
      description: {
        story: "Em conjunto com o Input",
      },
    },
  },
  render: ({}) => {
    return (
      <Field>
        <Label htmlFor="input">Label Input:</Label>
        <Input id="input" placeholder="Placeholder" />
      </Field>
    );
  },
};

export const WithTextarea = {
  parameters: {
    docs: {
      description: {
        story: "Em conjunto com o Textarea",
      },
    },
  },
  render: ({}) => {
    return (
      <Field>
        <Label htmlFor="textarea">Label Input:</Label>
        <Textarea id="textarea" placeholder="Placeholder" />
      </Field>
    );
  },
};

export const WithRequired = {
  parameters: {
    docs: {
      description: {
        story:
          "Ao adicionar a prop 'required' no Label ele adiciona um asterisco indicando que este campo é obrigatório",
      },
    },
  },
  render: ({}) => {
    return (
      <Field>
        <Label htmlFor="required" required>
          Label Required:
        </Label>
        <Input id="required" placeholder="Placeholder" />
      </Field>
    );
  },
};

export const WithHelper = {
  parameters: {
    docs: {
      description: {
        story: "É possível também agregar o componente de HelperText ao Field",
      },
    },
  },
  render: ({}) => {
    return (
      <Field>
        <Label htmlFor="required" required>
          Label Required:
        </Label>
        <Input id="required" placeholder="Placeholder" />
        <HelperText>Esse campo é obrigatório</HelperText>
      </Field>
    );
  },
};

const WithLabelErrorHook = () => {
  const CreateFormSchema = z.object({
    field_label_error: z.string().min(1, "Campo obrigatório"),
  });

  type FormSchema = z.infer<typeof CreateFormSchema>;

  const methods = useForm<FormSchema>({
    resolver: zodResolver(CreateFormSchema),
  });

  const { register, trigger } = methods;

  const submitForms = (formsData: FormSchema) => {
    console.log(formsData);
  };

  useEffect(() => {
    trigger("field_label_error");
  });

  return (
    <Forms id="label_error" methods={methods} onSubmit={submitForms}>
      <Field>
        <LabelError>
          <Label htmlFor="field_label_error" required>
            Label Required:
          </Label>
          <ErrorText name="field_label_error" />
        </LabelError>
        <Input
          id="field_label_error"
          {...register("field_label_error")}
          placeholder="Placeholder"
        />
        <HelperText>Esse campo é obrigatório</HelperText>
      </Field>
    </Forms>
  );
};

export const WithLabelError = {
  parameters: {
    docs: {
      description: {
        story:
          "É possível também adicionar uma mensagem de erro ao Field, agregando o componente ErrorText na Label trocando Label por LabelError ou no final usando apenas o ErrorText. Mas independente da forma selecionada é necessário que esse forms esteja dentro do componente Forms que usa React Hook Forms para controlar o Formulário e Zod para realizar as validações.",
      },
      source: {
        code: `
        const CreateFormSchema = z.object({
        field_label_error: z.string().min(1, "Campo obrigatório"),
        });

        type FormSchema = z.infer<typeof CreateFormSchema>;

        const methods = useForm<FormSchema>({
          resolver: zodResolver(CreateFormSchema),
        });

        const { register, trigger } = methods;

        const submitForms = (formsData: FormSchema) => {
          console.log(formsData);
        };

        useEffect(() => {
        trigger("field_label_error");
        }); // Apenas para acionar o erro do Forms

        return (
          <Forms id="label_error" methods={methods} onSubmit={submitForms}>
            <Field>
              <LabelError>
                <Label htmlFor="field_label_error" required>
                  Label Required:
                </Label>
                <ErrorText name="field_label_error" />
              </LabelError>
              <Input
                id="field_label_error"
                {...register("field_label_error")}
                placeholder="Placeholder"
              />
              <HelperText>Esse campo é obrigatório</HelperText>
            </Field>
          </Forms>
        );
        `,
        language: "tsx",
        type: "auto",
      },
    },
  },
  render: () => <WithLabelErrorHook />,
};

const WithInputErrorHook = () => {
  const CreateFormSchema = z.object({
    field_input_error: z.string().min(1, "Campo obrigatório"),
  });

  type FormSchema = z.infer<typeof CreateFormSchema>;

  const methods = useForm<FormSchema>({
    resolver: zodResolver(CreateFormSchema),
  });

  const { register, trigger } = methods;

  const submitForms = async (formsData: FormSchema) => {
    console.log(formsData);
  };

  useEffect(() => {
    trigger("field_input_error");
  });

  return (
    <Forms id="input_error" methods={methods} onSubmit={submitForms}>
      <Field>
        <Label htmlFor="field_input_error" required>
          Label Required:
        </Label>
        <Input
          id="field_input_error"
          {...register("field_input_error")}
          placeholder="Placeholder"
        />
        <HelperText>Esse campo é obrigatório</HelperText>
        <ErrorText name="field_input_error" />
      </Field>
    </Forms>
  );
}; //

export const WithInputError = {
  parameters: {
    docs: {
      description: {
        story: "Exemplo do uso de ErrorText no final do Field.",
      },
      source: {
        code: `
        const CreateFormSchema = z.object({
        field_input_error: z.string().min(1, "Campo obrigatório"),
        });

        type FormSchema = z.infer<typeof CreateFormSchema>;

        const methods = useForm<FormSchema>({
          resolver: zodResolver(CreateFormSchema),
        });

        const { register, trigger } = methods;

        const submitForms = async (formsData: FormSchema) => {
          console.log(formsData);
        };

        useEffect(() => {
          trigger("field_input_error");
        }); // Apenas para acionar o erro do Forms

        return (
          <Forms id="input_error" methods={methods} onSubmit={submitForms}>
            <Field>
              <Label htmlFor="field_input_error" required>
                Label Required:
              </Label>
              <Input
                id="field_input_error"
                {...register("field_input_error")}
                placeholder="Placeholder"
              />
              <HelperText>Esse campo é obrigatório</HelperText>
              <ErrorText name="field_input_error" />
            </Field>
          </Forms>
        )`,
        language: "tsx",
        type: "auto",
      },
    },
  },
  render: () => <WithInputErrorHook />,
};
