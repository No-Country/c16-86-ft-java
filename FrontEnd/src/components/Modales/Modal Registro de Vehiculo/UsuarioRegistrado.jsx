import InputType from "../InputType"

function UsuarioRegistrado({
  dni,
  setDNI,
  getCliente
}) {
  return (
    <div className="mt-3">
      <InputType
        value={dni}
        callback={setDNI}
        placeholderInput='Identificacion'
        label='Identificacion'
        typeInput='number'
      />
      <button
          type='button'
          onClick={getCliente}
          className='w-full mt-3 text-black text-lg tracking-wide font-semibold rounded-md  bg-green-400 border border-green-600'
        >
          Continuar
      </button>
    </div>
  )
}

export default UsuarioRegistrado
