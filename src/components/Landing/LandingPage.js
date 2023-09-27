import React from 'react'
import { HeroSection } from './HeroSection'
import { SubHeroSection } from './SubHeroSection'
import { HeroSectionSvg3, HeroSectionSvg4, HeroSectionSvg5, HeroSectionSvg6, HeroSectionSvg7, HeroSectionSvg8 } from '../Formcomponent/LandingPageSvg'
import { useNavigate } from 'react-router-dom'
import { BsListCheck } from 'react-icons/bs'
import { AiOutlineEye } from 'react-icons/ai'
import {LuLayoutTemplate} from 'react-icons/lu'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
export const LandingPage = () => {
    const navigate=useNavigate();
  

const images = [
  'Hero.png',
  'https://marketplace.canva.com/EAFRuCp3DcY/1/0/1131w/canva-black-white-minimalist-cv-resume-f5JNR-K5jjw.jpg',
  'https://d.novoresume.com/images/doc/it-resume-template.png',
  'https://d25zcttzf44i59.cloudfront.net/academic-word-resume-template.png',
  'https://d25zcttzf44i59.cloudfront.net/academic-word-resume-template.png',
  'https://resumegenius.com/wp-content/uploads/clean-resume-template-orange-hub.png',
  'https://marketplace.canva.com/EAFRuCp3DcY/1/0/1131w/canva-black-white-minimalist-cv-resume-f5JNR-K5jjw.jpg',
  'https://d.novoresume.com/images/doc/it-resume-template.png',
  'https://d25zcttzf44i59.cloudfront.net/academic-word-resume-template.png',
  'https://d25zcttzf44i59.cloudfront.net/academic-word-resume-template.png',
  'https://resumegenius.com/wp-content/uploads/clean-resume-template-orange-hub.png',
  'Hero.png',
  'https://marketplace.canva.com/EAFRuCp3DcY/1/0/1131w/canva-black-white-minimalist-cv-resume-f5JNR-K5jjw.jpg',
  'https://d.novoresume.com/images/doc/it-resume-template.png',
  'https://d25zcttzf44i59.cloudfront.net/academic-word-resume-template.png',
  'https://d25zcttzf44i59.cloudfront.net/academic-word-resume-template.png',
  'https://resumegenius.com/wp-content/uploads/clean-resume-template-orange-hub.png',
  // Add more image URLs
];
    
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <div className='container mx-auto text-center '>
    <HeroSection />
    <SubHeroSection/>
    <div class="flex flex-row gap-2">
  <div class="basis-1/2 rounded-md">

<div className='flex flex-col font-bold text-2xl text-black text-left mt-4 pl-4'>
    <div>
        <span>
        Why choose AI resume maker? 
        </span>
    </div>
    <div class="flex justify-left  text-center w-full">
  <div class="inline-block  mt-16 "><HeroSectionSvg4/></div>
  <div class="inline-block mt-4 border-2 rounded ml-2 custom-heights custom-gradient-shadow h28  inset-0">
  <HeroSectionSvg5/>
</div>

  <div class="inline-block mt-44 pl-4  "><HeroSectionSvg6/></div>
  <div class="inline-block mt-48 "><HeroSectionSvg7/></div>

</div>

</div>
  </div>

  <div class="basis-1/2  flex justify-center items-center border-2 rounded-md mt-2  mb-2">
  <HeroSectionSvg3/>
</div>

</div>
<div class="flex md:flex-row flex-col gap-4 items-center justify-center">
  <div class="basis-1/2">
    <div className='w-full md:p-4 bg-purple-500 rounded-md' style={{height:"311px"}}>
        <div className='mt-6'>
            <span className='text-2xl font-medium text-white'>Intelligent Guidance</span>
        </div>
        <div className='p-6'>
            <p className='text-md font-basic text-white text-center  md:p-4 '>Our AI-powered platform provides step-by-step<br/> guidance as you build your resume. From selecting <br/>the right template to tailoring content, our AI <br/> ensures your resume reflects your unique strengths.</p>
        </div>
<div className='flex justify-center items-center '>
<button type='button'  onClick={()=>{navigate("/login")}} class="bg-white text-black hover:bg-white hover:italic rounded-md hover:text-black transition duration-300 ease-in-out transform hover:scale-105 rounded-md py-2 px-4 sm:py-3 sm:px-6">
  Try now
</button>

</div>

    </div>
  </div>

  <div class="basis-1/2 rounded-md "><img className='rounded-md' style={{height:"311px " ,width:"100%"}} src='/Rectangle.png'/></div>
</div>
<div className='flex md:flex-rows-3 flex-cols-3 gap-2'>
<div class="basis-1/4 md:basis-1/3  rounded-md flex flex-inline p-4 items-center justify-center  ">
<div className='border-2 w-12 flex items-center justify-center  '><span className='mt-1 text-white p-2 '>
  <BsListCheck size={25} style={{ fill: 'white' ,background:"#8B5CF6" , borderRadius:"5px" }} />
</span> </div> <span className='text-md font-medium text-black pl-2'>  Step by step guidance</span>
</div>
  <div class="basis-1/4 md:basis-1/3  flex flex-inline p-4 items-center justify-center"><div className='border-2 w-12 flex flex-inline items-center justify-center  '><span className='mt-1 text-white p-2 '>
  <LuLayoutTemplate size={25} style={{ fill: '#8B5CF6' ,background:"#8B5CF6" , borderRadius:"5px" }} />
</span>  </div> <span className='text-md font-medium text-black pl-2'>Select from curated templates</span>
</div>
  <div class="basis-1/2 md:basis-1/3 flex flex-inline p-4 items-center justify-center">
  <div className=' border-2 w-12 flex flex-inline items-center justify-center  '><span className='mt-1 text-white p-2 '>
  <AiOutlineEye size={25} style={{ fill: 'white' ,background:"#8B5CF6" , borderRadius:"5px" }} />
</span>  </div> <span className='text-md font-medium text-black pl-2'>Realtime resume preview</span>
  </div>
</div>
<div className='flex flex-rows-2 gap-8'>
  <div className='basis-1/2 flex items-center'>
    <div className=''>
      <img src='landinggroup.png' alt='Image'/>
    </div>
  </div>
  <div className='basis-1/2 flex justify-end  '>
    <div className='flex flex-col w-full'>
      <div className='flex flex-inline mt-'>
        <span className='text-4xl font-bold text-black hover:italic text-left mt-8'> Let AI write your resume.</span>
      </div>
    <div className='text-left w-auto mt-2'>
        <span className='text-lg text-left font-light text-black hover:italic '> Are you struggling to find the right words for your resume? Our AI resume builder can find them in no time! It’s powered by OpenAI’s GPT-4, the world’s most powerful language model, and it can automatically produce text indistinguishable from human writers. Say goodbye to writer’s block. Generate the first draft of your resume in seconds..</span>
        <img src='Arrow9.png'/>
      </div>
      <div></div>
    </div>
  </div>
</div>
<div className='flex flex-col gap-12 rounded-md' style={{backgroundColor:"#EBE6FD"}}>
   <div className='pt-8'> <span className='text-2xl font-medium text-black'>Explore the library</span></div>
    <Carousel
  additionalTransfrom={0}
  arrows={false}
  autoPlay
  autoPlaySpeed={1}
  centerMode={false}
  className=" pb-4"
  containerClass="container-with-dots"
  customTransition="all 1s linear"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 4,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={2}
  swipeable
  transitionDuration={5000}
>
  {/* <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div> */}
      {images.map((image, index) => {
       
       return ( <div key={index} className='bg-grey-200 '>
        <img src={image} alt={`Image ${index}`} className="w-auto" style={{height:"411px" }} />
      </div>)
})}
</Carousel>
  


</div>
<div className='flex flex-col  md:mt-12 md:mb-8 rounded-md' style={{backgroundColor:"#EBE6FD"}}>
   <div className='flex flex-inline items-center justify-center ' >
    <div className=' mt-4 '>
        <span className='text-xl font-bold text-black'>
        Join the AI-Powered Revolution <br/>
in Resume Building
            </span>
           
            
            </div>
           
            </div> 
        <div className='flex flex-col '>
        <span className='text-md text-gray-500 font-normal hover:italic p-4'>Creating an outstanding resume has never been this effortless. With AI Resume Maker, you're not just crafting a <br/> document—you're shaping your professional future.</span>
        <div className='flex justify-center items-center p-4'>
        <button onClick={()=>{navigate("/login")}}
      className=" font-medium bg-white text-black hover:bg-purple-500 hover:italic rounded-md hover:text-white transition duration-300 ease-in-out transform hover:scale-105 rounded-md py-2 px-4 sm:py-3 sm:px-6 w-48"
    >
      Get Started Today
    </button> 
        </div>
       
        </div>
</div>
  </div>
  
  )
}
