import {
  TableWrapper,
  TableContainer,
  TableHeaderCellContainer,
  TableHeaderRowContainer,
  TableRowContainer,
  TableBodyContainer,
  TableDataContainer,
  TableHeaderContainer,
} from "./styles";

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

export { Table, TableHeader, TableBody, TableRow, TableData };
