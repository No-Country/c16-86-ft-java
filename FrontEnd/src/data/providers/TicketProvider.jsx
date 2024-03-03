import { createContext } from "react";

const TicketContext = createContext()

function TicketProvider({children}) {
    return (
        <TicketContext.Provider
            value={{

            }}
        >
            {children}
        </TicketContext.Provider>
    )
}

export{
    TicketContext
}

export default TicketProvider;