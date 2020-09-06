import React from 'react';
import get from 'lodash/get';

import {
  Table,
  TableBody,
  TableContainer,
  TableDataCell,
  TableHeadCell,
  TableHeader,
  TableRow,
} from './Table';
import { TableButtonProps } from './components/IconButton';
import styled from 'styled-components';
import TableControl from './components/TableControl';

const TableControlHeaderCell = styled(TableHeadCell)`
  width: 2rem;
  text-align: center;
`;

const TableControlDataCell = styled(TableDataCell)`
  width: 2rem;
  text-align: center;
`;

interface Props {
  headers: string[];
  rows: {
    id: string;
    [index: string]: string | number | null | undefined;
  }[];

  maxHeight?: string;
  controls?: TableButtonProps[];

  bottomSlot?: React.ReactElement;
}

const CustomTable: React.FC<Props> = ({
  headers,
  rows,
  controls,
  maxHeight,
  bottomSlot,
}) => {
  const getRowValue = (row: any, key: string) => get(row, key, '-') as string;
  const CONTROLS_HEADER_KEY = 'controls';
  const tableHeaders = controls ? [...headers, CONTROLS_HEADER_KEY] : headers;

  return (
    <TableContainer maxHeight={maxHeight}>
      <Table>
        <TableHeader>
          <TableRow>
            {tableHeaders.map((headerKey) => {
              if (headerKey === CONTROLS_HEADER_KEY) {
                return (
                  <TableControlHeaderCell>{headerKey}</TableControlHeaderCell>
                );
              }
              return <TableHeadCell>{headerKey}</TableHeadCell>;
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              {tableHeaders.map((key) => {
                if (key === CONTROLS_HEADER_KEY && controls) {
                  return (
                    <TableControlDataCell>
                      <TableControl controls={controls} id={row.id} />
                    </TableControlDataCell>
                  );
                }
                return <TableDataCell>{getRowValue(row, key)}</TableDataCell>;
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {bottomSlot}
    </TableContainer>
  );
};

export default CustomTable;
