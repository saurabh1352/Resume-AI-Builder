import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import PersonalDetails from "../Formcomponent/PersonalDetails";
import ProgressBar from "../Formcomponent/ProgressBar";
import { BsArrowRight, BsFileEarmarkText } from "react-icons/bs";
import { ProfessionalSummary } from "../Formcomponent/ProfessionalSummary";
import EmployementHistory from "../Formcomponent/EmployementHistory";
import { Education } from "../Formcomponent/Education";
import { Sociallinks } from "../Formcomponent/Sociallinks";
import { Skills } from "../Formcomponent/Skills";
import { Certifications } from "../Formcomponent/Certifications";
import { ExtracurricularActivities } from "../Formcomponent/ExtracurricularActivities";
import {VscOpenPreview} from "react-icons/vsc";
import { TemplateComponent } from "../Formcomponent/TemplateComponent";

import { checktemplatetype } from "../Formcomponent/Formfunctions";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { AiWorkSummary } from "../actions/user";
import Warning from "../Formcomponent/Warning";
import { Hobbies } from "../Formcomponent/Hobbies";

export const Home = () => {
  const [formSection, setformSections] = useState(1);
  const [template, setTemplate] = useState(true);
  const { loading, message, error } = useSelector((state) => state.profileSummary); 
  const { isloading, workSummarymessage, iserror } = useSelector((state) => state.workSummaryReducer);

  const [employeHistory, setEmployeHistory] = useState([
    {
      job_title: "",
      Employer: "",
      Start_date: "",
      End_date: "",
      Tech_stack: "",
      City: "",
      Role_description: "",
      Currently_Working: "",
    },
  ]);
  const [templateType, setTemplateType] = useState("HeroTemplate");
const [descriptionSummary,setDescription]=useState();
  const [extracurricular, setExtracurricular] = useState([
    {
      Function_title: "",
      School_Employer: "",
      Start_date: "",
      End_date: "",
      City: "",
      Description: "",
    },
  ]);

  const [certificationField, setcertificationField] = useState([
    {
      Course: "",
      Institution: "",
      CertificateUrl: "",
      Start_date: "",
      End_date: "",
    },
  ]);
  const [skills, setSkills] = useState([{ skill: "" }]);
  const [hobbies, setHobbies] = useState([{hobbies: "" }]);
  const [socialLinksHistory, setsocialLinksHistory] = useState([
    {
      Behance: "",
      Linkedin: "",
      Dribble: "",
      Website: "",
      Github: "",
      Facebook: "",
    },
  ]);
  const [educationHistory, setEducationHistory] = useState([
    {
      School: "",
      Degree: "",
      Start_date: "",
      End_date: "",
      City: "",
    },
  ]);
  
  const [profileSummary, setProfileSummary] = useState([{Profile_Summary:""}]);
  const dispatch=useDispatch();
  const alert=useAlert();
  const [profiledetails, setProfileDetails] = useState([
    {
      job_title: "",
      first_name: "",
      last_name: "",
      Phone_number: "",
      Country: "",
      City: "",
      Email: "",
      Dob: "",
    },
  ]);
  const [index,setIndex]=useState("");
  const [navbarOpen, setNavbarOpen] = useState();
  const [width, setWidth] = useState("");
  const handlechange = (labelid) => {
    setformSections(labelid);
  };

  const handlenav = (labelid, name, navbarOpens) => {
    setNavbarOpen(navbarOpens);
  };
const handleWorkExpierence=(index)=>{

setIndex(index);
dispatch(AiWorkSummary(employeHistory[index].job_title,employeHistory[index].Employer,employeHistory[index].Tech_stack,employeHistory[index].Start_date,employeHistory[index].End_date));
}
  const handleChangeNext = () => {
    if (formSection === 9) setformSections(1);
    else setformSections(formSection + 1);
  };
  const handleProfileSummary = (html, id) => {
    setProfileSummary({ ...profileSummary, [id]: html });
  };
  function checkformtab() {
    if (formSection == 1) {
      return (
        <PersonalDetails
          handlePersonalDetails={handlePersonalDetails}
          profiledetails={profiledetails}
        />
      );
    }
    if (formSection == 2) {
      return (
        <ProfessionalSummary
          handleProfileSummary={handleProfileSummary}
          profileSummary={profileSummary}
          job_title={profiledetails?.job_title}
          loading={loading}
         
        />
      );
    }
    if (formSection == 3) {
      return (
        <EmployementHistory
          handleEmployeHistory={handleEmployeHistory}
          employeHistory={employeHistory}
          handleRole={handleRole}
          addmoreEmployement={addmoreEmployement}
          handleRemoveCompany={handleRemoveCompany}
          handleWorkExpierence={handleWorkExpierence}
          isloading={isloading}
        />
      );
    }

    if (formSection === 4) {
      return (
        <Education
          handleEducationHistory={handleEducationHistory}
          educationHistory={educationHistory}
          addmoreEducation={addmoreEducation}
          handleRemoveEducation={handleRemoveEducation}
        />
      );
    }

    if (formSection === 5) {
      return (
        <Sociallinks
          handleSociallinks={handleSociallinks}
          socialLinksHistory={socialLinksHistory}
        />
      );
    }

    if (formSection === 6) {
      return (
        <Skills
          handleSkills={handleSkills}
          skills={skills}
          addmoreSkill={addmoreSkill}
          handleRemoveSkills={handleRemoveSkills}
        />
      );
    }

    if (formSection === 7) {
      return (
        <Certifications
          handleCertificationHistory={handleCertificationHistory}
          certificationField={certificationField}
          addmoreCertificate={addmoreCertificate}
          handleRemoveSkills={handleRemoveSkills}
        />
      );
    }
    if (formSection === 8) {
      return (
        <ExtracurricularActivities
          handleExtracurricularHistory={handleExtracurricularHistory}
          extracurricular={extracurricular}
          handleExtracurricularDescription={handleExtracurricularDescription}
          addmoreExtracurricular={addmoreExtracurricular}
          handleRemoveExtracurricular={handleRemoveExtracurricular}
        />
      );
    }

    if (formSection === 9) {
      return (
        <Hobbies
        handleHobbies={handleHobbies}
        Hobbies={hobbies}
        addmoreHobbies={addmoreHobbies}
        handleRemoveHobbies={handleRemoveHobbies}
        />
      );
    }
  }
  const addmoreEmployement = () => {
    setEmployeHistory([
      ...employeHistory,
      {
        job_title: "",
        Employer: "",
        Start_date: "",
        End_date: "",
        Tech_stack: "",
        City: "",
        Role_description: "",
        Currently_Working: "",
      },
    ]);
  };

  const addmoreExtracurricular = () => {
    setExtracurricular([
      ...extracurricular,
      {
        Function_title: "",
      School_Employer: "",
      Start_date: "",
      End_date: "",
      City: "",
      Description: "",
      },
    ]);
  };
  const addmoreSkill = () => {
    setSkills([...skills, { skill: "" }]);
  };

  const addmoreHobbies = () => {
    setHobbies([...hobbies, { hobbies: "" }]);
  };

  const addmoreCertificate = () => {
    setcertificationField([
      ...certificationField,
      {
        Cource: "",
        Institution: "",
        CertificateUrl: "",
        Start_date: "",
        End_date: "",
      },
    ]);
  };
  const addmoreEducation = () => {
    setEducationHistory([
      ...educationHistory,
      {
        School: "",
        Degree: "",
        Start_date: "",
        End_date: "",
        City: "",
        Description: "",
      },
    ]);
  };
  const handleEmployeHistory = (e, index) => {
    const { id, value } = e.target;

    const list = [...employeHistory];

    list[index][id] = value;
    setEmployeHistory(list);
  };

  const handleExtracurricularHistory = (e, index) => {
    const { id, value } = e.target;

    const list = [...extracurricular];

    list[index][id] = value;
   
    setExtracurricular(list);
    // console.log(extracurricular,"")
  };

  const handleCertificationHistory = (e, index) => {
    const { id, value } = e.target;

    const list = [...certificationField];

    list[index][id] = value;
    setcertificationField(list);
  };

  const handleSociallinks = (e) => {
    setsocialLinksHistory({
      ...socialLinksHistory,
      [e.target.id]: e.target.value,
    });
   
  };
  const handleSkills = (e, index) => {
    const { id, value } = e.target;

    const list = [...skills];

    list[index][id] = value;
    setSkills(list);
  };

  const handleHobbies = (e, index) => {
    const { id, value } = e.target;

    const list = [...hobbies];

    list[index][id] = value;
    setHobbies(list);
  };
  const handleEducationHistory = (e, index) => {
    const { id, value } = e.target;

    const list = [...educationHistory];

    list[index][id] = value;
    setEducationHistory(list);
  };
  const handlePersonalDetails = (e) => {
    setProfileDetails({ ...profiledetails, [e.target.id]: e.target.value });
  };
  const handleRole = (Role_description, html, index) => {
    const list = [...employeHistory];
    list[index][Role_description] = html;
    
    setEmployeHistory(list);
  };

  // const handleEducationDescription = (Description, html, index) => {
  //   const list = [...educationHistory];
  //   list[index][Description] = html;
  //   setEmployeHistory(list);
  // };

  const handleExtracurricularDescription = (Description, html, index) => {
    const list = [...extracurricular];
    list[index][Description] = html;
    setExtracurricular(list);
  };
  const handleRemoveCompany = (index) => {
    const list = [...employeHistory];
    list.splice(index, 1);
    setEmployeHistory(list);
  };
  const handleRemoveSkills = (index) => {
    const list = [...skills];
    list.splice(index, 1);
    setSkills(list);
  };

  const handleRemoveHobbies = (index) => {
    const list = [...hobbies];
    list.splice(index, 1);
    setHobbies(list);
  };
  const handleRemoveExtracurricular = (index) => {
    const list = [...extracurricular];
    list.splice(index, 1);
    setExtracurricular(list);
  };
  const handleRemoveEducation = (index) => {
    const list = [...educationHistory];
    list.splice(index, 1);
    setEducationHistory(list);
  };
  const handleTemplate = (template) => {
    setTemplateType(template);
    setTemplate(false);
  };
  const key=sessionStorage.getItem("myCookie");
  console.log(key,"rrrrrrrrrrrrr");
  useEffect(() => {
    if (navbarOpen) {
      setWidth("w-20");
    }
    if (!navbarOpen) {
      setWidth("basis-1/6");
    }
  }, [navbarOpen]);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "CLEAR_ERRORS" });
    }
    if (message) {
      // alert.success(message);
   
      setProfileSummary({ ...profileSummary, ["Profile_Summary"]: message });
      dispatch({ type: "CLEAR_MESSAGE" });
     
      
    }
  }, [alert, error, message, dispatch]);

useEffect(()=>{
  if(workSummarymessage)
  {
    handleRole("Role_description",workSummarymessage,index);

  }
  if(isloading)
  {
    console.log(isloading,"");
  }
},[workSummarymessage,iserror,dispatch,isloading])
  return (
    <>{key!=""  ? <div className="flex md:flex-cols-2 flex-rows-2 gap-2 bg-white   border-stone-900  ">
    <div
      className={` border-stone-900  bg-purple-700 max-h-[170mm]  item-center   ${width}`}
    >
      <div className="">
        <Navbar
          handlechange={handlechange}
          selectedTabs={formSection}
          handlenav={handlenav}
        />
      </div>
    </div>
    <div
      className={`   border-stone-900  scroll-x w-full  ${
        navbarOpen ? "" : ""
      }`}
    >
      <div className="h-15 bg-gray-100 rounded-md    ">
        {" "}
        <ProgressBar activeStep={formSection} />{" "}
      </div>
      <div className="flex md:flex-cols-2   mt-1 ">
        {" "}
        <div className="basis-2/5   ">
          <div
            className="flex flex-col bg-white border-stone-900 overflow-x-auto "
            style={{ maxHeight: "690px" }}
          >
            <div className="max-h-[130mm]">
              {checkformtab()}

              <div className="flex justify-end m-4">
                <div className="items-center">
                  <button
                    className="text-sm text-white bg-black hover:border-blue-600 px-4 py-2 rounded-lg flex items-center"
                    onClick={handleChangeNext}
                  >
                    Save & Next{" "}
                    <span className="ml-1 text-white fill-white">
                      <BsArrowRight />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-3/5  w-full  bg-slate-300  custom-height  ">
          <div className="flex items-center justify-end gap-3 pt-2 pb-2 mr-16 ">
            <button   onClick={(e) => {
                  setTemplate(!template);
                }} className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded flex items-center space-x-2">
             
              {!template ?   <><BsFileEarmarkText size={20} /> <button
              
              >
                Templates
              </button></> :<><VscOpenPreview size={20}/> <button
                onClick={(e) => {
                  setTemplate(!template);
                }}
              >
                Preview
              </button></>}
            </button>
          </div>

          <div className="flex flex-rows h-screen   ml-12 drop-shadow-2xl rounded-lg overflow-x-auto max-w-[210mm] max-h-[155mm] hide-scrollbar zoomed-element">
            {!template &&
              checktemplatetype(
                templateType,
                profiledetails,
                profileSummary,
                employeHistory,
                educationHistory,
                skills,
                certificationField,
                socialLinksHistory, extracurricular
              )}
            {template && (
              <TemplateComponent handleTemplate={handleTemplate} />
            )}
            {/* <HeroTemplate skills={skills} certificationField={certificationField} profiledetails={profiledetails} profileSummary={profileSummary}/> */}
          </div>
        </div>{" "}
      </div>
    </div>
  </div> : <Warning/>}</>
  );
};
