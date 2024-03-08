import InputType from "../InputType"

// font awesome
import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function DataRegistroVehiculo({
  isOpen,
  placa,
  setPlaca,
  postTicket
}) {
  return (
    
    <div className="mt-3">

      <div className="flex flex-row justify-between mb-3 gap-5">
        <h2 className="text-2xl font-bold italic tracking-wider">Registro de entrada</h2>
        <button 
          onClick={isOpen}
        >
          <FontAwesomeIcon icon={faX} size="xl"/>
        </button>
      </div>

      <InputType
        value={placa}
        callback={setPlaca}
        placeholderInput='Placa'
        label='Ingrese placa'
        typeInput='text'
      />
      
      <button
          type='button'
          onClick={postTicket}
          className='w-full mt-3 text-black text-lg tracking-wide font-semibold rounded-md  bg-green-400 border border-green-600'
      >
          Registrar vehiculo
      </button>
    </div>
  )
}

export default DataRegistroVehiculo