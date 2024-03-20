import { Link } from "react-router-dom";
import LoginFast from "../components/LoginFast";
import { useContext, useState } from "react";
import { LoginContext } from "../helpers/LoginContext";
import { User } from "../helpers/LoginContext";
import { IoIosArrowBack } from "react-icons/io";


const Register = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const { user, setUser } = useContext(LoginContext);
  const [formData, setFormData] = useState<User>({
    email: "",
    name: "",
    password: "",
  });
  const [ step, setStep ] = useState(1)

  const handleInputChange = (key: keyof User, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  return (
    <div className="bg-gradient-to-b text-white from-neutral-800 h-full to-neutral-900">
      <h1 className="text-2xl w-[95%] py-6 m-auto">
        <Link to={"/songfy"}>Songfy</Link>
      </h1>
      {step === 1 ? (
        <div className="flex flex-col gap-3 max-w-[350px] m-auto items-start">
          <h1 className=" text-5xl pb-10 font-bold">
            Se inscreva e comece a curtir
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setStep(2)
            }}
            className="flex flex-col gap-3 w-full"
          >
            <label id="email" className="text-sm font-bold">
              Endereço de e-mail
            </label>
            <input
              value={formData.email}
              onChange={(value) => {
                handleInputChange("email", value.target.value);
              }}
              required
              className="bg-neutral-800 border-[1px] text-sm rounded-md border-neutral-300 w-full p-3"
              name="email"
              id="email"
              type="email"
              placeholder="nome@dominio.com"
            ></input>
            <p className="text-sm hover:cursor-pointer text-green-500 underline">
              Usar número de telefone
            </p>
            <button
              type="submit"
              className="w-full mt-3 h-12 text-black font-semibold bg-green-500 rounded-full"
            >
              Avançar
            </button>
          </form>
          <div className="flex w-full my-3 items-center">
            <div className="w-[40%] border-b-[1px] border-white"></div>
            <p className="w-[20%] text-center">ou</p>
            <div className="w-[40%] border-b-[1px] border-white"></div>
          </div>
          <LoginFast />

          <div className="w-full my-4 border-b-[1px] border-white"></div>

          <div className="w-full mb-4 flex flex-col gap-5 items-center text-center">
            <h3 className="text-sm">
              Já tem uma conta?{" "}
              <strong className="underline text-sm hover:cursor-pointer">
                <Link to={"/songfy/login"}>Faça login aqui.</Link>
              </strong>
            </h3>
            <p className="text-xs">
              This site is protected by reCAPTCHE and the Googla{" "}
              <span className="underline hover:cursor-pointer">
                Privacy Policy{" "}
              </span>
              and{" "}
              <span className="underline hover:cursor-pointer">
                Terms of Service
              </span>{" "}
              apply.
            </p>
          </div>
        </div>
      ) : step === 2 ? (
        <div className="flex flex-col gap-3 max-w-[400px] relative m-auto h-[599px] items-start">
          <div className="w-[400px]">
          <div className="w-[33%] my-4 border-b-[3px] absolute z-10 border-green-500"></div>
          <div className="w-full w-[400px] my-4 border-b-[3px] border-neutral-600"></div>
          <div className="flex items-center gap-4">
            <IoIosArrowBack onClick={() => {setStep(1)}} className="hover:cursor-pointer text-neutral-500"/>
            <div>
              <h2 className="text-sm text-neutral-500">Etapa 1 de 3</h2>
              <h2 className="font-bold text-sm">Crie uma senha</h2>
            </div>
          </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setUser(formData);
              setTimeout(() => {
                console.log(user);
              }, 5000);
            }}
            className="flex flex-col mt-4 gap-3 w-[350px] mx-auto"
          >
            <label id="senha" className="text-sm font-bold">
              Senha
            </label>
            <input
              required
              className="bg-neutral-800 border-[1px] text-sm rounded-md border-neutral-300 w-full p-3"
              name="senha"
              id="senha"
              type="password"
            ></input>
            <h1 className="font-bold text-sm">A senha deve ter pelo menos</h1>
            <ul className="font-bold text-sm gap-2 flex flex-col">
              <li>* 1 letra</li>
              <li>* 1 número ou caractere especial (exemplo: # ? ! &)</li>
              <li>* 10 caracteres</li>
            </ul>
            <button
              type="submit"
              className="w-full mt-3 h-12 text-black font-semibold bg-green-500 rounded-full"
            >
              Avançar
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default Register;
