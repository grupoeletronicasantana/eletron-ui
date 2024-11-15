import type { Meta, StoryObj } from "@storybook/react";

import { Field, Input, Label } from "@components/Forms";

const meta = {
  tags: ["autodocs"],
  component: Input,
  argTypes: {
    type: {
      type: "string",
      defaultValue: "text",
    },
  },
  args: {
    placeholder: "Placeholder de exemplo",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
  render: ({}) => {
    return (
      <Field>
        <Label id="input">Senha:</Label>
        <Input id="input" placeholder="Insira sua senha" />
      </Field>
    );
  },
};

export const Sizes: Story = {
  render: ({}) => {
    const styles = { display: "flex", gap: "8px" };

    return (
      <div style={styles}>
        <Input size="sm" placeholder="Placeholder de exemplo." />
        <Input size="md" placeholder="Placeholder de exemplo." />
      </div>
    );
  },
};
