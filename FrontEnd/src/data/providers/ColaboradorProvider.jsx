import axios from "axios";

import { useState , useEffect} from "react";

import { createContext } from "react";

const ColaboradorContext = createContext()

function ColaboradorProvider({children}) {
    const [colaboradores,setColaboradores]=useState([])

    const obtenerColaboradores = async ()=>{


        const configuracion = {
            headers:{
                'Content-Type':'application/json'
            }
        }

        try {
            const {data} = await axios('https://c16-86-ft-java.onrender.com/api/v1/parkers',configuracion)
            setColaboradores(data)
        }catch(error) {
            console.log(error)
        }
    }

    const crearColaborador = async ({dataColaborador})=>{


        const configuracion = {
            headers:{
                'Content-Type':'application/json'
            }
        }

        console.log(dataColaborador)

        try {
            const {data} = await axios.post('https://c16-86-ft-java.onrender.com/api/v1/admin/createParker',dataColaborador,configuracion)
            return data
        }catch(error) {
            console.log('aqui,error')
            console.log(error)
        }
    }

    return (
        <ColaboradorContext.Provider
            value={{
                crearColaborador,
                obtenerColaboradores,
                colaboradores
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