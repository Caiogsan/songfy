import { IoMdHome } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { ImBooks } from "react-icons/im";
import { FaPlus, FaArrowRight } from "react-icons/fa6";
import YourPlaylists from "../components/YourPlaylists";
import YourPodcast from "../components/YourPodcast";
import MusicLine from "../components/MusicLine";

function LoggedOut() {
  return (
    <div className="text-gray-400 bg-black h-screen py-2 px-2 ">
      <div className="flex gap-2 h-[570px]">
        <div className="w-[28%] flex flex-col gap-2">
          <div className="bg-neutral-900 flex text-md  px-8 gap-6 flex-col items-start justify-center rounded-md h-40">
            <button className="flex hover:text-white duration-500 items-center gap-5 w-[90%]">
              <IoMdHome className="text-2xl" />
              <h1>Início</h1>
            </button>
            <button className="flex hover:text-white duration-500 items-center gap-5 w-[90%]">
              <IoSearch className="text-2xl" />
              <h1>Buscar</h1>
            </button>
          </div>
          <div className="bg-neutral-900 p-2 rounded-md h-full">
            <div className="flex py-2 px-5 text-md items-center">
              <div className="flex w-[50%] hover:cursor-pointer justify-start gap-4 hover:text-white duration-500 items-center">
                <ImBooks className="text-xl" />
                <h1>Sua Biblioteca</h1>
              </div>
              <div className="flex w-[50%] justify-end items-center gap-6">
                <FaPlus title="Criar playlist ou pasta" className="text-lg hover:cursor-pointer hover:bg-neutral-800 hover:rounded-full duration-500 hover:p-2"/>
                <FaArrowRight title="Mostrar mais" className="text-lg hover:cursor-pointer hover:bg-neutral-800 hover:rounded-full duration-500 hover:p-2"/>
              </div>
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
