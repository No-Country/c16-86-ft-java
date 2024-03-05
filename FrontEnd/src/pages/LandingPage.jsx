import Navegador from '../components/Dashboard/Navegador'
import Intro from '../components/Landing Page/Intro'

import imagenBack from '../../public/pexels-pixabay-63294.jpg'

function LandingPage() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.7)),url(${imagenBack})`
      }}
      className="w-full bg-black xl:px-16 px-5 pt-8 pb-16 bg-no-repeat bg-cover bg-fixed"
    >
      <Navegador/>
      <Intro/>
    </div>
  )
}

export default LandingPage
