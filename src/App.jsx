import { Route, Routes } from 'react-router-dom'
import './App.css'
import MenuUser from './users/MenuUser'
import Auth from './pages/Auth'
import AdminMenu from './admin/AdminMenu'

function App() {

  return (
    <>
      <Routes>
        <Route path='/register' element={<Auth register />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/' element={<MenuUser />} />
        <Route path='/adminmenu' element={<AdminMenu />} />
      </Routes>
    </>
  )
}

export default App
