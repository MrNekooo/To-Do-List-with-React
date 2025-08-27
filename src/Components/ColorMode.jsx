import { createContext, useContext, useState } from "react"

const Color = createContext();

const ColorMode = ({children}) => {

    const [mode, setMode] = useState("light")


    return (
        <Color.Provider>
            {children}
        </Color.Provider>
    )
}

export const useColor = () => useContext(Color)

export default ColorMode