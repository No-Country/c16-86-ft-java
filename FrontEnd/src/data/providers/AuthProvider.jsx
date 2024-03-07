import { useState,useEffect } from "react";

import { createContext } from "react";

const AuthContext = createContext()

function AuthProvider({children}) {
    const [registros]=useState({
        'admin':{
            'type':'admin',
            'id':'652ed2fd24a937fb6461faa0'
        },
        'parker':{
            'type':'parker',
            'id':'a937fb6461faa0652ed2fd24'
        }
    })

    const [auth,setAuth]=useState({})

    return (
        <AuthContext.Provider
            value={{
                registros,
                auth,
                setAuth
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
