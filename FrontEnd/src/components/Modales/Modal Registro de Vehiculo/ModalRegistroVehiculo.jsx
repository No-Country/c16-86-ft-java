import { useState } from "react"

// font awesome
import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import InputType from "../InputType"
import InputTypeSelect from "../InputTypeSelect"

const parqueaderos = [
    {
        value:'423423423423d',
        text:'Parqueadero la 33'
    },
    {
        value:'42sdad3423d',
        text:'Parqueadero Suramericana'
    },
    {
        value:'42sda423d',
        text:'Parqueadero Buenos Aires'
    }
]

function ModalRegistroVehiculo({isOpen}){
    const [nombres,setNombres]=useState()
    const [apellidos,setApellidos]=useState()
    const [identificacion,setIdentificacion]=useState()
    const [placa,setPlaca]=useState()

    return (
        <form
            className="max-w-2xl bg-white flex flex-col gap-5 border shadow md:px-10 px-5 md:py-10 py-5 rounded-md sm:mx-auto mx-2 mt-5"
        >
            <div className="flex flex-row justify-between">
                <h2 className="text-2xl font-bold italic tracking-wider">Registro de entrada vehiculo</h2>
                <button 
                    onClick={isOpen}
                >
                    <FontAwesomeIcon icon={faX} size="xl"/>
                </button>
            </div>

            <div className="w-full flex flex-col sm:flex-row sm:gap-4">
                <InputType
                    value={nombres}
                    callback={setNombres}
                    placeholderInput='Ingrese sus nombres'
                    label='Nombres'
                    typeInput='text'
                />
                <InputType
                    value={apellidos}
                    callback={setApellidos}
                    placeholderInput='Ingrese sus apellidos'
                    label='Apellidos'
                    typeInput='text'
                />
            </div>

            <div className="w-full flex flex-col sm:flex-row sm:gap-4">
                <InputType
                    value={identificacion}
                    callback={setIdentificacion}
                    placeholderInput='Identificacion'
                    label='Identificacion'
                    typeInput='number'
                />
                <InputType
                    value={placa}
                    callback={setPlaca}
                    placeholderInput='Placa'
                    label='Ingrese placa'
                    typeInput='text'
                />
            </div>

            <div className="w-full flex flex-col sm:flex-row sm:gap-4">
                <InputType
                    value={identificacion}
                    callback={setIdentificacion}
                    placeholderInput='celular'
                    label='Celular'
                    typeInput='number'
                />
            </div>

            <button
                className=' text-black text-lg tracking-wide font-semibold rounded-md  bg-green-400 border border-green-600'
            >
                Crear registro
            </button>
        </form>
    )
}

export default ModalRegistroVehiculo;