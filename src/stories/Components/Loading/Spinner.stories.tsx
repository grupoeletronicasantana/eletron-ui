import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Spinner } from "@components/Spinner";

const meta = {
  component: Spinner,
  tags: ["autodocs"],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "O Spinner suporta 3 tamanhos diferentes: 'sm' , 'md' , 'lg' , 'xl'",
      },
    },
  },
  render: ({}) => {
    const styles = { display: "flex", gap: "32px" };

    return (
      <div style={styles}>
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" />
        <Spinner size="xl" />
      </div>
    );
  },
};
