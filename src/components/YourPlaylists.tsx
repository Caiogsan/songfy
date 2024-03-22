import { useContext } from "react";
import { LoginContext } from "../helpers/LoginContext";
import { Link } from "react-router-dom";

function YourPlaylists() {
  const { loggedIn } = useContext(LoginContext);

  return (
    <>
      {loggedIn ? (
        <div></div>
      ) : (
        <div className="p-4 m-1 bg-neutral-800 rounded-md text-white flex flex-col gap-2">
          <h1 className="font-bold">Crie sua primeira playlist</h1>
          <h3 className="text-sm">É fácil, vamos te ajudar.</h3>
          <Link to={"/songfy/register"}><button className="mt-2 rounded-full font-bold text-sm p-[5px] w-28 bg-white text-black text-center">Criar playlist</button></Link>
        </div>
      )}
    </>
  );
}

export default YourPlaylists;
