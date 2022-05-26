import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Nav } from './components/Nav'
import { Products } from './components/Products'
import {ProductsDetails} from './components/ProductsDetails'

function App() {
  

  return (
    <div className="App">
    
      <Nav/>
     <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/products" element={<Products/>}/>
<Route path='/products/:id' element={<ProductsDetails/>}  />

       </Routes>

     </div>
  )
}

export default App
