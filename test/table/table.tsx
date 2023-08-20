import React, { ChangeEvent, ReactNode } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TableMui from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TableRow from '@mui/material/TableRow';
import {
  Button,
  TableBody,
  TableCell,
  TableHead,
  TableSortLabel,
  Typography,
} from '@mui/material';
// import TablePaging from './TablePagination';
import { ITableColumn } from './interface';
import { Table as TableOuter } from './table';
import TablePaging from './TablePagination';

export type TableProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

interface TBodyComponent<T, K extends keyof T> {
  data: Array<T>;
  dataColumns: Array<ITableColumn<T, K>>;
  tableTitle: string;
  editIndex?: number;
}
interface THeadComponent<T, K extends keyof T> {
  dataColumns: Array<ITableColumn<T, K>>;
  tableTitle: string;
  onClickSorting?: (value: { key: K }) => void;
}

const BodyComponent = <T, K extends keyof T>({
  data,
  dataColumns,
  tableTitle,
  editIndex,
}: TBodyComponent<T, K>) => {
  const renderField = (elm: T, col: ITableColumn<T, K>, elmIndex: number) => {
    if (col.render) {
      return col.render(elm, elmIndex);
    }

    if (col.key) {
      return elm[col.key] as ReactNode;
    }

    return '';
  };

  return (
    <TableBody>
      {data?.map((elm, elmIndex) => (
        <TableRow key={`column_${tableTitle}_${elmIndex}`}>
          {dataColumns?.map((col) => (
            <TableCell key={col.id} component="th" scope="row">
              {elmIndex === editIndex && col?.editableField
                ? col.editableField(elm, elmIndex)
                : renderField(elm, col, elmIndex)}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};

export const HeadComponent = <T, K extends keyof T>({
  dataColumns,
  tableTitle,
  onClickSorting,
}: THeadComponent<T, K>) => {
  return (
    <TableHead>
      <TableRow>
        {dataColumns.map((column, idx) => (
          <TableCell
            key={`header_${tableTitle}_${idx}`}
            align={column?.align}
            style={{ width: column?.width }}
          >
            {column?.sortDirection ? (
              <TableSortLabel
                sx={{ color: `#506B82 !important` }}
                active
                direction={column?.sortDirection}
                onClick={() => {
                  if (column.sortDirection && column.key && onClickSorting) {
                    onClickSorting({
                      key: column.key,
                    });
                  }
                }}
              >
                {column?.label}
              </TableSortLabel>
            ) : (
              column?.label
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

interface ITable<T, K extends keyof T> {
  tableTitle: string;
  columns: Array<ITableColumn<T, K>>;
  rows: Array<T>;
  onSearch?: (
    value: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  editIndex?: number;
  onClickSorting?: (value: { key: K }) => void;
  onAddNew?: () => void;
  addButton?: boolean;
  tableHeader?: boolean;
  pagination?: boolean;
}

export const Table = <T, K extends keyof T>({
  tableTitle,
  columns,
  rows,
  onSearch,
  editIndex,
  onClickSorting,
  onAddNew,
  addButton,
  tableHeader,
  pagination,
}: ITable<T, K>) => {
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(10);
  const [page, setPage] = React.useState(0);

  return (
    <>
      <Box sx={{ backgroundColor: 'white', borderRadius: '4px' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '25px 16px',
            color: '#143551',
          }}
        >
          <Typography fontSize="20px" fontWeight="bold">
            {tableTitle}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              height: '40px',
            }}
          ></Box>
        </Box>

        <TableContainer component={Paper} elevation={0}>
          <TableMui
            sx={{ minWidth: 500 }}
            aria-label="custom pagination table"
            id={tableTitle}
          >
            <HeadComponent
              dataColumns={columns}
              tableTitle={tableTitle}
              onClickSorting={onClickSorting}
            />
            <BodyComponent
              dataColumns={columns}
              data={rows}
              tableTitle={tableTitle}
              editIndex={editIndex}
            />

            {pagination && (
              <TableFooter>
                <TableRow>
                  <TablePaging
                    dataLength={rows.length}
                    rowsPerPage={rowsPerPage}
                    setRowsPerPage={setRowsPerPage}
                    page={page}
                    setPage={setPage}
                  />
                </TableRow>
              </TableFooter>
            )}
          </TableMui>
        </TableContainer>
      </Box>
    </>
  );
};
