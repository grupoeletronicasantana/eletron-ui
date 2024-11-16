import type { Meta, StoryObj } from "@storybook/react";

import { Field, Label, Textarea } from "@components/Forms";

const meta = {
  tags: ["autodocs"],
  component: Textarea,
  args: {
    id: "field",
    placeholder: "Placeholder de exemplo.",
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
  render: ({}) => {
    return (
      <Field>
        <Label htmlFor="textarea">Senha:</Label>
        <Textarea id="textarea" placeholder="Placeholder de exemplo." />
      </Field>
    );
  },
};

export const Sizes: Story = {
  render: ({}) => {
    const styles = { display: "flex", gap: "8px" };

    return (
      <div style={styles}>
        <Textarea size="sm" placeholder="Placeholder de exemplo." />
        <Textarea size="md" placeholder="Placeholder de exemplo." />
        <Textarea size="lg" placeholder="Placeholder de exemplo." />
      </div>
    );
  },
};
