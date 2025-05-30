import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { editEmployee } from '../../API/items-edit';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function EditEmployee({ open, employee, onClose }) {
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
        password: '',
        phone: employee.phone || '',
        initialBalance: employee.initialBalance || '',
        role: employee.role || '',
        isAdmin: employee.isAdmin ? 'true' : 'false',
      });
    }
  }, [employee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await editEmployee({ ...form, _id: employee._id });
      alert('Employee edited!');
      onClose();
    } catch (err) {
      alert(err.message);
    }
  };

  if (!employee) return null;

  return (
    <Dialog open={open} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Edit Employee</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please update the employee details.
          </DialogContentText>
          <TextField
            margin="dense"
            id="email"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={form.email}
            onChange={handleChange}
            required
          />
          <TextField
            margin="dense"
            id="name"
            name="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={form.name}
            onChange={handleChange}
            required
          />
          <TextField
            margin="dense"
            id="password"
            name="password"
            label="Password (leave blank to keep current)"
            type="password"
            fullWidth
            variant="standard"
            value={form.password}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            id="phone"
            name="phone"
            label="Phone"
            type="text"
            fullWidth
            variant="standard"
            value={form.phone}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            id="initialBalance"
            name="initialBalance"
            label="Initial Balance"
            type="text"
            fullWidth
            variant="standard"
            value={form.initialBalance}
            onChange={handleChange}
          />
          <Box sx={{ minWidth: 120, mt: 2, mb: 2 }}>
            <InputLabel id="role-label">Role</InputLabel>
            <Select
              labelId="role-label"
              id="role"
              name="role"
              value={form.role}
              label="Role"
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value="Accounting">Accounting</MenuItem>
              <MenuItem value="Marketing & Sale">Marketing & Sale</MenuItem>
              <MenuItem value="Logistic">Logistic</MenuItem>
            </Select>
          </Box>
          <FormLabel id="isAdmin">Admin or Not?</FormLabel>
          <RadioGroup
            aria-labelledby="isAdmin"
            name="isAdmin"
            id="isAdmin"
            value={form.isAdmin}
            onChange={handleChange}
            row
          >
            <FormControlLabel value="false" control={<Radio />} label="Not Admin" />
            <FormControlLabel value="true" control={<Radio />} label="Admin" />
          </RadioGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit">Save</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
