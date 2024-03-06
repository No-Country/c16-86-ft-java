import { useState } from "react";

import { createContext } from "react";

const ColaboradorContext = createContext()

function ColaboradorProvider({children}) {
    const [colaboradores,setColaboradores]=useState([])

    const obtenerColaboradores = async (dataColaboradores)=>{
        const newData= dataColaboradores;

/*         const data = {
            id,
            nombre,
            carros,
            tarifaCarros,
            motos,
            tarifaMotos,
            parkingCarros
            parkingMotos
        } */

        const parkingCarros = []
        for (let i = 1; i < newData.carros+1; i++) {
            const nomenclatura = `${i}A`
            const parking ={
                'nomenclatura':nomenclatura,
                'disponible':true
            }
            parkingCarros.push(parking)
        }

        const parkingMotos = []
        for (let i = 1; i < newData.motos+1; i++) {
            const nomenclatura = `${i}M`
            const parking = {
                'nomenclatura':nomenclatura,
                'disponible':true
            }
            parkingMotos.push(parking)
        }

        newData['parkingCarros']=parkingCarros
        newData['parkingMotos']=parkingMotos

        const newState = [newData,...estacionamiento]
        setEstacionamiento(newState)
    }

    return (
        <ColaboradorContext.Provider
            value={{
                obtenerColaboradores,
                colaboradores,
                setColaboradores
            }}
        >
            {children}
        </ColaboradorContext.Provider>
    )
}

export{
    ColaboradorContext
}

export default ColaboradorProvider;