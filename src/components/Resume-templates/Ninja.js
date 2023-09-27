import React from "react";
import PersonalDetails from "../Formcomponent/PersonalDetails";
import { Skills } from "../Formcomponent/Skills";

export const Ninja = ({
  skills,
  certificationField,
  profiledetails,
  profileSummary,
  educationHistory,
  socialLinksHistory,
  employeHistory,
  extracurricular,
}) => {
    const handleDiscription = (description) => {
        const lines = description.split("\n");
        return lines.join("</li><li>");
      };
  return (
   
    
      <main className=" max-w-[160mm] container  border-grey-500 ">
        <div className="flex flex-row w-full border-2 ">
          <div className="h-28 w-full custom-bg p-4 pb-12">
            <h3 className="text-3xl font-normal text-white">
              {profiledetails["first_name"]} {profiledetails["last_name"]}
            </h3>
            <h3 className="text-xl font-light text-white">
              {profiledetails["job_title"]}
            </h3>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="basis-1/2 border-2 bg-pink-100  min-h-[184mm]  p-3">
            <span className="text-2xl font-bold text-black"> Contact</span>
            <div className="flex flex-col justify-center item-center">
              <div className="flex flex-inline gap-2">
                {" "}
                <span className="text-sm font-medium text-black">
                  {" "}
                  Phone:
                </span>{" "}
                <span className="text-sm font-light text-black">
                  {profiledetails["Phone_number"]}
                </span>
              </div>
              <div className="flex flex-inline  gap-2">
                {" "}
                <span className="text-sm font-medium text-black">
                  {" "}
                  Email:
                </span>{" "}
                <span className="text-sm font-light text-black">
                  {profiledetails["Email"]}
                </span>
              </div>
              <div className="flex flex-inline  gap-2">
                {" "}
                <span className="text-sm font-medium text-black">
                  {" "}
                  Address:
                </span>{" "}
                <span className="text-sm font-light text-black">
                  {profiledetails["City"]},{profiledetails["Country"]},
                  {profiledetails["pin_code"]}
                </span>
              </div>
            </div>
            <span className="text-2xl font-bold text-black"> Education</span>
            {educationHistory?.map((value, index) => {
              return (
                <div className="flex flex-col justify-center item-center">
                  <div className="flex flex-inline gap-2">
                    <span className="text-sm font-medium text-black">
                      {value["Degree"]}
                    </span>
                  </div>
                  <div className="flex flex-inline">
                    {" "}
                    <span className="text-sm font-medium text-black">
                      {value?.School}
                    </span>
                  </div>
                  <div className="flex flex-inline  gap-2">
                    {" "}
                    <span className="text-sm font-medium text-black">
                      {" "}
                      {value?.Start_date}
                    </span>{" "}
                    <span className="text-sm font-medium text-black">
                      {value?.End_date ? <>-</> : ""}
                      {value?.End_date ? (
                        value?.End_date
                      ) : (
                        <span className="text-sm font-light text-black"></span>
                      )}
                    </span>
                  </div>
                </div>
              );
            })}

            <span className="text-2xl font-bold text-black"> Skills</span>
            <div className="flex flex-col justify-center item-center">
              <div className="flex flex-col gap-2">
                {" "}
                {skills.map((item, value) => {
                return (
                  <ul className="text-md font-normal list-inside list-disc">
                   {item?.skill ?  <li> {item?.skill ? item?.skill : ""}</li> :""}
                  </ul>
                );
              })}
         
              </div>
            </div>
            <span className="text-2xl font-bold text-black">
              {" "}
              Certification
            </span>
            {/* <div className="">
              <div className="flex flex-inline gap-2">
                {" "}
                <span className="text-sm font-medium text-black">DSA</span>
              </div>
            </div> */}
            {certificationField.map((item, value) => {
                return (
                  <>
                    {" "}
                    <div className="flex flex-col justify-center item-center pt-2">
                      <span className="text-sm font-semibold">
                        {item?.Course ? item?.Course : ""}
                      </span>
                      <span className="font-semibold text-md">
                        {item?.Institution
                          ? item?.Institution
                          : ""}
                      </span>
                      <span>
                        {item?.CertificateUrl
                          ? item?.CertificateUrl
                          : ""}
                      </span>
                    </div>
                    <div className="flex flex-inline italic border-b-2">
                      <div className="text-sm">{item?.Start_date}</div>
                      {item?.End_date ? "-" : ""}
                      <div className="pl-1 text-sm font-normal">{item?.End_date}</div>
                    </div>
                    <div>
              <span className="text-2xl font-bold text-black ">Social links</span>
            </div>
            <div className="flex flex-col pl-4">
              <div className="flex flex-inline">
                {" "}
                <span>
                  {socialLinksHistory?.Behance
                    ? socialLinksHistory?.Behance
                    : ""}
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
                  </>
                );
              })}
          </div>
          <div className="w-full  border-2 border-red bg-white  min-h-[184mm]">

          <div className="pt-2 ">
              <span className="text-2xl font-bold text-black ">
                Profile Summary
              </span>
            </div>
            <div>
              <ul
                className="text-md font-normal text-black text-left p-1 "
                style={{ color: 'black' }}
                dangerouslySetInnerHTML={{
                  __html: profileSummary?.Profile_Summary
                    ? profileSummary?.Profile_Summary
                    : " ",
                }}
              />
            </div>
            <div className="   text-left">
              {" "}
              <span className="text-2xl font-bold   ">
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
                        {item?.Employer ? item?.Employer :""}
                      </span>

                      <span className="text-sm ml-4">{item?.job_title ? item?.job_title :""}</span>
                    </div>
                    <div className="col-span-1 text-right flex text-center">
                      <span className="text-sm">{item?.Start_date ? "(" :""}{item?.Start_date ? item?.Start_date :""}</span>
                      {item?.End_date && (
                        <p className="mx-2 text-md font-small">-</p>
                      )}
                      <span className="text-sm">{item?.End_date ? item?.End_date :""}{item?.End_date ? ")" :""}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1">
                    <ul>
                      <li
                        className="pointer-list-item"
                        dangerouslySetInnerHTML={{
                          __html: item?.Role_description ? handleDiscription(item?.Role_description) :"" ,
                        }}
                      />
                    </ul>
                  </div>
                </>
              ))}
            </div>
            <div className="">
              {" "}
              <span className="text-2xl font-bold   ">
               Extracurricular Activities
              </span>{" "}
            </div>
            <div className=" ">
              {extracurricular?.map((item) => (
                <>
                  {" "}
                  <div className=" items-center ">
                    <div className="">
                      <span className="text-sm font-bold">
                        {item?.School_Employer ? item?.School_Employer :""}
                      </span>

                      <span className="text-sm ml-4">{item?.Function_title ? item?.Function_title :""}</span>
                      <span className="text-sm ml-4">,{item?.City ? item?.City :""}</span>
                    </div>
                    <div className="col-span-1 text-right flex text-center">
                      <span className="text-sm">{""}{item?.Start_date ? item?.Start_date :""}</span>
                      {item?.End_date && (
                        <p className="mx-2 text-md font-small">-</p>
                      )}
                      <span className="text-sm">{item?.End_date ? item?.End_date :""}{""}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1">
                    <ul>
                      <li
                        className="pointer-list-item"
                        dangerouslySetInnerHTML={{
                          __html: item?.Description ? handleDiscription(item?.Description) :"" ,
                        }}
                      />
                    </ul>
                  </div>
                </>
              ))}
            </div>
          </div>
         
        </div>
       
      
      </main>
    
  );
};
