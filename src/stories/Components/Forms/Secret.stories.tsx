import type { Meta, StoryObj } from "@storybook/react";

import { Forms, Secret } from "@components/Forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const meta = {
  tags: ["autodocs"],
  component: Secret,
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
        <Forms id="secretForms" methods={methods} onSubmit={submitForms}>
          <Story />
        </Forms>
      );
    },
  ],
} satisfies Meta<typeof Secret>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "secret",
    name: "secret",
    placeholder: "Placeholder de exemplo",
  },
};
