import React from 'react'

function InputTypeSelect({
    value,
    callback,
    label,
    listaOpciones,
    primeraOpcion
}) {
    return (
        <div className='w-full flex flex-col gap-1 items-left'>
            <label className='text-lg font-bold tracking-wider italic pl-1'>{label}</label>
            <select
                value={value}
                onChange={(e)=>callback(e.target.value)}
                type='select'
                className='placeholder:text-gray-500 placeholder:italic placeholder:text-lg outline-none tracking-wider bg-gray-50 cursor-pointer border rounded-md px-6 py-2 border-black'
            >
                <option key={1} value=''>{primeraOpcion}</option>
                {
                    listaOpciones.map((item,i)=>{
                        return <option key={i} value={item.value}>{item.text}</option>
                    })
                }   
            </select>
        </div>
    )
}

export default InputTypeSelect
