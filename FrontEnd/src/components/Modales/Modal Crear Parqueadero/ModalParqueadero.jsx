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

function ModalParqueadero({isOpen}){
    const [nombre,setNombre]=useState()
    const [motos,setMotos]=useState()
    const [carros,setCarros]=useState()

    const handleSubtmit =(e)=>{
        e.preventDefault()
    }

    return (
        <form
            onSubmit={handleSubtmit} 
            className="max-w-2xl bg-white flex flex-col gap-5 border shadow md:px-10 px-5 md:py-10 py-5 rounded-md sm:mx-auto mx-2 mt-5"
        >
            <div className="flex flex-row justify-between">
                <h2 className="text-2xl font-bold italic tracking-wider">Crear parqueadero</h2>
                <button 
                    onClick={isOpen}
                >
                            <FontAwesomeIcon icon={faX} size="xl"/>
                </button>
            </div>

            <div className="w-full flex flex-col sm:flex-row sm:gap-4">
                <InputType
                    value={nombre}
                    callback={setNombre}
                    placeholderInput='Ingrese nombre del parqueadero'
                    label='Nombre del parqueadero'
                    typeInput='text'
                />
            </div>

            <div className="w-full flex flex-col sm:flex-row sm:gap-4">
                <InputType
                    value={motos}
                    callback={setMotos}
                    placeholderInput='numero de autos'
                    label='Capacidad autos'
                    typeInput='number'
                />
                <InputType
                    value={carros}
                    callback={setCarros}
                    placeholderInput='numero de motos'
                    label='Capacidad motos'
                    typeInput='number'
                />
            </div>

            <button
                type="submit"
                className=' text-black text-lg tracking-wide font-semibold rounded-md bg-white border-2 border-amber-500'
            >
                Crear parqueadero
            </button>
        </form>
    )
}

export default ModalParqueadero;
