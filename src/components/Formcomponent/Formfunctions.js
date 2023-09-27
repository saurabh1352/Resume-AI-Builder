// export function checkformtab(formSection) {
//     if (formSection == 1) {
//       return (
//         <PersonalDetails
//           handlePersonalDetails={handlePersonalDetails}
//           profiledetails={profiledetails}
//         />
//       );
//     }
//     if (formSection == 2) {
//       return <ProfessionalSummary handleProfileSummary={handleProfileSummary} profileSummary={profileSummary} />;
//     }
//     if (formSection == 3) {
//       return (
//         <EmployementHistory
//           handleEmployeHistory={handleEmployeHistory}
//           employeHistory={employeHistory}
//           handleRole={handleRole}
//           addmoreEmployement={addmoreEmployement}
//           handleRemoveCompany={handleRemoveCompany}
//         />
//       );
//     }

import { Defaulttemplate } from "../Resume-templates/Defaulttemplate"
import { HeroTemplate } from "../Resume-templates/HeroTemplate"
import { Ninja } from "../Resume-templates/Ninja"

//     if (formSection === 4) {
//       return (
//         <Education
//           handleEmployeHistory={handleEmployeHistory}
//           educationHistory={educationHistory}
//           handleRole={handleRole}
//           addmoreEmployement={addmoreEmployement}
//           handleRemoveCompany={handleRemoveCompany}
//         />
//       );
//     }
//   }

export function checktemplatetype(template,profiledetails,profileSummary,employeHistory,educationHistory,skills,certificationField,socialLinksHistory,extracurricular){

  if(template==="Defaulttemplate")
  {
    return( <Defaulttemplate profiledetails={profiledetails} profileSummary={profileSummary} employeHistory=
  {employeHistory} educationHistory={educationHistory} skills={skills} certificationField={certificationField}/> )
  }
  if(template=="HeroTemplate")
{
  return( <HeroTemplate profiledetails={profiledetails} profileSummary={profileSummary} employeHistory=
    {employeHistory} educationHistory={educationHistory} skills={skills} certificationField={certificationField} socialLinksHistory={socialLinksHistory} extracurricular={extracurricular}/> )
}
if(template=="Ninja")
{
  return( <Ninja profiledetails={profiledetails} profileSummary={profileSummary} employeHistory=
    {employeHistory} educationHistory={educationHistory} skills={skills} certificationField={certificationField} socialLinksHistory={socialLinksHistory} extracurricular={extracurricular}/> )
}
}

export function getInitials(fullName) {
 if(fullName==="")
 fullName="Demo Data";
  const nameParts = fullName?.split(' ');


  if (nameParts.length<2) {
    return null; // Return null if the full name doesn't have both first and last names
  }

  const [firstName, lastName] = nameParts;

  const firstNameInitial = firstName.charAt(0);
  const lastNameInitial = lastName.charAt(0);

  return {
    firstNameInitial,
    lastNameInitial,
  };
}