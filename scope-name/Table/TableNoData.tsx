import { TableCell, TableRow, Typography } from '@mui/material';

const TableNoData = ({ columnLength }: { columnLength: number }) => (
  <TableRow sx={{ p: 0, m: 0 }}>
    <TableCell sx={{ p: 0, m: 0, border: 'none' }} colSpan={columnLength}>
      <Typography fontSize="20px" textAlign="center" my="150px">
        No Data
      </Typography>
    </TableCell>
  </TableRow>
);

export default TableNoData;
