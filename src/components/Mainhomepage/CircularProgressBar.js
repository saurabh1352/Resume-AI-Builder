import React, { useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';

export const CircularProgressBar = () => {
    const [Percentage,setPercentage]=useState(100);
    const getRandomPercentage = () => {
        return Math.floor(Math.random() * 101); // Generates a random percentage between 0 and 100
      };
    // function generateRandomPercentage(Percentage) {
    //     const randomPercentage = getRandomPercentage();
    //     setPercentage(randomPercentage);
    //   };
     
      
 
  return (
    <div className='w-32 h-32 bg-clip-text  transform hover:scale-110 transition duration-300' >
<CircularProgressbar
  percentage={Percentage}
  text={`${ Math.floor(Math.random() * 101)}%`}
  styles={{
    // Customize the root svg element
    root: {},
    // Customize the path, i.e. the "completed progress"
    path: {
      // Path color
      stroke: `gray`,
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      strokeLinecap: 'round',
      // Customize transition animation
      transition: 'stroke-dashoffset 0.5s ease 0s',
    },
    // Customize the circle behind the path, i.e. the "total progress"
    trail: {
      // Trail color
      stroke: '#d6d6d6',
    },
    // Customize the text
    text: {
      // Text color
      fill: 'black',
      // Text size
      fontSize: '16px',
    },
    // Customize background - only used when the `background` prop is true
    background: {
      fill: '#3e98c7',
    },
  }}
/>
        
    </div>
  )
}
