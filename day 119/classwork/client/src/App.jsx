import { useEffect } from "react";
import useAuth from "./context/AuthContext";
import Register from "./pages/Registration";
import { Routes, Route } from 'react-router';
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Feed from "./pages/Feed";

function App () {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<h1>Home</h1>} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        
      </Routes>


    </>
  )
}

export default App;