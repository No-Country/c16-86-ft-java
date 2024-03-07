import { useState,useEffect } from "react";

// font awesome
import { faMotorcycle} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import ModalRegistroVehiculo from "../Modales/Modal Registro de Vehiculo/ModalRegistroVehiculo";
import ModalSalidaVehiculo from "../Modales/Modal Registro de Salida/ModalSalidaVehiculo";
import PopUp from "../PopUp/PopUp";

function CardMoto({
    estado,
    nomenclatura,
    id
}){

    const [identificador]=useState(id)
    const [patente,setPatente]=useState(nomenclatura)
    const [disponible,setDisponible]=useState(estado)
    const [open,setOpen]=useState(false)

    useEffect(() => {
        // Actualizar el estado disponible cuando la prop estado cambie
        if (estado !== undefined) {
            setDisponible(estado);
        }
    },[estado]);
    
    return (
        <>
            <div 
                onClick={()=>setOpen(true)} 
                className={`${disponible === true ? 'border-green-600 bg-green-300':'border-red-600 bg-red-300'} w-full flex flex-col items-stretch  border shadow-sm text-center py-1 px-1 xl:py-2 xl:px-2 rounded-md cursor-pointer`}
            >
                <div className="self-start">
                    <FontAwesomeIcon icon={faMotorcycle} />
                </div>
                <div className="w-full flex flex-row justify-between">
                    <p className="font-semibold self-end">Moto</p>
                    <p className="font-semibold self-end">{patente}</p>
                </div>
            </div>
            <PopUp
                open={open}
              >
                {
                    disponible === true ?
                    <ModalRegistroVehiculo
                      isOpen={()=>setOpen(false)}
                      idParking={identificador}
                      type={'moto'}
                    />:
                    <ModalSalidaVehiculo
                        isOpen={()=>setOpen(false)}
                    />
                }
            </PopUp>
        </>
    )
}

export default CardMoto
