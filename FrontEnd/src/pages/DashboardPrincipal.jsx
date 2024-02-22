import { Link } from "react-router-dom";
import TarjetaOpcion from "../components/Tarjetas/TarjetaOpcion"

function DashboardPrincipal(){
  return (
    <div className="w-full h-screen bg-slate-50 sm:px-40 px-5 pt-8 sm:pt-32">

        <div className="flex flex-col gap-5 sm:gap-10">
            
            <div className="flex flex-col gap-5 sm:flex-row">
                <Link
                    className="w-full"
                    to={'/dashboard/parqueaderos'}
                >
                    <TarjetaOpcion
                        text={'Parqueadero'}
                    />
                </Link>
                <Link
                    className="w-full"
                    to={'/dashboard/parqueaderos'}
                >
                    <TarjetaOpcion
                        text={'Parqueadero'}
                    />
                </Link>
                <Link
                    className="w-full"
                    to={'/dashboard/parqueaderos'}
                >
                    <TarjetaOpcion
                        text={'Parqueadero'}
                    />
                </Link>
            </div>

            <div className="flex flex-col gap-5 sm:flex-row">

                <Link
                    className="w-full flex justify-center"
                    to={'/dashboard/parkers'}
                >
                    <TarjetaOpcion
                        text={'Parkers'}
                    />
                </Link>

                <Link
                    className="w-full flex justify-center"
                    to={'/dashboard/usuarios'}
                >
                    <TarjetaOpcion
                        text={'Usuarios'}
                    />
                </Link>

            </div>

        </div>

    </div>
  )
}

export default DashboardPrincipal;
