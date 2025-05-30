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
import { addEmployee } from '../../API/items-add';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';



export default function AddEmployeeButton() {



  const [role, setRole] = React.useState('');

  const handleChange = (event) => {
    setRole(event.target.value);
  };



  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            component: 'form',
            onSubmit: async (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              console.log(formJson);
              try {
                await addEmployee(formJson);
                alert('Employee added!');
                handleClose();
              } catch (err) {
                alert(err.message);
              }
            },
          },
        }}
      >
        <DialogTitle>Add Employee Form</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter details to register a new employee.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="email"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />
        <TextField
            autoFocus
            required
            margin="dense"
            id="password"
            name="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            // required
            margin="dense"
            id="phone"
            name="phone"
            label="Phone"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            // required
            margin="dense"
            id="initialBalance"
            name="initialBalance"
            label="Initial Balance"
            type="text"
            fullWidth
            variant="standard"
          />
            <Box sx={{ minWidth: 120, mt : 2,  mb: 2 }}>
    
                <InputLabel id="role">Role</InputLabel>
                <Select
                  labelId="role"
                  id="role"
                  name="role"
                  value={role}
                  label="Role"
                  onChange={handleChange}
                >
                  <MenuItem value="Accounting">Accounting</MenuItem>
                  <MenuItem value="Marketing & Sale">Marketing & Sale</MenuItem>
                  <MenuItem value="Logistic">Logistic</MenuItem>
                </Select>
       
            </Box>


            <FormLabel id="isAdmin">Admin or Not?</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="isAdmin"
                id="isAdmin"
              >
                <FormControlLabel value="false" control={<Radio />} label="Not Admin" />
                <FormControlLabel value="true" control={<Radio />} label="Admin" />

              </RadioGroup>
         
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
