import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { ButtonIcon } from "@components/Button";

import {
  FaAddressCard,
  FaFolderOpen,
  FaDownload,
  FaSave,
  FaBell,
  FaCheckCircle,
  FaChevronCircleRight,
} from "react-icons/fa";

const iconMap = {
  None: null,
  FaAddressCard: <FaAddressCard />,
  FaFolderOpen: <FaFolderOpen />,
  FaDownload: <FaDownload />,
  FaSave: <FaSave />,
  FaCheckCircle: <FaCheckCircle />,
  FaBell: <FaBell />,
  FaChevronCircleRight: <FaChevronCircleRight />,
};

const meta = {
  component: ButtonIcon,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: "select",
      options: Object.keys(iconMap),
      mapping: iconMap,
      defaultValue: "None",
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof ButtonIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <FaBell />,
  },
};
