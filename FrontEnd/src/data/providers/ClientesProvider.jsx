import { useState, useEffect} from "react";

import { createContext } from "react";

const ClienteContext = createContext()

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

    const crearCliente = ()=>{

    }

    const obtenerClienteByDNI = ()=>{

    }

    return (
        <ClienteContext.Provider
            value={{
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