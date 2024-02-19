import { createContext } from "react"; 

interface LoginContextProps {
    loggedIn: boolean
}

export const LoginContext = createContext<LoginContextProps>({
    loggedIn: false
})