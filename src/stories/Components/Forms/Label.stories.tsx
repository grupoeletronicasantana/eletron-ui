import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "@components/Forms";

const meta = {
  tags: ["autodocs"],
  component: Label,
  argTypes: {
    htmlFor: {
      type: "string",
    },
  },
  args: {
    htmlFor: "label",
    children: "Label",
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Required: Story = {
  args: {
    required: true,
  },
};
