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
import Filter from './pages/FIlter'
import { useState } from 'react'

function App() {

  const [isFilterbarActive, setFilterbarActive] = useState(false)

  const toggleFilterbar = () => {
    setFilterbarActive((prev) => !prev);
    // console.log("Sidebar visibility:", !isFilterbarActive);
  };

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
        <Navbar toggleFilterbar={toggleFilterbar} />
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/filter" element={<Filter toggleFilterbar={toggleFilterbar} isFilterbarActive={isFilterbarActive} />}></Route>

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
