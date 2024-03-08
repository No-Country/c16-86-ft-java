import CardMoto from "../components/Parking/CardMoto"
import CardAuto from "../components/Parking/CardAuto"
import Navegador from '../components/Dashboard/Navegador'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function DashboardParking() {
  return (
    <div className="bg-gray-200 h-screen overflow-auto px-1 sm:px-8 lg:px-12 xl:px-16">
        <div className="px-1 py-1 lg:pt-4 lg:pb-2 flex flex-row items-center justify-between">
            <Navegador
                type='dashboard'
            />
            <Link
                to={'/'}
            >
                <button
                    className=' bg-white flex flex-row items-center sm:gap-3 uppercase px-4 py-2 sm:px-8 sm:py-1 rounded text-black font-bold border shadow-sm hover:scale-110'
                >
                    <p className='hidden sm:block'>salir</p>
                    <FontAwesomeIcon icon={faRightToBracket} />
                </button>
            </Link>
        </div>
        <div className='w-full flex flex-col px-4'>
            <h1 className="font-bold italic text-xl sm:text-2xl xl:text-3xl pb-3 sm:py-4">Parqueadero name</h1>
            <div className="w-full flex flex-col gap-5 sm:gap-8">
                <div className='w-full grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                    <CardAuto/>
                    <CardAuto
                        estado={false}
                    />
                    <CardAuto
                        estado={false}
                    />
                    <CardAuto/>
                    <CardAuto/>
                </div>
                <div className='w-full grid grid-cols-3 gap-2 sm:grid-cols-4 xl:grid-cols-5'>
                    <CardMoto/>
                    <CardMoto/>
                    <CardMoto
                        estado={false}
                    />
                    <CardMoto/>
                    <CardMoto
                        estado={false}
                    />
                    <CardMoto/>
                </div>
            </div>
        </div>
  </div>
  )
}

export default DashboardParking;
