import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { AiOutlineMenu ,AiOutlineSmile } from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";
import { IconContext } from "react-icons";
import { FaUserEdit ,FaUsers,FaTools } from "react-icons/fa";
import {BsClockHistory} from "react-icons/bs"
import{PiStudentLight ,PiCertificateLight} from "react-icons/pi"
import { MdSportsKabaddi } from "react-icons/md"; 
import { LandingPageSvg } from "../Formcomponent/LandingPageSvg";
import { useNavigate } from "react-router-dom";

export const Navbar = ({ handlechange, selectedTabs ,handlenav }) => {
const navigate=useNavigate();
  const [selectedTab, setSelectedTab] = useState(selectedTabs);
  const [navbarOpen, setNavbarOpen] = useState(true);

  const handleTabClick = (labelid, name) => {
    setSelectedTab(labelid);
   
    handlechange(labelid, name ,navbarOpen);
  };
  const handleClosenav=(labelid, name)=>{
   
    setNavbarOpen(!navbarOpen)
    handlenav(labelid, name,navbarOpen);
  }
  

  const tabs = [
    { labelid: 1, name: "Personal Details", icon:FaUserEdit},
    { labelid: 2, name: "Professional Summary", icon: BsBriefcase },
    { labelid: 3, name: "Employment History", icon: BsClockHistory },
    { labelid: 4, name: "Education", icon: PiStudentLight },
    { labelid: 5, name: "Social links", icon: FaUsers },
    { labelid: 6, name: "Skills", icon: FaTools },
    { labelid: 7, name: "Certification", icon: PiCertificateLight },
    { labelid: 8, name: "Extracurricular Activities", icon: MdSportsKabaddi },
    { labelid: 9, name: "Hobbies", icon: AiOutlineSmile },
    // { labelid: 10, name: "Tab 10" }
  ];

  return (
    <div className={` h-screen  p-4 rounded-lg ${!navbarOpen ? "" :"" }` }>
      {/* Navbar toggle icon and logo */}
      <div className="flex  items-center mb-4">
        <button
          className="text-white p-2 rounded cursor-pointer"
          onClick={handleClosenav}
        >
          {navbarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
        <span    onClick={()=>{navigate("/")}}  className="text-white">{navbarOpen ?( <span className="flex flex-inline text-center">{navbarOpen && <LandingPageSvg/>} <p className="text-md font-bold  pt-3 text-white">RESUME.AI</p></span>) : ""}</span>
      </div>

      {/* Navbar content */}
      <div>
        <ul className="space-y-2  mt-2">
          {tabs?.map((tab) => (
            <li
              key={tab.labelid}
              className={` p-2 rounded cursor-pointer hover:bg-white hover:text-purple-700  ${
                selectedTabs === tab.labelid ?    "bg-white text-purple-700" :" text-white bg-purple-700 "
                
              }`}
              style={{
                animation: "fadeInUp 1s ease-in-out"}}
              onClick={() => handleTabClick(tab.labelid, tab.name)}
            >
                <div className="flex  items-center  "> {navbarOpen && (
                <IconContext.Provider value={{ className: "hover:fill-purple fill-purple " }}>
                  {/* {React.createElement(tab.icon, { size: 25 })} */} <tab.icon size={25} className=" "/>
                </IconContext.Provider>
              )}
             <div className="ml-2 text-xs "> {navbarOpen ?  tab?.name  :""}</div></div>
              {!navbarOpen && (
                <IconContext.Provider value={{ className: "" }}>
                  {/* {React.createElement(tab.icon, { size: 25 })} */} <tab.icon size={25} className="fill-purple "/>
                </IconContext.Provider>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
