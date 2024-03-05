import { faSquareParking, faUser,faAddressCard } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function TarjetaOpcion({type,data}) {
  const {
    id,
    nombre,
    carros,
    tarifaCarros,
    motos,
    tarifaMotos,
  }=data;
  const typeCard = {
    'parqueadero':{
      'color':'dark-cyan',
      'text':'parqueadero',
      'icon':faSquareParking
    },
    'parker':{
      'color':'dark-spring-green',
      'text':'parker',
      'icon':faUser
    },
    'usuario':{
      'color':'caribean-current',
      'text':'usuario',
      'icon':faAddressCard
    }
  }

  const elegirBgColor =()=>{
    const color = `bg-${typeCard[type].color}`
    console.log(color)
    return color;
  }

  const claseDinamica = `w-full flex flex-row items-center gap-5 justify-start px-5 py-1 rounded-t-lg ${
    {
      'parqueadero': 'bg-dark-cyan',
      'parker': 'bg-dark-spring-green',
      'usuario': 'bg-caribean-current'
    }[type] || ''
  }`;
  
  return (
    <div className='w-full flex flex-col max-w-sm sm:min-h-28 xl:min-h-32 bg-white border shadow hover:shadow-xl cursor-pointer text-center
      rounded-lg'
    >
        <div className={claseDinamica}>
          <FontAwesomeIcon 
            icon={typeCard[type].icon} 
            size="xl"
            className="mt-1"
          />
          <h1 className="uppercase italic font-bold text-lg xl:text-xl tracking-wide">{`${typeCard[type].text}`}</h1>
        </div>
        <div className="w-full px-5 py-1">
          <p className="text-left font-bold text-lg uppercase">{nombre}</p>
          <div className="flex flex-row justify-between font-semibold text-lg">
            <p>{`Carros: ${carros}`}</p>
            <p>{`Tarifa carros: $ ${tarifaCarros}`}</p>
          </div>
          <div className="flex flex-row justify-between font-semibold text-lg">
            <p>{`Motos: ${motos}`}</p>
            <p>{`Tarifa motos: $ ${tarifaMotos}`}</p>
          </div>
        </div>
    </div>
  )
}

export default TarjetaOpcion
