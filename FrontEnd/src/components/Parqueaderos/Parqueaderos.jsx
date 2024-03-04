import { useState,useEffect } from "react";

import { Link } from "react-router-dom";
import { Outlet ,useLocation} from "react-router-dom";

import TarjetaOpcion from "../Tarjetas/TarjetaOpcion";
import BotonAgregarDashboard from "../Botones/BotonAgregarDashboard";
import PopUp from "../PopUp/PopUp"
import ModalParqueadero from "../Modales/Modal Crear Parqueadero/ModalParqueadero"

import useAuth from "../../data/hooks/useAuth";
import useEstacionamientos from '../../data/hooks/useEstacionamientos'


function Parqueaderos() {

  const {
    estacionamiento
  }=useAuth()

  const {
    crearEstacionamientos
  }=useEstacionamientos()

  let location = useLocation();

  const [path,setPath]=useState('/dashboard/cotizaciones');
  const [open,setOpen]=useState(false)

  useEffect(()=>{
      setPath(location.pathname)
  },[location.pathname])

  return (
    <div>
      {
        path === `/dashboard/parqueaderos`
        ?
        <div className="flex flex-col gap-5">
            <div className="flex flex-row justify-between items-center">
              <h1 className="font-bold italic text-xl sm:text-2xl">Parqueaderos</h1>
              <BotonAgregarDashboard
                callback={()=>setOpen(true)}
              />
              <PopUp
                open={open}
              >
                <ModalParqueadero
                  callback={crearEstacionamientos}
                  isOpen={()=>setOpen(false)}
                />
              </PopUp>
            </div>
            <div className="w-full grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
              {
                estacionamiento?.map(item=>{
                  return <Link to={`/dashboard/parqueaderos/${item.id}`}><TarjetaOpcion type="parqueadero" text={item.text}/></Link>
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
