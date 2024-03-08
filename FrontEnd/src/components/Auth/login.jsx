import { useEffect, useState } from "react";


import InputType from "../Modales/InputType";
import imagenLogin from '../../../public/henry-co-fMBRKrkp37k-unsplash.jpg'
import Alerta from "../Alertas/Alerta";

import useAuth from "../../data/hooks/useAuth";

import { useNavigate  } from 'react-router-dom';

function Login() {

    let navigate  = useNavigate();

    const {
        auth,
        authUser
    }=useAuth()

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [type,setType]=useState('')

    const [alerta,setAlerta]=useState({})

    useEffect(()=>{
        if(Object.keys(auth).length !== 0){
            if(auth.type === 'admin'){
                navigate('/dashboard/parqueaderos');
            }else if (auth.type === 'parker') {
                navigate(`/dashboard-parker/${auth.type.id}`);
            }
        } 
    },[auth])

    const handleFormulario= async (e)=>{
        e.preventDefault()

        if([email,password,type].includes('')){
            setAlerta({
                msg:'Todos los campos son obligatorios',
                error:true
            })

            setTimeout(() => {
                setAlerta({})
            }, 3000);
            return
        }

        const data={
            type:type,
            email:email,
            password:password
        }

        try {
            await authUser(data)
        } catch (error) {
            console.log(error)
            setAlerta({
                msg:error.message,
                error:true
            })

            setTimeout(() => {
                setAlerta({})
            }, 3000);
        }
    }

    return (
        <div className="sm:flex sm:flex-row sm:h-screen bg-gray-100">

            <div className="hidden sm:block sm:w-1/2 overflow-hidden">
                <img 
                    src={imagenLogin}
                    alt="imagen login" 
                />
            </div>

            <div className="w-full h-screen sm:w-1/2 py-8 bg-gray-100">
                <div className='w-[93%] sm:w-[90%] lg:w-[80%] xl:w-[70%] px-5 py-10 shadow-lg rounded-2xl border mx-auto bg-white'>
                    
                    <div className='w-full'>

                        <h2 className='text-center font-bold text-2xl'>Acceder a su cuenta</h2>
                        <p className="text-center text-black font-semibold text-lg italic mt-1">Accede a tu cuenta utilizando tus credenciales.</p>

                        {
                            Object.keys(alerta).length !== 0 && <Alerta alert={alerta}/>
                        }

                        <form onSubmit={handleFormulario} className="flex flex-col gap-2 mt-5">
                            <div className="w-full flex flex-row  justify-center gap-5">
                                <div className="flex px-8 items-center border border-gray-200 rounded dark:border-gray-700">
                                    <input
                                        onChange={(e)=>setType(e.target.value)}  
                                        id="bordered-radio-1" type="radio" value="admin" name="bordered-radio" className="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label htmlFor="bordered-radio-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">usuario admin</label>
                                </div>
                                <div className="flex px-8  items-center border border-gray-200 rounded dark:border-gray-700">
                                    <input
                                        onChange={(e)=>setType(e.target.value)} 
                                        id="bordered-radio-2" type="radio" value="parker" name="bordered-radio" className="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label htmlFor="bordered-radio-2" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">usuario parker</label>
                                </div>
                            </div>  
                            <InputType
                                callback={setEmail}
                                typeInput='text'
                                value={email}
                                placeholderInput='Tucorreo@dominio.com'
                                label='Email'
                            />
                            <InputType
                                callback={setPassword}
                                value={password}
                                typeInput='password'
                                placeholderInput='Contraseña'
                                label='Contraseña'
                            />
                            <button
                                type="submit"
                                className='w-full mt-1 text-black text-lg tracking-wide font-semibold py-3 rounded-xl hover:bg-slate-100 shadow-md border-2  px-8'
                            >
                                Iniciar sesión   
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;