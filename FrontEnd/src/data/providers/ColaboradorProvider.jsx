import { useState , useEffect} from "react";

import { createContext } from "react";

import useEstacionamientos from "../hooks/useEstacionamientos";

const ColaboradorContext = createContext()

function ColaboradorProvider({children}) {

    const {
        estacionamiento
    }=useEstacionamientos()

    const [colaboradores,setColaboradores]=useState([])

    useEffect(()=>{
        const isEmpty = localStorage.getItem('colaboradores')
        if(isEmpty === null){
            localStorage.setItem('colaboradores',JSON.stringify([]))
        }else{
            const valueEstacionamientos = JSON.parse(localStorage.getItem('colaboradores'))
            setColaboradores(valueEstacionamientos)    
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('colaboradores',JSON.stringify(colaboradores))
    },[colaboradores])

    const crearColaboradores = async (dataColaboradores)=>{
        const newData= dataColaboradores;

        const nameParqueadero = estacionamiento.find(item=> item.id === newData.idParqueadero)

        newData['nombreParqueadero'] = nameParqueadero.nombre
        newData['user'] = `${newData.nombres}_${newData.apellidos}@userparking.com`
        newData['password'] = `${newData.id.split('-')[1]}___${newData.id.split('-')[2]}`
        
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