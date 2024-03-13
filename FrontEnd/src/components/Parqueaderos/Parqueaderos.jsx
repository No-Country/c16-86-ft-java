import { useState,useEffect } from "react";

import { Link } from "react-router-dom";
import { Outlet ,useLocation} from "react-router-dom";

import TarjetaOpcion from "../Tarjetas/TarjetaOpcion";
import BotonAgregarDashboard from "../Botones/BotonAgregarDashboard";
import PopUp from "../PopUp/PopUp"
import ModalParqueadero from "../Modales/Modal Crear Parqueadero/ModalParqueadero"


import useEstacionamientos from '../../data/hooks/useEstacionamientos'


function Parqueaderos(){

  const {
    estacionamientos,
    obtenerEstacionamientos
  } = useEstacionamientos()

  let location = useLocation();

  const [path,setPath]=useState('/dashboard/cotizaciones');
  const [open,setOpen]=useState(false)

  useEffect(()=>{
      setPath(location.pathname)
  },[location.pathname])


  useEffect(()=>{
    const getEstacionamientos = async ()=>{
      try {
        const respuesta = await obtenerEstacionamientos()
        console.log(respuesta)
      } catch (error) {
        console.log(error)
      }
    }

    getEstacionamientos()
  },[])

  return (
    <div>
      {
        path === `/dashboard/parqueaderos`
        ?
        <div className="flex flex-col gap-5">
            <div className="flex flex-row justify-between items-center">
              <h1 className="font-bold italic text-xl sm:text-2xl">Estacionamientos</h1>
              <BotonAgregarDashboard
                callback={()=>setOpen(true)}
              />
              <PopUp
                open={open}
              >
                <ModalParqueadero
                  isOpen={()=>setOpen(false)}
                />
              </PopUp>
            </div>
            <div className="w-full grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
              {
                estacionamientos?.map(item =>{
                    return <Link key={item.idParkingLoot} to={`/dashboard/parqueaderos/${item.id}`}>
                      <TarjetaOpcion key={item.idParkingLoot} type="parqueadero">
                          <div className="w-full">
                            <p className="text-left font-bold text-lg uppercase">{item.nameParkingLoot}</p>
                            <div className="flex flex-row justify-between font-semibold text-lg">
                              <p>{`Carros: ${item.aCapacity}`}</p>
                            </div>
                            <div className="flex flex-row justify-between font-semibold text-lg">
                              <p>{`Motos: ${item.mCapacity}`}</p>
                            </div>
                          </div>
                      </TarjetaOpcion>
                      </Link>
                })
              }
            </div>
          </div>
          :
          <div>
            <Outlet/>
          </div>
      }
    </div>
  )
}

export default Parqueaderos;
