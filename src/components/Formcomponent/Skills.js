import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';

export const Skills = ({handleSkills,skills,addmoreSkill,handleRemoveSkills}) => {
  return (
    <form>
      <div className="  mt-12">
        {skills?.map((key, index) => {
          return (
            <div className="">
           
              <div className="" key={key}>
                <div className="pl-2 p-2">
                  {" "}
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium pb-2"
                  >
                    Skill
                  </label>{" "}
                  <input
                    type="text"
                    id={"skill"}
                    value={skills[index]["Employer"]}
                    onChange={(e) => handleSkills(e, index)}
                    className="mt-1 p-2 border rounded w-full bg-slate-100 appearance-none  border border-gray-300 rounded-lg py-2 px-2 focus:outline-none focus:border-blue-500 w-full"
                    placeholder={"Enter Your skill"}
                  />
                </div>
              </div>
             
              
              <div className="flex flex-cols items-center  pl-2  ">
                <div className="order-first basis-1/2">
                  {" "}
                  {skills.length - 1 === index && (
                    <button
                      className="hover:text-purple text-md "
                      onClick={(e) => {
                        addmoreSkill(e, index);
                      }}
                    >
                      <span className="flex items-center text-black-300 hover:text-blue-500 ">
                        <AiOutlinePlus size={20} className=" mr-1 " />
                        Add one more Skill
                      </span>
                    </button>
                  )}
                </div>
                <div className=" items-center  pl-4 order-last ml-28 pr-2  ">
                  {skills.length > 1 &&
                    skills.length - 1 === index && (
                      <button
                        className="hover:text-purple text-md bg-blue-500  rounded-lg h-8 w-20 "
                        onClick={(e) => {
                            handleRemoveSkills(e, index);
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
