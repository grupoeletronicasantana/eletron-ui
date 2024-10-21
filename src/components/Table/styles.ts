import { styled } from "styled-components";

export const TableWrapper = styled.div`
  width: 100%;
  overflow: auto;
  border-radius: 10px;
`;

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: auto;
  border-radius: 10px;
  white-space: nowrap;

  font-size: 14px;
`;

export const TableHeaderContainer = styled.thead`
  background-color: ${({ theme }) => theme.colors.TABLEHEADER};
  color: ${({ theme }) => theme.colors.WHITE};
`;

export const TableHeaderRowContainer = styled.tr`
  font-weight: 700;
`;

export const TableHeaderCellContainer = styled.th`
  padding: 12px 20px;
  text-align: center;
`;

export const TableBodyContainer = styled.tbody``;

export const TableRowContainer = styled.tr`
  text-align: center;
  background-color: transparent;

  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.TABLEBODYEVEN};
  }
`;

export const TableDataContainer = styled.td`
  padding: 12px 6px;
  text-align: center;
`;
