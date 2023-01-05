import React, {useState} from "react"

const MainContext = React.createContext();

function MainContextProvider({children}) { 
    const [questions, setQuestions] = useState([])

    return (
        <MainContext.Provider value={{questions, setQuestions}}>
            {children}
        </MainContext.Provider>
    )
}

export {MainContextProvider, MainContext}