import { useState } from "react"

// font awesome
import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function TicketSalidad({setOpen,infoTicketSalida}) {

    const registrarSalida = (e)=>{
        e.preventDefault()
        setOpen(false)
    }

    console.log(infoTicketSalida)

    return (
        <div className="bg-white w-full flex flex-col gap-0 sm:gap-2">
            <div className="border-t-2 border-b-2 border-black text-center">
                <p className="text-xl sm:text-2xl font-bold italic tracking-wider">Recibo de parking</p>
                <p className="text-lg sm:text-xl font-bold italic tracking-wider">02/06/2021</p>
            </div>

            <div className="border-b-2 border-black ">
                <p className="text-xl text-center font-bold italic tracking-wider">Andres Jaramillo Ruiz</p>
                <div className="flex flex-row justify-between sm:gap-10">
                    <p className="text-xl font-bold italic tracking-wider">ID</p>
                    <p className="text-xl font-bold italic tracking-wider">1113456789</p>
                </div>
                <div className="flex flex-row justify-between sm:gap-10">
                    <p className="text-xl font-bold italic tracking-wider">Patente</p>
                    <p className="text-xl font-bold italic tracking-wider">RHR-456</p>
                </div>
                <div className="flex flex-row justify-between sm:gap-10">
                    <p className="text-xl font-bold italic tracking-wider">Tipo Vehiculo</p>
                    <p className="text-xl font-bold italic tracking-wider">Auto</p>
                </div>
            </div>

            <div className="border-b-2 border-black ">
                <div className="flex flex-row flex-wrap justify-between sm:gap-10">
                    <p className="text-xl font-bold italic tracking-wider">Desde</p>
                    <p className="text-xl font-bold italic tracking-wider">02/06/2021</p>
                    <p className="text-xl font-bold italic tracking-wider">11:30 am</p>
                </div>
                <div className="flex flex-row flex-wrap justify-between sm:gap-10">
                    <p className="text-xl font-bold italic tracking-wider">Hasta</p>
                    <p className="text-xl font-bold italic tracking-wider">02/06/2021</p>
                    <p className="text-xl font-bold italic tracking-wider">6:30 pm</p>
                </div>
            </div>
            <div>
                <div className="flex flex-row justify-between sm:gap-10">
                    <p className="text-xl font-bold italic tracking-wider">Tiempo consumido</p>
                    <p className="text-xl font-bold italic tracking-wider">7:00 horas</p>
                </div>
                <div className="flex flex-row justify-between sm:gap-10">
                    <p className="text-xl font-bold italic tracking-wider">Tarifa/Hora</p>
                    <p className="text-xl font-bold italic tracking-wider">$ 5/hr</p>
                </div>
            </div>
            <div className="text-center mt-2">
                <p className="text-2xl font-bold italic tracking-wider">Total a pagar</p>
                <p className="text-2xl font-bold italic tracking-wider">$ 32.00</p>
            </div>

            <button
                className="w-full  rounded-md  shadow-sm font-semibold text-lg mt-2 bg-white border-2 border-amber-500" 
                onClick={registrarSalida}
            >
                Cerrar
            </button>
        </div>
    )
}

export default TicketSalidad
