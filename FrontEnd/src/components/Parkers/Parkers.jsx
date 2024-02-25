import TarjetaOpcion from "../Tarjetas/TarjetaOpcion"
import BotonAgregarDashboard from '../Botones/BotonAgregarDashboard'

const parkers = [
  {
    'id':'dasda9d6a8sd7as',
    'name':'Antonyo Navajas',
  },
  {
    'id':'sd23akbks23423',
    'name':'Marcos Perez',
  },
  {
    'id':'dasda9d6a8sdasd27as',
    'name':'Alan Castro',
  },
  {
    'id':'dasada228sdasd27as',
    'name':'Jose Quintero',
  },
  {
    'id':'sdsa62323',
    'name':'Jaime Angel',
  }
]

function Parkers(){
  return (
    <div className="flex flex-col gap-5 sm:py-5 sm:px-5">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-bold italic text-xl sm:text-2xl">Parkers</h1>
          <BotonAgregarDashboard/>
        </div>
      <div className="w-full grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
        {
          parkers?.map(item => {
            return <TarjetaOpcion key={item.id} type="parker" text={item.name}/>
          })
        }
      </div>
    </div>
  )
}

export default Parkers;
