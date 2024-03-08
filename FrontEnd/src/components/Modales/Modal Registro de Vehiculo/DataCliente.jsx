import React, { useEffect, useState } from 'react'

import PrimerRegistro from './PrimerRegistro'
import UsuarioRegistrado from './UsuarioRegistrado'

// font awesome
import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

/* import useCliente from  '../../../data/hooks/useCliente' */

function DataCliente({isOpen,setIdCliente}) {

    /* const {
        crearCliente,
        obtenerClienteByDNI
    }=useCliente()
 */


    const [registro,setRegistro]=useState('primer-registro')

    const [dni,setDNI]=useState('')
    const [nombres,setNombres]=useState('')
    const [apellidos,setApellidos]=useState('')
    const [phone,setPhone]=useState('')


    useEffect(()=>{
        setDNI('')
        setNombres('')
        setApellidos('')
        setPhone('')
    },[registro])

    const crearClienteEndpoint = (e)=>{
        e.preventDefault()
        
        const data={
            'DNI':dni,
            'nombres':nombres,
            'apellidos':apellidos,
            'phone':phone
        }

        const ID_CLIENTE = crearCliente(data)
        setIdCliente(data)
    }

    const getCliente =(e)=>{
        e.preventDefault()
        const ID_CLIENTE = obtenerClienteByDNI(dni)
        setIdCliente(ID_CLIENTE)
    }

    /* "usuario-registrado"
    "primer-registro" */ 
    return (
        <div>

            <div className="flex flex-row justify-between mb-3">
                <h2 className="text-2xl font-bold italic tracking-wider">Registro de cliente</h2>
                <button 
                    onClick={isOpen}
                >
                    <FontAwesomeIcon icon={faX} size="xl"/>
                </button>
            </div>

            <div className="w-full flex flex-row flex-wrap justify-center gap-2">
                <div className="flex px-8  items-center border border-gray-200 rounded dark:border-gray-700">
                    <input
                        id="bordered-radio-2" type="radio" value='primer-registro' name="bordered-radio" className="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        onClick={()=>setRegistro({'primerRegistro':true,'usuarioRegistrado':false})} 
                    />
                    <label htmlFor="bordered-radio-2" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">primer registro</label>
                </div>
                <div className="flex px-8 items-center border border-gray-200 rounded dark:border-gray-700">
                    <input
                        onClick={()=>setRegistro({'primerRegistro':false,'usuarioRegistrado':true})}  
                        id="bordered-radio-1" type="radio" value='usuario-registrado' name="bordered-radio" className="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="bordered-radio-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">usuario registrado</label>
                </div>
            </div>

            {
                registro.primerRegistro === true && (
                    <PrimerRegistro
                        dni={dni}
                        setDNI={setDNI}
                        nombres={nombres}
                        setNombres={setNombres}
                        apellidos={apellidos}
                        setApellidos={setApellidos}
                        phone={phone}
                        setPhone={setPhone}
                        crearCliente={crearClienteEndpoint}
                    />
                )
            }

            {
                registro.usuarioRegistrado === true && (
                    <UsuarioRegistrado
                        dni={dni}
                        setDNI={setDNI}
                        getCliente={getCliente}
                    />
                )
            }  
        
        </div>
    )
}

export default DataCliente