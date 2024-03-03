import { createContext } from "react";

const ColaboradorContext = createContext()

function ColaboradorProvider({children}) {
    return (
        <ColaboradorContext.Provider
            value={{

            }}
        >
            {children}
        </ColaboradorContext.Provider>
    )
}

export{
    ColaboradorContext
}

export default ColaboradorProvider;