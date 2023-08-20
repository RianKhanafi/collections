import { Button, TableCell, TablePagination, Typography } from '@mui/material';
import AppIcon from 'src/components/AppIcon';
import { colors } from 'src/configs/theme';
import { Box } from '@mui/system';

interface TablePaginationActionsProps {
  count: number;
  page: number;

  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const { count, page, onPageChange } = props;

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, page + 1);
  };

  const currentPage = page + 1;

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
          borderColor: colors.border,
          borderRadius: '30px 0px 0px 30px',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: colors.lsPrimary3,
          borderRight: 'none',
          cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
        }}
        disabled={currentPage === 1}
        onClick={handleBackButtonClick}
      >
        <Box sx={{ padding: 0, lineHeight: 0 }}>
          <AppIcon
            name="caret-down-2"
            width={16}
            height={16}
            otherStyles={{
              padding: 0,
              transform: 'rotate(90deg)',
            }}
          />
        </Box>
      </Button>

      <Box
        sx={{
          padding: '10px 25px 10px 25px',
          border: '1px solid',
          width: '100px',
          textAlign: 'center',
          fontWeight: 500,
          fontSize: '14px',
          borderColor: colors.border,
          color: colors.lsPrimary3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {currentPage} of {count}
      </Box>

      <Button
        variant="text"
        sx={{
          width: '49px',
          border: '1px solid',
          borderColor: colors.border,
          borderRadius: '0px 30px 30px 0px',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: colors.lsPrimary3,
          borderLeft: 'none',
          cursor: currentPage === count ? 'not-allowed' : 'pointer',
        }}
        disabled={currentPage === count}
        onClick={handleNextButtonClick}
      >
        <Box sx={{ padding: 0, lineHeight: 0 }}>
          <AppIcon
            name="caret-down-2"
            width={16}
            height={16}
            otherStyles={{
              margin: 'auto 0px',
              transform: 'rotate(-90deg)',
            }}
          />
        </Box>
      </Button>
    </Box>
  );
}

interface ITablePaging {
  dataLength: number;
  rowsPerPage: number;
  setRowsPerPage: any;
  page: number;
  setPage: (val: number) => void;
  paginationTitle?: string;
  dataPageLength?: number;
}
const TablePaging = ({
  dataLength,
  rowsPerPage,
  setRowsPerPage,
  page,
  setPage,
  paginationTitle,
  dataPageLength,
}: ITablePaging) => {
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage + 1);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const totalPage = dataLength < 10 ? 1 : Math.round(dataLength / rowsPerPage);

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
          color: colors.lsPrimary3,
          border: 'none',
        }}
      >
        <Box>
          <Typography
            sx={{
              position: 'absolute',
              marginTop: '-10px',
              left: 15,
            }}
          >
            {dataPageLength} of {dataLength} {paginationTitle || ''}
          </Typography>
        </Box>
      </TableCell>
      <TablePagination
        sx={{ border: 'none' }}
        count={totalPage}
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
