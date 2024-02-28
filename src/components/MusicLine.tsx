import MusicCard from "./MusicCard";
import playlist1 from "../assets/Capture.png"
import playlist2 from "../assets/Capture2.png"
import playlist3 from "../assets/Capture3.png"
import playlist4 from "../assets/Capture4.png"

interface MusicLineProps {
  title: string;
}

const MusicLine: React.FC<MusicLineProps> = ({ title }) => {
  return (
    <div className="">
      <div className="flex justify-between py-2 items-center">
        <h1 className="text-xl text-white font-bold">Playlists do Songfy</h1>
        <p>Mostrar tudo</p>
      </div>
      <div className="flex justify-between ">
        <MusicCard description="chill beats, lofi vibes, new tracks every week..." title="lofi beats" imagePlaylist={playlist1}/>
        <MusicCard description="Dua Lipa is on top of the Hottest 50!" title="Today's Top Hits" imagePlaylist={playlist2}/>
        <MusicCard description="Just lean back and enjoy relaxed beats" title="Chillout Lounge" imagePlaylist={playlist3}/>
        <MusicCard description="The biggest songs of the 2020s" title="All out 2020s" imagePlaylist={playlist4}/>
      </div>
    </div>
  );
};

export default MusicLine;
