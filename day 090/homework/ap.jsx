import React from "react";
import AuthProvider from "./AuthProvider";
import AuthConsumer from "./AuthConsumer";

function App() {
    return (
        <div>
        <AuthProvider email="user1@gmail.com" password="1234">
            <AuthConsumer />
        </AuthProvider>

        <AuthProvider email="user2@gmail.com" password="abcd">
            <AuthConsumer />
        </AuthProvider>

        <AuthProvider email="user3@gmail.com" password="pass123">
            <AuthConsumer />
        </AuthProvider>
        </div>
    );
}

export default App;