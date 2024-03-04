import axios from "axios";

import { useState } from "react";
import { createContext } from "react";

const EstacionamientoContext = createContext()

function EstacionamientoProvider({children}) {
    const URL_ESTACIONAMIENTOS=''
    const [estacionamientos,setEstacionamientos]=useState([])

    const obtenerEstacionamientos = async ()=>{


        const configuracion = {
            headers:{
                'Content-Type':'application/json'
            }
        }

        try {
            const rta = await axios(URL_ESTACIONAMIENTOS,configuracion)
            setEstacionamientos(rta)
        }catch(error) {
            console.log('aqui,error')
            console.log(error)
        }
    }

    const crearEstacionamientos = async ({dataEstacionamiento})=>{


        const configuracion = {
            headers:{
                'Content-Type':'application/json'
            }
        }

        try {
            const respuesta = await axios.post(URL_ESTACIONAMIENTOS,dataEstacionamiento,configuracion)
            setEstacionamientos([respuesta,...estacionamientos])
        }catch(error) {
            console.log('aqui,error')
            console.log(error)
        }
    }
    return (
        <EstacionamientoContext.Provider
            value={{
                obtenerEstacionamientos,
                crearEstacionamientos,
                estacionamientos
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