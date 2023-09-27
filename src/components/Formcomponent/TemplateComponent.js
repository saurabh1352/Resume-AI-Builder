import React, { useState } from 'react'


export const TemplateComponent = ({handleTemplate}) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const templates = [
        {
            id:"Defaulttemplate",
            imgurl:"Default.png"
        },
        {
            id:"HeroTemplate",
            imgurl:"Hero.png"
        },
        {
            id:"Ninja",
            imgurl:"Ninja.png"
        },
        {
            id:"Ninja",
            imgurl:"Ninja.png"
        }
       
    
      ];
  
  return (
   
        <div className="flex  flex-wrap justify-center gap-16 drop-shadow-lg">
          {templates.map((template, index) => (
            <div
              key={index}
              className={` flex flex-col template-card items-center  ${
                hoveredIndex === index ? 'hovered' : ''
              } h-80 w-46`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                className="h-full w-full rounded-lg "
                src={template?.imgurl}
                alt={`Template ${template.id}`}
              />
              <button
                className="use-button bg-purple-700 w-42"
                onClick={() => handleTemplate(template.id)}
              >
                Use this template ! 
              </button>
            </div>
          ))}
        </div>
  )
}
