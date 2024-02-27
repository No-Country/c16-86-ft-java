import { useState } from "react"
// font awesome
import { faBars,faLeftLong } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//componentes
import PopUpMenuHamburguesa from "../PopUp/PopUpMenuHamburguesa"
import TarjetaMenu from '../Tarjetas/TarjetaMenu'

import { Link,useNavigate } from "react-router-dom"

const menu = [
  {'text':'parqueaderos','link':'/dashboard/parqueaderos','type':'parqueadero'},
  {'text':'parkers','link':'/dashboard/parkers','type':'parker'},
  {'text':'clientes','link':'/dashboard/usuarios','type':'usuario'},
]

function NavBar() {
  const navigate = useNavigate()
  const [open,setOpen]=useState(false)

  const returnBack=()=>{
    navigate(-1)
  }

  return (
    <div className="px-5 py-5">

      <div className="relative w-full flex flex-row justify-between">

        <button
          onClick={()=>setOpen(true)}
        >
          <FontAwesomeIcon icon={faBars}  size="2xl"/>
        </button>

        <button
          onClick={returnBack}
        >
          <FontAwesomeIcon icon={faLeftLong} size="2xl"/>
        </button>

      </div>

      <PopUpMenuHamburguesa
        open={open}
        isOpen={()=>setOpen(false)}
      >
        {
          menu?.map( item => {
            return <Link to={item.link} onClick={()=>setOpen(false)}><TarjetaMenu type={item.type} text={item.text}/></Link> 
          })
        }
      </PopUpMenuHamburguesa>
      
    </div>
  )
}

export default NavBar;
