import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import { useDispatch, useSelector } from 'react-redux';
import { AiProfileSummary } from '../actions/user';
import { useAlert } from 'react-alert';
import CircularLoader from './CircularLoader';
import { Circles } from  'react-loader-spinner'
export const ProfessionalSummary = ({handleProfileSummary,profileSummary,job_title,loading}) => {

 
    const [techStack, setTechStack] = useState();
    const [currentExp , setCurrentExp]=useState();
     const [summary, setProfessionalSummary] =useState();
    const alert=useAlert();
    const dispatch=useDispatch();

   
    const handleEditorChange = (html) => {
      // setEditorHtml(html,"ProfileSummary");
     
      handleProfileSummary(html,"Profile_Summary")
      setProfessionalSummary(html);
    };
  const handleAiWriter=(e)=>{
e.preventDefault();

  dispatch(AiProfileSummary(techStack,currentExp,job_title,summary))


  }
  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'align': [] }],
      ['link', 'image'],
      ['clean']                                         // remove formatting button
    ],
    
  };
    return (
      <div className="p-4 mt-16 bg-white-300">
          <div className="pr-2 mt-2">
                {" "}
                <>
                  {" "}
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium pb-0"
                  >
                    Total Experience
                  </label>
                  <input
                    type="text"
                    id={"End_date"}
                    // value={educationHistory[index]["End_date"]}
                    onChange={(e) => setCurrentExp(e.target.value)}
                    className="mt-1 p-2 border rounded w-full bg-slate-100 appearance-none  border border-gray-300 rounded-lg py-2 px-2 focus:outline-none focus:border-blue-500 w-38"
                    placeholder="eg: 3yr"
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
                    Skills
                  </label>
                  <input
                    type="text"
                    id={"tech_stack"}
                    // value={educationHistory[index]["End_date"]}
                    onChange={(e) =>setTechStack(e.target.value)}
                    className="mt-1 p-2 border rounded w-full bg-slate-100 appearance-none  border border-gray-300 rounded-lg py-2 px-2 focus:outline-none focus:border-blue-500 w-38"
                    placeholder="Enter current skill stack eg: excel,react js"
                  />
                </>
              </div>
      <h3 className="text-sm mb-4">
        Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience & most importantly - your biggest achievements, best qualities and skills.
      </h3>
      <div className="bg-white rounded-lg ">
        <ReactQuill
          theme="snow"
          value={profileSummary["Profile_Summary"]}
          id="Profile_Summary"
          onChange={handleEditorChange}
          placeholder="Please provide the skills, total years of experience in above text boxes and a small description  about your past experience for getting the best quality AI written profile summary..😜"
          style={{ width: "400px" , height :"100px" }} // Set a fixed width
          modules={modules}
        />
      </div>
      <div className="flex justify-start pt-20">
      <button className="bg-purple-600 hover:bg-e-600 text-white font-semibold px-4 py-2 rounded" onClick={handleAiWriter}>
       {!loading ? "Use AI Writer" :<Circles
  height="25"
  width="70"
  color="white"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>}  
      </button>
    </div>
    
    </div>
    
    );
}
