import React, { useEffect, useState } from "react";
import { CircularProgressBar } from "./CircularProgressBar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../actions/user";
import { getInitials } from "../Formcomponent/Formfunctions";
import Warning from "../Formcomponent/Warning";
import { LandingPageSvg } from "../Formcomponent/LandingPageSvg";
import { AvatarGenerator } from "random-avatar-generator";

const generator = new AvatarGenerator();

export const MainPage = () => {
  const [emails, setEmail] = useState(localStorage.getItem("userEmail"));
  const [viewall, setViewall] = useState(4);
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const { userData, iserror } = useSelector((state) => state.userData);
  // const { loading, message, error } = useSelector((state) => state.login);
  const key = sessionStorage.getItem("myCookie");
  const dispatch = useDispatch();

  var { firstNameInitial, lastNameInitial } = getInitials(username);

  const user = {
    firstName: firstNameInitial, // Replace with actual user data
    lastName: lastNameInitial, // Replace with actual user data
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const handleViewall = () => {
    setViewall(viewall + 4);
  };
  const hanldeViewLess = (e) => {
    setViewall(4);
  };
  const images = [
    "Hero.png",
    "https://marketplace.canva.com/EAFRuCp3DcY/1/0/1131w/canva-black-white-minimalist-cv-resume-f5JNR-K5jjw.jpg",
    "https://d.novoresume.com/images/doc/it-resume-template.png",
    "https://d25zcttzf44i59.cloudfront.net/academic-word-resume-template.png",
    "https://d25zcttzf44i59.cloudfront.net/academic-word-resume-template.png",
    "https://resumegenius.com/wp-content/uploads/clean-resume-template-orange-hub.png",
    "https://marketplace.canva.com/EAFRuCp3DcY/1/0/1131w/canva-black-white-minimalist-cv-resume-f5JNR-K5jjw.jpg",
    "https://d.novoresume.com/images/doc/it-resume-template.png",
    "https://d25zcttzf44i59.cloudfront.net/academic-word-resume-template.png",
    "https://d25zcttzf44i59.cloudfront.net/academic-word-resume-template.png",
    "https://resumegenius.com/wp-content/uploads/clean-resume-template-orange-hub.png",
    "Hero.png",
    "https://marketplace.canva.com/EAFRuCp3DcY/1/0/1131w/canva-black-white-minimalist-cv-resume-f5JNR-K5jjw.jpg",
    "https://d.novoresume.com/images/doc/it-resume-template.png",
    "https://d25zcttzf44i59.cloudfront.net/academic-word-resume-template.png",
    "https://d25zcttzf44i59.cloudfront.net/academic-word-resume-template.png",
    "https://resumegenius.com/wp-content/uploads/clean-resume-template-orange-hub.png",
    // Add more image URLs
  ];
  useEffect(() => {
    if (key !== "loggedOut") dispatch(getUserData(emails));
  }, []);
  useEffect(() => {
    if (userData?.name) {
      setUserName(userData?.name);
    }
  }, [userData?.name, iserror, dispatch]);

  useEffect(() => {}, [sessionStorage.getItem("myCookie")]);

  return (
    <>
      {key == "logedOut" || key == null ? (
        <Warning />
      ) : (
        <>
          {" "}
          <div className="flex flex-row container ">
          <div className="absolute inset-0 z-0 " style={{
                        animation: "CardInUp 2s ease-in-out",
                      }}>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                src="/Ai.mp4" // Replace with your video file path
              ></video>
            </div>
            <div className="basis-1/2 z-0">
              {" "}
              <div className="flex justify-start ">
                <div
                  className="flex  flex-wrap items-center justify-center text-center p-3 "
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  <LandingPageSvg />
                  <span className="text-xl font-medium text-gray-600"  style={{
                        animation: "CardInUp 2s ease-in-out",
                      }}>
                    RESUME.AI
                  </span>
                </div>
              </div>
            </div>
            <div className="basis-1/2  text-right ">
              <div
                className="flex  space-x-2 mt-2 justify-end pr-4 "
                style={{ marginLeft: "550px" }}
              >
                {" "}
                {/* Use justify-end to align DP to the right */}
                <div>
                  <div
                    className="relative rounded-full w-12 h-12 bg-gray-500 flex justify-center items-center text-white text-2xl cursor-pointer"
                    onClick={(e)=>{
                        sessionStorage.setItem("myCookie", "logedOut");
                        navigate("/")}
                    }  
                    style={{
                        animation: "CardInUp 4s ease-in-out",
                      }}
                  >
                    {user.firstName.charAt(0)}
                    {user.lastName.charAt(0)}
                  </div>
                  {dropdownOpen && (
                    <div className="mt-2 rounded-md bg-black p-2 shadow-md"  >
                      <button
                        className=" w-full text-left p-1  text-white " 
                        onClick={(e) => {
                          sessionStorage.clear("myCookie");
                          navigate("/");
                        }}
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex   flex-row md:flex-row">
           

            <div className="basis-1/2 ">
              <div className="flex items-center justify-center  ">
                <div
                  className="flex flex-col items-center justify-center   bg-clip-text  transform hover:scale-110 transition duration-300 hover:pl-8 hover:text-black"
                  style={{ height: "500px" }}
                >
                  <span className="text-5xl font-bold text-black " style={{
            animation: "NameInUp 2s ease-in-out",
          }}>
                    Hello,{" "}
                    <span className="text-5xl font-bold text-black   " style={{
            animation: "NameInUp 2s ease-in-out",
          }}>
                      {username}!
                    </span>
                  </span>

                  <span className="text-2xl font-bold text-gray-800 text-center opacity-70 "  style={{
            animation: "fadeInUp 1s ease-in-out",
          }}>
It's a pleasure to have you back. Let's harness the power of AI to craft impressive resumes that will leave a lasting impact ⚡️💼
                  </span>
                  <div className="flex justify-center items-center pt-4 ">
                    <button
                      onClick={() => navigate("/resume-builder")} 
                      className=" text-white   font-bold hover:bg-purple-500  transition duration-300 ease-in-out transform  rounded-md py-2 px-4 sm:py-3 sm:px-6 bg-purple-500 text-md"
                      style={{
                        animation: "ButtonInUp 1s ease-in-out",
                      }}
                    >
                      Create new resume
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" basis-1/2">
              <div className="flex flex-col items-center justify-center  p-4  "  style={{
                        animation: "CardInUp 1s ease-in-out",
                      }}>
                <div
                  className="bg-light hover:bg-white rounded-lg flex flex-col items-center justify-center shadow-lg transform hover:scale-105 transition-transform hover:text-black"
                  style={{ height: "470px", width: "312px" }}
                >
                  <div className="rounded-full w-32 h-32 bg-white overflow-hidden " style={{animation:"CardInUp 3s ease-in-out "}}>
                    <img
                      src={generator.generateRandomAvatar(username)}
                      alt="Avatar"
                      className="object-cover w-full h-full transform scale-105 hover:scale-100 transition-transform"
                    />
                  </div>

                  <span className="text-2xl font-bold text-black hover:italic"  style={{
                        animation: "CardInUp 1s ease-in-out",
                      }}>
                    {username}
                  </span>
                  <CircularProgressBar />
                  <span className="text-xl font-bold text-black  hover:italic">
                    Your Resume score
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between ">
            <div className="ml-8 mt-32">
              <span className="text-2xl font-basis">Explore more template</span>
             
            </div>
            <div className=" mt-32 mr-8 text-blue-500 ">
              {" "}
              <span
                onClick={(e) => {
                  handleViewall(e);
                }}
                className="text-xl font-normal  "
              >
                {viewall < images.length ? <button>View more</button> : ""}
              </span>
            </div>
           
          </div>
          <div className="flex flex-wrap gap-2 pr-4 pl-4 pt-2  ">
            {images?.slice(0, viewall).map((value, index) => (
              <div className="w-80 flex flex-wrap  gap-2 " key={index} >
                <div className="p-4">
                  {" "}
                  <img
                    src={value}
                    alt={`Image ${index + 1}`}
                    className="w-full  transform transition duration-500 hover:scale-110 cursor-pointer border  rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:translate-y-30 transition-all duration-200"
                  />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      {viewall > 4 ? (
        <div className="flex flex-row justify-between ml-12  text-blue-500 pb-2 cursor-pointer ">
          <span
            className="text-xl font-normal "
            onClick={(e) => {
              hanldeViewLess(e);
            }}
          >
            View less
          </span>
        </div>
      ) : (
        ""
      )}
      <section className="relative py-16 text-black-900 rounded bg-gradient ">
        {/* Video Background */}
        

        {/* Content Container */}
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8 ">Welcome to Resume.ai</h2>
          <div className="flex flex-row ">
            <div className="p-4 basis-1/3  ml-24">
              <h3 className="text-2xl font-semibold mb-4 text-left">Key Features</h3>
              <ul className="list-inside flex flex-col font-medium text-left ">
                <li className="mb-2">AI-powered resume generation</li>
                <li className="mb-2">Real-time preview</li>
                <li className="mb-2">Content generation using AI</li>
                <li className="mb-2">Professional templates</li>
                <li className="mb-2">Easy customization</li>
                <li className="mb-2">Instant download</li>
              </ul>
            </div>
            <div className="p-4 basis-1/2">
              <h3 className="text-2xl font-semibold mb-4 text-right">Get Started Today</h3>
              <p className="mb-4 text-md font-medium text-right">
              Create your dream resume in minutes. 
              <br/>   Join thousands of satisfied <br/>
                users who have landed their dream jobs <br/> with Resume.ai.
              </p>
            <div className="text-right">
            <button onClick={(e)=>{navigate("/resume-builder")}} className="bg-white text-purple-500 hover:bg-purple-500 hover:text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300">
                Get Started
              </button>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
