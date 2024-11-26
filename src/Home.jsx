import React from "react";

const Home = () => {
  const token = localStorage.getItem("authToken");

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[300px] p-4 rounded-md shadow-md bg-white text-center">
        <h1 className="text-2xl font-bold">Welcome to Home Page</h1>
        <p className="text-gray-600 mt-4">
          Your token: <br />
          <span className="text-sm break-words">{token}</span>
        </p>
      </div>
    </div>
  );
};

export default Home;
