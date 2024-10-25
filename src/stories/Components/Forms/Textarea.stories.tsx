import type { Meta, StoryObj } from "@storybook/react";

import { Field, Forms, Textarea } from "@components/Forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect } from "react";

const meta = {
  tags: ["autodocs"],
  component: Textarea,
  argTypes: {},
  args: {
    id: "field",
    name: "field",
    placeholder: "Placeholder de exemplo",
  },
  decorators: [
    (Story) => {
      const CreateFormSchema = z.object({
        field: z.string(),
      });

      type FormSchema = z.infer<typeof CreateFormSchema>;

      const methods = useForm<FormSchema>({
        resolver: zodResolver(CreateFormSchema),
      });

      const submitForms = (formsData: FormSchema) => console.log(formsData);

      return (
        <Forms id="inputForms" methods={methods} onSubmit={submitForms}>
          <Story />
        </Forms>
      );
    },
  ],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
  render: ({}) => {
    return (
      <Field labelText="Label:" id="label" name="label" required withError>
        <Textarea id="label" name="label" placeholder="Placeholder" />
      </Field>
    );
  },
};

export const WithError = () => {
  {
    const CreateErrorSchema = z.object({
      error: z.string().min(1, "Mensagem de erro"),
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
        <Textarea id="error" name="error" placeholder="Placeholder" withError />
      </Forms>
    );
  }
};
