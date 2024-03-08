import imagenBack1 from '../../../public/Estacionamiento1.jpg'
import imagenBack2 from '../../../public/Estacionamiento4.avif'
import imagenBack3 from '../../../public/Estacionamiento5.avif'

const Card = () => {
    return (
    <div className='grid px-5 py-10 sm:grid-cols-3 gap-5 grid-cols-1'>    
        <div className='px-2 py-2 border shadow'>
            <img src={imagenBack1} className="rounded-md" />
            <div className='my-2'> 
                <h2 className='text-center font-semibold'>Administra tu estacionamiento</h2>
                <p className='text-center text-sm mt-1'>
                Gestiona tu parking en tiempo real.
                    </p>  
            </div>
        </div>
        <div className='px-2 py-2 border shadow'>
            <img src={imagenBack2} className="rounded-md" />
            <div className='my-2'> 
                <h2 className='text-center font-semibold'>Registro de entradas/salidas</h2>
                <p className='text-center text-sm mt-1'>
                Registra de forma eficiente la entrada y salida de vehiculos.
                    </p>  
            </div>
        </div>
        <div className='px-2 py-2 border shadow'>
            <img src={imagenBack3} className="rounded-md" />
            <div className='my-2'> 
                <h2 className='text-center font-semibold'>Acceso a empleados</h2>
                <p className='text-center text-sm mt-1'>
                Brindale acceso inmediato a tus colaboradores.
                    </p>  
            </div>
        </div>
    </div>
    )
}

export default Card
