import { useEffect, useState } from "react"

import TarjetaOpcion from "../Tarjetas/TarjetaOpcion"
import BotonAgregarDashboard from '../Botones/BotonAgregarDashboard'

import PopUp from "../PopUp/PopUp"
import ModalParker from "../Modales/Modal Crear Parker/ModalParker"

import useColaboradores from '../../data/hooks/useColaboradores'

function Parkers(){
  const [open,setOpen]=useState(false)

  const {
    crearColaborador,
    obtenerColaboradores,
    colaboradores
  }=useColaboradores()

    /* useEffect(()=>{
      const obtenerColaboradores = async ()=>{
        try {
          const response = await obtenerColaboradores()
          console.log(response)
        } catch (error) {
          console.log(error)
        }
      }  
      obtenerColaboradores()
  },[]) */

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
              crearColaborador={crearColaborador}
              isOpen={()=>setOpen(false)}
            />
          </PopUp>
        </div>
      <div className="w-full grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
        {
          colaboradores?.map(item => {
            return (
              <TarjetaOpcion key={item.id} type="parker">
                <div className="w-full px-5 py-1">
                  <p className="text-left font-bold text-lg uppercase">{`${item.nombres} ${item.apellidos}`}</p>
                  <div className="flex flex-col text-start font-semibold text-lg border-b-2 mb-1">
                    <p className="font-bold text-lg italic">DNI</p>
                    <p className="text-md">{`${item.identificacion}`}</p>
                  </div>
                  <div className="flex flex-col text-start font-semibold text-lg border-b-2 mb-1">
                    <p className="font-bold text-lg italic">Estacionamiento</p>
                    <p className="text-md">{`${item.nombreParqueadero}`}</p>
                  </div>
                  <div className="flex flex-col text-start font-semibold text-lg border-b-2 mb-1">
                    <p className="font-bold text-lg italic">User</p>
                    <p className="text-md">{` ${item.user}`}</p>
                  </div>
                  <div className="flex flex-col text-start font-semibold text-lg mb-1">
                    <p className="font-bold text-lg italic">Password</p>
                    <p className="text-md">{`${item.password}`}</p>
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
