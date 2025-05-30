import EquipmentTable from "../components/EquipmentComponent"
import AddEquipmentButton from "../components/AddEquipmentButton.jsx"
import Box from '@mui/material/Box';

const AdminEquipment = () => {
  return (
    <div>
      <h1>Equipment Table</h1>
      <EquipmentTable/>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <AddEquipmentButton />
      </Box>
    </div>
  )
}

export default AdminEquipment
