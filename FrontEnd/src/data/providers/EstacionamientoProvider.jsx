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
            const {data} = await axios('https://c16-86-ft-java.onrender.com/api/v1/parkingLoot/list',configuracion)
            setEstacionamientos(data)
            return data
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

        console.log(dataEstacionamiento)

        try {
            const rta = await axios.post('https://c16-86-ft-java.onrender.com/api/v1/admin/createParkingLoot',dataEstacionamiento,configuracion)
        }catch(error) {
            console.log('aqui,error')
            console.log(error)
        }
    }
    
    return (
        <EstacionamientoContext.Provider
            value={{
                estacionamientos,
                crearEstacionamientos,
                obtenerEstacionamientos
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