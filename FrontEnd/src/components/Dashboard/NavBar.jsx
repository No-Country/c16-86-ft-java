import { useState } from "react"
// font awesome
import { faBars,faLeftLong } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//componentes
import PopUpMenuHamburguesa from "../PopUp/PopUpMenuHamburguesa"
import TarjetaMenu from '../Tarjetas/TarjetaMenu'

import { Link,useNavigate } from "react-router-dom"

import LogoEmpresa from '../../../public/2b23363768d7fa56db8e93c03fcda55f.svg'

const menu = [
  {'text':'estacionamientos','link':'/dashboard/parqueaderos','type':'parqueadero','id':'34lhadasd34234'},
  {'text':'empleados','link':'/dashboard/parkers','type':'parker','id':'34l2323fdfsasd34234'},
  {'text':'registros','link':'/dashboard/registros','type':'registros','id':'54548887gg323fdfsasd34234'},
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
        <div className='flex flex-row items-end gap-2'>
          <img 
            src={LogoEmpresa} 
            alt="logo empresa" 
            className="w-[2.5rem]"
          />
          <h1 className="text-3xl xl:text-4xl font-bold font-sans-segoe-UI text-white">Estacsis</h1>
        </div>
        {
          menu?.map( item => {
            return <Link key={item.id} to={item.link} onClick={()=>setOpen(false)}><TarjetaMenu key={item.id} type={item.type} text={item.text}/></Link> 
          })
        }
      </PopUpMenuHamburguesa>
      
    </div>
  )
}

export default NavBar;
