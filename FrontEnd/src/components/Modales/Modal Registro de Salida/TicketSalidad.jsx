import { useState } from "react"

// font awesome
import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function TicketSalidad({isOpen}) {
  return (
    <div className="bg-white w-full flex flex-col gap-2">
        <div className="border-t-2 border-b-2 border-black text-center">
            <p className="text-2xl font-bold italic tracking-wider">Recibo de parking</p>
            <p className="text-xl font-bold italic tracking-wider">02/06/2021</p>
        </div>

        <div className="border-b-2 border-black ">
            <p className="text-xl text-center font-bold italic tracking-wider">Andres Jaramillo Ruiz</p>
            <div className="flex flex-row justify-between gap-10">
                <p className="text-xl font-bold italic tracking-wider">ID</p>
                <p className="text-xl font-bold italic tracking-wider">1113456789</p>
            </div>
            <div className="flex flex-row justify-between gap-10">
                <p className="text-xl font-bold italic tracking-wider">Patente</p>
                <p className="text-xl font-bold italic tracking-wider">RHR-456</p>
            </div>
            <div className="flex flex-row justify-between gap-10">
                <p className="text-xl font-bold italic tracking-wider">Tipo Vehiculo</p>
                <p className="text-xl font-bold italic tracking-wider">Auto</p>
            </div>
        </div>

        <div className="border-b-2 border-black ">
            <div className="flex flex-row justify-between gap-10">
                <p className="text-xl font-bold italic tracking-wider">Desde</p>
                <p className="text-xl font-bold italic tracking-wider">02/06/2021</p>
                <p className="text-xl font-bold italic tracking-wider">11:30 am</p>
            </div>
            <div className="flex flex-row justify-between gap-10">
                <p className="text-xl font-bold italic tracking-wider">Hasta</p>
                <p className="text-xl font-bold italic tracking-wider">02/06/2021</p>
                <p className="text-xl font-bold italic tracking-wider">6:30 pm</p>
            </div>
        </div>
        <div>
            <div className="flex flex-row justify-between gap-10">
                <p className="text-xl font-bold italic tracking-wider">Tiempo consumido</p>
                <p className="text-xl font-bold italic tracking-wider">7:00 horas</p>
            </div>
            <div className="flex flex-row justify-between gap-10">
                <p className="text-xl font-bold italic tracking-wider">Tarifa/Hora</p>
                <p className="text-xl font-bold italic tracking-wider">$ 5/hr</p>
            </div>
        </div>
        <div className="text-center mt-2">
            <p className="text-2xl font-bold italic tracking-wider">Total a pagar : $ 32.00</p>
        </div>

        <button
            className="w-full bg-gray-300 rounded-md border-gray-500 border shadow-sm font-semibold text-lg mt-2" 
            onClick={isOpen}
        >
            Cerrar
        </button>
    </div>
  )
}

export default TicketSalidad
