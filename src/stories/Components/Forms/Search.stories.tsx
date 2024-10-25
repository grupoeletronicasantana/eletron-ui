import type { Meta, StoryObj } from "@storybook/react";

import { Forms } from "@components/Forms";
import { Search } from "@components/Search";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@components/Button";

const meta = {
  tags: ["autodocs"],
  component: Search,
  argTypes: {},
  args: {
    name: "search",
    placeholder: "Componente de pesquisa",
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
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithButton: Story = {
  render: ({}) => {
    const style = { display: "flex", gap: "16px" };
    return (
      <div style={style}>
        <Search name="buttonSearch" placeholder="Componente de pesquisa" />
        <Button>Button</Button>
      </div>
    );
  },
};
