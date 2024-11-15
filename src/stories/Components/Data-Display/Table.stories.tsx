import type { Meta, StoryObj } from "@storybook/react";

import {
  Table,
  TableBody,
  TableData,
  TableRow,
  EmptyData,
  LoadingData,
} from "@components/Table";

const meta = {
  component: Table,
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "Aceita apenas o componente TableBody como children",
      control: false,
    },
  },
  args: {
    headers: ["Coluna 1", "Coluna 2", "Coluna 3", "Coluna 4", "Coluna 5"],
    children: <></>,
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ headers }) => {
    const tableData = [
      { id: "1", row: "1" },
      { id: "1", row: "2" },
      { id: "3", row: "3" },
      { id: "4", row: "4" },
      { id: "5", row: "5" },
    ];
    return (
      <Table headers={headers}>
        <TableBody>
          {tableData.map((data) => (
            <TableRow key={data.id}>
              <TableData>Linha {data.row}</TableData>
              <TableData>Linha {data.row}</TableData>
              <TableData>Linha {data.row}</TableData>
              <TableData>Linha {data.row}</TableData>
              <TableData>Linha {data.row}</TableData>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};

export const EmptyTable: Story = {
  render: ({ headers }) => {
    return (
      <Table headers={headers}>
        <TableBody>
          <TableRow>
            <EmptyData title="Tabela Vazia" description="Lorem ipsum dolor" />
          </TableRow>
        </TableBody>
      </Table>
    );
  },
};

export const LoadingTable: Story = {
  render: ({ headers }) => {
    return (
      <Table headers={headers}>
        <TableBody>
          <TableRow>
            <LoadingData />
          </TableRow>
        </TableBody>
      </Table>
    );
  },
};
