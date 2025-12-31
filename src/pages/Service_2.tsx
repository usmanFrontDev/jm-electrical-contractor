
import Banner from "../components/Banner"
import Layout from "../components/Layout"
import Typography from "../components/Typography"
import { ServiceData_Page2 } from "../constant/ServicePageConstant"
import { useScaleClipPath, useSlideFromLeft, useSlideFromRight, useStaggerAnimation, useTextReveal } from "../hooks/useGSAPAnimations"

const Service_2 = () => {



const service2HeadingRef = useTextReveal(0.2);
const section1ImageRef = useScaleClipPath(0.3);
const section1TextRef = useSlideFromRight(0.5, 100);
const section2TextRef = useSlideFromLeft(0.3, 100);
const section2CardsRef = useStaggerAnimation(0.2);
const section2ImageRef = useScaleClipPath(0.6);
const section3ImageRef = useScaleClipPath(0.3);
const section3TextRef = useSlideFromRight(0.5, 100);
const section3CardsRef = useStaggerAnimation(0.2);
const service2BannerRef = useScaleClipPath(0.5);

  return (
    <Layout variant='service_2'>
       <div className="w-full min-h-fit sm:min-h-screen">
        <Typography
        ref={service2HeadingRef}
        variant="heading"
        className="w-full max-sm:px-4 sm:w-[54%] text-[#00144F]! text-center mx-auto my-4 sm:my-20">
          We provide comprehensive electrical solutions 
          for both residential and commercial clients.</Typography>
          <div 
          ref={section1ImageRef}
          className="w-full flex justify-between items-center
          pr-4 sm:pr-10 py-10 sm:py-20 max-sm:flex-col max-sm:gap-8">
          <img src={ServiceData_Page2.img1} alt="" 
          className="w-full sm:w-1/2"/>
          <div
           ref={section1TextRef}
          className="
          w-full sm:w-[40%] flex flex-col justify-center items-center sm:items-start 
          gap-4 sm:gap-8">
            <Typography variant="service2Heading">
              {ServiceData_Page2.heading1}
            </Typography>
             <Typography variant="longPara"
          className="text-[#00144F]! w-[85%]">
           {ServiceData_Page2.para1}
          </Typography>
          </div>
          </div>
             <div className="w-full flex justify-between items-center
          pl-4 sm:pl-10 py-10 sm:py-20 max-sm:flex-col max-sm:gap-8">
          <div 
           ref={section2TextRef}
          className="w-full sm:w-[40%] flex flex-col justify-center items-center sm:items-start gap-8 
          pl-0 sm:pl-32">
            <Typography variant="service2Heading"
            className="w-full sm:w-[70%]">
              {ServiceData_Page2.heading2}
            </Typography>
             <Typography variant="longPara"
          className="text-[#00144F]! w-[80%]">
           {ServiceData_Page2.para2}
          </Typography>
          <div
          ref={section2CardsRef}
          className="flex flex-col gap-4 w-[80%]">
            {ServiceData_Page2.points2.map((item)=>{
return(
  <div className="w-full rounded-2xl p-4 bg-[#00144F]">
   <Typography variant="longParaLex">
    <span className="font-bold!">{item.heading}{' '}</span>{item.para}
   </Typography>
  </div>
)
            })}
          </div>
          </div>
          <div ref={section2ImageRef}>
 <img src={ServiceData_Page2.img2} alt="" 
          className="w-full sm:w-1/2"/>
          </div>
          </div>
            <div className="w-full flex justify-between items-center
          pr-4 sm:pr-10 py-10 sm:py-20 max-sm:flex-col max-sm:gap-8">
            <div ref={section3ImageRef}>
                   <img src={ServiceData_Page2.img3} alt="" 
          className="w-full sm:w-1/2"/>
            </div>
          <div 
          ref={section3TextRef}
          className="
          w-full sm:w-[40%] flex flex-col justify-center items-center sm:items-start gap-8 
          pl-4 sm:pr-20">
            <Typography variant="service2Heading"
            >
              {ServiceData_Page2.heading3}
            </Typography>
             <Typography variant="longPara"
          className="text-[#00144F]!">
           {ServiceData_Page2.para3}
          </Typography>
          <div 
          ref={section3CardsRef} 
          className="flex flex-col gap-4">
            {ServiceData_Page2.points3.map((item)=>{
return(
  <div className="w-full rounded-2xl p-4 bg-[#00144F]">
   <Typography variant="longParaLex">
    <span className="font-bold!">{item.heading}{' '}</span>{item.para}
   </Typography>
  </div>
)
            })}
          </div>
          </div>
          </div>
           <div 
           ref={service2BannerRef}
           className="-mt-16 max-sm:py-10 pb-28 pt-52">
 <Banner variant="variantfour" dataKey="service2" 
 className="h-fit!"/>
         </div>
       </div>
    </Layout>
  )
}

export default Service_2