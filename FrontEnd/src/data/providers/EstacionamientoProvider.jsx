import { createContext } from "react";

const EstacionamientoContext = createContext()

function EstacionamientoProvider({children}) {
    return (
        <EstacionamientoContext.Provider
            value={{

            }}
        >
            {children}
        </EstacionamientoContext.Provider>
    )
}

export{
    EstacionamientoContext
}

export default EstacionamientoProvider;