import React, { useState } from "react";

const PersonalFields = [
  { id: "job_title", label: "Job title", placeholder: "Enter your job title" ,type:"text"},
  {
    id: "first_name",
    label: "First Name",
    placeholder: "Enter your first name",
    type:"text"
  },
  { id: "last_name", label: "Last Name", placeholder: "Enter your last name" },
  { id: "Email", label: "Email", placeholder: "Enter your Email",type:"email" },
  {
    id: "Phone_number",
    label: "Phone Number",
    placeholder: "Enter your phone no.",
    type:"number"
  },
  { id: "Country", label: "Country", placeholder: "Enter your Country" ,type:"text"},
  { id: "City", label: "City", placeholder: "Enter your City",type:"text" },

];

const extraFields=[   { id: "pin_code", label: "Pin code", placeholder: "Enter Pin code",type:"text" },
 { id: "Dob", label: "Date of birth", placeholder: "Enter your date of birth",type:"date" },]

const PersonalDetails = ({ handlePersonalDetails,profiledetails }) => {
  const [name, setName] = useState();
  const [jobTitle, setJobTitle] = useState();


  return (
    <form  >
      <div className="grid grid-cols-1 mt-4">
        {PersonalFields?.map((Value, index) => {
          return (
            <div className="pl-2 pr-2 pt-2 pr-4" key={Value?.id}>
              {" "}
              <label htmlFor="name" className="block text-xs font-medium">
                {Value?.label}
              </label>
              <input
                type={Value?.type}
                id={Value?.id}
               value={profiledetails[Value?.id]}
                onChange={(e) => handlePersonalDetails(e)}
                className="mt-1 p-2 border rounded w-full bg-slate-100 appearance-none  border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
                placeholder={Value?.placeholder}
                required
              />
            </div>
          );
        })}

        <div className="flex cols-1 ">
          {extraFields?.map((value,item)=>{
            return(<>
             <div className="basis-1/2 pl-2 pr-4 mt-2" key={item}>
             <label htmlFor="name" className="block text-xs font-medium">
                {value?.label}
              </label>
              <input
                type={value?.type}
                id={value?.id}
                value={profiledetails[value?.id]}
                onChange={(e) => handlePersonalDetails(e)}
                className="mt-1 p-2 border rounded w-full bg-slate-100 appearance-none  border border-gray-300 rounded-lg py-2 px-2 focus:outline-none focus:border-blue-500 w-38"
                placeholder={value?.placeholder}
                required
              />
             
          </div>
            
            </>)
          })}
         
        </div>
      </div>
 
    </form>
    
  );
};
export default PersonalDetails;
