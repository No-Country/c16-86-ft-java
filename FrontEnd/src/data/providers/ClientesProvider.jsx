import { useState, useEffect} from "react";

import { createContext } from "react";

const ClienteContext = createContext()

import generateUUID from '../../helpers/generaID'

function ClienteProvider({children}) {
    const [clientes,setClientes]=useState([])

    useEffect(()=>{
        const isEmpty = localStorage.getItem('clientes')
        if(isEmpty === null){
            localStorage.setItem('clientes',JSON.stringify([]))
        }else{
            const valueTickets = JSON.parse(localStorage.getItem('clientes'))
            setClientes(valueTickets)    
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('clientes',JSON.stringify(clientes))
    },[clientes])

    const crearCliente = (dataCliente)=>{
        const newData = dataCliente;

        newData['id']= generateUUID()

        const newState = [newData,...clientes]
        setClientes(newState)

        return newData.id
    }

    const obtenerClienteByDNI = (DNI)=>{
        const getCliente = clientes?.find(item => item.DNI === DNI)
        return getCliente
    }

    const obtenerCliente = (id) => {
        const infoClientes = clientes?.find(item => item.DNI === id)
        return infoClientes
    }

    return (
        <ClienteContext.Provider
            value={{
                obtenerCliente,
                crearCliente,
                obtenerClienteByDNI
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