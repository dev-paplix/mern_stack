import LeaveTable from "../components/LeaveTable"
import AddEquipmentButton from "../components/AddEquipmentButton.jsx"
import Box from '@mui/material/Box';

const AdminEquipment = () => {
  return (
    <div>
      <h1>Equipment Table</h1>
      <LeaveTable/>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <MyCard />
      </Box>
    </div>
  )
}

export default AdminEquipment
