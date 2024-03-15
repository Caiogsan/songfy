import { Link } from "react-router-dom";
import MusicCard from "./MusicCard";
import { useContext } from "react";
import { LoginContext } from "../helpers/LoginContext";

interface MusicLineProps {
  title: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  description1: string;
  description2: string;
  description3: string;
  description4: string;
  songTitle1: string;
  songTitle2: string;
  songTitle3: string;
  songTitle4: string;
  viewAlbum1: string;
  viewAlbum2: string;
  viewAlbum3: string;
  viewAlbum4: string;
  id1: number
  id2:number
  id3:number
  id4:number
}

const MusicLine: React.FC<MusicLineProps> = ({
  title,
  id1,
  id2,
  id3,
  id4,
  image1,
  image2,
  image3,
  image4,
  viewAlbum1,
  viewAlbum2,
  viewAlbum3,
  viewAlbum4,
  description1,
  description2,
  description3,
  description4,
  songTitle1,
  songTitle2,
  songTitle3,
  songTitle4,
}) => {
  
  const { setIdSong } = useContext(LoginContext)
  return (
    <div className="mb-6">
      <div className="flex justify-between py-2 items-center">
        <h1 className="text-xl text-white font-bold">{title}</h1>
        <p>Mostrar tudo</p>
      </div>
      <div className="flex justify-between ">
        <Link onClick={() => {setIdSong(id1)}} to={viewAlbum1}>
          <MusicCard
         
            description={description1}
            title={songTitle1}
            imagePlaylist={image1}
          />
        </Link>
        <Link onClick={() => {setIdSong(id2)}} to={viewAlbum2}>
          {" "}
          <MusicCard
          
            description={description2}
            title={songTitle2}
            imagePlaylist={image2}
          />
        </Link>
        <Link onClick={() => {setIdSong(id3)}} to={viewAlbum3}>
          <MusicCard

            description={description3}
            title={songTitle3}
            imagePlaylist={image3}
          />
        </Link>
        <Link onClick={() => {setIdSong(id4)}} to={viewAlbum4}>
          <MusicCard
          
            description={description4}
            title={songTitle4}
            imagePlaylist={image4}
          />
        </Link>
      </div>
    </div>
  );
};

export default MusicLine;
