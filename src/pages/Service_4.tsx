import Banner from "../components/Banner";
import Button from "../components/Button";
import Layout from "../components/Layout";
import Typography from "../components/Typography";
import { ServiceData_Page4 } from "../constant/ServicePageConstant";
import { useScaleClipPath, useSlideFromLeft, useStaggerAnimation, useTextReveal } from "../hooks/useGSAPAnimations";

const Service_4 = () => {

const service4ImageStackRef = useStaggerAnimation(0.2);
const service4MainImageRef = useScaleClipPath(0.4);
const service4TextRef = useSlideFromLeft(0.3, 100);
const service4HeadingRef = useTextReveal(0.2);
const service4BoxesRef = useStaggerAnimation(0.25);
const service4BannerRef = useScaleClipPath(0.5);
  
  return (
    <Layout variant="service_4">
      <div className="w-full min-h-screen">
        <div className="flex px-4 sm:px-8 justify-between items-center max-sm:flex-col">
         <div className="w-full sm:w-1/2 h-full flex flex-col justify-start items-start
         sm:pl-20">
         <div className="w-full sm:w-[75%] flex flex-col justify-start items-center sm:items-start
         gap-10">
            <Typography
            ref={service4HeadingRef}
            variant="heading"
            className="text-[#00144F]! font-Alex font-normal">{ServiceData_Page4.heading}</Typography>
          <Typography
            ref={service4TextRef}
          variant="longPara"
          className="text-[#00144F]!">
           {ServiceData_Page4.para}
          </Typography>
          <Button variant="darkCalendar" text="Book an Appointment"/>
         </div>
         </div>
          <div className="relative w-full sm:w-1/2 h-full flex flex-col justify-start items-start
          p-4 sm:p-8
          max-sm:mt-12">
           <div
           ref={service4ImageStackRef }
           className="absolute top-0 right-0 flex justify-end items-center">
            <img src={ServiceData_Page4.img2} alt="" 
            className="w-[50%] sm:w-[70%]"/>
          </div>
         <div
         ref={service4ImageStackRef }
         className="absolute bottom-0 left-0 flex justify-start items-center">
            <img src={ServiceData_Page4.img3} alt="" 
            className="w-[40%] sm:w-[70%]"/>
          </div>
          <div 
           ref={service4MainImageRef }
          className="relative w-full h-auto">
             <img src={ServiceData_Page4.img} alt=""
             className="w-full h-full" />
          </div>
         </div>
        </div>
        <Typography
        ref={service4HeadingRef }
        variant="heading"
        className="w-full max-sm:px-4 sm:w-[54%] text-[#00144F]! text-center mx-auto my-10 sm:my-20">
          We provide comprehensive electrical solutions 
          for both residential and commercial clients.</Typography>
          <div
          ref={service4BoxesRef }
          className="flex justify-between items-start
          px-4 sm:px-8 py-4 max-sm:flex-col max-sm:gap-6">
           {ServiceData_Page4.boxes.map((item)=>{
            return(
               <div className="w-full sm:w-[31%] flex flex-col items-start justify-start
               gap-8">
              <img src={item.img} alt="" />
             <div className="flex flex-col items-center 
             max-sm:gap-4 sm:items-start justify-between
             px-2 sm:px-12 h-fit sm:h-72">
               <Typography variant="normalHeading2"
               className="text-[#F5AF1B]!">
               {item.heading}
              </Typography>
               <Typography variant="longPara"
               className="text-[#00144F]! border-b-2 sm:border-b-4 border-[#F5AF1B]
               pb-2 sm:pb-10">
               {item.para}
              </Typography>
             </div>
            </div>
            )
           })}
          </div>
          <div
          ref={service4BannerRef }
          className="sm:mt-28 max-sm:py-10 pb-28 pt-52">
       <Banner variant="variantfive" dataKey="service4" 
       className="w-full h-fit!"/>
         </div>
      </div>
    </Layout>
  );
};

export default Service_4;
