import imagenBack from '../../../public/pexels-pixabay-63294.jpg'

function Intro() {
  return (
    <div
        style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${imagenBack})`
        }}
        className="w-full bg-black xl:px-28 px-5 py-8 xl:py-20 bg-no-repeat bg-cover bg-fixed"
    >
        <div className='w-full flex flex-row justify-between'>
            <div className='w-1/2 flex justify-start'>
                <h1 className="text-4xl xl:text-7xl xl:text-left font-bold font-sans-segoe-UI text-white">Toma el control de tu estacionamiento</h1>
            </div>
        </div>      
    </div>
  )
}

export default Intro
