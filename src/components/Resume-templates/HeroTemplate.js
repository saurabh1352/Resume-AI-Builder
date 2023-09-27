import React, { useRef } from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdWifiCalling2 } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";
import { useReactToPrint } from "react-to-print";

export const HeroTemplate = ({
  skills,
  certificationField,
  profiledetails,
  profileSummary,
  educationHistory,
  socialLinksHistory,
  employeHistory,
  extracurricular
}) => {

  const handleDiscription = (description) => {
    const lines = description.split("\n");
    return lines.join("</li><li>");
  };
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `${""} Resume`,
    onAfterPrint: () => {
      alert("Print Successful!");
    },
  });
  

  return (
    <div
      className="flex flex-col max-w-[160mm]   border-grey-500 min-h-[184mm]"
      //   style={{ minHeight: "100px" }}
    >
      {" "}
      <main className="container bg-white  " ref={componentRef}>
        <div className="flex flex-row   pl-3 bg-white">
          <div className="mt-8 text-4xl font-bold  ">
            <span className=" text-black">
              {profiledetails?.first_name
                ? profiledetails?.first_name
                : "Saurabh"}
            </span>
           
            <span className="text-yellow-300 pl-2 ">
              {profiledetails?.last_name ? profiledetails?.last_name : " Mishra"}
            </span>
            <div className="inline-flex items-center border-b-2 mt-2 border-yellow-300">
  <span className="font-basis text-lg pb-1">
    {profiledetails?.job_title
      ? profiledetails?.job_title
      : "Software engineer"}
  </span>
</div>

          </div>

          <div className="polygon-div text-sm font-normal justify-end ">
            <div className="flex flex-inline justify-end   pt-1 pr-8 ">
              {profiledetails?.country ? profiledetails?.country : "India"} ,{" "}
              {profiledetails?.City ? profiledetails?.City : "Orai"}, Pin-
              {profiledetails?.City ? profiledetails?.pin_code : "285001"}
              <CiLocationOn size={20} color="black" />
            </div>
            <div className="flex flex-inline justify-end gap-2 pr-8 pt-1">
              +91-
              {profiledetails?.Phone_number
                ? profiledetails?.Phone_number
                : "91238038990"}
              <MdWifiCalling2 size={20} color="black" />
            </div>
            <div className="flex flex-inline justify-end gap-2 pr-8 pt-1 ">
              {profiledetails?.Email
                ? profiledetails?.Email
                : "mishrasau91@gmail.com"}
              <BiLogoGmail size={20} color="black" className="" />
            </div>
          </div>
          {/* <div className="image-container">
            <img
              className="h-24 w-24 ml-44 mt-6  rounded-full z-10"
              src="https://avatars.githubusercontent.com/u/78682346?v=4"
              alt="Sample"
            />
          </div> */}
        </div>
        <div className="flex flex-row mt-0 gap-8">
          <div className="basis-1/2  flex flex-col  w-32 pl-4">
            <div>
              <span className="text-md font-bold underline">
                Profile Summary
              </span>
            </div>
            <div>
              <ul
                className="text-md font-normal text-black "
                style={{ color: 'black' }}
                dangerouslySetInnerHTML={{
                  __html: profileSummary?.Profile_Summary
                    ? profileSummary?.Profile_Summary
                    : " ",
                }}
              />
            </div>
            <div>
              <span className="text-md font-bold underline">Education</span>
            </div>
            <div className="flex flex-col p-1">
              {educationHistory.map((item, value) => {
                return (
                  <>
                    {" "}
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">
                        {item?.Degree ? item?.Degree : "B.tech(IT)"}
                      </span>
                      <span>
                        {item?.School ? item?.School : "Srm university,chennai"}
                      </span>
                    </div>
                    <div className="flex flex-inline italic border-b-2">
                      <div className="">{item?.Start_date}</div>
                      {item?.End_date ? <>-</> : ""}
                      <div className="pl-1">{item?.End_date}</div>
                    </div>
                  </>
                );
              })}
            </div>

            <div>
              <span className="text-md font-bold underline">Skills</span>
            </div>
            <div className="flex flex-col pl-4 border-b-2 p-1">
              {skills.map((item, value) => {
                return (
                  <ul className="text-md font-normal list-disc">
                    <li> {item?.skill ? item?.skill : "skill"}</li>
                  </ul>
                );
              })}
            </div>

            <div className="flex flex-col ">
              <div>
                <span className="text-md font-bold underline">
                  Certifications
                </span>
              </div>
              {certificationField.map((item, value) => {
                return (
                  <>
                    {" "}
                    <div className="flex flex-col p-1">
                      <span className="text-sm font-medium">
                        {item?.Course ? item?.Course : "DSA and system design"}
                      </span>
                      <span>
                        {item?.Institution
                          ? item?.Institution
                          : "Scaler academy"}
                      </span>
                      <span>
                        {item?.CertificateUrl
                          ? item?.CertificateUrl
                          : "https://www.democertificate_url"}
                      </span>
                    </div>
                    <div className="flex flex-inline italic border-b-2">
                      <div className="">{item?.Start_date}</div>
                      {item?.End_date ? <>-</> : ""}
                      <div className="pl-1">{item?.End_date}</div>
                    </div>
                  </>
                );
              })}
            </div>
            <div>
              <span className="text-md font-bold ">Social links</span>
            </div>
            <div className="flex flex-col pl-4">
              <div className="flex flex-inline">
                {" "}
                <span>
                  {socialLinksHistory?.Behance
                    ? socialLinksHistory?.Behance
                    : "links"}
                </span>
              </div>
              <div className="flex flex-inline">
                {" "}
                <span>
                  {socialLinksHistory?.Linkedin
                    ? socialLinksHistory?.Linkedin
                    : ""}
                </span>
              </div>
              <div className="flex flex-inline">
                {" "}
                <span>
                  {socialLinksHistory?.Dribble
                    ? socialLinksHistory?.Dribble
                    : ""}
                </span>
              </div>
              <div className="flex flex-inline">
                {" "}
                <span>
                  {socialLinksHistory?.Github ? socialLinksHistory?.Github : ""}
                </span>
              </div>
              <div className="flex flex-inline">
                {" "}
                <span>
                  {socialLinksHistory?.Website
                    ? socialLinksHistory?.Website
                    : ""}
                </span>
              </div>
            </div>
          </div>

          <div className="basis-1/2 w-36  h-auto ">
            {" "}
            <div className="flex flex-row   text-right justify-right items-right mt-1">
              {" "}
              <span className="text-md font-bold underline  ">
                WORK EXPERIENCE
              </span>{" "}
            </div>
            <div className="grid grid-cols-1 mt-1 ">
              {employeHistory?.map((item) => (
                <>
                  {" "}
                  <div className=" items-center ">
                    <div className="">
                      <span className="text-sm font-bold">
                        {item?.Employer ? item?.Employer :"Matrimony.com ltd"}
                      </span>

                      <span className="text-sm ml-4">{item?.job_title ? item?.job_title :"Software engineer"}</span>
                    </div>
                    <div className="col-span-1 text-right flex text-center">
                      <span className="text-sm">{"("}{item?.Start_date ? item?.Start_date :"2020-08-28"}</span>
                      {item?.End_date && (
                        <p className="mx-2 text-md font-small">-</p>
                      )}
                      <span className="text-sm">{item?.End_date ? item?.End_date :"2020-08-28"}{")"}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1">
                    <ul>
                      <li
                        className="pointer-list-item"
                        dangerouslySetInnerHTML={{
                          __html: item?.Role_description ? handleDiscription(item?.Role_description) :"a passionate Full Stack Developer with over 3 years of hands-on experience in the world of web development. My journey began with a deep curiosity for  Hi, I'm Saurabh, a passionate Full Stack Developer with over 3 years of hands-on experience in the world of web development. My journey began with a deep curiosity" ,
                        }}
                      />
                    </ul>
                  </div>
                </>
              ))}
            </div>
            <div className="flex flex-row   text-right justify-right items-right mt-1">
              {" "}
              <span className="text-md font-bold underline  ">
               Extracurricular Activities
              </span>{" "}
            </div>
            <div className="grid grid-cols-1 mt-1 ">
              {extracurricular?.map((item) => (
                <>
                  {" "}
                  <div className=" items-center ">
                    <div className="">
                      <span className="text-sm font-bold">
                        {item?.School_Employer ? item?.School_Employer :"Matrimony.com ltd"}
                      </span>

                      <span className="text-sm ml-4">{item?.Function_title ? item?.Function_title :"blind coding"}</span>
                      <span className="text-sm ml-4">({item?.City ? item?.City :"Mathura"})</span>
                    </div>
                    <div className="col-span-1 text-right flex text-center">
                      <span className="text-sm">{"("}{item?.Start_date ? item?.Start_date :"2020-08-28"}</span>
                      {item?.End_date && (
                        <p className="mx-2 text-md font-small">-</p>
                      )}
                      <span className="text-sm">{item?.End_date ? item?.End_date :"2020-08-28"}{")"}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1">
                    <ul>
                      <li
                        className="pointer-list-item"
                        dangerouslySetInnerHTML={{
                          __html: item?.Description ? handleDiscription(item?.Description) :"a passionate Full Stack Developer with over 3 years of hands-on experience in the world of web development. My journey began with a deep curiosity for  Hi, I'm Saurabh, a passionate Full Stack Developer with over 3 years of hands-on experience in the world of web development. My journey began with a deep curiosity" ,
                        }}
                      />
                    </ul>
                  </div>
                </>
              ))}
            </div>
          </div>
         
        </div>
        <div class="yellow-div">fhgfds</div>

      </main>{" "}
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
