import { useState } from "react";

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
    console.log(typeof(estado))
    console.log(typeof(nomenclatura))

    const [identificador,setIdentificador]=useState(id)
    const [open,setOpen]=useState(false)
    const disponible = estado !== undefined ? estado : true;

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
                    <p className="font-semibold self-end">{nomenclatura}</p>
                </div>
            </div>
            <PopUp
                open={open}
              >
                {
                    disponible === true ?
                    <ModalRegistroVehiculo
                      isOpen={()=>setOpen(false)}
                    />:
                    <ModalSalidaVehiculo
                        isOpen={()=>setOpen(false)}
                    />
                }
            </PopUp>
        </>
    )
}

export default CardAuto
