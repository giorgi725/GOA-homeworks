import { Routes, Route } from "react-router-dom";

import Nav from "./Nav";
import ProtectedRoute from "./ProtectedRoute";

import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import VerificationPage from "./VerificationPage";
import AdminPanel from "./AdminPanel";
import Search from "./Search";

function App() {
    return (
        <>
        <Nav />

        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />

            <Route path="/register" element={<Register />} />

            <Route path="/verify" element={<VerificationPage />} />

            <Route path="/search" element={<Search />} />

            {/* 
            ProtectedRoute ამოწმებს არის თუ არა user ავტორიზებული.
            თუ არა → Navigate-ით გადაამისამართებს /login-ზე
            */}
            <Route
            path="/panel"
            element={
                <ProtectedRoute>
                <AdminPanel />
                </ProtectedRoute>
            }
            />
        </Routes>
        </>
    );
}

export default App;