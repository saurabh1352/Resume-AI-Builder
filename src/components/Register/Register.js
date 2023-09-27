import React, { useEffect, useState } from "react";
import { LoginPageSvg } from "../Formcomponent/LandingPageSvg";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUser } from "../actions/user";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const dispatch=useDispatch();
  const { loading, message, error } = useSelector((state) => state.login);
  const alert=useAlert();
  const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
   
    const Name=firstName+" "+lastName;
    var Password;
    if(password!=confirmPassword)
    {
        alert.error("Password and confirmPassword is not matching!");
        Password=password;
    }
    if(email=="")
    {
        alert.error("Please fill email field!"); 
    }
   
      
        dispatch(RegisterUser(email,password,Name))
    
    
    
   

  };
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "CLEAR_ERRORS" });
    }
    if (message) {
      alert.success(message);
      dispatch({ type: "CLEAR_MESSAGE" });
      navigate("/login");
      
    }
  }, [alert, error, message, dispatch]);

  return (
    <div className=" ">
      {" "}
      <div className="flex flex-cols">
        <div className="basis-1/2 ">
          <div className="basis-1/2  ">
            <div className="flex justify-center items-center h-screen">
              <div className="  ">
                <div className="flex items-center justify-center ">
                 
                    {/* Welcome to <span className="text-indigo-500">Resume.AI</span> */}
                    <img src={"./Animation.gif"} alt="Animated GIF" />
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" basis-1/2 border-solid border-2 border-grey-600">
          {" "}
          <div className="flex justify-center items-center min-h-screen bg-blue-900">
      <div className="w-full max-w-lg p-4 bg-white rounded-lg shadow-md">
        <p className="text-4xl text-center text-white py-4 font-bold">
          Resume<span className="text-indigo-300">.</span>AI
        </p>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-left">
              Register Now
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="FirstName" className="block font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  id="FirstName"
                  className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:border-indigo-300 hover:border-gray-300 w-full"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="LastName" className="block font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  id="LastName"
                  className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:border-indigo-300 hover:border-gray-300 w-full"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="Email" className="block font-medium">
                Email id
              </label>
              <input
                type="email"
                id="Email"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:border-indigo-300 hover:border-gray-300 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="Password" className="block font-medium">
                Create Password
              </label>
              <input
                type="password"
                id="Password"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:border-indigo-300 hover:border-gray-300 w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="ConfirmPassword" className="block font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                id="ConfirmPassword"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:border-indigo-300 hover:border-gray-300 w-full"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-800 text-white p-2 rounded hover:bg-blue-600"
            >
              Register
            </button>
            <p className="text-center pt-4">
              Already have an account?{' '}
              <a href="/login" className="text-blue-800 underline">
                Sign in
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
};
