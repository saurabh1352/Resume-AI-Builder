import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { AiOutlinePlus } from "react-icons/ai";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { AiWorkSummary } from "../actions/user";
import CircularLoader from "./CircularLoader";
import { Circles } from "react-loader-spinner";

const EmployementHistory = ({
  handleEmployeHistory,
  employeHistory,
  handleRole,
  addmoreEmployement,
  handleRemoveCompany,
  handleWorkExpierence,
  isloading
  
}) => {
  const handleEditorChange = (html, index) => {
    handleRole("Role_description", html, index);
  };
  const [currentlyWorking, setCurrentlyWorking] = useState(false);
 

  const handleCheckboxChange = (event) => {
    setCurrentlyWorking(event.target.checked);
  };
const handleWorkExpierenceIndex=(e,index)=>{
  e.preventDefault();
handleWorkExpierence(index);
}
// useEffect(()=>{
// if(message)
// console.log(message,"ab hua gazab na");
// },[message,error])
  return (
    <form>
      <div className="mt-8">
        {employeHistory?.map((key, index) => {
          return (
            <div className="">
             

              
              <div className="" key={key}>
                <div className="p-4">
                  {" "}
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium pb-2"
                  >
                    Employer
                  </label>{" "}
                  <input
                    type="text"
                    id={"Employer"}
                    value={employeHistory[index]["Employer"]}
                    onChange={(e) => handleEmployeHistory(e, index)}
                    className="mt-1 p-2 border rounded w-full bg-slate-100 appearance-none  border border-gray-300 rounded-lg py-2 px-2 focus:outline-none focus:border-blue-500 w-full"
                    placeholder={"Enter Employer"}
                  />
                </div>

                <div className="pr-4 pl-4">
                  {" "}
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium pb-2"
                  >
                    Job title
                  </label>{" "}
                  <input
                    type="text"
                    id={"job_title"}
                    value={employeHistory[index]["job_title"]}
                    onChange={(e) => handleEmployeHistory(e, index)}
                    className="mt-1 p-2 border rounded w-full bg-slate-100 appearance-none  border border-gray-300 rounded-lg py-2 px-2 focus:outline-none focus:border-blue-500 w-full"
                    placeholder={"Enter job title"}
                  />
                </div>
              </div>
              <div className="pl-4 p-2">
                <label>
                  <input
                    type="checkbox"
                    id="Currently_Working"
                    checked={employeHistory[index]["Currently_Working"]}
                    onChange={(e) => handleEmployeHistory(e, index)}
                  />
                  Currently working in this company
                </label>
              </div>
              <div className="grid grid-cols-2 gap-2 ">
                <div className="pl-4">
                  <>
                    {" "}
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium pb-0 "
                    >
                      Start date
                    </label>
                    <input
                      type="date"
                      id={"Start_date"}
                      value={employeHistory[index]["Start_date"]}
                      onChange={(e) => handleEmployeHistory(e, index)}
                      className="mt-1 p-2 border rounded w-full bg-slate-100 appearance-none  border border-gray-300 rounded-lg py-2 px-2 focus:outline-none focus:border-blue-500 w-38"
                      placeholder={"Enter start date"}
                    />
                  </>
                </div>
                <div className="pr-2">
                  {" "}
                  <>
                    {" "}
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium pb-0"
                    >
                      End date
                    </label>
                    <input
                      type="date"
                      id={"End_date"}
                      value={employeHistory[index]["End_date"]}
                      onChange={(e) => handleEmployeHistory(e, index)}
                      className="mt-1 p-2 border rounded w-full bg-slate-100 appearance-none  border border-gray-300 rounded-lg py-2 px-2 focus:outline-none focus:border-blue-500 w-38"
                      placeholder="Enter end date"
                    />
                  </>
                </div>
              </div>

              <div className="pl-4 p-2">
                {" "}
                <>
                  {" "}
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium pb-0"
                  >
                    Tech stack
                  </label>
                  <input
                    type="text"
                    id={"Tech_stack"}
                    value={employeHistory[index]["Tech_stack"]}
                    onChange={(e) => handleEmployeHistory(e, index)}
                    className="mt-1 p-2 border rounded w-full bg-slate-100 appearance-none  border border-gray-300 rounded-lg py-2 px-2 focus:outline-none focus:border-blue-500 w-38"
                    placeholder="Enter end date"
                  />
                </>
              </div>
              <div className="mt-2 mr-2 ml-4  ">
                {" "}
                <>
                  {" "}
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium pb-1"
                  >
                    Role description
                  </label>
                  <ReactQuill
                    theme="snow"
                    id="Role_description"
                    value={employeHistory[index]["Role_description"]}
                    onChange={(e) => {
                      handleEditorChange(e, index);
                    }}
                    placeholder="Write something..."
                    className="bg-white rounded-lg h-32"
                  />
                </>
              </div>
              <div className="flex flex-cols items-center  pl-2 pt-2 mt-14  ">
          
     
    
              <div className="order-first md:order-none md:basis-1/2">
              <button className="bg-purple-600 hover:bg-e-600 text-white font-semibold px-4 py-2 rounded" onClick={(e)=>{handleWorkExpierenceIndex(e,index)}}>
        {!isloading ? "Use AI Writer" :<Circles
  height="25"
  width="70"
  color="white"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>}
      </button>
      
  {employeHistory.length - 1 === index && (
    <button
      className="hover:text-purple text-md"
      onClick={(e) => {
        addmoreEmployement(e, index);
      }}
    >
      <span className="flex items-center text-black-300 hover:text-blue-500 mt-4">
        <AiOutlinePlus size={20} className="mr-1" />
        Add more Employment
      </span>
    </button>
  )}
</div>

                <div className=" items-center  pl-4 order-last ml-28 pr-2  ">
                  {employeHistory.length > 1 &&
                    employeHistory.length - 1 === index && (
                      <button
                        className="hover:text-purple text-md bg-blue-500  rounded-lg h-8 w-20 "
                        onClick={(e) => {
                          handleRemoveCompany(e, index);
                        }}
                      >
                        Delete
                      </button>
                    )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </form>
  );
};
export default EmployementHistory;
