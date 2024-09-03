import { useState } from 'react'
import {BrowserRouter, Route , Routes} from "react-router-dom"
import Home from './pages/home.jsx'
import Login from './components/login'
import Register from './components/register'
import './App.css'
import Profile from './components/profile'
import HeritageTableList from './components/HeritageTableList.jsx'
import CulturalDetail from './components/cardDetailPage.jsx'

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/heritage" element={<HeritageTableList/>} />
      <Route path="/site/:id" element={<CulturalDetail />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
