import React from "react";

const socialLinksFields = [
  { id: "Behance", label: "Behance", placeholder: "Enter url", type: "text" },
  {
    id: "Linkedin",
    label: "Linkedin",
    placeholder: "Enter url",
    type: "text",
  },
  { id: "Dribble", label: "Dribble", placeholder: "Enter url" },

  {
    id: "Website",
    label: "Website",
    placeholder: "Enter url",
    type: "text",
  },
  { id: "Github", label: "Github", placeholder: "Enter url", type: "text" },
  { id: "Facebook", label: "Facebook", placeholder: "Enter url", type: "text" },
];
export const Sociallinks = ({ handleSociallinks, socialLinksHistory }) => {
  return (
    <form>
      <div className="mt-8">
        {socialLinksFields?.map((item,value) => {
          return (
            <div className="">
            
              <div className="" key={""}>
                <div className="p-2">
                  {" "}
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium pb-2"
                  >
                   {item.label}
                  </label>{" "}
                  <input
                    type="text"
                    id={item.id}
                    value={socialLinksHistory[item.id]}
                    onChange={(e) => handleSociallinks(e)}
                    className="mt-1 p-2 border rounded w-full bg-slate-100 appearance-none  border border-gray-300 rounded-lg py-2 px-2 focus:outline-none focus:border-blue-500 w-full"
                    placeholder={item?.placeholder}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </form>
  );
};
