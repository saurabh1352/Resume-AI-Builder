import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';

export const Certifications = ({handleCertificationHistory,certificationField,addmoreCertificate}) => {
  return (
    <form>
    <div className="  mt-10">
      {certificationField?.map((key, index) => {
        return (
          <div className="">
          
            <div className="" key={key}>
              <div className="pl-2 p-2">
                {" "}
                <label
                  htmlFor="name"
                  className="block text-xs font-medium pb-2"
                >
                  Course
                </label>{" "}
                <input
                  type="text"
                  id={"Course"}
                  value={certificationField[index]["Course"]}
                  onChange={(e) => handleCertificationHistory(e, index)}
                  className="mt-1 p-2 border rounded w-full bg-slate-100 appearance-none  border border-gray-300 rounded-lg py-2 px-2 focus:outline-none focus:border-blue-500 w-full"
                  placeholder={"Enter Employer"}
                />
              </div>

              <div className="pl-2 p-2">
                <>
                  {" "}
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium pb-0 "
                  >
                   Institution
                  </label>
                  <input
                    type="text"
                    id={"Institution"}
                    value={certificationField[index]["Institution"]}
                    onChange={(e) => handleCertificationHistory(e, index)}
                    className="mt-1 p-2 border rounded w-full bg-slate-100 appearance-none  border border-gray-300 rounded-lg py-2 px-2 focus:outline-none focus:border-blue-500 w-38"
                    placeholder={"Enter start date"}
                  />
                </>
              </div>

              <div className="pl-2 p-2">
                <>
                  {" "}
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium pb-0 "
                  >
                   CertificateUrl
                  </label>
                  <input
                    type="text"
                    id={"CertificateUrl"}
                    value={certificationField[index]["CertificateUrl"]}
                    onChange={(e) => handleCertificationHistory(e, index)}
                    className="mt-1 p-2 border rounded w-full bg-slate-100 appearance-none  border border-gray-300 rounded-lg py-2 px-2 focus:outline-none focus:border-blue-500 w-38"
                    placeholder={"Enter start date"}
                  />
                </>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 ">
              <div className="pl-3 p-2">
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
                    value={certificationField[index]["Start_date"]}
                    onChange={(e) => handleCertificationHistory(e, index)}
                    className="mt-1 p-2 border rounded w-full bg-slate-100 appearance-none  border border-gray-300 rounded-lg py-2 px-2 focus:outline-none focus:border-blue-500 w-38"
                    placeholder={"Enter start date"}
                  />
                </>
              </div>
              <div className="pr-2 p-2">
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
                    value={certificationField[index]["End_date"]}
                    onChange={(e) => handleCertificationHistory(e, index)}
                    className="mt-1 p-2 border rounded w-full bg-slate-100 appearance-none  border border-gray-300 rounded-lg py-2 px-2 focus:outline-none focus:border-blue-500 w-38"
                    placeholder="Enter end date"
                  />
                </>
              </div>
            </div>
         
            <div className="flex flex-cols items-center  pl-2   ">
              <div className="order-first basis-1/2">
                {" "}
                {certificationField.length - 1 === index && (
                  <button
                    className="hover:text-purple "
                    onClick={(e) => {
                        addmoreCertificate(e, index);
                    }}
                  >
                    <span className="flex items-center text-black-300 hover:text-blue-500 text-md ">
                      <AiOutlinePlus size={20} className=" mr-1 " />
                      Add one more Certificate
                    </span>
                  </button>
                )}
              </div>
              <div className=" items-center  pl-4 order-last ml-28 pr-2  ">
                {certificationField.length > 1 &&
                  certificationField.length - 1 === index && (
                    <button
                      className="hover:text-purple text-md bg-blue-500  rounded-lg h-8 w-20 "
                      onClick={(e) => {
                        // handleRemoveCompany(e, index);
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
