import { useContext } from "react";
import { LoginContext } from "../helpers/LoginContext";

function YourPodcast(){
    const { loggedIn } = useContext(LoginContext);
    return (
        <>
        {loggedIn ? (
        <div></div>
      ) : (
        <div className="p-4 m-1 bg-neutral-800 rounded-md text-white flex flex-col gap-2">
          <h1 className="font-bold">Que tal seguir um podcast novo?</h1>
          <h3 className="text-sm">Avisaremos você sobre novos episódios.</h3>
          <button className="mt-2 rounded-full font-bold text-sm p-[5px] w-36 bg-white text-black text-center">Explore podcasts</button>
        </div>
      )}
        </>
    )
}

export default YourPodcast