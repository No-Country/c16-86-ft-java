import { useState, useEffect} from "react"

import TarjetaOpcion from "../Tarjetas/TarjetaOpcion"
import BotonAgregarDashboard from '../Botones/BotonAgregarDashboard'

import PopUp from "../PopUp/PopUp"
import ModalParker from "../Modales/Modal Crear Parker/ModalParker"


import useColaboradores from '../../data/hooks/useColaboradores'

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
  const [open,setOpen]=useState(false)

  const {
    obtenerColaboradores,
    colaboradores
  }=useColaboradores()

  useEffect(()=>{
    const getColaboradores = async ()=>{
      try {
        await obtenerColaboradores()
      } catch (error) {
        console.log(error)
      }
    }

    getColaboradores()
  },[])

  return (
    <div className="flex flex-col gap-5">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-bold italic text-xl sm:text-2xl">Empleados</h1>
          <BotonAgregarDashboard
            callback={()=>setOpen(true)}
          />
          <PopUp
            open={open}
          >
            <ModalParker
              isOpen={()=>setOpen(false)}
            />
          </PopUp>
        </div>
      <div className="w-full grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
        {
          colaboradores?.map(item => {
            return (
              <TarjetaOpcion key={item.idParker} type="parker">
                <div className="w-full px-5 py-1">
                  <p className="text-left font-bold text-lg uppercase">{`${item.name} ${item.lastName}`}</p>
                  <div className="flex flex-col text-start font-semibold text-lg border-b-2 mb-1">
                    <p className="font-bold text-lg italic">DNI</p>
                    <p className="text-md">{`${item.dni}`}</p>
                  </div>
{/*                   <div className="flex flex-col text-start font-semibold text-lg border-b-2 mb-1">
                    <p className="font-bold text-lg italic">Estacionamiento</p>
                    <p className="text-md">{`${item.nombreParqueadero}`}</p>
                  </div> */}
                  <div className="flex flex-col text-start font-semibold text-lg border-b-2 mb-1">
                    <p className="font-bold text-lg italic">User</p>
                    <p className="text-md">{` ${item.userParker}`}</p>
                  </div>
                  <div className="flex flex-col text-start font-semibold text-lg mb-1">
                    <p className="font-bold text-lg italic">Password</p>
                    <p className="text-md">{`${item.passwordParker}`}</p>
                  </div>
                </div>               
              </TarjetaOpcion>
            )
          })
        }
      </div>
    </div>
  )
}

export default Parkers;
