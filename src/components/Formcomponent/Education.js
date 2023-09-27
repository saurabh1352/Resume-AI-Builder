import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import ReactQuill from 'react-quill';

export const Education = ({educationHistory,handleEducationHistory,handleEducationDescription,addmoreEducation,handleRemoveEducation}) => {
   
     const handleEditorChange = (html, index) => {
        handleEducationDescription("Description", html, index);
      };
  return (
    <form>
    <div className="mt-8">
      {educationHistory?.map((key, index) => {
        return (
          <div className="">

<div className="" key={key}>
              <div className="pl-4 pt-2 pr-2">
                
                <label
                  htmlFor="name"
                  className="block text-xs font-medium pb-2"
                >
                  School
                </label>{" "}
                <input
                  type="text"
                  id={"School"}
                  value={educationHistory[index]["School"]}
                  onChange={(e) => handleEducationHistory(e, index)}
                  className="mt-1 p-2 border rounded w-full bg-slate-100 appearance-none  border border-gray-300 rounded-lg py-2 px-2 focus:outline-none focus:border-blue-500 w-full"
                  placeholder={"Enter School"}
                />
              </div>
            </div>
           
            <div className="" key={key}>
              <div className="pl-4 pt-2 pr-2">
                
                <label
                  htmlFor="name"
                  className="block text-xs font-medium pb-2"
                >
                  Degree
                </label>{" "}
                <input
                  type="text"
                  id={"Degree"}
                  value={educationHistory[index]["Degree"]}
                  onChange={(e) => handleEducationHistory(e, index)}
                  className="mt-1 p-2 border rounded w-full bg-slate-100 appearance-none  border border-gray-300 rounded-lg py-2 px-2 focus:outline-none focus:border-blue-500 w-full"
                  placeholder={"Enter Degree"}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 ">
              <div className="pl-4 mt-2">
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
                    value={educationHistory[index]["Start_date"]}
                    onChange={(e) => handleEducationHistory(e, index)}
                    className="mt-1 p-2 border rounded w-full bg-slate-100 appearance-none  border border-gray-300 rounded-lg py-2 px-2 focus:outline-none focus:border-blue-500 w-38"
                    placeholder={"Enter start date"}
                  />
                </>
              </div>
              <div className="pr-2 mt-2">
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
                    value={educationHistory[index]["End_date"]}
                    onChange={(e) => handleEducationHistory(e, index)}
                    className="mt-1 p-2 border rounded w-full bg-slate-100 appearance-none  border border-gray-300 rounded-lg py-2 px-2 focus:outline-none focus:border-blue-500 w-38"
                    placeholder="Enter end date"
                  />
                </>
              </div>
            </div>
          
            <div className="flex flex-cols items-center  pl-4 pt-2  ">
              <div className="order-first basis-1/2">
                {" "}
                {educationHistory.length - 1 === index && (
                  <button
                    className="hover:text-purple text-md "
                    onClick={(e) => {
                      addmoreEducation(e, index);
                    }}
                  >
                    <span className="flex items-center text-black-300 hover:text-blue-500 ">
                      <AiOutlinePlus size={20} className=" mr-1 " />
                      Add more Education
                    </span>
                  </button>
                )}
              </div>
              <div className=" items-center  pl-4 order-last ml-28 pr-2  ">
                {educationHistory.length > 1 &&
                  educationHistory.length - 1 === index && (
                    <button
                      className="hover:text-purple text-md bg-blue-500  rounded-lg h-8 w-20 "
                      onClick={(e) => {
                        handleRemoveEducation(e, index);
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
  )
}
