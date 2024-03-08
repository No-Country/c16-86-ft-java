import axios from "axios";
import { useState,useEffect } from "react";
import { createContext } from "react";


const AuthContext = createContext()

function AuthProvider({children}) {

    const [registros,setRegistros]=useState({
        'admin':{
            'type':'admin',
            'id':'652ed2fd24a937fb6461faa0',
            'email':'admincorreo@gmail.com'
        },
        'parker':[]
    })

    const [auth,setAuth]=useState({})

    return (
        <AuthContext.Provider
            value={{
                registros,
                auth,
                setAuth,
                setRegistros
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
