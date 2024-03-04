import { useState,useEffect } from "react";

import { createContext } from "react";

const AuthContext = createContext()

function AuthProvider({children}) {
    const [estacionamiento,setEstacionamiento]=useState([])
    const [colaboradores,setColaboradores]=useState([])
    const [registros,setRegistros]=useState([])

    

    useEffect(()=>{
        const authUser= async ()=>{
            const URL_verificar_tipo_usuario=''


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
    },[])

    
    return (
        <AuthContext.Provider
            value={{
                estacionamiento,
                setEstacionamiento,
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
