import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import './App.css'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import { AuthProvider } from './utils/AuthContext';
import Account from './pages/Account'
import ProtectedRoutes from './utils/ProtectedRoutes'
import Cart from './pages/Cart'
import About from './pages/About'
import Product from './pages/Product'

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
            <Route path="/about" element={<About />}></Route>
            <Route path="/product" element={<Product />}></Route>

            <Route element={<ProtectedRoutes/>}>
              <Route path='/cart' element={<Cart />}></Route>
              <Route path='/account' element={<Account />}></Route>
            </Route>

          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
