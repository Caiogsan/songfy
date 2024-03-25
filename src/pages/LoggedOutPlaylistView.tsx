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
import oneThingAtATime from "../assets/album1.png";
import vultures from "../assets/album2.png";
import utopia from "../assets/album3.png";
import sos from "../assets/album4.png";
import { useContext, useEffect, useRef, useState } from "react";
import { LoginContext } from "../helpers/LoginContext";
import SmallPoint from "../components/SmallPoint";
import { InfinitySpin } from "react-loader-spinner";
import InicioBuscarComponent from "../components/InicioBuscarComponent";
import PlayerButton from "../components/PlayerButton";
import { FaRegHeart } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import MusicDescriptionAlbum from "../components/MusicDescriptionAlbum";

interface PlalistViewProps {
  id: number;
}

const LoggedOutPlaylistView: React.FC<PlalistViewProps> = ({
  id,
}): JSX.Element => {
  const { idSong } = useContext(LoginContext);
  const musicInstance = new Musics();

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
      case 5:
        setImage(oneThingAtATime);
        break;
      case 6:
        setImage(vultures);
        break;
      case 7:
        setImage(utopia);
        break;
      case 8:
        setImage(sos);
        break;
      default:
        setImage("");
    }
  };
  useEffect(() => {
    chooseImage();
  }, []);
  const musicData = musicInstance.allMusics.filter(
    (music) => music.id === thisAlbum.id
  );
  return (
    <div className="text-gray-400 flex flex-col gap-3 bg-black h-full py-[11.7px] px-2 ">
      <div className="flex gap-2 h-[580px]">
        <div className="w-[28%] flex flex-col gap-2">
          <InicioBuscarComponent />
          <div className="bg-neutral-900 p-2 rounded-md h-full">
            <div className="flex py-2 px-5 text-md items-center">
              <div className="flex w-[50%] hover:cursor-pointer justify-start gap-4 hover:text-white duration-500 items-center">
                <ImBooks className="text-xl" />
                <h1>Sua Biblioteca</h1>
              </div>
              <div className="flex w-[50%] justify-end items-center gap-6">
                <Link to={"/songfy/register"}>
                  <FaPlus
                    title="Criar playlist ou pasta"
                    className="text-lg hover:cursor-pointer hover:bg-neutral-800 hover:rounded-full duration-500 hover:p-2"
                  />
                </Link>
                <Link to={"/songfy/register"}>
                  <FaArrowRight
                    title="Mostrar mais"
                    className="text-lg hover:cursor-pointer hover:bg-neutral-800 hover:rounded-full duration-500 hover:p-2"
                  />
                </Link>
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
          <div className="flex text-white gap-5 p-5 pt-16 justify-start">
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
          <div className="w-full border-b-[1px] border-neutral-700"></div>
          <div className="p-5 flex items-center gap-8">
            <PlayerButton style="" />
            <FaRegHeart
              title="Salvar na sua biblioteca"
              className="text-2xl hover:cursor-pointer"
            />
            <BsThreeDots
              className="text-2xl hover:cursor-pointer"
              title={`Mais opções para ${thisAlbum.name}`}
            />
          </div>
          <div className="mx-5 rounded-md w-[43%] justify-between flex flex-col px-6 py-4 mb-10   text-center h-28 text-white bg-sky-600">
            <h1 className="font-bold">
              Entre para ver a letra e ouvir a música completa
            </h1>
            <div className="flex gap-8 justify-end h-10">
              <Link to={"/songfy/login"} className="flex items-center">
                <button className="hover:scale-105 hover:text-white">
                  Entrar
                </button>
              </Link>
              <Link to={"/songfy/register"}>
                <button className="bg-white font-semibold hover:scale-105 h-full w-40 rounded-full text-black">
                  Inscrever-se
                </button>
              </Link>
            </div>
          </div>
          <div className="mx-5">
            <div className="flex px-4 w-full">
              <p className="w-[5%]">#</p>
              <p className="w-[40%]">Titulo</p>
              <p className="w-[25%]">Álbum</p>
              <p className="w-[20%]">Adicionada em</p>
              <p className="w-[10%]">Duração</p>
            </div>
            <div className="border-b-[1px] border-neutral-600 opacity-50 mt-2"></div>
            <div className="flex flex-col gap-4  my-4">
              {musicData.map((element) => (
                <MusicDescriptionAlbum
                  addWhen={element.addHowLongAgo}
                  durationMusic={element.duration}
                  nameAlbum={element.album}
                  nameMusic={element.name}
                  authorMusic={element.singer}
                  id={element.musicLocation}
                ></MusicDescriptionAlbum>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <FooterOutLogged />
      </div>
    </div>
  );
};

export default LoggedOutPlaylistView;
