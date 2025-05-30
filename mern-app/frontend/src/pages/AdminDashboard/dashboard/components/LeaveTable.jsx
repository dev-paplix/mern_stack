
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import getLeave from '../../API/getLeave';



const StyledTableCell = styled(TableCell)(({ theme }) => ({

  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function LeaveTable() {

  const [data, setData] = React.useState([]);

    React.useEffect(() => {
    const fetchData = async () => {
      try {
        const leaves = await getLeave();
        setData(leaves);
      } catch (error) {
        console.error('Error fetching leaves:', error);
      }
    };
    fetchData();
    }
  );
  console.log('data:', data);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Leave Details</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Leave Reason&nbsp;(@)</StyledTableCell>
            <StyledTableCell align="right">Leave Duration&nbsp;(+60)</StyledTableCell>
            <StyledTableCell align="right">Type of Leave&nbsp;(RM)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row._id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.user.name}</StyledTableCell>
              <StyledTableCell align="right">{row.leaveReason}</StyledTableCell>
              <StyledTableCell align="right">{row.durationLeave}</StyledTableCell>
              <StyledTableCell align="right">{row.typeLeave}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}