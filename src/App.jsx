import { Routes, Route } from 'react-router-dom'

import Home from './pages/home/home'
import Product from './pages/product/product'
import Checkout from './pages/checkout/checkout'

import './App.css'
import Navbar from './components/navbar/navbar'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<Home/>}/>
          <Route path='product/:id' element={<Product/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
