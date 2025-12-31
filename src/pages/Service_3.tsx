import Button from "../components/Button";
import Layout from "../components/Layout";
import Typography from "../components/Typography";
import lightHouse from "../assets/img/lightHouse.png"
import { ServiceData_Page3 } from "../constant/ServicePageConstant";
import Banner from "../components/Banner";
import { useScaleClipPath, useScrollFadeIn, useSlideFromRight, useStaggerAnimation, useTextReveal } from "../hooks/useGSAPAnimations";

const Service_3 = () => {


const service3TopHeadingRef = useTextReveal(0.2);
const service3TopParaRef = useScrollFadeIn(0.4);
const service3TopButtonRef = useSlideFromRight(0.6, 80);
const service3LightHouseRef = useScaleClipPath(0.4);
const service3BottomHeadingRef = useTextReveal(0.2);
const service3BoxesRef = useStaggerAnimation(0.25);
const service3BannerRef = useScaleClipPath(0.5);


  return (
    <Layout variant="service_3">
      <div className="relative w-full min-h-screen 
      pt-[16rem] sm:pt-[18rem] px-4 pb-4 sm:pb-12">
       <div className="absolute top-10 left-1/2 
       -translate-x-1/2 w-full sm:w-[44%] flex flex-col justify-start items-center
        gap-6 max-sm:px-4">
         <Typography
         ref={service3TopHeadingRef}
          variant="heading"
          className="text-[#00144F]! font-Alex font-normal
          text-center"
        >
          Electrical for Remodeling Projects
        </Typography>
        <Typography
        ref={service3TopParaRef}
        variant="longPara" className="text-[#00144F]!
        text-center">
          Remodeling often requires electrical updates to match new layouts and
          designs. We provide customized solutions for kitchens, bathrooms,
          offices, and commercial spaces, integrating modern wiring, lighting,
          and smart technologies seamlessly into your renovation.
        </Typography>
        <div ref={service3TopButtonRef}>
          <Button variant='darkCalendar'
        text="Book an Appointment"/>
        </div>
       </div>
       <div ref={service3LightHouseRef}  className=" w-full h-auto sm:h-[90dvh] relative pointer-events-none">
         <div className="absolute bottom-10 sm:bottom-0 left-1/2 w-[85%] h-[12dvh] sm:h-[65dvh] rounded-2xl sm:rounded-[50px]
        bg-[#F5AF1B] -translate-x-1/2"/>
        <img src={lightHouse} alt="" 
        className="w-full h-full object-cover relative"/>
       </div>
        <Typography
        ref={service3BottomHeadingRef}
        variant="heading"
        className="w-full sm:w-[54%] text-[#00144F]! text-center mx-auto my-4 sm:my-20">
          We provide comprehensive electrical solutions 
          for both residential and commercial clients.</Typography>
          <div
           ref={service3BoxesRef}
          className="flex justify-between items-center
          max-sm:flex-col max-sm:gap-4">
            {ServiceData_Page3.boxes.map((item)=>{
              return(
                  <div className="w-full sm:w-[30%] flex flex-col items-start gap-10
             px-12 p-4 sm:p-6 h-[50dvh] bg-[#00144F] rounded-3xl">
               <Typography variant="normalHeading2"
               className="text-[#F5AF1B]!">
               {item.heading}
              </Typography>
               <Typography variant="longPara">
               {item.para}
              </Typography>
            </div>
              )
            })}
          </div>
            <div
            ref={service3BannerRef}
            className="sm:mt-28 max-sm:py-10 pb-28 pt-52">
       <Banner variant="variantfive" dataKey="service3" 
       className="w-full h-fit!"/>
         </div>
      </div>
    </Layout>
  );
};

export default Service_3;
