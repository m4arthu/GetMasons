import { createContext } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios"
export const authContext = createContext()

export const AuthProvider = ({children}) =>{
    const navigate = useNavigate()
    const baseUrl = import.meta.env.VITE_API_URL
    const isloged = () => {
        const token = localStorage.getItem("token")
        if(!token){
            return false
        } else {
            axios.defaults.headers.common['Authorization'] = token;
            return true
        }
    }
    
    const register = async (name,email,phone,local,password) => {
        try {
           const r  = await axios.post(baseUrl + "/register", {name,email,phone,local,password})
            return r

        } catch(e) {     
            return e
        }
    }

    const login = async (email,password) => {
        try {
            const r = await axios.post(baseUrl + "/login", {email,password})
             return r
        } catch(e){
            return e 
        }
    }

    const logOut = () => {
        navigate("/")
        localStorage.removeItem("token")
        axios.defaults.headers.common['Authorization'] = "";
    }
    return (
        <authContext.Provider value = {{isloged,register,login,logOut}}>
            {children}
        </authContext.Provider>
    )
}