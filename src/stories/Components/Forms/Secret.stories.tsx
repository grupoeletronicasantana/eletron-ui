import type { Meta, StoryObj } from "@storybook/react";

import { Field, Label, Secret } from "@components/Forms";

const meta = {
  tags: ["autodocs"],
  component: Secret,
  argTypes: {
    type: {
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "password" },
      },
    },
  },
  args: {
    id: "secret",
    placeholder: "Placeholder de exemplo",
  },
} satisfies Meta<typeof Secret>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
  render: ({}) => {
    return (
      <Field>
        <Label id="secret">Label:</Label>
        <Secret id="secret" placeholder="Placeholder" />
      </Field>
    );
  },
};
