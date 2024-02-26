import { Link } from "react-router-dom";
import TarjetaOpcion from "../components/Tarjetas/TarjetaOpcion"
import imagenBackground from '../../public/parkin1.webp'

function DashboardPrincipal(){
  return (
    <div 
        className="w-full flex flex-col"
    >
        <div className="w-full h-16 bg-white border shadow-lg cursor-pointer">

        </div>

        <div 
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${imagenBackground})`
            }}
            className="w-full h-screen xl:px-40 px-5 pt-8 xl:pt-20 bg-no-repeat bg-cover bg-fixed" 
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
