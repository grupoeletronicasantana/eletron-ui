import { Fragment } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import {
  CardWrapper,
  CardHeader,
  Card,
  CardFooter,
} from "../../../components/Card";

const meta = {
  component: Fragment,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Fragment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Full: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Exemplo do Card completo com o CardWrapper, CardHeader, Card e CardFooter",
      },
    },
  },
  args: {
    children: (
      <CardWrapper>
        <CardHeader>Título do Card</CardHeader>
        <Card>
          <h2>Conteúdo do Card</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
            reprehenderit praesentium numquam! Totam doloribus dolorum libero
            vero quidem earum mollitia, vitae, praesentium esse corporis facilis
            quas velit. Dolorum, rem aut?
          </p>
        </Card>
        <CardFooter>Rodapé do Card</CardFooter>
      </CardWrapper>
    ),
  },
};

export const WithoutFooter: Story = {
  parameters: {
    docs: {
      description: {
        story: "Exemplo do Card sem o CardFooter",
      },
    },
  },
  args: {
    children: (
      <CardWrapper>
        <CardHeader>Título do Card</CardHeader>
        <Card>
          <h2>Conteúdo do Card</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
            reprehenderit praesentium numquam! Totam doloribus dolorum libero
            vero quidem earum mollitia, vitae, praesentium esse corporis facilis
            quas velit. Dolorum, rem aut?
          </p>
        </Card>
      </CardWrapper>
    ),
  },
};

export const WithoutHeader: Story = {
  parameters: {
    docs: {
      description: {
        story: "Exemplo do Card sem o CardHeader",
      },
    },
  },
  args: {
    children: (
      <CardWrapper>
        <Card>
          <h2>Conteúdo do Card</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
            reprehenderit praesentium numquam! Totam doloribus dolorum libero
            vero quidem earum mollitia, vitae, praesentium esse corporis facilis
            quas velit. Dolorum, rem aut?
          </p>
        </Card>
        <CardFooter>Rodapé do Card</CardFooter>
      </CardWrapper>
    ),
  },
};

export const OnlyBody: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "O Card também funciona indepente, inclusive fora do CardWrapper já que a lógica para arredondar as bordas está contida nele, fora do ",
      },
    },
  },
  args: {
    children: (
      <Card>
        <h2>Conteúdo do Card</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
          reprehenderit praesentium numquam! Totam doloribus dolorum libero vero
          quidem earum mollitia, vitae, praesentium esse corporis facilis quas
          velit. Dolorum, rem aut?
        </p>
      </Card>
    ),
  },
};
