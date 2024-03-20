import { IoMdHome, IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { ImBooks } from "react-icons/im";
import { FaPlus, FaArrowRight } from "react-icons/fa6";
import playlist1 from "../assets/Capture.png";
import playlist2 from "../assets/Capture2.png";
import playlist3 from "../assets/Capture3.png";
import playlist4 from "../assets/Capture4.png";
import playlist5 from "../assets/album1.png";
import playlist6 from "../assets/album2.png";
import playlist7 from "../assets/album3.png";
import playlist8 from "../assets/album4.png";
import YourPlaylists from "../components/YourPlaylists";
import YourPodcast from "../components/YourPodcast";
import MusicLine from "../components/MusicLine";
import FooterOutLogged from "../components/FooterOutLogged";
import UsefullLinksOutLogged from "../components/UsefullLinksOutLogged";
import { Link } from "react-router-dom";
import UnloggedHeader from "../components/UnloggedHeader";

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
          <UnloggedHeader />
          <div className="mx-4">
            <MusicLine
            id1={1}
            id2={2}
            id3={3}
            id4={4}
              viewAlbum1="album"
              viewAlbum2="album"
              viewAlbum3="album"
              viewAlbum4="album"
              description1="chill beats, lofi vibes, new tracks every week..."
              description2="Dua Lipa is on top of the Hottest 50!"
              description3="Just lean back and enjoy relaxed beats"
              description4="The biggest songs of the 2020s"
              songTitle1="lofi beats"
              songTitle2="Today's Top Hits"
              songTitle3="Chillout Lounge"
              songTitle4="All out 2020s"
              image1={playlist1}
              image2={playlist2}
              image3={playlist3}
              image4={playlist4}
              title="Playlists do Songfy"
            />
            <MusicLine
            id1={5}
            id2={6}
            id3={7}
            id4={8}
              viewAlbum1="lofi_beats"
              viewAlbum2="top_hits"
              viewAlbum3="chillout"
              viewAlbum4="allout"
              description1="Morgan Wallen"
              description2="Y$, Kanye West, Ty Dolla $ign"
              description3="Travis Scott"
              description4="SZA"
              songTitle1="One Thing At A Time"
              songTitle2="VULTURES 1"
              songTitle3="UTOPIA"
              songTitle4="SOS"
              image1={playlist5}
              image2={playlist6}
              image3={playlist7}
              image4={playlist8}
              title="Álbuns populares"
            />

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
