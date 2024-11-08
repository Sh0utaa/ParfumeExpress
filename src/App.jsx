import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import './App.css'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import { AuthProvider } from './utils/AuthContext';
import Account from './pages/Account'

function App() {

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
        <Navbar />
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path='/account' element={<Account />}></Route>


          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
