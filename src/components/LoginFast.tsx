import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";

const LoginFast = (): JSX.Element => {
  return (
    <div className="w-full flex flex-col gap-3">
      <button className="flex items-center border-[1px] rounded-full border-neutral-500 hover:border-white p-3 relative justify-center w-full">
        <FaGoogle className="absolute left-6 text-lg" />

        <p className="font-bold text-sm">Inscrever-se com o Google</p>
      </button>
      <button className="flex items-center border-[1px] rounded-full border-neutral-500 hover:border-white p-3 relative justify-center w-full">
        <FaFacebook className="absolute z-10 left-5 text-2xl text-sky-700"/>
        <div className="absolute left-[26px] h-[21.99px] w-3 bg-white rounded-full"></div>
        <p  className="font-bold text-sm">Inscrever-se com o Facebook</p>
      </button>
      <button className="flex items-center border-[1px] rounded-full border-neutral-500 hover:border-white p-3 relative justify-center w-full">
        <FaApple className="absolute left-5 text-2xl"/>
        <p  className="font-bold text-sm">Criar conta com a Apple</p>
      </button>
    </div>
  );
};

export default LoginFast
