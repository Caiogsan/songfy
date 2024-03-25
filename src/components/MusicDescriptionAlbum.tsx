import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

interface MusicAlbum {
  id: number;
  nameMusic: string;
  authorMusic: string;
  nameAlbum: string;
  addWhen: string;
  durationMusic: string;
}

function MusicDescriptionAlbum({
  id,
  nameMusic,
  authorMusic,
  nameAlbum,
  addWhen,
  durationMusic,
}: MusicAlbum) {

  const [isMouseOn, setIsMouseOn] = useState<boolean>(false)
  return (
    <Link to={"/songfy/login"} onMouseLeave={() => setIsMouseOn(false)} onMouseEnter={() => setIsMouseOn(true)}>
      <div className="flex h-14 relative items-center px-4 text-sm w-full hover:cursor-pointer hover:bg-neutral-800 rounded-md py-1 hover:bg-blend-darken">
        
        {isMouseOn ? <div className="w-[5%]"><FaPlay ></FaPlay></div> : <p className="w-[5%]">{id}</p>}
        <div className="w-[40%]">
          <img></img>
          <div className="text-white flex flex-col gap-1">
            <h1 className="text-[16px]">{nameMusic}</h1>
            <h2>{authorMusic}</h2>
          </div>
        </div>
        <p className="w-[25%]">{nameAlbum}</p>
        <p className="w-[20%]">{addWhen}</p>
        <p className="w-[10%]">{durationMusic}</p>
      </div>
    </Link>
  );
}

export default MusicDescriptionAlbum;
