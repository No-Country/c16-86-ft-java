// font awesome
import { faPlus} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function BotonAgregarDashboard() {
  return (
    <div className="px-5 py-1 sm:px-6 sm:py-2 self-end border shadow-sm text-center rounded-lg">
        <button className="flex gap-2 items-center font-semibold text-md sm:text-lg">
            Agregar
            <FontAwesomeIcon icon={faPlus} />
        </button>
    </div>
  )
}

export default BotonAgregarDashboard
