import { styled } from "styled-components";

export const TableWrapper = styled.div`
  width: 100%;
  overflow: auto;
  border-radius: 10px;

  border: 1px solid ${({ theme }) => theme.colors.gray75};
`;

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: auto;
  border-radius: 10px;
  white-space: nowrap;
`;

export const TableHeaderContainer = styled.thead`
  background-color: ${({ theme }) => theme.colors.gray75};
  color: ${({ theme }) => theme.colors.white100};
`;

export const TableHeaderRowContainer = styled.tr`
  font-weight: 700;
  font-size: 14px;
`;

export const TableHeaderCellContainer = styled.th`
  display: table-cell;
  padding: 12px 20px;
  text-align: center;
`;

export const TableBodyContainer = styled.tbody``;

export const TableRowContainer = styled.tr`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white100};

  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.gray90};
  }
`;

export const TableDataContainer = styled.td`
  display: table-cell;
  padding: 12px 6px;
  text-align: center;
  font-size: 14px;
`;

export const EmptyDataContainer = styled.td`
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 200px;

  text-align: center;
`;

export const LoadingDataContainer = styled.td`
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100px;
`;
