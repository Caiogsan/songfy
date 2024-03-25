import { Link } from "react-router-dom";
import LoginFast from "../components/LoginFast";
import { useContext, useState } from "react";
import { LoginContext } from "../helpers/LoginContext";
import { User } from "../helpers/LoginContext";
import { IoIosArrowBack } from "react-icons/io";

const Register = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const { users } = useContext(LoginContext)
  const [formData, setFormData] = useState<User>({
    email: "",
    name: "",
    password: "",
  });
  const [step, setStep] = useState(1);

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
              setStep(2);
              setEmail('')
            }}
            className="flex flex-col gap-3 w-full"
          >
            <label className="text-sm font-bold">
              Endereço de e-mail
            </label>
            <input
              value={email}
              onChange={(value) => {
                setEmail(value.target.value)
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
              <IoIosArrowBack
                onClick={() => {
                  setStep(1);
                }}
                className="hover:cursor-pointer text-neutral-500"
              />
              <div>
                <h2 className="text-sm text-neutral-500">Etapa 1 de 3</h2>
                <h2 className="font-bold text-sm">Crie uma senha</h2>
              </div>
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              
              setStep(3);
            }}
            className="flex flex-col mt-4 gap-3 w-[350px] mx-auto"
          >
            <label id="password" className="text-sm font-bold">
              Senha
            </label>
            <input
              onChange={(value) => {
                handleInputChange("password", value.target.value);
              }}
              value={formData.password}
              required
              className="bg-neutral-800 border-[1px] text-sm rounded-md border-neutral-300 w-full p-3"
              name="password"
              id="password"
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
      ) : step === 3 ? (
        <div className="flex flex-col gap-3 max-w-[400px] relative m-auto h-[599px] items-start">
          <div className="w-[400px]">
            <div className="w-[66%] my-4 border-b-[3px] absolute z-10 border-green-500"></div>
            <div className="w-full w-[400px] my-4 border-b-[3px] border-neutral-600"></div>
            <div className="flex items-center gap-4">
              <IoIosArrowBack
                onClick={() => {
                  setStep(2);
                }}
                className="hover:cursor-pointer text-neutral-500"
              />
              <div>
                <h2 className="text-sm text-neutral-500">Etapa 2 de 3</h2>
                <h2 className="font-bold text-sm">Fale de você</h2>
              </div>
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log(formData)
              setStep(4);
            }}
            className="flex flex-col mt-4 gap-3 w-[350px] mx-auto"
          >
            <div>
              <label id="name" className="text-sm font-bold">
                Nome
              </label>
              <p className="text-xs text-neutral-400">
                Este nome aparecerá no seu perfil
              </p>
            </div>
            <input
              onChange={(value) => {
                handleInputChange("name", value.target.value);
              }}
              value={formData.name}
              required
              className="bg-neutral-800 border-[1px] text-sm rounded-md border-neutral-300 w-full p-3"
              name="name"
              id="name" 
              type="text"
            ></input>
            <div>
              <h1 className="font-bold text-sm">Data de nascimento</h1>
              <p className="text-sm text-neutral-400">
                Por que vamos precisar da sua data de nascimento?{" "}
                <span className="underline">Saiba mais.</span>
              </p>
            </div>
            <div className="flex justify-between h-10 ">
              <div className="w-[22%]">
                <input
                  placeholder="dd"
                  className="w-full h-full px-2 text-white bg-transparent border-2 border-neutral-700 rounded-md"
                ></input>
              </div>
              <div className="w-[40%]">
                <input
                  placeholder="Mês"
                  className="w-full h-full px-2 text-white bg-transparent border-2 border-neutral-700 rounded-md"
                ></input>
              </div>
              <div className="w-[32%]">
                <input
                  placeholder="aaaa"
                  className="w-full h-full px-2 text-white bg-transparent border-2 border-neutral-700 rounded-md"
                ></input>
              </div>
            </div>
            <button
              type="submit"
              className="w-full mt-3 h-12 text-black font-semibold bg-green-500 rounded-full"
            >
              Avançar
            </button>
          </form>
          <p className="text-xs mt-3 text-neutral-500">
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
      ) : step == 4 ? <div></div> : null}
    </div>
  );
};

export default Register;
