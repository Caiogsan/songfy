import { createContext } from "react"; 

export interface User {
    email: string;
      name: string;
      password: string;
  }

interface LoginContextProps {
    loggedIn: boolean
    user: User | null,
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    idSong: number
    setIdSong: React.Dispatch<React.SetStateAction<number>>

}

export const LoginContext = createContext<LoginContextProps>({
    loggedIn: false,
    user: null,
    setUser: () => {},
    idSong: 0,
    setIdSong: () => {}
})