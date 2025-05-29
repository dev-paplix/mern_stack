import { Routes, Route, Link } from 'react-router-dom'
import SingIn from './pages/Auth/signIn'

import './App.css'
import DashboardAdmin from './pages/AdminDashboard/dashboard/DashboardAdmin'
import EmployeeDashboard from './pages/EmployeeDashboard/EmployeeDashboard'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SingIn />} />
        <Route path="/admin/dashboard" element={<DashboardAdmin />} />
        <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
 =
      </Routes>
    </>
  )
}

export default App;
