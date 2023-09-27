import React, { useRef } from "react";
import { BsFillCaretRightFill } from "react-icons/bs";
import { useReactToPrint } from "react-to-print";
export const Defaulttemplate = ({
  profiledetails,
  profileSummary,
  employeHistory,
  educationHistory,
  skills,
  certificationField
}) => {
   
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `${""} Resume`,
    onAfterPrint: () => {
      alert("Print Successful!");
    },
  });

  const handleDiscription = (description) => {
    const lines = description.split('\n');
    return lines.join('</li><li>');
   
  };

  return (
    <div
      className="flex flex-col max-w-[140mm] border-r-4 border-grey-500 zoomed-element "
      style={{ minHeight: "700px" }}
    >
      {" "}
      <main className="container  " ref={componentRef}>
        <div className="flex flex-col p-4   ">
          <div className="border-b border-black">
            {" "}
            <div>
              <span className="text-base font-bold ">
                {profiledetails?.first_name ? profiledetails?.first_name: "Akash"} {profiledetails?.last_name ? profiledetails?.last_name : "Sharma"}
              </span>
            </div>
            <div>
              <span className="text-sm italic  font-light ">
                {profiledetails?.job_title ? profiledetails?.job_title :" Product Analyst"}
              </span>
            </div>
            <div class=" ">
              <span className="text-sm font-bold leading-3">Phone:</span>{" "}
              <span>{profiledetails?.Phone_number ? profiledetails?.Phone_number :"43447323123"}</span>
            </div>
            <div class=" ">
              <span className="text-sm font-bold leading-3">Email:</span>{" "}
              <span>{profiledetails?.Email ? profiledetails?.Email :"Akash.sharma@gmail.com"}</span>
            </div>
            <div class=" ">
              <span className="text-sm font-bold leading-3 ">Address:</span>{" "}
              <span>
                {profiledetails?.City ? profiledetails?.City :"Delhi"} , {profiledetails?.Country ? profiledetails?.Country :"India"},
                {profiledetails?.pin_code ? profiledetails?.pin_code :"32435"}
              </span>
            </div>
            <div class=" ">
              <span className="text-sm font-bold leading-3 ">
                Date of birth:
              </span>{" "}
              <span>{profiledetails?.Dob ? profiledetails?.Dob :"1998-08-12"}</span>
            </div>
          </div>

          <div
            className="flex md:flex-row pt-2"
            style={{ flexWrap: "wrap", maxWidth: "250mm" }}
          >
            <span
              dangerouslySetInnerHTML={{
                __html: profileSummary?.Profile_Summary ? handleDiscription(profileSummary?.Profile_Summary) :"a passionate Product analyst with over 0-1 years of hands-on experience in the world of web development. My journey began with a deep curiosity for  Hi, I'm Akash, a passionate Full Stack Developer with over 3 years of hands-on experience in the world of web development. My journey began with a deep curiosity" ,
              }}
            />
          </div>

          <div className="flex flex-row bg-gray-500  text-center justify-center items-center mt-1">
            {" "}
            <span className="text-white text-md font-base text-white  ">
              EDUCATION
            </span>{" "}
          </div>
          <div className="grid grid-cols-1 ">
            {educationHistory?.map((item) => (
              <div className="grid grid-cols-3 items-center">
                <div className="col-span-2 flex">
                  <span className="text-sm">{item?.Degree ? item?.Degree :"MBA"}</span>
                  {item?.Degree && <BsFillCaretRightFill size={20} />}
                  <span className="text-sm">{item?.School ? item?.School :"Delhi public school"}</span>
                </div>
                <div className="col-span-1 text-right flex text-center">
                  <span className="text-sm">{item?.Start_date ? item?.Start_date :"2022-06-18"}</span>
                  {item?.End_date && (
                    <p className="mx-2  tex-sm font-normal">To</p>
                  )}
                  <span className="text-sm">{item?.End_date ? item?.End_date :"2023-07-17"}</span>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="border-b pt-1 border-black"> </div> */}
          <div className="flex flex-row  bg-gray-500 text-center justify-center items-center mt-1">
            {" "}
            <span className="text-white text-md font-base text-white">
              WORK EXPERIENCE
            </span>{" "}
          </div>

          <div className="grid grid-cols-1 mt-1 ">
            {employeHistory?.map((item) => (
              <>
                {" "}
                <div className="grid grid-cols-3 items-center bg-gray-300">
                  <div className="col-span-2 flex">
                    <span className="text-sm font-bold">{item?.Employer ? item?.Employer :"Master' Union "}</span>

                    <span className="text-sm ml-4">{item?.job_title ? item?.job_title :"Product analyst"}</span>
                  </div>
                  <div className="col-span-1 text-right flex text-center">
                    <span className="text-sm">{item?.Start_date}</span>
                    {item?.End_date && (
                      <p className="mx-2  tex-xs font-small">To</p>
                    )}
                    <span className="text-sm">{item?.End_date}</span>
                  </div>
                </div>
                <div className="grid grid-cols-1">
      <ul>
        <li
          className="pointer-list-item"
          dangerouslySetInnerHTML={{
            __html: item?.Role_description ? handleDiscription(item?.Role_description) :"a passionate Product analyst with over 0-1 years of hands-on experience in the world of web development. My journey began with a deep curiosity for  Hi, I'm Akash, a passionate Full Stack Developer with over 3 years of hands-on experience in the world of web development. My journey began with a deep curiosity" ,
          }}
        />
      </ul>
    </div>
              </>
            ))}
          </div>
          <div className="flex flex-row bg-gray-500 text-center justify-center items-center mt-1">
            {" "}
            <span className="text-white text-md font-base text-white ">
              SKILLS
            </span>{" "}
          </div>
          <div className="flex flex-row bg-gray-300 mt-1"> {skills.map((item,value)=>{
            return(<div className="flex flex-inline"> <span className="font-base text-md">{item.skill}</span>   {item.skill && <span className="text-md ml-1 mr-1">|</span>}</div>)
          })}</div>
          <div className="flex flex-row bg-gray-500 text-center justify-center items-center mt-1">
            {" "}
            <span className="text-white text-md font-base text-white ">
              CERTIFICATIONS
            </span>{" "}
          </div>
          <div className="grid grid-cols-1 ">
            {certificationField?.map((item) => (
              <div className="grid grid-cols-3 items-center">
                <div className="col-span-2 flex">
                  <span className="text-sm">{item?.Course}</span>
                  {item?.Course && <BsFillCaretRightFill size={20} />}
                  <span className="text-sm">{item?.Institution}</span>
                </div>

                <div className="col-span-1 text-right flex text-center">
                  <span className="text-sm">{item?.Start_date}</span>
                  {item?.End_date && (
                    <p className="mx-2  tex-sm font-normal">To</p>
                  )}
                  <span className="text-sm">{item?.End_date}</span>
                </div>
                <div className="flex flex-row"> <a href={item?.CertificateUrl}>{item?.CertificateUrl
}</a></div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <div className="pl-4">
        {" "}
        <button
          onClick={handlePrint}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-2 py-2 rounded space-x-2"
        >
          <span>Download Resume</span>
        </button>
      </div>
    </div>
  );
};
