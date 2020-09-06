import styled from 'styled-components';

export const TableHeadCell = styled.th`
  background-color: ${({ theme }) => theme.colors.primaryLighten};
  color: ${({ theme }) => theme.colors.light};
  padding: 1rem;
  font-size: 1.1rem;
  text-align: left;
  text-transform: capitalize;
  vertical-align: middle;
`;

export const TableDataCell = styled.td`
  background-color: ${({ theme }) => theme.colors.lightgrey};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.8rem 1rem;
  vertical-align: middle;
`;

export const TableRow = styled.tr``;

export const TableHeader = styled.thead`
`;

export const TableBody = styled.tbody`
  tr:not(:last-child) {
    border-bottom: 2px solid ${({ theme }) => theme.colors.grey};
  }
`;

export const Table = styled.table`
  width: 100%;
`;

export const TableContainer = styled.div<{ maxHeight?: string }>`
  border-radius: 0.5rem;
  overflow: auto;
  max-height: ${({ maxHeight }) => maxHeight || 'auto'};
`;
