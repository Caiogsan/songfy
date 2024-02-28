import { LuInstagram, LuTwitter } from "react-icons/lu";
import { CiFacebook } from "react-icons/ci";


const UsefullLinksOutLogged = () => {
    const linkOver = "hover:text-white hover:underline hover:cursor-pointer"
  return (
    <div className="flex pt-24 text-md pb-8 justify-between">
      <div className="flex gap-16">
        <div className="gap-2 flex flex-col">
          <h2 className="text-white font-bold">Empresa</h2>
          <ul className="flex flex-col gap-2">
            <li className={`${linkOver}`}>Sobre</li>
            <li className={`${linkOver}`}>Empregos</li>
            <li className={`${linkOver}`}>For the Record</li>
          </ul>
        </div>
        <div className="gap-2 flex flex-col">
          <h2 className="text-white font-bold">Comunidades</h2>
          <ul className="flex flex-col gap-2">
            <li className={`${linkOver}`}>Para Artistas</li>
            <li className={`${linkOver}`}>Desenvolvedores</li>
            <li className={`${linkOver}`}>Publicidade</li>
            <li className={`${linkOver}`}>Investidores</li>
            <li className={`${linkOver}`}>Fornecedores</li>
          </ul>
        </div>
        <div className="gap-2 flex flex-col">
          <h2 className="text-white  font-bold">Links úteis</h2>
          <ul className="flex flex-col gap-2">
            <li className={`${linkOver}`}>Suporte</li>
            <li className={`${linkOver}`}>Aplicativo móvel grátis</li>
          </ul>
        </div>
      </div>
        <div className="flex text-white gap-6 text-lg">
            <div className="bg-neutral-800 hover:bg-neutral-700 hover:cursor-pointer rounded-full h-10 w-10 flex justify-center items-center"><LuInstagram/></div>
            <div className="bg-neutral-800 hover:bg-neutral-700 hover:cursor-pointer rounded-full h-10 w-10 flex justify-center items-center"><LuTwitter /></div>
            <div className="bg-neutral-800 hover:bg-neutral-700 hover:cursor-pointer rounded-full h-10 w-10 flex justify-center items-center"><CiFacebook /></div>
        </div>
    </div>
  );
};

export default UsefullLinksOutLogged;
