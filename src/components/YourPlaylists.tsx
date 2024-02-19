import { useContext } from "react";
import { LoginContext } from "../helpers/LoginContext";

function YourPlaylists() {
  const { loggedIn } = useContext(LoginContext);

  return (
    <>
      {loggedIn ? (
        <div></div>
      ) : (
        <div>
          <h1>Crie sua primeira playlist</h1>
          <h3>É fácil, vamos te ajudar.</h3>
          <button>Criar playlist</button>
        </div>
      )}
    </>
  );
}

export default YourPlaylists;
