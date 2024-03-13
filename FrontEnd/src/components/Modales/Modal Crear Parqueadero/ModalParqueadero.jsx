import { useState } from "react"

// font awesome
import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import InputType from "../InputType"
import generateUUID from '../../../helpers/generaID'


import useEstacionamientos from "../../../data/hooks/useEstacionamientos"

function ModalParqueadero({isOpen}){

    const {
        obtenerEstacionamientos,
        crearEstacionamientos
    } = useEstacionamientos()

    const [nombre,setNombre] = useState('')
    const [motos,setMotos] = useState('')
    const [carros,setCarros] = useState('')
    const [tarifaMotos,setTarifaMotos] = useState('')
    const [tarifaCarros,setTarifaCarros] = useState('')



    const handleSubtmit = async (e)  => {
        e.preventDefault()
        
        if([nombre,carros,motos,tarifaMotos,tarifaCarros].includes('',0)){
            return
        }

        const data = {
            'aCapacity':parseFloat(carros),
            'mCapacity':parseFloat(motos),
            'nameParkingLoot':nombre,
            'aTarifa':parseFloat(tarifaCarros),
            'mTarifa':parseFloat(tarifaMotos),
        }

        /* {
            "aCapacity": "10",
            "mCapacity": "5",
            "nameParkingLoot": "BSAS",
            "aTarifa": 1.5,
            "mTarifa": 0.75
        } */
        
        await crearEstacionamientos({dataEstacionamiento:data})
        await obtenerEstacionamientos()
        isOpen()
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
                    value={carros}
                    callback={setCarros}
                    placeholderInput='numero de autos'
                    label='Capacidad autos'
                    typeInput='number'
                />
                <InputType
                    value={tarifaCarros}
                    callback={setTarifaCarros}
                    placeholderInput='tarifa/hora'
                    label='tarifa carros'
                    typeInput='text'
                />
            </div>

            <div className="w-full flex flex-col sm:flex-row sm:gap-4">
                <InputType
                    value={motos}
                    callback={setMotos}
                    placeholderInput='numero de motos'
                    label='Capacidad motos'
                    typeInput='number'
                />
                <InputType
                    value={tarifaMotos}
                    callback={setTarifaMotos}
                    placeholderInput='tarifa/hora'
                    label='tarifa motos'
                    typeInput='text'
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
