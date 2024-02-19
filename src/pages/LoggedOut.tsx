import { IoMdHome } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { ImBooks } from "react-icons/im";
import { FaPlus, FaArrowRight } from "react-icons/fa6";
import YourPlaylists from "../components/YourPlaylists";
import YourPodcast from "../components/YourPodcast";
import MusicLine from "../components/MusicLine";

function LoggedOut() {
  return (
    <div className="text-white bg-black h-screen py-2 px-2 ">
      <div className="flex gap-2 h-[570px]">
        <div className="w-[28%] flex flex-col gap-2">
          <div className="bg-neutral-900 rounded-md h-40">
            <button>
              <IoMdHome />
              <h1>Início</h1>
            </button>
            <button>
              <IoSearch />
              <h1>Buscar</h1>
            </button>
          </div>
          <div className="bg-neutral-900 rounded-md h-full">
            <div>
              <ImBooks />
              <h1>Sua Biblioteca</h1>
              <FaPlus />
              <FaArrowRight />
            </div>
            <YourPlaylists />
            <YourPodcast />
          </div>
        </div>
        <div className="w-[72%] bg-neutral-800 rounded-md ">
          <div></div>
          <MusicLine />
          <MusicLine />
          <MusicLine />
        </div>
      </div>
      <div>
        <div>
          <image>Music photo</image>
          <h2>Music Name</h2>
          <p>Music Singers</p>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default LoggedOut;
