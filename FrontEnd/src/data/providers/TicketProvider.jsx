import { useState,useEffect } from "react";

import { createContext } from "react";

const TicketContext = createContext()

function TicketProvider({children}) {
    const [tickets,setTickets]=useState([])

    useEffect(()=>{
        const isEmpty = localStorage.getItem('tickets')
        if(isEmpty === null){
            localStorage.setItem('tickets',JSON.stringify([]))
        }else{
            const valueTickets = JSON.parse(localStorage.getItem('tickets'))
            setTickets(valueTickets)    
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('tickets',JSON.stringify(tickets))
    },[tickets])

    const obtenerTickets = ()=>{
    }

    const crearTicketEntrada = (dataTicket)=>{
    }

    const cerrarTicketSalida = ()=>{
    }

    return (
        <TicketContext.Provider
            value={{
                obtenerTickets,
                crearTicketEntrada,
                cerrarTicketSalida
            }}
        >
            {children}
        </TicketContext.Provider>
    )
}

export{
    TicketContext
}

export default TicketProvider;