import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import './App.css'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import { AuthProvider } from './utils/AuthContext';

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


          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
