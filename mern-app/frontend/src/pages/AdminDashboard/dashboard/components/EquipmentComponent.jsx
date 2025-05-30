import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import getEquipment from '../../API/getEquipment';
import { useState, useEffect }  from 'react';

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

export default function EquipmentTable() {
    // fetching data
    const[data, setData] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
      try {
        const equipments = await getEquipment();
        setData(equipments);
      } catch (error) {
        console.error('Error fetching equipments:', error);
      }
    };
    fetchData();
    }
  );
  console.log('data:', data);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Equipment Details</TableCell>
            <TableCell>Equipment Name</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Reason</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Urgency</TableCell>
            <TableCell>Equipment Price (RM)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row._id}
              </TableCell>
              <TableCell>{row.equipmentName}</TableCell>
              <TableCell align="center">{row.quantity}</TableCell>
              <TableCell>{row.reason}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.urgency}</TableCell>
              <TableCell align="center">{row.equipmentPrice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}