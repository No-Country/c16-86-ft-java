import contactus from '../../../public/contact_us_banner.jpg'

function ContactUs() {
    return (
        <div className="flex px-8 sm:px-16 lg:px-20 xl:px-28 lg:py-14 sm:py-12 py-10 flex-col sm:flex-row sm:gap-2 bg-gray-100">

            <div className='sm:w-1/2'>
                <div className="pb-5 xl:py-10 sm:py-5 sm:gap-2 flex flex-col xl:gap-4">
                    <h1 className="xl:text-6xl lg:text-5xl text-4xl font-semibold">Empieza tu</h1>
                    <h1 className="xl:text-6xl lg:text-5xl text-4xl font-semibold">Revolucion con</h1>
                    <h1 className="xl:text-6xl lg:text-5xl text-4xl font-semibold">Nuestro software</h1>
                </div>
                <button
                    className="py-2 px-8 text-2xl font-bold uppercase bg-slate-50 rounded-md border border-black"
                >
                    contáctanos
                </button>
            </div>

            <div className='hidden sm:block sm:w-1/2'>
                <img 
                    src={contactus} 
                    alt=""
                    className='rounded' 
                />
            </div>
        </div>
    )
}

export default ContactUs;
