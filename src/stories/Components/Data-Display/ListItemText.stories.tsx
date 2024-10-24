import type { Meta, StoryObj } from "@storybook/react";

import { ListItemText } from "@components/Lists";

const meta = {
  component: ListItemText,
  tags: ["autodocs"],
} satisfies Meta<typeof ListItemText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    title: "Titulo",
    description: "Descrição",
  },
};

export const Multiple: Story = {
  args: {
    title: "",
  },
  render: ({}) => {
    const styles = {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gridTemplateRows: "repeat(2, auto)",
      gap: "16px",
    };

    return (
      <div style={styles}>
        <ListItemText title="Titulo 1" description="Descrição 1" />
        <ListItemText title="Titulo 2" description="Descrição 2" />
        <ListItemText title="Titulo 3" description="Descrição 3" />
        <ListItemText title="Titulo 4" description="Descrição 4" />
        <ListItemText title="Titulo 5" description="Descrição 5" />
        <ListItemText title="Titulo 6" description="Descrição 6" />
        <ListItemText title="Titulo 7" description="Descrição 7" />
      </div>
    );
  },
};
