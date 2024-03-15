import { IoMdHome, IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const UnloggedHeader = () => {
    return (
        <div className="flex justify-between rounded-t-md h-16 bg-neutral-900 p-3">
                <div className="flex text-2xl justify-center items-center gap-4">
                  <div className="h-9 w-9 hover:cursor-not-allowed bg-neutral-950 rounded-full flex items-center justify-center">
                    <IoIosArrowBack className="" />
                  </div>
                  <div className="h-9 w-9 hover:cursor-not-allowed bg-neutral-950 rounded-full flex items-center justify-center">
                    <IoIosArrowForward className="" />
                  </div>
                </div>
                <div className="flex gap-8">
                  <Link to={"/songfy/register"} className="flex items-center">
                    <button className="hover:scale-105 hover:text-white">
                      Inscrever-se
                    </button>
                  </Link>
                  <Link to={"/songfy/login"}>
                    <button className="bg-white hover:scale-105 h-full w-24 rounded-full text-black">
                      Entrar
                    </button>
                  </Link>
                </div>
              </div>
    )
}

export default UnloggedHeader