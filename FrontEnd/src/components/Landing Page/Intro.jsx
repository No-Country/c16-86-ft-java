import imagenBack from '../../../public/pexels-pixabay-63294.jpg'

function Intro() {
  return (
    <div className='w-full text-center'>
        <div className='flex flex-col sm:gap-6 gap-2'>
            <h1 className="text-4xl sm:text-6xl xl:text-7xl  font-bold font-sans-segoe-UI text-white">Toma el control de tu estacionamiento</h1>
            <h2 className="text-lg sm:text-2xl xl:text-3xl  font-bold font-sans-segoe-UI text-white">Optimiza la gestión de tu estacionamiento con nuestro software inteligente</h2>
        </div>
        <button
            className='bg-white mt-5 uppercase px-10 py-2 rounded text-black font-bold border shadow-sm hover:scale-110'
        >
            comienza ya
        </button>    
    </div>
  )
}

export default Intro
