
import Banner from "../components/Banner"
import Layout from "../components/Layout"
import Typography from "../components/Typography"
import { ServiceData_Page1 } from "../constant/ServicePageConstant"
import { useScaleClipPath, useStaggerAnimation, useTextReveal } from "../hooks/useGSAPAnimations"

const Service_1 = () => {

 const serviceHeadingRef = useTextReveal(0.2);
  const imageCardsRef = useStaggerAnimation(0.3);
  const service1BannerRef = useScaleClipPath(0.5);

  return (
    <Layout variant='service_1'>
       <div className="w-full min-h-fit sm:min-h-screen px-4">
         <Typography
         ref={serviceHeadingRef}
        variant="heading"
        className="w-full sm:w-[54%] text-[#00144F]! text-center mx-auto my-0 sm:my-20">
          We provide comprehensive electrical solutions 
          for both residential and commercial clients.</Typography>
          <div
          ref={imageCardsRef}
          className="flex justify-between items-center p-0 sm:p-10 max-sm:flex-col
          max-sm:gap-4">
            {ServiceData_Page1.boxes.map((item)=>{
              return(
<div className="w-full sm:w-[31%] h-fit rounded-2xl  sm:rounded-4xl relative">
  <img src={item.img} alt="" 
    className="w-full relative"/>
    <div className="max-sm:w-full absolute bottom-12
    max-sm:-translate-x-1/2
    left-1/2 sm:left-5
    flex flex-col justify-start items-center sm:items-start px-4 gap-6">
      <Typography variant="service2Heading"
               className="text-[#ffffff]!">
               {item.heading}
              </Typography>
                <Typography variant="longParaLex"
               className="text-[#ffffff]!">
               {item.para}
              </Typography>
    </div>

</div>
              )
            })}
      
          </div>
               <div 
               ref={service1BannerRef}
               className="w-full py-10">
                  <Banner variant="variantthree" dataKey="service1"
                 className=" sm:w-full! h-fit! sm:h-fit!" />
               </div>

       </div>
    </Layout>
  )
}

export default Service_1