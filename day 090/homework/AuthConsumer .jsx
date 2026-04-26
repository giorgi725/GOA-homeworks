import React, { useContext } from "react";
import AuthContext from "./AuthContext";

function AuthConsumer() {
    const { email, password } = useContext(AuthContext);

    return (
        <div>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        </div>
    );
}

export default AuthConsumer;


function AuthConsumer() {
    const { email, password } = useAuth();

    return (
        <div>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        </div>
    );
}

export default AuthConsumer;