import { useState } from "react";
import { createContext } from "react";

import useAuth from '../hooks/useAuth'

const EstacionamientoContext = createContext()

function EstacionamientoProvider({children}) {
    const {
        estacionamiento,
        setEstacionamiento
    }=useAuth()

    const crearEstacionamientos = async ({dataEstacionamiento})=>{
        const newData= dataEstacionamiento;

        const newState = [newData,...estacionamiento]
        setEstacionamiento(newState)
    }
    return (
        <EstacionamientoContext.Provider
            value={{
                crearEstacionamientos
            }}
        >
            {children}
        </EstacionamientoContext.Provider>
    )
}

export{
    EstacionamientoContext
}

export default EstacionamientoProvider;