import MusicCard from "./MusicCard";


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
  songTitle1: string
  songTitle2: string
  songTitle3: string
  songTitle4: string
}

const MusicLine: React.FC<MusicLineProps> = ({ title, image1, image2, image3, image4, description1, description2, description3, description4, songTitle1, songTitle2, songTitle3, songTitle4 }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between py-2 items-center">
        <h1 className="text-xl text-white font-bold">{title}</h1>
        <p>Mostrar tudo</p>
      </div>
      <div className="flex justify-between ">
        <MusicCard description={description1} title={songTitle1} imagePlaylist={image1}/>
        <MusicCard description={description2} title={songTitle2} imagePlaylist={image2}/>
        <MusicCard description={description3} title={songTitle3} imagePlaylist={image3}/>
        <MusicCard description={description4} title={songTitle4} imagePlaylist={image4}/>
      </div>
    </div>
  );
};

export default MusicLine;
