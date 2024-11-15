import {
  TableWrapper,
  TableContainer,
  TableHeaderCellContainer,
  TableHeaderRowContainer,
  TableRowContainer,
  TableBodyContainer,
  TableDataContainer,
  TableHeaderContainer,
  EmptyDataContainer,
  LoadingDataContainer,
} from "./styles";

import { BsTable } from "react-icons/bs";

import { Spinner } from "@components/Spinner";

interface TableProps {
  headers: string[];
  children: React.ReactElement<TableBodyProps>;
}

interface TableHeaderProps {
  headers: string[];
}

interface TableBodyProps {
  children: React.ReactElement | React.ReactElement[];
}

interface TableRowProps {
  children: React.ReactElement | React.ReactElement[];
}

interface TableDataProps {
  children: React.ReactNode;
}

interface EmptyDataProps {
  title: string;
  description?: string;
}

function Table({ headers, children }: TableProps) {
  return (
    <TableWrapper>
      <TableContainer>
        <TableHeaderContainer>
          <TableHeader headers={headers} />
        </TableHeaderContainer>
        {children}
      </TableContainer>
    </TableWrapper>
  );
}

function TableHeader({ headers }: TableHeaderProps) {
  return (
    <TableHeaderRowContainer>
      {headers.map((header) => (
        <TableHeaderCellContainer key={header}>
          {header}
        </TableHeaderCellContainer>
      ))}
    </TableHeaderRowContainer>
  );
}

function TableBody({ children }: TableBodyProps) {
  return <TableBodyContainer>{children}</TableBodyContainer>;
}

function TableRow({ children }: TableRowProps) {
  return <TableRowContainer>{children}</TableRowContainer>;
}

function TableData({ children }: TableDataProps) {
  return <TableDataContainer>{children}</TableDataContainer>;
}

function EmptyData({ title, description }: EmptyDataProps) {
  return (
    <EmptyDataContainer colSpan={100}>
      <BsTable />
      <h2>{title}</h2>
      <p>{description}</p>
    </EmptyDataContainer>
  );
}

function LoadingData() {
  return (
    <LoadingDataContainer colSpan={100}>
      <Spinner size="lg" />
    </LoadingDataContainer>
  );
}

export {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableData,
  EmptyData,
  LoadingData,
};
