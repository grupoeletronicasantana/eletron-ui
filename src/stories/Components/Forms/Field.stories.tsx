import type { Meta, StoryObj } from "@storybook/react";

import { Forms, Field, TextInput, Textarea } from "@components/Forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const meta = {
  tags: ["autodocs"],
  component: Field,
  parameters: {
    docs: {
      description: {
        component: "Usado para adicionar labels aos campos do formulário",
      },
    },
  },
  argTypes: {
    children: {
      control: false,
    },
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
        <Forms id="exampleForms" methods={methods} onSubmit={submitForms}>
          <Story />
        </Forms>
      );
    },
  ],
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithTextInput: Story = {
  parameters: {
    docs: {
      description: {
        story: "Em conjunto com o TextInput",
      },
    },
  },
  args: {
    id: "input",
    name: "input",
    labelText: "TextInput:",
    children: <TextInput id="input" name="input" placeholder="Placeholder" />,
  },
};

export const WithTextarea: Story = {
  parameters: {
    docs: {
      description: {
        story: "Em conjunto com o Textarea",
      },
    },
  },
  args: {
    id: "textarea",
    name: "textarea",
    labelText: "Textarea:",
    children: (
      <Textarea id="textarea" name="textarea" placeholder="Placeholder" />
    ),
  },
};

export const WithRequired: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Ao adicionar a prop 'required' o Field adicionar um asterisco no componente da Label",
      },
    },
  },
  args: {
    id: "required",
    name: "required",
    labelText: "Required:",
    required: true,
    children: (
      <TextInput id="required" name="required" placeholder="Placeholder" />
    ),
  },
};
