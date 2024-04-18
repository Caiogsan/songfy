import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import { GoogleLogin } from '@react-oauth/google';
import { LoginContext } from "../helpers/LoginContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const LoginFast = (): JSX.Element => {
    const { setLoggedIn } = useContext(LoginContext)
    const navigate = useNavigate()
  return (
    <div className="w-full flex flex-col gap-3">
      <button className="flex items-center rounded-full border-neutral-500 hover:border-white relative justify-center w-full">
      <GoogleLogin 
      shape="circle"
      width={345}
      
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
    setLoggedIn(true)
    navigate("/songfy")
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
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
