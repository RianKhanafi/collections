import React, { ChangeEvent, useRef } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TableRow from '@mui/material/TableRow';
import { Button, Typography } from '@mui/material';
import { colors } from 'src/configs/theme';
import TablePaging from './TablePagination';
import { ITableColumn } from './interface';
import InputSearch from '../InputSearch';
import AppIcon from '../AppIcon';
import BodyComponent from './TableBody';
import { HeadComponent } from './TableHeader';

interface IEnhancedTable<T, K extends keyof T> {
  tableTitle: string;
  columns: Array<ITableColumn<T, K>>;
  rows: Array<T>;
  onSearch?: (
    value: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  editIndex?: number | null;
  onClickSorting?: (value: { key: K }) => void;
  onAddNew?: () => void;
  addButton?: boolean;
  tableHeader?: boolean;
  page?: number;
  setPage?: (val: number) => void;
  totalData?: number;
  isLoading?: boolean;
  paginationTitle?: string;
}

const EnhancedTable = <T, K extends keyof T>({
  tableTitle,
  columns,
  rows,
  onSearch,
  editIndex,
  onClickSorting,
  onAddNew,
  addButton,
  tableHeader,
  page,
  setPage,
  totalData,
  isLoading,
  paginationTitle,
}: IEnhancedTable<T, K>) => {
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(10);
  const refTable = useRef<any>();

  const tableWidth: number | null = refTable?.current?.offsetWidth;

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        borderRadius: '4px',
        position: 'relative',
      }}
    >
      {tableHeader && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '25px 16px',
            color: colors.textDarken,
            position: 'sticky',
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
          >
            <InputSearch onSearch={onSearch} />
            {addButton && (
              <Button
                size="small"
                startIcon={<AppIcon name="plus" color="white" />}
                sx={{
                  borderRadius: '4px',
                  ml: '8px',
                }}
                onClick={onAddNew}
                disabled={editIndex !== null}
              >
                Add Group
              </Button>
            )}
          </Box>
        </Box>
      )}

      <TableContainer
        component={Paper}
        elevation={0}
        ref={refTable}
        sx={{
          position: 'relative',
          borderCollapse: 'collapse',
          overflow: 'unset',
        }}
      >
        <Table
          aria-label="custom pagination table"
          id={tableTitle}
          sx={{
            position: 'relative',
            borderCollapse: 'collapse',
          }}
        >
          <HeadComponent
            dataColumns={columns}
            tableTitle={tableTitle}
            onClickSorting={onClickSorting}
            tableWidth={tableWidth}
          />

          <BodyComponent
            dataColumns={columns}
            data={rows}
            tableTitle={tableTitle}
            editIndex={editIndex}
            isLoading={isLoading}
            tableWidth={tableWidth}
          />

          <TableFooter>
            <TableRow sx={{ position: 'relative' }}>
              <TablePaging
                paginationTitle={paginationTitle}
                dataLength={totalData || 0}
                rowsPerPage={rowsPerPage}
                dataPageLength={rows.length}
                setRowsPerPage={setRowsPerPage}
                page={page!}
                setPage={setPage!}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default EnhancedTable;
