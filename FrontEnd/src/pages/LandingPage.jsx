import Navegador from '../components/Dashboard/Navegador'
import Intro from '../components/Landing Page/Intro'

function LandingPage() {
  return (
    <div>
      <div className='w-full py-3 px-8'>
        <Navegador/>
      </div>
      <Intro/>
    </div>
  )
}

export default LandingPage
