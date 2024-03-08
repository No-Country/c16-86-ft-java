import { parse } from "postcss";
import { useEffect, useState } from "react";
import { createContext } from "react";


const EstacionamientoContext = createContext()

function EstacionamientoProvider({children}) {
    const [estacionamiento,setEstacionamiento]=useState([])

    useEffect(()=>{
        const isEmpty = localStorage.getItem('estacionamientos')
        if(isEmpty === null){
            localStorage.setItem('estacionamientos',JSON.stringify([]))
        }else{
            const valueEstacionamientos = JSON.parse(localStorage.getItem('estacionamientos'))
            setEstacionamiento(valueEstacionamientos)    
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('estacionamientos',JSON.stringify(estacionamiento))
    },[estacionamiento])



    const crearEstacionamientos = async (dataEstacionamiento)=>{
        const newData= dataEstacionamiento;

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
                'disponible':true,
                'ticket':null
            }

            parkingCarros.push(parking)
        }

        const parkingMotos = []

        for (let i = 1; i < newData.motos+1; i++) {
            const nomenclatura = `${i}M`

            const parking = {
                'nomenclatura':nomenclatura,
                'disponible':true,
                'ticket':null
            }

            parkingMotos.push(parking)
        }

        newData['parkingCarros']= parkingCarros
        newData['parkingMotos']= parkingMotos

        const newState = [newData,...estacionamiento]
        setEstacionamiento(newState)
    }
    
    return (
        <EstacionamientoContext.Provider
            value={{
                crearEstacionamientos,
                estacionamiento,
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