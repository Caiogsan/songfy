import { IoMdHome } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { ImBooks } from "react-icons/im";
import { FaPlus, FaArrowRight } from "react-icons/fa6";

function LoggedOut() {
  return (
    <div>
      <div>
        <div>
          <button>
            <IoMdHome />
            <h1>Início</h1>
          </button>
          <button>
            <IoSearch />
            <h1>Buscar</h1>
          </button>
        </div>
        <div>
            <div>
            <ImBooks />
            <h1>Sua Biblioteca</h1>
            <FaPlus />
            <FaArrowRight />

            </div>

        </div>
      </div>
      <div></div>
    </div>
  );
}

export default LoggedOut;
