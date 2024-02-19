import { useContext } from "react"
import { LoginContext } from "../helpers/LoginContext"

function MusicCard(){

    const {loggedIn} = useContext(LoginContext)
    return (
        <div>
            <button onClick={() => {console.log(loggedIn)}}></button>
        </div>
    )
}

export default MusicCard