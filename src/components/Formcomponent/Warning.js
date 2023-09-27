import React from 'react';
import { useNavigate } from 'react-router-dom';

const Warning = () => {
    const navigate=useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <img
      src="/warning.webp" // Path to your custom SVG icon
      alt="Warning Icon"
      className="h-16 w-16 text-red-500 mb-4"
    />
    <p className="text-red-500 font-semibold">Please login to access this resource</p>
    <button
      className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring focus:ring-purple-200"
      onClick={()=>{navigate("/")}}
    >
      Navigate to main page
    </button>
  </div>
  );
};

export default Warning;
