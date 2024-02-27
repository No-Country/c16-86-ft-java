import { faSquareParking, faUser,faAddressCard } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function TarjetaOpcion({type,children}) {
  const typeCard = {
    'parqueadero':{
      'color':'bg-olivine',
      'text':'parqueadero',
      'icon':faSquareParking
    },
    'parker':{
      'color':'bg-lavender',
      'text':'parker',
      'icon':faUser
    },
    'usuario':{
      'color':'bg-red-engineer',
      'text':'usuario',
      'icon':faAddressCard
    }
  }
  return (
    <div className='w-full flex flex-col max-w-sm sm:min-h-28 xl:min-h-32 bg-white border shadow hover:shadow-xl cursor-pointer text-center
      rounded-lg'
      >
        <div className={`w-full flex flex-row items-center gap-5 justify-start px-5 py-1 rounded-t-lg ${typeCard[type].color}`}>
          <FontAwesomeIcon 
            icon={typeCard[type].icon} 
            size="xl"
            className="mt-1"
          />
          <h1 className="uppercase italic font-bold text-lg xl:text-xl tracking-wide">{typeCard[type].text}</h1>
        </div>
        <div className="w-full px-5 py-1">
          {children}
        </div>
    </div>
  )
}

export default TarjetaOpcion
