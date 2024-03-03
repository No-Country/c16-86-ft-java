import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import TarjetaOpcion from "../components/Tarjetas/TarjetaOpcion"
//imagenes
import imagen1 from '../../public/pexels-carl-newton-2280148.jpg'
import imagen2 from '../../public/parkin1.webp'
import imagen3 from '../../public/pexels-brett-sayles-1756957.jpg'

import Navegador from "../components/Dashboard/Navegador";

function DashboardPrincipal(){
    const [imagen,setImage]=useState(imagen1)
    
    const images={
        1:imagen1,
        2:imagen2,
        3:imagen3
    }

    const changeImage=(number)=>{
        setImage(images[number])
    }

    useEffect(()=>{
        const lenghtObject = Object.keys(images).length
        const numberRandon = Math.floor(Math.random() * (lenghtObject - 1 + 1 )) + 1;
        changeImage(numberRandon)
    },[])

    return (
        <div 
            className="w-full flex flex-col"
        >
            <div className="w-full bg-slate-50 border shadow-lg cursor-pointer px-10 py-2">
                <Navegador/>
            </div>

            <div 
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${imagen})`
                }}
                className="w-full bg-black h-screen xl:px-40 px-5 pt-8 xl:pt-20 bg-no-repeat bg-cover bg-fixed" 
            >

                <div className="flex flex-col gap-5 sm:gap-10">
                    
                    <div className="flex flex-col gap-5 sm:flex-row">
                        <Link
                            className="w-full"
                            to={'/dashboard/parqueaderos'}
                        >
                            <TarjetaOpcion
                                type="parqueadero"
                            />
                        </Link>
                        <Link
                            className="w-full"
                            to={'/dashboard/parqueaderos'}
                        >
                            <TarjetaOpcion
                                type="parqueadero"
                            />
                        </Link>
                        <Link
                            className="w-full"
                            to={'/dashboard/parqueaderos'}
                        >
                            <TarjetaOpcion
                                type="parqueadero"
                            />
                        </Link>
                    </div>

                    <div className="flex flex-col gap-5 sm:flex-row">

                        <Link
                            className="w-full flex justify-center"
                            to={'/dashboard/parkers'}
                        >
                            <TarjetaOpcion
                                type="parker"
                            />
                        </Link>

                        <Link
                            className="w-full flex justify-center"
                            to={'/dashboard/usuarios'}
                        >
                            <TarjetaOpcion
                                type="usuario"
                            />
                        </Link>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default DashboardPrincipal;
