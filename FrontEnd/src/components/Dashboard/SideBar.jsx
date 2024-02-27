//components
import TarjetaMenu from "../Tarjetas/TarjetaMenu"

//react router
import { Link,useNavigate } from "react-router-dom"

// font awesome
import {faLeftLong } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const menu = [
    {'text':'parqueaderos','link':'/dashboard/parqueaderos','type':'parqueadero'},
    {'text':'parkers','link':'/dashboard/parkers','type':'parker'},
    {'text':'clientes','link':'/dashboard/usuarios','type':'usuario'},
]

function SideBar() {

    const navigate = useNavigate()
  
    const returnBack=()=>{
      navigate(-1)
    }

    return (
        <div className="w-full border gap-5 px-5 flex flex-col py-10 rounded-lg shadow-2xl bg-black">

            <div
                className="flex-end"
            >
                <button
                    onClick={returnBack}
                >
                    <FontAwesomeIcon icon={faLeftLong} size="2xl"/>
                </button>
            </div>

            {
                menu?.map( item => {
                    return <Link to={item.link}><TarjetaMenu type={item.type} text={item.text}/></Link> 
                })
            }

        </div>
    )
}

export default SideBar
