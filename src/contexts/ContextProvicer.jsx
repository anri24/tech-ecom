import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const StateContext = createContext({
    user: {},
    token: null,
    setUser: () => {},
    setToken: () => {},
})

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem("TOKEN"));

    function setToken(token){
        _setToken(token)
        if(token){
            localStorage.setItem("TOKEN", token);
        } else {
            localStorage.removeItem("TOKEN")
        }
    }

    return (
        <StateContext.Provider value={{
            user,
            token,
            setUser,
            setToken,
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);