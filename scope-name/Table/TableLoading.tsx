import { CircularProgress, TableCell, TableRow } from '@mui/material';
import { Box } from '@mui/system';

const TableLoading = () => (
  <TableRow sx={{ p: 0, m: 0 }}>
    <TableCell sx={{ p: 0, m: 0, border: 'none' }}>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          position: 'absolute',
          backgroundColor: 'rgba(0,0,0,0.05)',
        }}
      >
        <CircularProgress />
      </Box>
    </TableCell>
  </TableRow>
);

export default TableLoading;
