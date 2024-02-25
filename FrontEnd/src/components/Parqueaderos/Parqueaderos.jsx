import { useState,useEffect } from "react";

import { Link } from "react-router-dom";
import { Outlet ,useLocation} from "react-router-dom";

import TarjetaOpcion from "../Tarjetas/TarjetaOpcion";
import BotonAgregarDashboard from "../Botones/BotonAgregarDashboard";

const menu = [
  {'text':'parqueadero la 33','id':'sdas8ad2casdd342'},
  {'text':'parqueadero Buenos Aires','id':'sads8ad2cvcf33342'},
  {'text':'parqueadero esquina dura','id':'adsad7339434hjkaf'},
]

function Parqueaderos() {

  let location = useLocation();

  const [path,setPath]=useState('/dashboard/cotizaciones');

  useEffect(()=>{
      setPath(location.pathname)
  },[location.pathname])

  return (
    <div>
      {
        path === `/dashboard/parqueaderos`
        ?
        <div className="flex flex-col gap-5 sm:py-5 sm:px-5">
            <div className="flex flex-row justify-between items-center">
              <h1 className="font-bold italic text-xl sm:text-2xl">Parqueaderos</h1>
              <BotonAgregarDashboard/>
            </div>
            <div className="w-full grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
              {
                menu?.map(item=>{
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
