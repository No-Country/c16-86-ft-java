import axios from "axios";
import { useState,useEffect } from "react";
import { createContext } from "react";

const AuthContext = createContext()

function AuthProvider({children}) {

    const [auth,setAuth]=useState({
    })
    
    const authUser= async (dataUser)=>{
        const configuracion = {
            headers:{
                'Content-Type':'application/json'
            }
        }

        try {
            const {data} = await axios.post(URL_LOGIN,dataUser,configuracion)
            setAuth(data)
        }catch(error) {
            return error
        }
    }

    
    return (
        <AuthContext.Provider
            value={{
                auth,
                authUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export{
    AuthContext
}

export default AuthProvider;
