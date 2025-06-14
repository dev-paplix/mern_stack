import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import getEmployees from '../../API/getEmployees';
import EditIcon from '@mui/icons-material/Edit';
import EditEmployee from './EditEmployee';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteEmployee from './DeleteEmployee';


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
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomizedTables() {
  const [data, setData] = useState([]);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const employees = await getEmployees();
        setData(employees);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };
    fetchData();
  }, []); // <-- Fix: add dependency array

  const handleEditClick = (employee) => {
    setSelectedEmployee(employee);
    setEditOpen(true);
  };

  const handleDeleteClick = async (employee) => {
    setSelectedEmployee(employee);
    setDeleteOpen(true);
  };

  const handleEditClose = () => {
    setEditOpen(false);
    setSelectedEmployee(null);
  };

  const handleDeleteClose = () => {
    setDeleteOpen(false);
    setSelectedEmployee(null);
  };


  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Employee Details</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Email&nbsp;(@)</StyledTableCell>
              <StyledTableCell align="right">Phone&nbsp;(+60)</StyledTableCell>
              <StyledTableCell align="right">Initital Balance&nbsp;(RM)</StyledTableCell>
              <StyledTableCell align="right">Edit</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <StyledTableRow key={row._id}>
                <StyledTableCell component="th" scope="row">
                  {row._id}
                </StyledTableCell>
                <StyledTableCell align="right">{row.name}</StyledTableCell>
                <StyledTableCell align="right">{row.email}</StyledTableCell>
                <StyledTableCell align="right">{row.phone}</StyledTableCell>
                <StyledTableCell align="right">{row.initialBalance}</StyledTableCell>
                <StyledTableCell align="right">
                  <EditIcon
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleEditClick(row)}
                  />
                </StyledTableCell>
                <StyledTableCell align="right">
                  <DeleteIcon 
                    style={{ cursor: 'pointer' }} 
                    onClick={() => handleDeleteClick(row)}
                  /> 
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {editOpen && selectedEmployee && (
        <EditEmployee
          open={editOpen}
          employee={selectedEmployee}
          onClose={handleEditClose}
        />
      )}

      {deleteOpen && selectedEmployee && (
        <DeleteEmployee
          open={deleteOpen}
          employee={selectedEmployee}
          onClose={handleDeleteClose}
        />
      )}
    </>
  );
}