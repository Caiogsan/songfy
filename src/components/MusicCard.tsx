interface MusicCardProps {
  imagePlaylist: string,
  title: string,
  description: string
}

const MusicCard: React.FC<MusicCardProps> = ({ imagePlaylist, title, description }) => {
  return (
    <div className="h-72 px-3 py-4 w-52 hover:cursor-pointer flex flex-col justify-between rounded-md bg-gradient-to-t hover:from-neutral-700 hover:to-neutral-800 from-neutral-800 to-neutral-900">
      <img className="rounded-md h-[170px]" src={imagePlaylist}></img>
      <div className="flex flex-col gap-1">
        <h2 className="text-white font-bold">{title}</h2>
        <p className="text-sm">
         {description}
        </p>
      </div>
    </div>
  );
};

export default MusicCard;
