import axios from "axios";
import { useState } from "react";

import { createContext } from "react";

const TicketContext = createContext()

function TicketProvider({children}) {
    const URL_TICKETS=''
    const [tickets,setTickets]=useState('')

    const obtenerTickets = async ()=>{


        const configuracion = {
            headers:{
                'Content-Type':'application/json'
            }
        }

        try {
            const {data} = await axios(URL_TICKETS,configuracion)
            setTickets(data)
        }catch(error) {
            console.log(error)
        }
    }

    const crearTicket = async ({dataTicket})=>{


        const configuracion = {
            headers:{
                'Content-Type':'application/json'
            }
        }

        try {
            const {data} = await axios.post(URL_TICKETS,dataTicket,configuracion)
        }catch(error) {
            console.log(error)
        }
    }
    return (
        <TicketContext.Provider
            value={{
                crearTicket,
                obtenerTickets,
                tickets
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