import { Link } from "react-router-dom";
import LoginFast from "../components/LoginFast";

const Login = (): JSX.Element => {
  return (
    <div className="bg-gradient-to-b text-white from-neutral-800 to-neutral-900">
      <h1 className="text-2xl w-[95%] py-6 m-auto">
        <Link to={"/songfy"}>Songfy</Link>
      </h1>
      <h1 className=" text-5xl pb-10 font-bold w-[385px] m-auto">
        Entrar no Songfy
      </h1>
      <div className="flex flex-col gap-3 max-w-[350px] m-auto items-start">
        <LoginFast />
        <div className="w-full my-4 border-b-[1px] border-white"></div>
        <form className="flex flex-col gap-2 w-full">
          <label id="emailName" className="text-sm font-bold">
            E-mail ou nome de usuário
          </label>
          <input
            required
            className="bg-neutral-800 mb-2 border-[1px] text-sm rounded-md border-neutral-300 w-full p-3"
            name="emailName"
            id="emailName"
            type="emailName"
            placeholder="E-mail ou nome de usuário"
          ></input>
          <label id="Password" className="text-sm font-bold">
            Senha
          </label>
          <input
            required
            className="bg-neutral-800 mb-4 border-[1px] text-sm rounded-md border-neutral-300 w-full p-3"
            name="Password"
            id="Password"
            type="Password"
            placeholder="Senha"
          ></input>
          <button
            type="submit"
            className="w-full my-3 h-12 text-black font-semibold bg-green-500 rounded-full"
          >
            Entrar
          </button>
        </form>
        

        <div className="w-full mb-8 flex flex-col gap-5 items-center text-center">
          <h3 className="text-sm hover:cursor-pointer font-bold underline">
            Esqueceu sua senha?
          </h3>
          <div className="w-full my-4 border-b-[1px] border-white"></div>
          <p className="text-sm">
            Não tem uma conta?{" "}
            <span className="underline hover:cursor-pointer">
              Inscrever-se no Songfy{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
