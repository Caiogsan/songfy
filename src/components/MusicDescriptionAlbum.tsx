import React from "react";
import { Link } from "react-router-dom";

interface MusicAlbum {
    id: number
    nameMusic: string
    authorMusic: string
    nameAlbum: string
    addWhen: string
    durationMusic: string
}

function MusicDescriptionAlbum({ id, nameMusic, authorMusic, nameAlbum, addWhen, durationMusic }: MusicAlbum) {
  return (
   <Link to={"/songfy/login"}>
    <div className="flex items-center px-4 w-full hover:cursor-pointer hover:bg-neutral-800 rounded-md py-1 hover:bg-blend-darken">
      <p className="w-[5%]">{id}</p>
      <div className="w-[40%]">
        <img></img>
        <div className="text-white">
          <h1>{nameMusic}</h1>
          <h2>{authorMusic}</h2>
        </div>
      </div>
      <p className="w-[25%]">{nameAlbum}</p>
      <p className="w-[20%]">{addWhen}</p>
      <p className="w-[10%]">{durationMusic}</p>
    </div></Link>
  );
}

export default MusicDescriptionAlbum;
