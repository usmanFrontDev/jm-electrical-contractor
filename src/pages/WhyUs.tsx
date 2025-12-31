
import Button from "../components/Button"
import Layout from "../components/Layout"
import Typography from "../components/Typography"
import { whyUsPageDate } from "../constant/whyUsPageConstant"
import bannerByMe from "../assets/img/bannerByme.png"
import Banner from "../components/Banner"
import { useScaleClipPath, useScrollFadeIn, useSlideFromLeft, useSlideFromRight, useStaggerAnimation, useTextReveal } from "../hooks/useGSAPAnimations"

const WhyUs = () => {

const back = {
  backgroundImage: `url(${whyUsPageDate.bgImage2})`,
  backgroundSize: "cover",
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
};



// Section 2: Top dark box
  const topHeadingRef = useTextReveal(0.2);
  const topParaRef = useScrollFadeIn(0.4);
  const topButtonsRef = useSlideFromRight(0.6, 100);
  const featureBoxesRef = useStaggerAnimation(0.25);
  const bottomBgImageRef = useScrollFadeIn(0.3);

  // Section 3: Second background
  const section3ChipRef = useSlideFromLeft(0.1, 80);
  const section3HeadingRef = useTextReveal(0.3);
  const section3ParaRef = useScrollFadeIn(0.5);
  const section3ButtonsRef = useSlideFromRight(0.7, 100);
  const bannerVariantTwoRef = useScaleClipPath(0.4);
  const freeEstimatesTextRef = useSlideFromLeft(0.3, 100);
  const freeEstimatesImageRef = useScaleClipPath(0.5);



  return (
    <Layout variant='whyus'>
       <div className="w-full min-h-fit sm:min-h-screen relative mt-0 sm:mt-20
      pt-10 sm:pt-20">
      <div className="px-2 sm:px-20 py-4">
          <div className="flex flex-col justify-start items-center gap-10
         sm:rounded-t-4xl max-sm:rounded-2xl bg-[#00144F] p-4 sm:p-16 sm:pb-52">
           <div className="w-full sm:w-1/2 flex flex-col justify-start items-center text-center
           gap-10">
            <Typography
            ref={topHeadingRef}
            variant="normalHeading3" className="text-[#ffffff]">
              {whyUsPageDate.heading}
            </Typography>
             <Typography
             ref={topParaRef} 
             variant="normalTextLex" className="w-full sm:w-[60%]">
              {whyUsPageDate.para}
            </Typography></div>
             <div 
              ref={topButtonsRef}
             className="flex gap-6 max-sm:flex-col
             max-sm:items-center">
            <Button variant="yellowSolid" text="Book an Appointment" />
            <Button variant="whitePhone" text="Call for Emergency" />
          </div>
           <div 
           ref={featureBoxesRef}
           className="flex justify-between items-center
           mt-4 sm:mt-12 max-sm:flex-col max-sm:gap-4">
          {whyUsPageDate.boxes.map((item)=>{
            return(
  <div className="w-full sm:w-[30%] flex flex-col items-start gap-10
             px-6 p-6 h-fit sm:h-[50dvh] bg-[#00144F]/10 rounded-3xl
            backdrop-blur-lg border-white/80 border ">
               <Typography variant="normalHeading2"
               className="text-[#F5AF1B]!">
               {item.heading}
              </Typography>
               <Typography variant="longPara2">
               {item.para}
              </Typography>
            </div>
            )
          })}
        </div>
        </div>
      </div>
        <div
         ref={bottomBgImageRef}
        className="w-full mt-[-34rem] max-sm:hidden">
          <img src={whyUsPageDate.bgImage} alt="" />
        </div>
       </div>
       <div 
       className="w-full min-h-screen relative pt-20 sm:pt-32 pb-10 px-0 sm:px-10
       flex flex-col justify-start items-center"
       style={back}>

<div className="absolute top-0 left-0 w-full overflow-hidden bg-[#F5AF1B]
 py-2 sm:py-4">
  <div className="flex gap-20 whitespace-nowrap marqueAnimation">
    {Array.from({ length: 8 }).map((_, i) => (
      <h1
        key={i}
        className="text-[#00144F] font-kr text-base sm:text-xl font-bold tracking-wide"
      >
        Free Estimates • Licensed & Insured
      </h1>
    ))}
  </div>
</div>


      <div className=" flex flex-col justify-center items-center
      text-center px-4 sm:px-20 gap-8">
         <Typography 
         ref={section3ChipRef}
         variant="NotoKrPara"
         className="w-full sm:w-1/2">
        {whyUsPageDate.heading2Small}
       </Typography>
        <Typography
        ref={section3HeadingRef}
        variant="normalHeading3"
        className="text-[#ffffff] leading-7 sm:leading-14 w-full sm:w-1/2">
        {whyUsPageDate.heading2}
       </Typography>
        <Typography
        ref={section3ParaRef}
        variant="normalTextLex"
        className="text-[#ffffff] leading-6 w-full sm:w-[35%]">
        {whyUsPageDate.para2}
       </Typography>
        <div className="flex gap-6 max-sm:flex-col max-sm:items-center"
        ref={section3ButtonsRef}>
            <Button variant="whiteSolid" text="Book an Appointment" />
            <Button variant="whitePhone" text="Call for Emergency" />
          </div>
      </div>
       <div className="w-full max-sm:pb-20 pt-10 flex flex-col justify-start items-center">
    <div className="w-full px-0 sm:px-32"
     ref={bannerVariantTwoRef}>
       <Banner variant="variantTwo" dataKey="whychoose"
       className="sm:w-full! sm:h-fit! py-20 mt-12" />
      <div className="w-full flex justify-between items-center
      rounded-4xl overflow-hidden bg-[#00144F] max-sm:hidden">
        <div 
         ref={freeEstimatesTextRef}
        className="w-[60%] flex flex-col justify-center items-center
        gap-10">
      <Typography variant="alexHeading">
Free Estimates
      </Typography>
      <Typography variant="longPara3" className="text-center
      text-white/80">
        We don’t charge for project estimates. Get a fast, honest, <br />
         and commitment-free quote tailored to your needs.
      </Typography>
        </div>
        <div 
        ref={freeEstimatesImageRef} 
        className="w-[40%]">
          <img src={bannerByMe} alt=""
          className="w-full object-cover" />
        </div>
      </div>
    </div>
       </div>
       </div>
    </Layout>
  )
}

export default WhyUs