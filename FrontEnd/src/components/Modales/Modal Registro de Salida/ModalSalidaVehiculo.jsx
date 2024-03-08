import { useState,useEffect } from "react"

import { useLocation } from "react-router-dom"

// font awesome
import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import InputType from "../InputType"
import InputTypeSelect from "../InputTypeSelect"

import TicketSalidad from "./TicketSalidad"

import useTickets from "../../../data/hooks/useTickets"

function ModalSalidaVehiculo({
    setOpen,
    id,
    type
}){

    let location = useLocation();

    const [next,setNext]=useState(false)
    const [pathName,setPathName]=useState(location.pathname.split('/')[3])
    const [infoTicket,setInfoTicket]=useState({})

    const {
        cerrarTicketSalida
    }=useTickets()

    const registrarSalida = (e)=>{
        e.preventDefault()

        const data = {
            idParking:id,
            idEstacionamiento:pathName,
            typeVehiculo:type
        }
        
        const informacionTicket =  cerrarTicketSalida(data)
        setInfoTicket(informacionTicket)
        setNext(true)
    }

    useEffect(()=>{
        const ruta = location.pathname.split('/')[3]
        setPathName(ruta)
    },[])


    return (
        <form
            className="max-w-2xl bg-white flex flex-col gap-5 border shadow md:px-10 px-5 md:py-10 py-5 rounded-md sm:mx-auto mt-5"
        >
            {
                next === false ?
                <>
                    <div className="flex flex-row justify-between">
                        <h2 className="text-xl text-center sm:text-2xl font-bold italic tracking-wider">¿Registrar salidad de vehiculo?</h2>
                    </div>

                    <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-2">
                        <button
                            onClick={()=>setOpen(false)}
                            type="submit"
                            className='w-full text-black text-lg tracking-wide font-semibold rounded-md  bg-white border-2 border-gray-400'
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={registrarSalida}
                            className='w-full text-black text-lg tracking-wide font-semibold rounded-md  bg-white border-2 border-amber-500'
                        >
                            Registrar salida
                        </button>
                    </div>
                </> 
                :
                <TicketSalidad
                    setOpen={setOpen}
                />

            }


        </form>
    )
}

export default ModalSalidaVehiculo;