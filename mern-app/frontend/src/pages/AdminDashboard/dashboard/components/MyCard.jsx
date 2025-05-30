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
import { addLeave } from '../../API/items-addleave';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';



export default function MyCard() {



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
                await addLeave(formJson);
                alert('Leave Applied!');
                handleClose();
              } catch (err) {
                alert(err.message);
              }
            },
          },
        }}
      >
        <DialogTitle>Apply Leave Form</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter details to apply for leave.
          </DialogContentText>
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
            id="leaveReason"
            name="leaveReason"
            label="leaveReason"
            type="text"
            fullWidth
            variant="standard"
          />
        <TextField
            autoFocus
            required
            margin="dense"
            id="durationLeave"
            name="durationLeave"
            label="durationLeave"
            type="text"
            fullWidth
            variant="standard"
          />
           <Box sx={{ minWidth: 120, mt : 2,  mb: 2 }}>
    
    <InputLabel id="typeLeave">Role</InputLabel>
    <Select
      labelId="typeLeave"
      id="typeLeave"
      name="typeLeave"
      label="typeLeave"
      onChange={handleChange}
    >
      <MenuItem value="Accounting">Accounting</MenuItem>
      <MenuItem value="Marketing & Sale">Marketing & Sale</MenuItem>
      <MenuItem value="Logistic">Logistic</MenuItem>
    </Select>

</Box>
        
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
