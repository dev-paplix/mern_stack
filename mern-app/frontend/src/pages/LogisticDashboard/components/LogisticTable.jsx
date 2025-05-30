import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

function createData(delivery, transport, movers, solutions, loads) {
  return { delivery, transport, movers, solutions, loads };
}

const rows = [
  createData('70+ countries', 'transport 1', 'movers 1', 'solutions 1', 'load 1'),
  createData('50+ countries', 'transport 2', 'movers 2', 'solutions 2', 'load 2'),
  createData('100+ countries', 'transport 3', 'movers 3', 'solutions 3', 'load 3'),
  createData('60+ countries', 'transport 4', 'movers 4', 'solutions 4', 'load 4'),
  createData('55+ countries', 'transport 5', 'movers 5', 'solutions 5', 'load 5'),
];

export default function LogisticTable() {
  return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>Total Delivery</StyledTableCell>
                <StyledTableCell>National Transport</StyledTableCell>
                <StyledTableCell>Freight and Movers</StyledTableCell>
                <StyledTableCell>Transport Solution</StyledTableCell>
                <StyledTableCell>Sketchers Loads</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <StyledTableRow key={row.delivery}>
                <StyledTableCell component="th" scope="row">
                    {row.delivery}
                </StyledTableCell>
                <StyledTableCell align="center">{row.transport}</StyledTableCell>
                <StyledTableCell align="center">{row.movers}</StyledTableCell>
                <StyledTableCell align="center">{row.solutions}</StyledTableCell>
                <StyledTableCell align="center">{row.loads}</StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
  );
}
