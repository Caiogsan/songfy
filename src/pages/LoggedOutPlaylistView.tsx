import YourPlaylists from "../components/YourPlaylists";
import YourPodcast from "../components/YourPodcast";
import { IoMdHome, IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { ImBooks } from "react-icons/im";
import { FaPlus, FaArrowRight } from "react-icons/fa6";
import FooterOutLogged from "../components/FooterOutLogged";
import { Link } from "react-router-dom";
import { Album, Albuns, Musics } from "../data/MusicsData";
import { Music } from "../data/MusicsData";
import UnloggedHeader from "../components/UnloggedHeader";
import lofi from "../assets/Capture.png";
import topHits from "../assets/Capture2.png";
import chilloutLounge from "../assets/Capture3.png";
import allOut from "../assets/Capture4.png";
import MusicCard from "../components/MusicCard";
import { useContext, useEffect, useRef, useState } from "react";
import { LoginContext } from "../helpers/LoginContext";
import SmallPoint from "../components/SmallPoint";
import { InfinitySpin } from "react-loader-spinner";

interface PlalistViewProps {
  id: number;
}

const LoggedOutPlaylistView: React.FC<PlalistViewProps> = ({
  id,
}): JSX.Element => {
  const { idSong } = useContext(LoginContext);
  const musicInstance = new Musics();
  const musicData: Music[] = musicInstance.lofi_beats;
  const thisMusic: Music = musicData.filter((element) => element.id == id)[0];
  const albumInstance = new Albuns();
  const albumData: Album[] = albumInstance.allAlbuns;
  const thisAlbum: Album = albumData.filter(
    (element) => element.id == idSong
  )[0];
  const [image, setImage] = useState<string>("");
  const chooseImage = () => {
    switch (thisAlbum.id) {
      case 1:
        setImage(lofi);
        break;
      case 2:
        setImage(topHits);
        break;
      case 3:
        setImage(chilloutLounge);
        break;
        case 4:
        setImage(allOut);
        break;
      default:
        setImage("");
    }
  };
  useEffect(() => {
    chooseImage();
  }, []);

  switch (id) {
    case 1:
      return (
        <div className="text-gray-400 flex flex-col gap-3 bg-black h-screen py-2 px-2 ">
          <div className="flex gap-2 h-[580px]">
            <div className="w-[28%] flex flex-col gap-2">
              <div className="bg-neutral-900 flex text-md  px-6 gap-7 flex-col items-start justify-center rounded-md h-40">
                <button className="flex hover:text-white duration-500 items-center gap-5 w-[90%]">
                  <IoMdHome className="text-2xl" />
                  <h1>Início</h1>
                </button>
                <button
                  onClick={() => {
                    console.log(thisMusic);
                    console.log(thisAlbum);
                    console.log(idSong);
                  }}
                  className="flex hover:text-white duration-500 items-center gap-5 w-[90%]"
                >
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
              <div className="flex text-white gap-5 p-5 justify-start">
                {image ? (
                  <img
                    className="h-48 rounded-md w-48"
                    src={image}
                    alt="logo"
                  ></img>
                ) : (
                  <div className="flex h-48 rounded-md w-48 items-center justify-center">
                    <InfinitySpin width="200" color="#4fa94d" />
                  </div>
                )}
                <div className="flex flex-col justify-end gap-[2px]">
                  <p
                    className="text-xs font-bold"
                    onClick={() => {
                      console.log(image);
                    }}
                  >
                    Playlist
                  </p>
                  <h1 className="text-7xl font-bold pb-3">{thisAlbum.name}</h1>
                  <h3 className="text-neutral-500 text-sm">
                    {thisAlbum.description}
                  </h3>
                  <div className="flex gap-2 items-center h-5 text-sm text-center">
                    <h2>Songfy</h2>
                    <SmallPoint></SmallPoint>
                    <h3>{thisAlbum.howManyLikes}</h3>
                    <SmallPoint></SmallPoint>
                    <h3>{thisAlbum.howManyMusics},</h3>

                    <h3 className="text-neutral-500">{thisAlbum.duration}</h3>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div>
            <FooterOutLogged />
          </div>
        </div>
      );
    case 2:
      return <div>teste</div>;

    default:
      return <>teste</>;
  }
};

export default LoggedOutPlaylistView;
