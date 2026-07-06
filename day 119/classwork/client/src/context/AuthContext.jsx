import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext)

export default useAuth;

const API_URL = 'http://localhost:3000/root/auth'

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        if(!user) {
            const savedUser = JSON.parse(localStorage.getItem("user")) || null
            if(savedUser) {
                setUser(savedUser)
            }
        } else {
            localStorage.setItem("user", JSON.stringify(user))
        }
    }, [user])

    const navigate = useNavigate();

    const register = async (account) => {
        try {
            const response = await fetch(API_URL + '/signup', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify(account)
            })
            const data = await response.json();
            if(!response.ok) {
                alert(data.message)
                return
            }

            alert("Account created successfully")
            setUser(data)
            navigate('/profile')

        } catch (err) {
            console.log(err)
        }
    }
    
    const login = async (account) => {
        try {
            const response = await fetch(API_URL + '/login', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(account)
            })
            
            const data = await response.json();
            if(!response.ok) {
                alert(data.message)
                return
            }

            alert("Logged in successfully")
            setUser(data)
            navigate('/profile')

        } catch (err) {
            console.log(err)
        }
    }

    const logout = () => {
        setUser(null)
        localStorage.setItem('user', null)
    }


    return (
        <AuthContext.Provider value={{user, register, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}