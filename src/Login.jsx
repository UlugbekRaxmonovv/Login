import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";
const Login = () => {
  const location = useLocation();
  const path = location.pathname.split("/").pop(); 


  const handleGoogleLogin = () => {
    alert("Google login");
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen ">
        
   <div className="w-[300px]  p-4 rounded-md shadow-md bg-white ">
   <form className="flex flex-col gap-4">
    <h1 className="text-2xl font-bold text-center">Login to your account </h1>
          <input type="text" placeholder="Username" className="border border-gray-300 rounded-md p-2 outline-none" />
          <input type="password" placeholder="Password" className="border border-gray-300 rounded-md p-2 outline-none" />
         <div className="flex gap-4 justify-center items-center">
         <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Login</button>
         <button className="bg-red-500 text-white p-2 rounded-md" onClick={handleGoogleLogin}>Google</button>
         </div>
         </form>
   </div>
      </div>
    </>
  );
};

export default Login;
