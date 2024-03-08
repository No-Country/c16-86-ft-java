import TarjetaRegistro from "../Tarjetas/TarjetaRegistro"

import useTickets from '../../data/hooks/useTickets'


function Registros() {
  const {
    tickets
  } = useTickets()

  console.log(tickets)

  return (
    <div>
      <div className="text-left mb-3">
        <h1 className="font-bold italic text-2xl">Registros</h1>
      </div>
      <div className="w-full flex flex-col gap-3">
        {
          tickets?.map( item =>{
            return <TarjetaRegistro key={item.id} data={item} />
          })
        }
      </div>
    </div>
  )
}

export default Registros
