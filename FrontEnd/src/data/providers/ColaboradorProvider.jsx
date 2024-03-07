import { useState } from "react";

import { createContext } from "react";

import useEstacionamientos from "../hooks/useEstacionamientos";

const ColaboradorContext = createContext()

function ColaboradorProvider({children}) {

    const {
        estacionamiento
    }=useEstacionamientos()

    const [colaboradores,setColaboradores]=useState([])

/*     useEffect(()=>{
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
    },[estacionamiento]) */

    const crearColaboradores = async (dataColaboradores)=>{
        const newData= dataColaboradores;

        const nameParqueadero = estacionamiento.find(item=>{
            if(item.id === newData.idParqueadero){
                return item.nombre
            }
        })

        newData['nombreParqueadero'] = nameParqueadero
        newData['user'] = `${newData.nombres}_${newData.apellidos}@userparking.com`
        newData['password'] = `${newData.id}___WVOs12`
        
        /* const data = {
            id:generateUUID(),
            nombres,
            apellidos,
            identificacion,
            idParqueadero
        } */

        const newState = [newData,...colaboradores]
        setColaboradores(newState)
    }

    return (
        <ColaboradorContext.Provider
            value={{
                crearColaboradores,
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