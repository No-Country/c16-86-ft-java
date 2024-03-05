import { useState,useEffect } from "react";

import { createContext } from "react";

const AuthContext = createContext()

function AuthProvider({children}) {
    const [colaboradores,setColaboradores]=useState([])
    const [registros,setRegistros]=useState([])
    
    return (
        <AuthContext.Provider
            value={{
                colaboradores,
                setColaboradores,
                registros,
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
