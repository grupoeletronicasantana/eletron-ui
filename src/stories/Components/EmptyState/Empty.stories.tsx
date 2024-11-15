import type { Meta, StoryObj } from "@storybook/react";

import { Empty } from "@components/Empty";

import { ImFilesEmpty } from "react-icons/im";
import { CgTrashEmpty } from "react-icons/cg";
import { FaThermometerEmpty } from "react-icons/fa";
import { PiEmpty, PiBatteryEmpty } from "react-icons/pi";

const iconMap = {
  ImFilesEmpty: <ImFilesEmpty />,
  CgTrashEmpty: <CgTrashEmpty />,
  FaThermometerEmpty: <FaThermometerEmpty />,
  PiEmpty: <PiEmpty />,
  PiBatteryEmpty: <PiBatteryEmpty />,
};

const meta = {
  component: Empty,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Esse componente tem como objetivo indicar que um espaço não possui nada para apresentar, pode ser usado no lugar de dados que a consulta retornou vazia.",
      },
    },
  },
  argTypes: {
    icon: {
      control: "select",
      options: Object.keys(iconMap),
      mapping: iconMap,
      defaultValue: "ImFilesEmpty",
    },
  },
  args: {
    icon: <ImFilesEmpty />,
    title: "Espaço Vazio",
  },
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Pode ser usado apenas com um icon e um título usando a prop title.",
      },
    },
  },
};

export const WithDescription: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Mas também permite o uso de uma descrição mais detalhada com a prop description.",
      },
    },
  },
  args: {
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
};
