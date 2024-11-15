import type { Meta, StoryObj } from "@storybook/react";
import { useEffect } from "react";

import {
  Forms,
  Label,
  LabelError,
  Field,
  Input,
  ErrorText,
} from "@components/Forms";
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
    id: "label",
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
