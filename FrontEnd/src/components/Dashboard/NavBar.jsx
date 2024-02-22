import { useState } from "react"
// font awesome
import { faBars,faLeftLong } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//componentes
import PopUp from '../PopUp/PopUp'
import TarjetaMenu from '../Tarjetas/TarjetaMenu'

import { Link,useNavigate } from "react-router-dom"

const menu = [
  {'text':'parqueaderos','link':'/dashboard/parqueaderos'},
  {'text':'parkers','link':'/dashboard/parkers'},
  {'text':'clientes','link':'/dashboard/usuarios'},
]

function NavBar() {
  const navigate = useNavigate()
  const [open,setOpen]=useState(false)

  const returnBack=()=>{
    navigate(-1)
  }

  return (
    <div className="flex flex-col">

      <div className="relative w-full flex flex-row justify-between">

        <button
          className="cursor-pointer"
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

      <PopUp
        open={open}
        isOpen={()=>setOpen(false)}
      >
        {
          menu?.map( item => {
            return <Link to={item.link} onClick={()=>setOpen(false)}><TarjetaMenu text={item.text}/></Link> 
          })
        }
      </PopUp>
      
    </div>
  )
}

export default NavBar;
