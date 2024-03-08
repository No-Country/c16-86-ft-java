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

    function dividirFechaHora(fecha) {
        // Obtener día, mes y año
        const dia = fecha.getDate().toString().padStart(2, '0');
        const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Los meses comienzan desde 0
        const año = fecha.getFullYear();
    
        // Formatear la fecha como dd/mm/yyyy
        const fechaFormateada = `${dia}/${mes}/${año}`;
    
        // Obtener hora, minutos y segundos
        const hora = fecha.getHours().toString().padStart(2, '0');
        const minutos = fecha.getMinutes().toString().padStart(2, '0');
        const segundos = fecha.getSeconds().toString().padStart(2, '0');
    
        // Formatear la hora como hh:mm
        const horaFormateada = `${hora}:${minutos}`;
    
        return { fecha: fechaFormateada, hora: horaFormateada };
    }

    function redondear(numero) {
        return parseFloat(numero.toFixed(3));
    }

    const {fecha:fechaActual,hora} = dividirFechaHora(new Date())
    const {fecha:fechaEntrada,hora:horaEntrada} = dividirFechaHora(infoTicketSalida.fechaIngreso)
    const {fecha:fechaSalida,hora:horaSalida} = dividirFechaHora(infoTicketSalida.fechaSalida)

    const tiempoConsumido = redondear(infoTicketSalida.tiempoConsumido)
    const pagoTicket = redondear(infoTicketSalida.cantidad)

    return (
        <div className="bg-white w-full flex flex-col gap-0 sm:gap-2">
            <div className="border-t-2 border-b-2 border-black text-center">
                <p className="text-xl sm:text-2xl font-bold italic tracking-wider">Recibo de parking</p>
                <p className="text-lg sm:text-xl font-bold italic tracking-wider">{`${fechaActual}`}</p>
            </div>

            <div className="border-b-2 border-black ">
                <p className="text-xl text-center font-bold italic tracking-wider uppercase">{`${infoTicketSalida.idCliente.nombres} ${infoTicketSalida.idCliente.apellidos}`}</p>
                <div className="flex flex-row justify-between sm:gap-10">
                    <p className="text-xl font-bold italic tracking-wider">DNI</p>
                    <p className="text-xl font-bold italic tracking-wider">{infoTicketSalida.idCliente.DNI}</p>
                </div>
                <div className="flex flex-row justify-between sm:gap-10">
                    <p className="text-xl font-bold italic tracking-wider">Patente</p>
                    <p className="text-xl font-bold italic tracking-wider">{infoTicketSalida.placa}</p>
                </div>
                <div className="flex flex-row justify-between sm:gap-10">
                    <p className="text-xl font-bold italic tracking-wider">Tipo Vehiculo</p>
                    <p className="text-xl font-bold italic tracking-wider">{infoTicketSalida.typeVehiculo}</p>
                </div>
            </div>

            <div className="border-b-2 border-black ">
                <div className="flex flex-row flex-wrap justify-between sm:gap-10">
                    <p className="text-xl font-bold italic tracking-wider">Desde</p>
                    <p className="text-xl font-bold italic tracking-wider">{`${fechaEntrada}`}</p>
                    <p className="text-xl font-bold italic tracking-wider">{`${horaEntrada}`}</p>
                </div>
                <div className="flex flex-row flex-wrap justify-between sm:gap-10">
                    <p className="text-xl font-bold italic tracking-wider">Hasta</p>
                    <p className="text-xl font-bold italic tracking-wider">{`${fechaSalida}`}</p>
                    <p className="text-xl font-bold italic tracking-wider">{`${horaSalida}`}</p>
                </div>
            </div>
            <div>
                <div className="flex flex-row justify-between sm:gap-10">
                    <p className="text-xl font-bold italic tracking-wider">Tiempo</p>
                    <p className="text-xl font-bold italic tracking-wider">{`${tiempoConsumido} horas`}</p>
                </div>
                <div className="flex flex-row justify-between sm:gap-10">
                    <p className="text-xl font-bold italic tracking-wider">Tarifa/Hora</p>
                    <p className="text-xl font-bold italic tracking-wider">{`$ ${infoTicketSalida.tarifa}/hr`}</p>
                </div>
            </div>
            <div className="text-center mt-2">
                <p className="text-2xl font-bold italic tracking-wider">Total a pagar</p>
                <p className="text-2xl font-bold italic tracking-wider">{`$ ${pagoTicket}`}</p>
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
