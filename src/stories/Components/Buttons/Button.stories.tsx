import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "../../../components/Button";

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
  component: Button,
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        story: "Usado para seguir em frente no User Flow",
      },
    },
  },
  args: {
    children: "Primary",
    variant: "primary",
  },
};

export const Secondary: Story = {
  parameters: {
    docs: {
      description: {
        story: "Usado para retroceder no User Flow",
      },
    },
  },
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Outline: Story = {
  parameters: {
    docs: {
      description: {
        story: "Usado como botão de ação mas que não avança no User Flow",
      },
    },
  },
  args: {
    children: "Outline",
    variant: "outline",
  },
};

export const Destroy: Story = {
  parameters: {
    docs: {
      description: {
        story: "Usado para destacar ações destrutivas sem retorno",
      },
    },
  },
  args: {
    children: "Destroy",
    variant: "destroy",
  },
};

export const ButtonWithIcon: Story = {
  parameters: {
    docs: {
      description: {
        story: "Exemplo de um botão com Icone",
      },
    },
  },
  args: {
    children: "Button",
    icon: <FaFolderOpen />,
  },
};

export const OnlyIcon: Story = {
  parameters: {
    docs: {
      description: {
        story: "Exemplo de um botão apenas com o Icone",
      },
    },
  },
  args: {
    icon: <FaCheckCircle />,
  },
};

export const Sizes = () => {
  const styles = { display: "flex", gap: "8px" };

  return (
    <div style={styles}>
      <Button size="sm">Button</Button>
      <Button size="md">Button</Button>
      <Button size="lg">Button</Button>
    </div>
  );
};

Sizes.parameters = {
  docs: {
    description: {
      story: "O botão suporta 3 tamanhos diferentes: 'sm', 'md' e 'lg'",
    },
  },
};
