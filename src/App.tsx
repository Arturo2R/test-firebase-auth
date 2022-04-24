import * as React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import {Home} from "./Home"
import { Register } from "./Register"
import { Login } from "./Login"
import { AuthProvider } from "./context/authContext"

export default function App() {
  return (
      <AuthProvider>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
    </Routes>
      </AuthProvider>

  )
}