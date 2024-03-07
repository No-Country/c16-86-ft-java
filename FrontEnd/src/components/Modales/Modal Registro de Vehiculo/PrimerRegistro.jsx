import React from 'react'

import InputType from '../InputType'

function PrimerRegistro({
    dni,
    setDNI,
    nombres,
    setNombres,
    apellidos,
    setApellidos,
    phone,
    setPhone,
    crearCliente
}) {
  return (
    <div className='mt-3'>
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
                    value={dni}
                    callback={setDNI}
                    placeholderInput='Identificacion'
                    label='Identificacion'
                    typeInput='number'
                />
                <InputType
                    value={phone}
                    callback={setPhone}
                    placeholderInput='Ingrese celular'
                    label='Celular'
                    typeInput='text'
                />
        </div>
        
        <button
            type='button'
            onClick={crearCliente}
            className='w-full mt-3 text-black text-lg tracking-wide font-semibold rounded-md  bg-green-400 border border-green-600'
        >
            Registrar cliente
        </button>
      
    </div>
  )
}

export default PrimerRegistro
