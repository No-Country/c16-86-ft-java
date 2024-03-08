import { faSquareParking, faUser,faAddressCard } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function TarjetaMenu({type,text}) {
  const typeCard = {
    'parqueadero':{
      'color':'dark-cyan',
      'text':'estacionamientos',
      'icon':faSquareParking
    },
    'parker':{
      'color':'dark-spring-green',
      'text':'empleados',
      'icon':faUser
    },
    'usuario':{
      'color':'caribean-current',
      'text':'registros',
      'icon':faAddressCard
    }
  }
  const claseDinamica = `w-full flex flex-row items-center gap-2 justify-start max-w-sm bg-white rounded-lg px-2 py-2 text-center border-r-8 shadow-sm ${
    {
      'parqueadero': 'border-dark-cyan',
      'parker': 'border-dark-spring-green',
      'usuario': 'border-caribean-current'
    }[type] || ''
  }`;
  return (
    <div className={claseDinamica}>
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