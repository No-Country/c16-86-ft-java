import Navegador from '../components/Dashboard/Navegador'
import Intro from '../components/Landing Page/Intro'
import Servicios from '../components/Landing Page/NuestrosServicios'
import ContactUs from '../components/Landing Page/ContactUs'

import imagenBack from '../../public/pexels-pixabay-63294.jpg'
import Rating from '../components/Landing Page/Rating'
import Review from '../components/Landing Page/Review'

function LandingPage() {
  return (
  <div>   
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.7)),url(${imagenBack})`
      }}
      className="w-full h-screen bg-black xl:px-16 px-5 pt-8 pb-16 bg-no-repeat bg-cover bg-fixed"
    >
      <Navegador/>
      <Intro/>
    </div>
    <Servicios/>
    <Review/>
    <ContactUs/>
  </div>
  )
}

export default LandingPage
