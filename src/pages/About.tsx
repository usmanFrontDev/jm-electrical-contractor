import Button from "../components/Button";
import Layout from "../components/Layout";
import Typography from "../components/Typography";
import { aboutPageData } from "../constant/aboutUsPageConstant.";
import { useParallax, useRotateFadeIn, useScaleClipPath, useScrollFadeIn, useSlideFromLeft, useSlideFromRight, useStaggerAnimation, useTextReveal } from "../hooks/useGSAPAnimations";

const About = () => {


  // Section 2: Images + Text
  const mainImageRef = useScaleClipPath(0.3);
  const secondImageRef = useRotateFadeIn(0.6);
  const aboutHeadingRef = useSlideFromRight(0.2, 100);
  const aboutParaRef = useScrollFadeIn(0.4);
  const aboutSubHeadingRef = useTextReveal(0.6);
  const aboutCardsRef = useStaggerAnimation(0.15);
  const aboutButtonRef = useSlideFromRight(0.8, 80);

  // Section 3: Dark Background
  const darkSectionHeadingRef = useTextReveal(0.2);
  const darkSectionParaRef = useScrollFadeIn(0.4);
  const whiteCardsRef = useStaggerAnimation(0.2);
  const bannerImageRef = useScaleClipPath(0.3);
  const bannerTextRef = useSlideFromRight(0.5, 120);
  const bottomSubheadingRef = useSlideFromLeft(0.1, 80);
  const bottomHeadingRef = useTextReveal(0.3);
  const bottomParaRef = useScrollFadeIn(0.5);
  const bottomButtonsRef = useSlideFromRight(0.7, 100);
  const bigHouseRef = useParallax(0.2);




  return (
    <Layout variant="about">
      <div
        className="w-full min-h-fit sm:min-h-screen flex justify-between items-center
       px-4 sm:p-10 py-2 sm:py-10 pb-8 sm:pb-40 max-sm:flex-col"
      >
        <div className="w-full sm:w-[55%] relative p-2 sm:p-10 flex justify-end items-center">
         <div ref={mainImageRef}>
           <img src={aboutPageData.img1} alt="" className="w-full sm:w-[80%] relative" />
         </div>
          <div ref={secondImageRef}>
            <img
            src={aboutPageData.img2}
            alt=""
            className="w-[75%] sm:w-[60%] absolute -bottom-44 sm:-bottom-20
            max-sm:-translate-x-1/2 left-1/2 sm:left-10"
          />
          </div>
        </div>
        <div className="w-full sm:w-[40%] max-sm:mt-52 
        sm:pr-20 gap-6 flex flex-col justify-center items-center
         sm:items-start">
          <Typography
           ref={aboutHeadingRef}
          variant="heading" className="text-[#00144F]!">
            {aboutPageData.heading}
          </Typography>
          <Typography
          ref={aboutParaRef}
           variant="longPara" className="text-[#00144F]!">
            {aboutPageData.para}
          </Typography>
          <Typography
          ref={aboutSubHeadingRef}
          variant="normalHeading2" className="text-[#00144F]!">
            {aboutPageData.subHeading}
          </Typography>
          <div
          className="flex justify-start sm:gap-4 max-sm:flex-col">
            <div
               ref={aboutCardsRef}
              className="w-full sm:w-1/2
    flex flex-col justify-start items-center"
            >
              {aboutPageData.cards.slice(0, 2).map((item) => {
                return (
                  <div
                    className="w-full flex flex-col justify-start 
                    items-center sm:items-start p-4
          gap-3 pr-10 rounded-3xl bg-black/5 my-2"
                  >
                    <Typography variant="normalHeading4">
                      {item.heading}
                    </Typography>
                    <Typography
                      variant="longPara3"
                      className="text-[#00144F]! font-normal!"
                    >
                      {item.para}
                    </Typography>
                  </div>
                );
              })}
            </div>
            <div
               ref={aboutCardsRef}
              className="w-full sm:w-1/2
    flex flex-col justify-start items-center"
            >
              {aboutPageData.cards.slice(2, 4).map((item, idx) => {
                return (
                  <div
                    className={`w-full flex flex-col justify-start
                      items-center sm:items-start p-4
          gap-3 pr-10 rounded-3xl bg-black/5 my-2 ${idx === 1 && "pr-16"}`}
                  >
                    <Typography variant="normalHeading4">
                      {item.heading}
                    </Typography>
                    <Typography
                      variant="longPara3"
                      className="text-[#00144F]! font-normal!"
                    >
                      {item.para}
                    </Typography>
                  </div>
                );
              })}
            </div>
          </div>
          <div
          ref={aboutButtonRef}
          >
<Button variant="darkCalendar" text="Book an Appointment"></Button>
          </div>
        </div>
      </div>
      <div className="w-full min-h-fit sm:min-h-screen flex flex-col justify-start items-center
      bg-[#09112C] pt-5 sm:pt-20">
        <div
          className="w-full sm:w-[40%] text-center flex flex-col justify-start
          items-center gap-6 max-sm:px-4"
        >
          <Typography
          ref={darkSectionHeadingRef}
          variant="alexHeading">
            {aboutPageData.heading2}
          </Typography>
          <Typography
          ref={darkSectionParaRef}
          variant="longPara" className="w-full sm:w-[70%]">
            <span className="text-[#F5AF1B] font-semibold">
              {aboutPageData.paraPart1}
            </span>{" "}
            {aboutPageData.paraPart2}
          </Typography>
          <div
           ref={whiteCardsRef}
          className="w-full py-3 sm:py-5 flex justify-between items-start
          max-sm:flex-col max-sm:gap-4">
            {aboutPageData.cards2.map((item) => {
              return (
                <div
                  className="w-full sm:w-[30%] p-5 rounded-xl
                bg-[#ffffff] flex max-sm:justify-center text-center sm:text-start"
                >
                  <Typography variant="longPara" className="text-[#00144F]!">
                    {item}
                  </Typography>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full py-4 sm:py-10 px-4 sm:px-20">
          <div className="w-full relative">
            <div ref={bannerImageRef}>
<img
              src={aboutPageData.banner.bgImage}
              alt=""
              className="relative w-full max-sm:h-[60dvh]
              max-sm:object-cover"
            />
            </div>
            <div
            ref={bannerTextRef}
              className="w-full sm:w-1/2 absolute -translate-y-1/2 
  top-1/2 left-1/2 sm:right-5 max-sm:-translate-x-1/2 flex flex-col justify-center items-center
  gap-10"
            >
              <Typography variant="alexHeading"
              className="w-[70%] text-[#F5AF1B]!">
                {aboutPageData.banner.heading}
              </Typography>
              <Typography variant="longPara" className="w-[71%]">
                {aboutPageData.banner.para}
              </Typography>
            </div>
          </div>
        </div>
         <div className=" flex flex-col justify-center items-center
      text-center px-4 sm:px-20 gap-8 py-4 sm:py-10">
         <Typography
          ref={bottomSubheadingRef}
         variant="NotoKrPara"
         className="w-full sm:w-1/2">
        {aboutPageData.divText.subheading}
       </Typography>
        <Typography
        ref={bottomHeadingRef}
        variant="normalHeading3"
        className="text-[#ffffff] leading-none sm:leading-14 w-full! sm:w-1/2!">
        {aboutPageData.divText.heading}
       </Typography>
        <Typography
        ref={bottomParaRef}
        variant="normalTextLex"
        className="text-[#ffffff] leading-6 w-full! sm:w-[35%]!">
        {aboutPageData.divText.para}
       </Typography>
        <div
         ref={bottomButtonsRef}
        className="flex gap-6 max-sm:flex-col max-sm:items-center">
            <Button variant="yellowSolid" text="Book an Appointment" />
            <Button variant="whitePhone" text="Call for Emergency" />
          </div>
      </div>
      <div
      ref={bigHouseRef}
      className="w-full">
        <img src={aboutPageData.divText.bigHouse} alt="" 
        className="w-full"/>
      </div>
      </div>
    </Layout>
  );
};

export default About;
