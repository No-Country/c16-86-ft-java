// font awesome
import { faCarSide} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function CardAuto({estado}) {

    const disponible = estado !== undefined ? estado : true;

    return (
        <div className={`${disponible === true ? 'border-green-600 bg-green-300':'border-red-600 bg-red-300'} w-full flex flex-col items-stretch border shadow-sm text-center py-2 px-2 xl:py-4 xl:px-4 rounded-md`}>
            <div className="self-start">
                <FontAwesomeIcon icon={faCarSide}/>
            </div>
            <div className="w-full flex flex-row justify-between">
                <p className="font-semibold self-end">Auto</p>
                <p className="font-semibold self-end">AZ-2</p>
            </div>
        </div>
    )
}

export default CardAuto
