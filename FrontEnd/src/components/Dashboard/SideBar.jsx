//components
import TarjetaMenu from "../Tarjetas/TarjetaMenu"

//react router
import { Link,useNavigate } from "react-router-dom"

// font awesome
import {faLeftLong } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const menu = [
    {'text':'parqueaderos','link':'/dashboard/parqueaderos'},
    {'text':'parkers','link':'/dashboard/parkers'},
    {'text':'clientes','link':'/dashboard/usuarios'},
  ]

function SideBar() {

    const navigate = useNavigate()
  
    const returnBack=()=>{
      navigate(-1)
    }

    return (
        <div className="w-full h-screen border gap-5 px-5 flex flex-col py-10">

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
                    return <Link to={item.link}><TarjetaMenu text={item.text}/></Link> 
                })
            }

        </div>
    )
}

export default SideBar
