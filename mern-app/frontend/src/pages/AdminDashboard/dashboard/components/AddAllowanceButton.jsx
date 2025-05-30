import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import MenuItem from '@mui/material/MenuItem';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { addEmployee } from '../../API/items-add';
import { addAllowance } from '../../API/items-addallowance';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';



export default function AddAllowanceButton() {



  const [user, setUser] = React.useState('');

  const handleChange = (event) => {
    setUser(event.target.value);
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
                await addAllowance(formJson);
                alert('Allowance added!');
                handleClose();
              } catch (err) {
                alert(err.message);
              }
            },
          },
        }}
      >
        <DialogTitle>Add Allowance Form</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter details to add allowance.
          </DialogContentText>
            <Box sx={{ minWidth: 120, mt : 2,  mb: 2 }}>
    
                <InputLabel id="user">Person Name</InputLabel>
                <Select
                  labelId="user"
                  id="userId"
                  name="userId"
                  value={user}
                  label="Name"
                  onChange={handleChange}
                >
                  <MenuItem value="6836b959ce5a559db191806b">milo</MenuItem>
                  <MenuItem value="6839247e800622b59d9ac23c">kopi</MenuItem>
  
                </Select>
       
            </Box>
        <TextField
            autoFocus
            required
            margin="dense"
            id="employeesAllowanceAmount"
            name="employeesAllowanceAmount"
            label="Amount"
            type="number"
            fullWidth
            variant="standard"
          />
        <TextField
            autoFocus
            required
            margin="dense"
            id="employeesAllowanceReason"
            name="employeesAllowanceReason"
            label="Reason"
            type="text"
            fullWidth
            variant="standard"
          />
           <FormLabel id="extra">Extra for Future?</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="employeesExtra"
                id="employeesExtra"
              >
                <FormControlLabel value="false" control={<Radio />} label="No" />
                <FormControlLabel value="true" control={<Radio />} label="Yes" />

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
