import imagenBack1 from '../../../public/Estacionamiento1.jpg'
import imagenBack2 from '../../../public/Estacionamiento4.avif'
import imagenBack3 from '../../../public/Estacionamiento5.avif'

const Card = () => {
    return (
    <div className='grid px-5 py-10 sm:grid-cols-3 gap-5 grid-cols-1'>    
        <div className='px-2 py-2 border shadow'>
            <img src={imagenBack1} className="rounded-md" />
            <div className='my-2'> 
                <h2 className='font-semibold'>Administraciones de Estacionamientos</h2>
                <p className='text-sm mt-1'>
                Administra tus estacionamientos. 
                    </p>  
            </div>
        </div>
        <div className='px-2 py-2 border shadow'>
            <img src={imagenBack2} className="rounded-md" />
            <div className='my-2'> 
                <h2 className='font-semibold'>Registro de Entradas/Salidas</h2>
                <p className='text-sm mt-1'>
                Registra de forma eficiente las entradas/salidas de vehiculos. 
                    </p>  
            </div>
        </div>
        <div className='px-2 py-2 border shadow'>
            <img src={imagenBack3} className="rounded-md" />
            <div className='my-2'> 
                <h2 className='font-semibold'>Acceso a Empleados</h2>
                <p className='text-sm mt-1'>
                Brindale acceso a tus empleados.
                    </p>  
            </div>
        </div>
    </div>
    )
}

export default Card
