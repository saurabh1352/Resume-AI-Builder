import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";
export const ExtracurricularActivities = ({handleExtracurricularHistory, extracurricular,handleExtracurricularDescription,addmoreExtracurricular,handleRemoveExtracurricular}) => {
    const handleEditorChange = (html, index) => {
        handleExtracurricularDescription("Description", html, index);
      };
  return (
    <form>
    <div className="  mt-10">
      {extracurricular?.map((key, index) => {
        return (
          <div className="">
          
            <div className="" key={key}>
              <div className="p-2">
                {" "}
                <label
                  htmlFor="name"
                  className="block text-xs font-medium pb-2"
                >
                  Function title
                </label>{" "}
                <input
                  type="text"
                  id={"Function_title"}
                  value={extracurricular[index]["Function_title"]}
                  onChange={(e) => handleExtracurricularHistory(e, index)}
                  className="mt-1 p-2 border rounded w-full bg-slate-100 appearance-none  border border-gray-300 rounded-lg py-2 px-2 focus:outline-none focus:border-blue-500 w-full"
                  placeholder={"Enter Function title."}
                />
              </div>
              <div className="p-2">
                {" "}
                <label
                  htmlFor="name"
                  className="block text-xs font-medium pb-2"
                >
                 School/Employer
                </label>{" "}
                <input
                  type="text"
                  id={"School_Employer"}
                  value={extracurricular[index]["School_Employer"]}
                  onChange={(e) => handleExtracurricularHistory(e, index)}
                  className="mt-1 p-2 border rounded w-full bg-slate-100 appearance-none  border border-gray-300 rounded-lg py-2 px-2 focus:outline-none focus:border-blue-500 w-full"
                  placeholder={"Enter Employer"}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 ">
              <div className="pl-2 p-2">
                <>
                  {" "}
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium pb-0 "
                  >
                    Start date
                  </label>
                  <input
                    type="date"
                    id={"Start_date"}
                    value={extracurricular[index]["Start_date"]}
                    onChange={(e) => handleExtracurricularHistory(e, index)}
                    className="mt-1 p-2 border rounded w-full bg-slate-100 appearance-none  border border-gray-300 rounded-lg py-2 px-2 focus:outline-none focus:border-blue-500 w-38"
                    placeholder={"Enter start date"}
                  />
                </>
              </div>
              <div className="p-2 mr-1">
                {" "}
                <>
                  {" "}
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium pb-0"
                  >
                    End date
                  </label>
                  <input
                    type="date"
                    id={"End_date"}
                    value={extracurricular[index]["End_date"]}
                    onChange={(e) => handleExtracurricularHistory(e, index)}
                    className="mt-1 p-2 border rounded w-full bg-slate-100 appearance-none  border border-gray-300 rounded-lg py-2 px-2 focus:outline-none focus:border-blue-500 w-38"
                    placeholder="Enter end date"
                  />
                </>
              </div>
            </div>
            <div className="pl-2 p-2">
                {" "}
                <label
                  htmlFor="name"
                  className="block text-xs font-medium pb-2"
                >
                 City
                </label>{" "}
                <input
                  type="text"
                  id={"City"}
                  value={extracurricular[index]["City"]}
                  onChange={(e) => handleExtracurricularHistory(e, index)}
                  className="mt-1 p-2 border rounded w-full bg-slate-100 appearance-none  border border-gray-300 rounded-lg py-2 px-2 focus:outline-none focus:border-blue-500 w-full"
                  placeholder={"Enter Employer"}
                />
              </div>
            <div className="pl-2 p-2 ">
            
              <>
               
                <label
                  htmlFor="name"
                  className="block text-sm font-medium pb-0"
                >
                  Description
                </label>
                <ReactQuill
                  theme="snow"
                  id="Description"
                  value={extracurricular[index]["Description"]}
                  onChange={(e) => {
                    handleEditorChange(e, index);
                  }}
                  placeholder="Write something..."
                  className="bg-white rounded-lg h-32"
                />
              </>
            </div>
            <div className="flex flex-cols items-center  pl-2 pt-2 mt-8 ">
              <div className="order-first w-full">
                {" "}
                {extracurricular.length - 1 === index && (
                  <button
                    className="hover:text-purple text-md "
                    onClick={(e) => {
                        addmoreExtracurricular(e, index);
                    }}
                  >
                    <span className="flex items-center text-black-300 hover:text-blue-500 ">
                      <AiOutlinePlus size={20} className=" mr-1 " />
                Add one more activity
                    </span>
                  </button>
                )}
              </div>
              <div className=" items-center  pl-4 order-last ml-28 pr-2  ">
                {extracurricular.length > 1 &&
                  extracurricular.length - 1 === index && (
                    <button
                      className="hover:text-purple text-md bg-blue-500  rounded-lg h-8 w-20 "
                      onClick={(e) => {
                        handleRemoveExtracurricular(e, index);
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
