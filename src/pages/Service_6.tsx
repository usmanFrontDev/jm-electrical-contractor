
import Banner from "../components/Banner"
import Layout from "../components/Layout"
import Typography from "../components/Typography"
import { ServiceData_Page6 } from "../constant/ServicePageConstant"
import { useScaleClipPath, useStaggerAnimation, useTextReveal } from "../hooks/useGSAPAnimations"

const Service_6 = () => {


const service6HeadingRef = useTextReveal(0.2);
const service6BoxesRef = useStaggerAnimation(0.25);
const service6BannerRef = useScaleClipPath(0.5);

  return (
    <Layout variant='service_6'>
       <div className="w-full min-h-screen">
        <Typography
        ref={service6HeadingRef}
        variant="heading"
        className="w-full sm:w-[54%] max-sm:px-4 text-[#00144F]! text-center mx-auto max-sm:-mt-8 my-0 sm:my-20">
          We provide comprehensive electrical solutions 
          for both residential and commercial clients.</Typography>
          <div 
          ref={service6BoxesRef }
          className="flex justify-between items-start
          px-8 py-4 max-sm:flex-col max-sm:gap-8">
           {ServiceData_Page6.boxes.map((item)=>{
            return(
               <div className="w-full sm:w-[31%] flex flex-col 
               items-center sm:items-start justify-start
               gap-8">
              <img src={item.img} alt="" />
             <div className="flex flex-col items-start justify-between
             px-2 sm:px-12 h-fit sm:h-72 max-sm:gap-4">
               <Typography variant="normalHeading2"
               className="text-[#F5AF1B]!">
               {item.heading}
              </Typography>
               <Typography variant="longPara"
               className="text-[#00144F]! border-b-2 sm:border-b-4 border-[#F5AF1B]
               pb-4 sm:pb-10">
               {item.para}
              </Typography>
             </div>
            </div>
            )
           })}
          </div>
      </div>
     <div
     ref={service6BannerRef}
     className="max-sm:py-10 sm:pb-20 sm:pt-60">
         <Banner variant="variantsix" dataKey="Common" 
         className="h-fit!"/> 
     </div>
    </Layout>
  )
}

export default Service_6