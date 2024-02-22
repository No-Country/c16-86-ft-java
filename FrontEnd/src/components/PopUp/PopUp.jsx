// font awesome
import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function PopUp({children,open,isOpen}) {
    return (
        <>
            { open && 
                <div className="fixed w-screen h-screen left-0 top-0 bg-gray-300 shadow px-5 py-8">
                    <div className="flex flex-col">
                        <button 
                            onClick={isOpen}
                            className="w-full text-left mb-3"
                        >
                            <FontAwesomeIcon icon={faX} size="xl"/>
                        </button>
                        <div className="flex flex-col gap-3">
                            {children}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default PopUp;