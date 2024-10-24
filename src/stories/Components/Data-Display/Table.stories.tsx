import type { Meta, StoryObj } from "@storybook/react";

import { Table, TableBody, TableData, TableRow } from "@components/Table";

const meta = {
  component: Table,
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "Aceita apenas TableBody como children",
      control: false,
    },
  },
  args: {
    headers: ["Coluna 1", "Coluna 2", "Coluna 3", "Coluna 4", "Coluna 5"],
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <TableBody>
        <TableRow>
          <TableData>Linha 1</TableData>
          <TableData>Linha 1</TableData>
          <TableData>Linha 1</TableData>
          <TableData>Linha 1</TableData>
          <TableData>Linha 1</TableData>
        </TableRow>
        <TableRow>
          <TableData>Linha 2</TableData>
          <TableData>Linha 2</TableData>
          <TableData>Linha 2</TableData>
          <TableData>Linha 2</TableData>
          <TableData>Linha 2</TableData>
        </TableRow>
        <TableRow>
          <TableData>Linha 3</TableData>
          <TableData>Linha 3</TableData>
          <TableData>Linha 3</TableData>
          <TableData>Linha 3</TableData>
          <TableData>Linha 3</TableData>
        </TableRow>
        <TableRow>
          <TableData>Linha 4</TableData>
          <TableData>Linha 4</TableData>
          <TableData>Linha 4</TableData>
          <TableData>Linha 4</TableData>
          <TableData>Linha 4</TableData>
        </TableRow>
      </TableBody>
    ),
  },
};
