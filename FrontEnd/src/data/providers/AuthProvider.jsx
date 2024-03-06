import axios from "axios";
import { useState,useEffect } from "react";
import { createContext } from "react";

const AuthContext = createContext()

function AuthProvider({children}) {
    
    const [auth,setAuth]=useState({
        type:'parker',
        id :'das3-ada34-dasd3'
    })

/*     useEffect(()=>{
        const authUser= async ()=>{
            const configuracion = {
                headers:{
                    'Content-Type':'application/json'
                }
            }

            try {
                const {data} = await axios(URL_verificar_tipo_usuario,configuracion)
                setAuth(data)
            }catch(error) {
                console.log(error)
            }
        }
        authUser()
    },[]) */

    
    return (
        <AuthContext.Provider
            value={{
                auth
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
