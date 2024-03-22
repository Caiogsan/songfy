import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import PlayerButton from "./PlayerButton";

interface MusicCardProps {
  imagePlaylist: string;
  title: string;
  description: string;
}

const MusicCard: React.FC<MusicCardProps> = ({
  imagePlaylist,
  title,
  description,
}) => {
  let [mouseOnOff, setMouseOnOff] = useState<{ mouseOn: boolean }>({
    mouseOn: false,
  });
  const mouseOnCard = (): void => {
    setMouseOnOff({ mouseOn: true });
  };
  const mouseOffCard = (): void => {
    setMouseOnOff({ mouseOn: false });
  };

  return (
    <div
      onMouseEnter={() => {
        mouseOnCard();
      }}
      onMouseLeave={() => {
        mouseOffCard();
      }}
      className="relative h-72 gap-4 px-3 py-4 w-52 hover:cursor-pointer flex flex-col  rounded-md bg-gradient-to-t hover:from-neutral-700 hover:to-neutral-800 from-neutral-800 to-neutral-900"
    >
      <img className="rounded-md h-[170px]" src={imagePlaylist}></img>
      {mouseOnOff.mouseOn ? <PlayerButton style="absolute"/> : null}
      <div className="flex flex-col h-full gap-1">
        <h2 className="text-white font-bold">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default MusicCard;
