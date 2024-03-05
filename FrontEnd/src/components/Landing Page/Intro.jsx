import imagenBack from '../../../public/pexels-pixabay-63294.jpg'

function Intro() {
  return (
    <div className='w-full text-center'>
        <div className='flex flex-col sm:gap-6 gap-4 xl:gap-6 pt-5 sm:pt-8'>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl  font-bold font-sans-segoe-UI text-white">Toma el control de tu estacionamiento</h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl  font-bold font-sans-segoe-UI text-white text-center">Optimiza la gestión de tu estacionamiento con nuestro software inteligente</h2>
        </div>
        <button
            className='py-2 px-10 text-2xl font-bold uppercase bg-slate-50 rounded-md border border-black  mt-5  text-black shadow-sm hover:scale-110'
        >
            comienza ya
        </button>    
    </div>
  )
}

export default Intro
