import { faSquareParking, faUser,faAddressCard } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function TarjetaMenu({type,text}) {
  const typeCard = {
    'parqueadero':{
      'color':'#9fe96e',
      'text':'parqueadero',
      'icon':faSquareParking
    },
    'parker':{
      'color':'#a3a8f6',
      'text':'parker',
      'icon':faUser
    },
    'usuario':{
      'color':'#f22150',
      'text':'usuario',
      'icon':faAddressCard
    }
  }
  return (
    <div className={`w-full flex flex-row items-center gap-2 justify-start max-w-sm bg-white rounded-lg px-2 py-2 text-center border-gray-400 border-2`}>
      <FontAwesomeIcon 
          icon={typeCard[type].icon} 
          size="xl"
          className="mt-1"
      />
      <h1 className="uppercase italic font-bold text-lg xl:text-xl tracking-wide">{typeCard[type].text}</h1>
    </div>
  )
}

export default TarjetaMenu