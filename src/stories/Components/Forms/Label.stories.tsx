import type { Meta, StoryObj } from "@storybook/react";
import { useEffect } from "react";

import { Forms, Label, Field, TextInput } from "@components/Forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const meta = {
  tags: ["autodocs"],
  component: Label,
  argTypes: {
    htmlFor: {
      type: "string",
    },
  },
  args: {
    children: "Label",
  },
  decorators: [
    (Story) => {
      const CreateFormSchema = z.object({
        label: z.string(),
      });

      type FormSchema = z.infer<typeof CreateFormSchema>;

      const methods = useForm<FormSchema>({
        resolver: zodResolver(CreateFormSchema),
      });

      const submitForms = (formsData: FormSchema) => console.log(formsData);

      return (
        <Forms id="labelForms" methods={methods} onSubmit={submitForms}>
          <Story />
        </Forms>
      );
    },
  ],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const RequiredWithError = () => {
  {
    const CreateErrorSchema = z.object({
      error: z.string().min(1, "Campo obrigatório"),
    });
    //
    type ErrorSchema = z.infer<typeof CreateErrorSchema>;
    //
    const methods = useForm<ErrorSchema>({
      resolver: zodResolver(CreateErrorSchema),
    });
    //
    const submitForms = (formsData: ErrorSchema) => console.log(formsData);
    //
    useEffect(() => {
      methods.trigger("error");
    }); // Apenas para forçar o erro
    //
    return (
      <Forms id="errorForms" methods={methods} onSubmit={submitForms}>
        <Field labelText="Label:" id="error" name="error" required withError>
          <TextInput id="error" name="error" placeholder="Placeholder" />
        </Field>
      </Forms>
    );
  }
};
