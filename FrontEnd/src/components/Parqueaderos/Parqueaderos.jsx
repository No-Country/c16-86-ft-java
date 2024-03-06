import { useState,useEffect } from "react";

import { Link, useFetcher } from "react-router-dom";
import { Outlet ,useLocation} from "react-router-dom";

import TarjetaOpcion from "../Tarjetas/TarjetaOpcion";
import BotonAgregarDashboard from "../Botones/BotonAgregarDashboard";
import PopUp from "../PopUp/PopUp"
import ModalParqueadero from "../Modales/Modal Crear Parqueadero/ModalParqueadero"

import useEstacionamientos from '../../data/hooks/useEstacionamientos'

const menu = [
  {'text':'parqueadero la 33','id':'sdas8adadeqw34234d342'},
  {'text':'parqueadero Buenos Aires','id':'sads8ad2cvcf33342'},
  {'text':'parqueadero esquina dura','id':'afdfsd32343339434hjkaf'},
]

function Parqueaderos() {

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

/*   useEffect(()=>{
    const obtenerParqueaderos = async ()=>{
      try {
        const response = await obtenerEstacionamientos()
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }  
    obtenerParqueaderos()
  },[]) */


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
                  crearEstacionamientos={crearEstacionamientos}
                  isOpen={()=>setOpen(false)}
                />
              </PopUp>
            </div>
            <div className="w-full grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
              {
                estacionamientos?.map(item=>{
                  return <Link key={item.id} to={`/dashboard/parqueaderos/${item.id}`}><TarjetaOpcion key={item.id} type="parqueadero" text={item.text}/></Link>
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
