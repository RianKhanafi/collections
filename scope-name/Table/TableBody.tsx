import { TableBody, TableRow, TableCell } from '@mui/material';
import { Box } from '@mui/system';
import { ReactNode } from 'react';
import { colors } from 'src/configs/theme';
import TableLoading from './TableLoading';
import TableNoData from './TableNoData';
import { ITableColumn } from './interface';

interface TBodyComponent<T, K extends keyof T> {
  data: Array<T>;
  dataColumns: Array<ITableColumn<T, K>>;
  tableTitle: string;
  editIndex?: number | null;
  isLoading?: boolean;
  tableWidth: number | null;
}

const BodyComponent = <T, K extends keyof T>({
  data,
  dataColumns,
  tableTitle,
  editIndex,
  isLoading,
  tableWidth,
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
    <TableBody
      sx={{
        position: 'relative',
        '& :hover': {
          backgroundColor: data.length ? colors.primaryLighten3 : 'white',
          cursor: data.length ? 'pointer' : 'default',
          '& .table-settings-visibility': {
            visibility: 'visible',
          },
        },
      }}
    >
      {isLoading && <TableLoading />}
      {!data?.length && <TableNoData columnLength={dataColumns.length} />}
      {data.map((elm, elmIndex) => (
        <TableRow key={`column_${tableTitle}_${elmIndex}`}>
          {dataColumns?.map((col, i) => (
            <TableCell
              key={col.id}
              component="th"
              scope="row"
              sx={(theme) => ({
                [theme.breakpoints.down('xl')]: {
                  width: col.width,
                  maxWidth: `calc(${tableWidth}/${dataColumns.length})`,
                },
                ...(i !== 0 && { padding: '2px' }),
                textAlign: col.align,
              })}
            >
              <Box
                sx={(theme) => ({
                  fontSize: '12.5px',
                  overflowWrap: 'anywhere',
                  [theme.breakpoints.down('lg')]: { fontSize: '11px' },
                  [theme.breakpoints.down('xl')]: {
                    width: col.width,
                    maxWidth: `calc(${tableWidth}/${dataColumns.length})`,
                  },
                })}
              >
                {elmIndex === editIndex && col?.editableField ? (
                  col.editableField(elm, elmIndex)
                ) : (
                  <Box
                    className="table-settings-visibility"
                    sx={{
                      visibility: col.key === 'setting' ? 'hidden' : 'visible',
                    }}
                  >
                    {renderField(elm, col, elmIndex)}
                  </Box>
                )}
              </Box>
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};

export default BodyComponent;
