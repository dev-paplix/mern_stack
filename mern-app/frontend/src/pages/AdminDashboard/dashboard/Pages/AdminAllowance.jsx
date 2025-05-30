import { Box } from "@mui/material"
import AllowanceTable from "../components/AllowanceTable"
import AddAllowanceButton from "../components/AddAllowanceButton"


const AdminAllowance = () => {
  return (
    <div>
       <h1>Allowance Table</h1>
       <AllowanceTable />
       <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <AddAllowanceButton />
            </Box>
    </div>
  )
}

export default AdminAllowance

