import CardMoto from "./CardMoto"
import CardAuto from "./CardAuto"

import {useLocation} from "react-router-dom";
import { useEffect, useState } from "react";


import useEstacionamientos from "../../data/hooks/useEstacionamientos";

function DashboardParking() {

  const {
    estacionamiento
  }=useEstacionamientos()

  let location = useLocation();

  
  const [pathName,setPathName]=useState(location.pathname.split('/')[3])

  const [parking,setParking]=useState({})
  


  useEffect(()=>{
    const ruta = location.pathname.split('/')[3]
    setPathName(ruta)
  },[])

  useEffect(()=>{
    const parkingLot = estacionamiento.find( item => {
      if(item.id === pathName){
        return item
      }
    })


    if(parkingLot){
      setParking(parkingLot)
    }
  },[estacionamiento])

  return (
    <div className='w-full flex flex-col sm:px-5'>
      {
        parking && <h1 className="font-bold italic text-xl sm:text-2xl xl:text-3xl pb-3 sm:py-4">{parking.nombre}</h1>
      }
      <div className="w-full flex flex-col gap-5 sm:gap-8">
        <div className='w-full grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-4'>
            {
              parking?.parkingCarros?.map( item => {
                return <CardAuto 
                  key={item.nomenclatura}
                  estado={item.disponible}
                  nomenclatura={item.nomenclatura}
                  id={item.nomenclatura}
                />
              })
            }
        </div>
        <div className='w-full grid grid-cols-3 gap-2 sm:grid-cols-4 xl:grid-cols-5'>
          {
            parking?.parkingCarros?.map( item => {
              return <CardMoto 
                key={item.nomenclatura}
                estado={item.disponible}
                nomenclatura={item.nomenclatura}
                id={item.nomenclatura}
              />
            })
          }
        </div>
      </div>
      
    </div>
  )
}

export default DashboardParking
