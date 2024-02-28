import { IoMdHome, IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { ImBooks } from "react-icons/im";
import { FaPlus, FaArrowRight } from "react-icons/fa6";

import YourPlaylists from "../components/YourPlaylists";
import YourPodcast from "../components/YourPodcast";
import MusicLine from "../components/MusicLine";
import FooterOutLogged from "../components/FooterOutLogged";
import UsefullLinksOutLogged from "../components/UsefullLinksOutLogged";

function LoggedOut() {
  return (
    <div className="text-gray-400 flex flex-col gap-3 bg-black h-screen py-2 px-2 ">
      <div className="flex gap-2 h-[580px]">
        <div className="w-[28%] flex flex-col gap-2">
          <div className="bg-neutral-900 flex text-md  px-6 gap-7 flex-col items-start justify-center rounded-md h-40">
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
                <FaPlus
                  title="Criar playlist ou pasta"
                  className="text-lg hover:cursor-pointer hover:bg-neutral-800 hover:rounded-full duration-500 hover:p-2"
                />
                <FaArrowRight
                  title="Mostrar mais"
                  className="text-lg hover:cursor-pointer hover:bg-neutral-800 hover:rounded-full duration-500 hover:p-2"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 ">
              <YourPlaylists />
              <YourPodcast />
            </div>
          </div>
        </div>
        <div className="w-[72%] overflow-y-scroll bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-md ">
          <div className="flex justify-between rounded-t-md h-16 bg-neutral-900 p-3">
            <div className="flex text-2xl justify-center items-center gap-4">
              <div className="h-9 w-9 hover:cursor-not-allowed bg-neutral-950 rounded-full flex items-center justify-center">
                <IoIosArrowBack className="" />
              </div>
              <div className="h-9 w-9 hover:cursor-not-allowed bg-neutral-950 rounded-full flex items-center justify-center">
                <IoIosArrowForward className="" />
              </div>
            </div>
            <div className="flex gap-8">
              <button className="hover:scale-105 hover:text-white">
                Inscrever-se
              </button>
              <button className="bg-white hover:scale-105 h-full w-24 rounded-full text-black">
                Entrar
              </button>
            </div>
          </div>
          <div className="mx-4">
          <MusicLine title="Playlists do Songfy" />
          <UsefullLinksOutLogged />
          </div>
        </div>
      </div>
      <div>
        <FooterOutLogged />
      </div>
    </div>
  );
}

export default LoggedOut;
