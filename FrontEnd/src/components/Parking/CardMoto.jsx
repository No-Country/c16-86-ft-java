// font awesome
import { faMotorcycle} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function CardMoto({estado}) {

    const disponible = estado !== undefined ? estado : true;
    return (
        <div className={`${disponible === true ? 'border-green-600 bg-green-300':'border-red-600 bg-red-300'} w-full flex flex-col items-stretch  border shadow-sm text-center py-1 px-1 xl:py-2 xl:px-2 rounded-md`}>
            <div className="self-start">
                <FontAwesomeIcon icon={faMotorcycle} />
            </div>
            <div className="w-full flex flex-row justify-between">
                <p className="font-semibold self-end">Moto</p>
                <p className="font-semibold self-end">MZ-2</p>
            </div>
        </div>
    )
}

export default CardMoto
