import { useState } from "react";
import { createContext } from "react";


const EstacionamientoContext = createContext()

function EstacionamientoProvider({children}) {
    const [estacionamiento,setEstacionamiento]=useState([])

    const crearEstacionamientos = async (dataEstacionamiento)=>{
        const newData= dataEstacionamiento;

/*         const data = {
            id:generateUUID(),
            nombre:nombre,
            carros:parseFloat(carros),
            tarifaCarros:parseFloat(tarifaCarros),
            motos:parseFloat(motos),
            tarifaMotos:parseFloat(tarifaMotos),
        } */

        const parkingCarros = {}
        for (let i = 1; i < newData.carros+1; i++) {
            const nomenclatura = `${i}A`
            parkingCarros[nomenclatura]={
                'nomenclatura':nomenclatura,
                'disponible':true
            }
        }

        const parkingMotos = {}
        for (let i = 1; i < newData.motos+1; i++) {
            const nomenclatura = `${i}M`
            parkingMotos[nomenclatura]={
                'nomenclatura':nomenclatura,
                'disponible':true
            }
        }

        newData['parkingCarros']=parkingCarros
        newData['parkingMotos']=parkingMotos

        const newState = [newData,...estacionamiento]
        setEstacionamiento(newState)
    }
    
    return (
        <EstacionamientoContext.Provider
            value={{
                estacionamiento,
                crearEstacionamientos,
                setEstacionamiento
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