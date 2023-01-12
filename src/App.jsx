
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/shared/Footer'
import Header from './components/shared/Header'
import ProtectedRoutes from './components/shared/ProtectedRoutes'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductInfo from './pages/ProductInfo'
import Purchases from './pages/Purchases'
import { getUserCart } from './store/slices/cart.slice'
import { getAllProducts } from './store/slices/products.slice'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
     dispatch(getAllProducts())
  }, [])

    useEffect(() => {
     const URL = 'https://e-commerce-api.academlo.tech/api/v1/users'
     const data = {
      firstName: "Javier",
      lastName: "Esquivel",
      email: "javesq10@gmail.com",
      password: "pass123",
      phone: "5544223311",
      role: "admin"
     }
     axios.post(URL, data)
     .then(res => console.log(res))
     .catch(err => console.log(err))
  }, []) 
   

  return (
    <div className="App">
       <Header />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:id' element={<ProductInfo />} />
        <Route element={<ProtectedRoutes />}>
              <Route path='/cart' element={<Cart />} />
              <Route path='/purchases' element={<Purchases />} />
        </Route>
       </Routes>
       <Footer />
    </div>
  )
}

export default App
