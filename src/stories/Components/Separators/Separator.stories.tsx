import type { Meta, StoryObj } from "@storybook/react";

import { Separator } from "@components/Separator";

const meta = {
  tags: ["autodocs"],
  component: Separator,
  parameters: {
    docs: {
      description: {
        component:
          "Destinado a criar uma linha horizontal para separar dois elementos.",
      },
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Por padrão não possui margin para maior flexibilidade.",
      },
    },
  },
  render: ({}) => {
    return (
      <>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          dolores vero voluptatibus assumenda repellat cum placeat quo animi
          dignissimos magni velit repudiandae minima cumque, totam, magnam vel!
          Nesciunt, facere fuga.
        </p>
        <Separator />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
          doloribus et accusamus temporibus neque architecto unde, dignissimos
          qui molestias corrupti. Iusto dolorem unde repudiandae. Aspernatur
          animi rem reiciendis voluptate suscipit.
        </p>
      </>
    );
  },
};

export const ExampleWithMargins: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Usando as propriedas marginTop e marginBottom, é possível adicionar margin ao componente de Separator, podem ser usado em conjunto ou separadamente.",
      },
    },
  },
  render: ({}) => {
    return (
      <>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          dolores vero voluptatibus assumenda repellat cum placeat quo animi
          dignissimos magni velit repudiandae minima cumque, totam, magnam vel!
          Nesciunt, facere fuga.
        </p>
        <Separator marginTop="16px" marginBottom="16px" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
          doloribus et accusamus temporibus neque architecto unde, dignissimos
          qui molestias corrupti. Iusto dolorem unde repudiandae. Aspernatur
          animi rem reiciendis voluptate suscipit.
        </p>
      </>
    );
  },
};
