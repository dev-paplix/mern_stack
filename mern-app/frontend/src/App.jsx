import { Routes, Route } from 'react-router-dom'
import SingIn from './pages/Auth/signIn'
import DashboardAdmin from './pages/AdminDashboard/dashboard/DashboardAdmin'
import EmployeeDashboard from './pages/EmployeeDashboard/EmployeeDashboard'
import ProtectedRoute from './pages/AdminDashboard/dashboard/components/ProtectedRoute.jsx'
import AccountingDashboard from './pages/AccountingDashboard/dashboard/Pages/AccountingDashboard.jsx'

import './App.css'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SingIn />} />
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute adminOnly={true}>
            <DashboardAdmin />
          </ProtectedRoute>
        }
      />
      <Route
        path="/employee/dashboard"
        element={
          <ProtectedRoute>
            <EmployeeDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/accounting/dashboard"
        element={
          <ProtectedRoute>
            <AccountingDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default App;
