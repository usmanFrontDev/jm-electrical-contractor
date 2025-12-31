
import Layout from "../components/Layout"
import bgImage from "../assets/img/secondHeroBg.png"
import halfBg from "../assets/img/halfBg.png"

import image1 from '../assets/img/card-1.png'
import image2 from '../assets/img/card-2.png'
import image3 from '../assets/img/card-3.png'
import image4 from '../assets/img/card-4.png'
import Typography from "../components/Typography"
import Chip from "../components/Chips"
import Button from "../components/Button"
import { whyUsPageDate } from "../constant/whyUsPageConstant"
import Banner from "../components/Banner"
import homeBg from '../assets/img/homeBg.png'
import { useParallax, useScaleClipPath, useScrollFadeIn, useSlideFromLeft, useSlideFromRight, useStaggerAnimation, useTextReveal } from "../hooks/useGSAPAnimations"


const Home = () => {
  const secondHeroRef = useScrollFadeIn(0.2);
  const servicesChipRef = useSlideFromLeft(0.1, 80);
const servicesHeadingRef = useTextReveal(0.3);
const servicesParaRef = useScrollFadeIn(0.5);
const serviceCardsRef = useStaggerAnimation(0.4);
const viewServicesButtonRef = useSlideFromRight(0.4, 100);
const whyUsBgRef = useParallax(0.3);

const whyUsChipRef = useSlideFromLeft(0.1, 60);
const whyUsHeadingRef = useTextReveal(0.3);
const whyUsParaRef = useScrollFadeIn(0.5);
const whyUsButtonsRef = useSlideFromRight(0.7, 80);
const bannerRef = useScaleClipPath(0.5);


// const back = {
//   backgroundImage: `url(${homeBg})`,
//   backgroundSize: "cover",
//   backgroundPosition: "bottom",
//   backgroundRepeat: "no-repeat",
// };


  return (
    <Layout variant='home'>

<div
  ref={secondHeroRef }
  className="w-full min-h-screen bg-cover bg-center
  bg-no-repeat bg-cover bg-center"
  style={{ backgroundImage: `url(${bgImage})` }}
> 
</div>
<div
className="w-full min-h-screen
  bg-no-repeat bg-cover bg-top relative z-10"
  
    style={{ backgroundImage: `url(${halfBg})` }}
  >
  <div className="w-full min-h-screen px-4 sm:px-20">
 <div 
 className="flex flex-col justify-start items-center sm:items-start
 gap-3 w-full sm:w-[40%] sm:pl-10">
   <Chip
   ref={servicesChipRef }
    text="Services" variant="dark"/>
  <Typography
  ref={servicesHeadingRef }
   variant="normalHeading3"
  className="text-[#ffffff]">
    Comprehensive Electrical Services
  </Typography>
   <Typography
   ref={servicesParaRef }
   variant="normalTextLex">
We handle projects of all sizes.
  </Typography>
 </div>
<div
 ref={serviceCardsRef} 
className="mt-12 sm:mt-16 mx-auto flex flex-wrap w-full sm:w-[60%] gap-10 sm:gap-6">
  {[image1, image2, image3, image4].map((item)=>{
  return(
    <div  className="w-full sm:w-[48%]">
        <img src={item} alt=""
        className="w-full" />
    </div>
  )
})}
</div>
<div ref={viewServicesButtonRef}>
  <Button text="View all Services" className="mx-auto my-10"/>
</div>
</div>
 <div 
       className="w-full relative
       flex flex-col justify-start items-center pt-8 sm:pt-20"
     >
        <div
        ref={whyUsBgRef}
        className="absolute top-0 left-0 w-full h-full z-[-1]">
          <img src={homeBg} alt="" 
          className="w-full h-full"
          />
        </div>
      <div className=" flex flex-col justify-center items-center
      text-center gap-6 sm:gap-8">
         <Typography
         ref={whyUsChipRef}
         variant="NotoKrPara"
         className="w-1/2 relative z-20">
        {whyUsPageDate.heading2Small}
       </Typography>
        <Typography
        ref={whyUsHeadingRef}
        variant="normalHeading3"
        className="text-[#ffffff] leading-8 sm:leading-14 w-1/2">
        {whyUsPageDate.heading2}
       </Typography>
        <Typography
        ref={whyUsParaRef}
        variant="normalTextLex"
        className="text-[#ffffff] leading-7 sm:leading-6 w-full sm:w-[40%]">
        {whyUsPageDate.para2}
       </Typography>
        <div
        ref={whyUsButtonsRef}
        className="flex gap-6 max-sm:flex-col
      max-sm:items-center">
            <Button variant="whiteSolid" text="Book an Appointment" />
            <Button variant="whitePhone" text="Call for Emergency" />
          </div>
      </div>
      
    <div
    ref={bannerRef}
    className="w-full px-0 sm:px-32 py-10 sm:py-16">
       <Banner variant="variantOne" dataKey="home"
       className="sm:w-full! h-fit! sm:h-fit!" />
    </div>
   
       </div>
</div>
    </Layout>
  )
}

export default Home