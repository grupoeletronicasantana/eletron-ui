import type { Meta, StoryObj } from "@storybook/react";

import { Search } from "@components/Search";
import { Button } from "@components/Button";

const meta = {
  tags: ["autodocs"],
  component: Search,
  argTypes: {
    type: {
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "search" },
      },
    },
  },
  args: {
    placeholder: "Pesquise pelo nome do cliente",
  },
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithButton: Story = {
  render: ({}) => {
    const style = { display: "flex", gap: "16px" };
    return (
      <div style={style}>
        <Search placeholder="Componente de pesquisa" />
        <Button>Pesquisar</Button>
      </div>
    );
  },
};
