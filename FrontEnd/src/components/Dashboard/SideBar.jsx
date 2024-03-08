//components
import TarjetaMenu from "../Tarjetas/TarjetaMenu"

//react router
import { Link,useNavigate } from "react-router-dom"

// font awesome
import {faLeftLong , faRightToBracket} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const menu = [
    {'text':'estacionamientos','link':'/dashboard/parqueaderos','type':'parqueadero','id':'34lhadasd34234'},
    {'text':'empleados','link':'/dashboard/parkers','type':'parker','id':'34l2323fdfsasd34234'},
    {'text':'registros','link':'/dashboard/registros','type':'registros','id':'54548887gg323fdfsasd34234'},
]

function SideBar() {

    const navigate = useNavigate()
  
    const returnBack=()=>{
      navigate(-1)
    }

    return (
        <div className="w-full px-5 py-10 flex flex-col justify-between rounded-lg sshadow-2xl bg-azul-argentina border-2 border-blue-400">
            <div className="flex flex-col gap-5">
                <div
                    className="flex-end"
                >
                    <button
                        onClick={returnBack}
                    >
                        <FontAwesomeIcon icon={faLeftLong} size="2xl"/>
                    </button>
                </div>

                <div className="flex flex-col gap-5">
                    {
                        menu?.map( item => {
                            return <Link key={item.id} to={item.link}><TarjetaMenu key={item.id}  type={item.type} text={item.text}/></Link> 
                        })
                    }
                </div>


            </div>

            <Link
                to={'/'}
            >
                <button
                    className='w-full bg-white flex flex-row items-center justify-center sm:gap-3 uppercase px-2 py-0 sm:px-8 sm:py-1 rounded text-black font-bold border shadow-sm'
                >
                    <p>salir</p>
                    <FontAwesomeIcon icon={faRightToBracket} size="lg" />
                </button>
            </Link>
        </div>
    )
}

export default SideBar
