import { useState, useEffect } from "react";

// font awesome
import { faCarSide} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import ModalRegistroVehiculo from "../Modales/Modal Registro de Vehiculo/ModalRegistroVehiculo";
import ModalSalidaVehiculo from "../Modales/Modal Registro de Salida/ModalSalidaVehiculo";
import PopUp from "../PopUp/PopUp";

function CardAuto({
    estado,
    nomenclatura,
    id
}) {

    const [identificador]=useState(id)
    const [patente,setPatente]=useState(nomenclatura)
    const [disponible,setDisponible]=useState(estado)
    const [open,setOpen]=useState(false)

    useEffect(() => {
        // Actualizar el estado disponible cuando la prop estado cambie
        if (estado !== undefined) {
            setDisponible(estado);
        }
    }, [estado]);

    return (
        <>
            <div
                onClick={()=>setOpen(true)} 
                className={`${disponible === true ? 'border-green-600 bg-green-300':'border-red-600 bg-red-300'} w-full flex flex-col items-stretch border shadow-sm text-center py-2 px-2 xl:py-4 xl:px-4 rounded-md cursor-pointer`}
            >
                <div className="self-start">
                    <FontAwesomeIcon icon={faCarSide}/>
                </div>
                <div className="w-full flex flex-row justify-between">
                    <p className="font-semibold self-end">Auto</p>
                    <p className="font-semibold self-end">{patente}</p>
                </div>
            </div>
            <PopUp
                open={open}
              >
                {
                    disponible === true ?
                    <ModalRegistroVehiculo
                        idParking={identificador}
                        isOpen={()=>setOpen(false)}
                        type={'auto'}
                    />:
                    <ModalSalidaVehiculo
                        id={identificador}
                        isOpen={()=>setOpen(false)}
                    />
                }
            </PopUp>
        </>
    )
}

export default CardAuto
