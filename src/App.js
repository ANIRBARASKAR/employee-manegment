import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar'
import Add_Employee from './pages/Add_Employee'
import All_Employee from './pages/All_Employee'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
export default function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/addEmployee' element={<Add_Employee/>}/>
          <Route path='/allEmployee' element={<All_Employee/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
