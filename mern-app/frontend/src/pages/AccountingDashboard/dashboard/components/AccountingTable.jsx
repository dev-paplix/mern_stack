import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(contract, laborhours, laborcost, misc, minday) {
  return { contract, laborhours, laborcost, misc, minday };
}

const rows = [
  createData('Contract 1', 140, 20, 1000, 14),
  createData('Contract 2', 230, 25, 200, 30),
  createData('Contract 3', 100, 35, 200, 6),
  createData('Contract 4', 140, 40, 200, 14),
];

export default function AccountingTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Contract Type</TableCell>
            <TableCell align="right">Labor Hours</TableCell>
            <TableCell align="right">Labor Cost</TableCell>
            <TableCell align="right">Misc</TableCell>
            <TableCell align="right">Man Day(s)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.contract}
              </TableCell>
              <TableCell align="right">{row.laborhours}</TableCell>
              <TableCell align="right">{row.laborcost}</TableCell>
              <TableCell align="right">{row.misc}</TableCell>
              <TableCell align="right">{row.minday}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}