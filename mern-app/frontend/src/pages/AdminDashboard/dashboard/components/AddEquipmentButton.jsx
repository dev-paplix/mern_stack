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
import { addEquipment } from '../../API/equipment-add';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';


export default function AddEquipmentButton() {


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
        Request New Equipment
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
                await addEquipment(formJson);
                alert('Equipment added!');
                handleClose();
              } catch (err) {
                alert(err.message);
              }
            },
          },
        }}
      >
        <DialogTitle>Add Equipment Form</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter details to request a new equipment.
          </DialogContentText>
        <TextField
            autoFocus
            required
            margin="dense"
            id="userId"
            name="userId"
            label="User"
            type="text"
            fullWidth
            variant="standard"
          />
        <TextField
            autoFocus
            required
            margin="dense"
            id="equipmentName"
            name="equipmentName"
            label="Equipment Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="quantity"
            name="quantity"
            label="Quantity"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="reason"
            name="reason"
            label="Reason"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="equipmentPrice"
            name="equipmentPrice"
            label="Equipment Price"
            type="text"
            fullWidth
            variant="standard"
          />
            <Box sx={{ minWidth: 120, mt : 2,  mb: 2 }}>
    
                <InputLabel id="urgency">Urgency</InputLabel>
                <Select
                  labelId="urgency"
                  id="urgency"
                  name="urgency"
                  value={role}
                  label="urgency"
                  onChange={handleChange}
                >
                  <MenuItem value="Low">Low</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="High">High</MenuItem>
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
