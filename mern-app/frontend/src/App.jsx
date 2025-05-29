import { Routes, Route, Link } from 'react-router-dom'
import SingIn from './pages/Auth/signIn'
import Zain from './pages/TrainingPages/Zain'
import Izzah from './pages/TrainingPages/Izzah'
import Keyin from './pages/TrainingPages/Keyin'
import './App.css'

const App = () => {
  return (
    <>
      <Routes>

        <Route path="/" element={<SingIn />} />
        <Route path="/training/zain" element={<Zain />} />
        <Route path="/training/izzah" element={<Izzah />} />
        <Route path="/training/keyin" element={<Keyin />} />

      </Routes>
    </>
  )
}

export default App;
