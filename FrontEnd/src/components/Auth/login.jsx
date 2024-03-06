import { useState } from "react";
import { Link } from "react-router-dom";
import InputType from "../Modales/InputType";

import imagenLogin from '../../../public/henry-co-fMBRKrkp37k-unsplash.jpg'

function Login() {


    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const handleSubmit= async (e)=>  {}
    return (
        <div className="sm:flex sm:flex-row sm:h-screen bg-gray-100">

            <div className="hidden sm:block sm:w-1/2 overflow-hidden">
                <img 
                    src={imagenLogin}
                    alt="imagen login" 
                />
            </div>

            <div className="w-full h-screen sm:w-1/2 py-10 xl:py-20 bg-gray-100">
                <div className='w-[93%] sm:w-[90%] lg:w-[80%] xl:w-[70%] px-5 py-10 shadow-lg rounded-2xl border mx-auto bg-white'>
                    
                    <div className='w-full'>

                        <h2 className='text-center font-bold text-2xl'>Acceder a su cuenta</h2>
                        <p className="text-center text-black text-md italic mt-1">Accede a tu cuenta utilizando tus credenciales.</p>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <InputType
                                callback={setEmail}
                                typeInput='text'
                                value={email}
                                placeholderInput='tucorreo@dominio.com'
                                label='Email'
                            />
                            <InputType
                                callback={setPassword}
                                value={password}
                                typeInput='password'
                                placeholderInput='contraseña'
                                label='contraseña'
                            />
                            <button
                                type="submit"
                                className='w-full text-black text-lg tracking-wide font-semibold py-3 rounded-xl hover:bg-slate-100 shadow-md border-2  px-8'
                            >
                                Iniciar sesion   
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;