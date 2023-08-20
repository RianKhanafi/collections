import React from 'react';

import {
  Button,
  TableCell,
  TablePagination,
  Typography,
  Box,
} from '@mui/material';

interface TablePaginationActionsProps {
  count: number;
  page: number;

  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const { count, page, onPageChange } = props;

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        margin: '12px 16px',
      }}
    >
      <Button
        variant="text"
        sx={{
          width: '49px',
          border: '1px solid',
          borderColor: '#CFCFCF',
          borderRadius: '30px 0px 0px 30px',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#506B82',
          borderRight: 'none',
          cursor: 'pointer',
        }}
        onClick={handleBackButtonClick}
      >
        <Box sx={{ padding: 0, lineHeight: 0 }}>{'<'}</Box>
      </Button>

      <Box
        sx={{
          padding: '10px 25px 10px 25px',
          border: '1px solid',
          width: '100px',
          textAlign: 'center',
          fontWeight: 500,
          fontSize: '14px',
          borderColor: '#CFCFCF',
          color: '#506B82',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {page + 1} of {count}
      </Box>

      <Button
        variant="text"
        sx={{
          width: '49px',
          border: '1px solid',
          borderColor: '#CFCFCF',
          borderRadius: '0px 30px 30px 0px',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#CDF1FC',
          borderLeft: 'none',
          cursor: 'pointer',
        }}
        onClick={handleNextButtonClick}
      >
        <Box sx={{ padding: 0, lineHeight: 0 }}>{'>'}</Box>
      </Button>
    </Box>
  );
}

interface ITablePaging {
  dataLength: number;
  rowsPerPage: number;
  setRowsPerPage: any;
  page: number;
  setPage: any;
}
const TablePaging = ({
  dataLength,
  rowsPerPage,
  setRowsPerPage,
  page,
  setPage,
}: ITablePaging) => {
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableCell
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: '74px',
          justifyContent: 'center',
          paddingLeft: '15px',
          fontSize: '14px',
          color: '#506B82',
        }}
      >
        <Box>
          <Typography
            sx={{
              position: 'absolute',
              marginTop: '-10px',
              marginLeft: '-25px',
            }}
          >
            {dataLength < rowsPerPage ? dataLength : rowsPerPage} of{' '}
            {dataLength} users
          </Typography>
        </Box>
      </TableCell>
      <TablePagination
        count={dataLength}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        //   component="div"
        labelDisplayedRows={() => ''}
        labelRowsPerPage=""
        rowsPerPageOptions={[]}
        ActionsComponent={TablePaginationActions}
      />
    </>
  );
};

export default TablePaging;
