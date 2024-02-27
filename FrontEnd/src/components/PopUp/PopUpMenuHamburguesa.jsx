// font awesome
import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function PopUpMenuHamburguesa({children,open,isOpen}) {
    return (
        <>
            { open && 
                <div
                    onClick={isOpen} 
                    className="fixed w-screen h-screen left-0 top-0"
                >
                    <div className="w-2/3 flex flex-col bg-black h-screen py-20 px-2">
                        <div className="flex flex-col gap-3">
                            {children}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default PopUpMenuHamburguesa;