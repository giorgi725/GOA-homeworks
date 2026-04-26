import React from "react";
import AuthContext from "./AuthContext";

function AuthProvider({ children, email, password }) {
    return (
        <AuthContext.Provider value={{ email, password }}>
        {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;