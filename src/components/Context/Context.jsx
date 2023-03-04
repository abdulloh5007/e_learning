import { createContext, useState } from "react";


const Context = createContext()
function Provider({children}){
    const [link, setLink] = useState([])
    
    return (
        <Context.Provider value={{link, setLink}}>
            {children}
        </Context.Provider>
    )
}
export {Context, Provider}