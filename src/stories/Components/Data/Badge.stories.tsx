import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "@components/Badge";

const meta = {
  title: "Components/Data Display/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Usado para apresentar status ou valores, sem interação.",
      },
    },
  },
  args: {
    label: "Badge",
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Solid: Story = {
  render: ({}) => {
    const styles = { display: "flex", gap: "8px" };

    return (
      <div style={styles}>
        <Badge label="Default" />
        <Badge label="Ativado" colorPalette="green" />
        <Badge label="Ativando" colorPalette="blue" />
        <Badge label="Espera" colorPalette="yellow" />
        <Badge label="Observação" colorPalette="orange" />
        <Badge label="Desativado" colorPalette="red" />
      </div>
    );
  },
};

export const Outline: Story = {
  render: ({}) => {
    const styles = { display: "flex", gap: "8px" };

    return (
      <div style={styles}>
        <Badge label="Default" variant="outline" />
        <Badge label="Ativado" colorPalette="green" variant="outline" />
        <Badge label="Ativando" colorPalette="blue" variant="outline" />
        <Badge label="Espera" colorPalette="yellow" variant="outline" />
        <Badge label="Observação" colorPalette="orange" variant="outline" />
        <Badge label="Desativado" colorPalette="red" variant="outline" />
      </div>
    );
  },
};

export const Subtle: Story = {
  render: ({}) => {
    const styles = { display: "flex", gap: "8px" };

    return (
      <div style={styles}>
        <Badge label="Default" variant="subtle" />
        <Badge label="Ativado" colorPalette="green" variant="subtle" />
        <Badge label="Ativando" colorPalette="blue" variant="subtle" />
        <Badge label="Espera" colorPalette="yellow" variant="subtle" />
        <Badge label="Observação" colorPalette="orange" variant="subtle" />
        <Badge label="Desativado" colorPalette="red" variant="subtle" />
      </div>
    );
  },
};
