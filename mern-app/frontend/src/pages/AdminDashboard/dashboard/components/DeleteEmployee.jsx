import * as React from 'react';
import Button from '@mui/material/Button';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { deleteEmployee } from '../../API/items-delete';


export default function DeleteEmployee({ open, employee, onClose }) {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    initialBalance: '',
    role: '',
    isAdmin: 'false',
  });

  React.useEffect(() => {
    if (employee) {
      setForm({
        name: employee.name || '',
        email: employee.email || '',
        password: employee.password || '',
        phone: employee.phone || '',
        initialBalance: employee.initialBalance || '',
        role: employee.role || '',
        isAdmin: employee.isAdmin ? 'true' : 'false',
      });
    }
  }, [employee]);



  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await deleteEmployee({ ...form, _id: employee._id });
      alert('Employee Deleted!');
      onClose();
    } catch (err) {
      alert(err.message);
    }
  };

  if (!employee) return null;

  return (
    <Dialog open={open} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Delete Employee</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you really want to delete it?
          </DialogContentText>
         
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit">Save</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
