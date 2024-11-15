import type { Meta, StoryObj } from "@storybook/react";

import { Empty } from "@components/Empty";

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
  args: {
    title: "Espaço Vazio",
  },
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Pode ser usado apenas com um título usando a prop title.",
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
