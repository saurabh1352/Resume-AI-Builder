import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/user";
import { useNavigate } from "react-router-dom";
import { LoginPageSvg } from "../Formcomponent/LandingPageSvg";
import Cookies from "js-cookie";

export const Login = () => {
    const [email,setEmail]=useState("");
    const [password , setPassword]=useState("");

    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const alert = useAlert();
    const { loading, message, error } = useSelector((state) => state.login);
   
    const navigate=useNavigate();

    const handleTogglePassword = (event) => {
      event.preventDefault(); // Prevent default form submission behavior
      setShowPassword(!showPassword);
    };
    const handleLogin=(e)=>{
        e.preventDefault();
        dispatch(login(email, password));
    }

    useEffect(() => {
        if (error) {
          alert.error(error);
          dispatch({ type: "CLEAR_ERRORS" });
        }
        if (message) {
          alert.success("Logged in successfully");
          sessionStorage.setItem('myCookie', message); 

        //   handleloginUser(email);
        localStorage.setItem('userEmail', email);
        //   dispatch({ type: "CLEAR_MESSAGE" });
          navigate("/home");
          
        }
      }, [alert, error, message, dispatch]);
    
  return (
    <div className="flex flex-cols">
      <div className="basis-1/2">
      <div className="flex justify-center items-center h-auto">
  <div className=" ">
    <div className="flex items-center justify-center h-auto ">
   
        
        <img src={"./Animation.gif"} className="w-full h-full" alt="Animated GIF" />
      
    </div>
  </div>
</div>

      </div>
      <div className=" basis-1/2 border-solid border-2 border-grey-600" style={{
            animation: "Loginup 1s ease-in-out",
          }}>
        {" "}
        <div className="flex flex-cols">
          <div className=" w-full border-solid border-2 border-indigo-600 flex items-center justify-center bg-blue-900 h-screen">

        <div className=" w-4/6  ">            <p className="text-lg text-white text-4xl text-center py-4  rounded-lg shadow-md">
  Resume<span className="text-indigo-300">.</span>AI
</p>
 <form className=" bg-white p-4 rounded-lg  "  style={{
            animation: "Loginform 2s ease-in-out",
          }} >
              <h2 className="text-2xl font-semibold mb-4 text-left">
                Sign In
              </h2>
              <div className="mb-4">
                <label htmlFor="email" className="block font-medium mb-1">
                  Email Id or Phone number
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border rounded"
                  onChange={(e)=>{setEmail(e.target.value)}}
                />
              </div>
              <div className="mb-2">
      <label htmlFor="password" className="block font-medium mb-1">
        Password
      </label>
      <div className="relative w-full">
        <input
          type={showPassword ? 'text' : 'password'}
          id="password"
          className="w-full p-2 border rounded"
          onChange={(e)=>{setPassword(e.target.value)}}
        />
        <button
          className="password-toggle-button absolute top-1/2 right-2 transform -translate-y-1/2 bg-transparent border-none outline-none"
          onClick={handleTogglePassword}
          
         
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            {showPassword ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm-3 3a6 6 0 016-6m0 0a6 6 0 00-6-6m0 6h6m-6 0a6 6 0 00-6 6m6 0h-6"
              />
            )}
          </svg>
        </button>
      </div>
    </div>
              <div>{/* Your content */}</div>
              <div className="text-right">
                <p className="self-center text-blue-500">Forgot password?</p>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-800 text-white p-2 rounded hover:bg-blue-600 mt-2"
                onClick={handleLogin}
                style={{
                    animation: "Loginformbutton  2s ease-in-out",
                  }}
              >
                Sign In
              </button>
              <div className="flex justify-between mt-4 ">
                <p className="">
                  Don't have account ?{" "}
                  <a href="/Register">
                    <span className="text-blue-500 underline  ">
                      Sign up for free
                    </span>
                  </a>
                </p>
              </div>
            </form></div>
          </div>
        </div>
      </div>
    </div>
  );
};
