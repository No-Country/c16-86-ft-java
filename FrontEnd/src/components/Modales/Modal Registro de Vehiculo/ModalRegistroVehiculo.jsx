import {useLocation} from "react-router-dom";
import { useEffect, useState } from "react";

import useTickets from "../../../data/hooks/useTickets";


import DataCliente from "./DataCliente";
import DataRegistroVehiculo from './DataRegistroVehiculo'

function ModalRegistroVehiculo({
    isOpen,
    idParking,
    type
}){
    console.log(idParking)
    let location = useLocation();

    const {
        crearTicketEntrada
    }=useTickets()

    const [pathName,setPathName]=useState(location.pathname.split('/')[3])
    const [step,setStep]=useState(1)

    const [idCliente,setIdCliente]=useState('')
    const [placa,setPlaca]=useState('')

    useEffect(()=>{
        const ruta = location.pathname.split('/')[3]
        setPathName(ruta)
    },[])

    useEffect(()=>{
        if(idCliente !== ''){
            setStep(2)
        }
    },[idCliente])

    const generandoTicket =(e)=>{
        e.preventDefault()
        if([idCliente,placa].includes('')){
            return
        }
        

        const data = {
            idCliente,
            idEstacionamiento:pathName,
            idParking,
            typeVehiculo:type,
            placa
        }

        crearTicketEntrada(data)
        isOpen(false)
    }

    return (
        <form
            onSubmit={generandoTicket}
            className="max-w-2xl bg-white flex flex-col gap-5 border shadow md:px-10 px-5 md:py-10 py-5 rounded-md sm:mx-auto mx-2 mt-5"
        >

            {
                step === 1 && <DataCliente isOpen={isOpen} setIdCliente={setIdCliente}/>
            }

            {
                step === 2 && <DataRegistroVehiculo isOpen={isOpen} setPlaca={setPlaca} placa={placa} postTicket={generandoTicket}/>
            }

        </form>
    )
}

export default ModalRegistroVehiculo;