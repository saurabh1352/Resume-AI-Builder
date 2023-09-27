import React from "react";
import { FaUserEdit } from "react-icons/fa";
import { BsBriefcase, BsClockHistory } from "react-icons/bs";
import { PiStudentLight, PiCertificateLight } from "react-icons/pi";
import { FaUsers, FaTools } from "react-icons/fa";
import { MdSportsKabaddi } from "react-icons/md";
import { AiOutlineSmile } from "react-icons/ai";

const tabs = [
  { labelid: 1, name: "Personal Details", icon: FaUserEdit },
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

const ProgressBar = ({ activeStep }) => {
  return (
    <div className="flex flex-row items-center space-x-2 w-full text-center mt-0" style={ {animation:"ButtonInUp 2s ease-in-out"}}>
      {tabs.map((tab) => (
        <div
          key={tab.labelid}
          className={`flex items-center    ${
            activeStep >= tab.labelid ? "text-blue-500" : "text-gray-400"
          }`}
        >
          <div className="flex justify-center w-full  items-center pt-2">
            {" "}
            <div className="rounded-full bg-gray-300 w-6 h-6 text-center justify-center ">
              <span
                className={`text-xs pb-5   ${
                  activeStep >= tab.labelid ? "font-bold" : ""
                }`}
              >
                {tab.labelid}
              </span>
            </div>
            <span className="text-xs inline  font-light tracking-normal subpixel-antialiased pl-1 w-full h-auto">
              {tab.name}
            </span>
            <span className="text-xs inline">{">>"}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
