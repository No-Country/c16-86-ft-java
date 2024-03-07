import { useState,useEffect } from "react"

import InputType from "../InputType"
import InputTypeSelect from "../InputTypeSelect"

import generateUUID from '../../../helpers/generaID'

// font awesome
import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import useEstacionamientos from "../../../data/hooks/useEstacionamientos"
import useColaboradores from "../../../data/hooks/useColaboradores"

function ModalParker({isOpen}) {

    const {
        estacionamiento
    }=useEstacionamientos()

    const {
        crearColaboradores
      }=useColaboradores()

    const [estacionamientoData,setEstacionamientoData]=useState([])

    const [nombres,setNombres]=useState('')
    const [apellidos,setApellidos]=useState('')
    const [identificacion,setIdentificacion]=useState('')
    const [parqueadero,setParqueadero]=useState('')

    const handleSubtmit =(e)=>{
        e.preventDefault()
        
        if([nombres,apellidos,identificacion,parqueadero].includes('')){
            return
        }

        const data = {
            id:generateUUID(),
            nombres,
            apellidos,
            identificacion,
            idParqueadero:parqueadero
        }
        
        crearColaboradores(data)
        isOpen()
    }

    useEffect(()=>{
        if(estacionamiento){
          const data = estacionamiento.map(item =>{
            const newData = {'id':item.id,'nombre':item.nombre}
            return newData
          })
          console.log(data)
          setEstacionamientoData(data)
        }
    },[])

    return (
        <form
            onSubmit={handleSubtmit} 
            className="max-w-2xl bg-white flex flex-col gap-5 border shadow md:px-10 px-5 md:py-10 py-5 rounded-md sm:mx-auto mx-2 mt-5"
        >
            <div className="flex flex-row justify-between">
                <h2 className="text-2xl font-bold italic tracking-wider">Crear parker</h2>
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
                <InputTypeSelect
                    value={parqueadero}
                    callback={setParqueadero}
                    label='Parquadero asociado'
                    listaOpciones={estacionamientoData}
                    primeraOpcion='Elige un parqueadero'
                />
            </div>

            <button
                type="submit"
                className=' text-black text-lg tracking-wide font-semibold rounded-md  bg-white border-2 border-amber-500'
            >
                Crear parker
            </button>
        </form>
    )
}

export default ModalParker
