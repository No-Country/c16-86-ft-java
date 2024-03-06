import { useState,useEffect } from 'react';

import LogoEmpresa from '../../../public/2b23363768d7fa56db8e93c03fcda55f.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

import { Link, useLocation } from 'react-router-dom';

function Navegador(){
    let location = useLocation();

    const [path,setPath]=useState('/');

    useEffect(()=>{
        setPath(location.pathname)
    },[location.pathname])

    return (
        <div className="w-full flex flex-row justify-between pb-5">

            <div className='flex flex-row items-end gap-2'>
                <img 
                    src={LogoEmpresa} 
                    alt="logo empresa" 
                    className="w-[2.5rem]"
                />
                <h1 className="text-3xl xl:text-4xl font-bold font-sans-segoe-UI text-white">Estacsis</h1>
            </div>
            {
                path === '/' ?
                    <Link
                        to={'/login'}
                    >
                        <button
                            className='bg-white mt-5 flex flex-row items-center sm:gap-3 uppercase px-2 py-0 sm:px-8 sm:py-1 rounded text-black font-bold border shadow-sm hover:scale-110'
                        >
                            <p className='hidden sm:block'>ingresar</p>
                            <FontAwesomeIcon icon={faRightToBracket} />
                        </button>
                    </Link>
                :
                    <Link
                        to={'/'}
                    >
                        <button
                            className='bg-white mt-5 flex flex-row items-center sm:gap-3 uppercase px-2 py-0 sm:px-8 sm:py-1 rounded text-black font-bold border shadow-sm hover:scale-110'
                        >
                            <p className='hidden sm:block'>salir</p>
                            <FontAwesomeIcon icon={faRightToBracket} />
                        </button>
                    </Link>
            }
        </div>
    )
}

export default Navegador;
