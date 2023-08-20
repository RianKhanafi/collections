import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import SortingIcon from 'src/assets/icons/sorting.svg';
import { colors } from 'src/configs/theme';
import { Box } from '@mui/system';
import { getAppBarHeight } from 'src/utils/common';
import { ITableColumn } from './interface';

interface THeadComponent<T, K extends keyof T> {
  dataColumns: Array<ITableColumn<T, K>>;
  tableTitle: string;
  onClickSorting?: (value: { key: K }) => void;
  tableWidth: number | null;
}

export const HeadComponent = <T, K extends keyof T>({
  dataColumns,
  tableTitle,
  onClickSorting,
  tableWidth,
}: THeadComponent<T, K>) => {
  return (
    <TableHead>
      <TableRow
        sx={{
          position: 'sticky',
          top: `calc(${getAppBarHeight()} + 90px)`,
          zIndex: 1,
          backgroundColor: 'white',
          boxShadow: '0px -3px 0px 0px #EEE inset',
        }}
      >
        {dataColumns.map((column, idx) => (
          <TableCell
            key={`header_${tableTitle}_${idx}`}
            align={column?.align}
            sx={(theme) => ({
              flex: 1,
              [theme.breakpoints.down('xl')]: {
                width: column.width,
                maxWidth: `calc(${tableWidth}/${dataColumns.length})`,
              },
              ...(idx !== 0 && { padding: '2px' }),
            })}
          >
            <Box
              sx={(theme) => ({
                flex: 1,
                fontSize: '14px',
                [theme.breakpoints.down('lg')]: {
                  fontSize: '12px',
                },
                [theme.breakpoints.down('xl')]: {
                  width: column.width,
                  maxWidth: `calc(${tableWidth}/${dataColumns.length})`,
                },
              })}
            >
              {column?.sortDirection ? (
                <TableSortLabel
                  sx={{ color: `${colors.lsPrimary3} !important` }}
                  active
                  direction={column?.sortDirection}
                  onClick={() => {
                    if (column.sortDirection && column.key && onClickSorting) {
                      onClickSorting({
                        key: column.key,
                      });
                    }
                  }}
                  IconComponent={SortingIcon}
                >
                  {column?.label}
                </TableSortLabel>
              ) : (
                column?.label
              )}
            </Box>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
