import { Routes, Route, Link } from 'react-router-dom'
import SingIn from './pages/Auth/signIn'

import './App.css'
import DashboardAdmin from './pages/AdminDashboard/dashboard/DashboardAdmin'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SingIn />} />
        <Route path="/admin/dashboard" element={<DashboardAdmin />} />
      </Routes>
    </>
  )
}

export default App;
