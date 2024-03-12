import axios from "axios";

import { useState } from "react";

import { createContext } from "react";

const ClienteContext = createContext()

function ClienteProvider({children}) {
    const URL_COLABORADORES=''

    const obtenerClienteById = async ()=>{


        const configuracion = {
            headers:{
                'Content-Type':'application/json'
            }
        }

        try {
            const {data} = await axios(URL_COLABORADORES,configuracion)
            return data
        }catch(error) {
            console.log(error)
        }
    }

    const crearCliente = async ({dataColaborador})=>{


        const configuracion = {
            headers:{
                'Content-Type':'application/json'
            }
        }

        try {
            const {data} = await axios.post(URL_COLABORADORES,dataColaborador,configuracion)
            return data
        }catch(error) {
            console.log('aqui,error')
            console.log(error)
        }
    }

    return (
        <ClienteContext.Provider
            value={{
                obtenerClienteById,
                crearCliente
            }}
        >
            {children}
        </ClienteContext.Provider>
    )
}

export{
    ClienteContext
}

export default ClienteProvider;