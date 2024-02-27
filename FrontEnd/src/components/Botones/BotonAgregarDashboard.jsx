// font awesome
import { faPlus} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function BotonAgregarDashboard({callback}) {
  return (
    <div className="px-5 py-1 sm:px-6 self-end border shadow text-center rounded-lg">
        <button
          onClick={callback} 
          className="flex gap-2 items-center font-semibold text-md sm:text-lg"
        >
            Agregar
            <FontAwesomeIcon icon={faPlus} />
        </button>
    </div>
  )
}

export default BotonAgregarDashboard
