import { useState,useEffect } from "react";

import { Link, useFetcher } from "react-router-dom";
import { Outlet ,useLocation} from "react-router-dom";

import TarjetaOpcion from "../Tarjetas/TarjetaOpcion";
import BotonAgregarDashboard from "../Botones/BotonAgregarDashboard";
import PopUp from "../PopUp/PopUp"
import ModalParqueadero from "../Modales/Modal Crear Parqueadero/ModalParqueadero"


import useEstacionamientos from '../../data/hooks/useEstacionamientos'


function Parqueaderos() {
  const {
    estacionamiento
  }=useEstacionamientos()

  const {
    obtenerEstacionamientos,
    crearEstacionamientos,
    estacionamientos
  }=useEstacionamientos()

  let location = useLocation();

  const [path,setPath]=useState('/dashboard/cotizaciones');
  const [open,setOpen]=useState(false)

  useEffect(()=>{
      setPath(location.pathname)
  },[location.pathname])

  useEffect(()=>{
    console.log(estacionamiento)
  },[estacionamiento])
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
                  crearEstacionamientos={crearEstacionamientos}
                  isOpen={()=>setOpen(false)}
                />
              </PopUp>
            </div>
            <div className="w-full grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
              {
                estacionamiento?.map(item =>{
                  return <Link key={item.id} to={`/dashboard/parqueaderos/${item.id}`}>
                     <TarjetaOpcion key={item.id} type="parqueadero">
                        <div className="w-full px-5 py-1">
                          <p className="text-left font-bold text-lg uppercase">{item.nombre}</p>
                          <div className="flex flex-row justify-between font-semibold text-lg">
                            <p>{`Carros: ${item.carros}`}</p>
                            <p>{`Tarifa carros: $ ${item.tarifaCarros}`}</p>
                          </div>
                          <div className="flex flex-row justify-between font-semibold text-lg">
                            <p>{`Motos: ${item.motos}`}</p>
                            <p>{`Tarifa motos: $ ${item.tarifaMotos}`}</p>
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
