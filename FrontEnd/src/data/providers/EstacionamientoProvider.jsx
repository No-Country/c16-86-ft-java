import { useState } from "react";

import { createContext } from "react";

const EstacionamientoContext = createContext()

function EstacionamientoProvider({children}) {
    const URL_ESTACIONAMIENTOS=''
    const [estacionamientos,setEstacionamientos]=useState('')

    const obtenerEstacionamientos = async ()=>{


        const configuracion = {
            headers:{
                'Content-Type':'application/json'
            }
        }

        try {
            const {data} = await axios(URL_ESTACIONAMIENTOS,configuracion)
            setEstacionamientos(data)
        }catch(error) {
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
            const {data} = await axios.post(URL_ESTACIONAMIENTOS,dataEstacionamiento,configuracion)
        }catch(error) {
            console.log(error)
        }
    }
    return (
        <EstacionamientoContext.Provider
            value={{
                crearEstacionamientos,
                obtenerEstacionamientos,
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