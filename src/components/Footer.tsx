import Button from "./Button";
import icon from "../assets/svg/footerlogo.svg";
import loaction from "../assets/svg/locationicon.svg";
import clock from "../assets/svg/footerclock.svg";
import flash from "../assets/svg/footerflash.svg";
import { useScaleClipPath, useScrollFadeIn, useSlideFromLeft, useSlideFromRight, useStaggerAnimation, useTextReveal } from "../hooks/useGSAPAnimations";

type footerProps = {
  variant: 'footer1' | 'footer2'
};

const Footer = ({
  variant
}: footerProps) => {




 const footerLogoRef = useScrollFadeIn(0.1);
  const footerHeadingRef = useSlideFromLeft(0.3, 80);
  const footerContactInfoRef = useStaggerAnimation(0.15);
  const footerButtonsRef = useSlideFromRight(0.5, 100);
  const formContainerRef = useScaleClipPath(0.4);
  const formTitleRef = useTextReveal(0.6);
  const formFieldsRef = useStaggerAnimation(0.1);
  const formSubmitButtonRef = useSlideFromRight(0.8, 60);
  const footerBottomRef = useScrollFadeIn(0.3);





  return (
    <>
      <div className='relative w-full bg-[#ffead3] px-4 sm:px-20 pt-24 sm:pt-48 pb-0 sm:pb-20'>

{/* marque */}
 {variant === "footer1" 
 ?
<div className="absolute top-0 left-0 w-full overflow-hidden bg-[#00144F]
 py-2 sm:py-4">
  <div className="flex gap-20 whitespace-nowrap marqueAnimation">
    {Array.from({ length: 8 }).map((_, i) => (
      <h1
        key={i}
        className="text-[#F5AF1B] font-kr text-base sm:text-xl font-bold tracking-wide"
      >
        Free Estimates • Licensed & Insured
      </h1>
    ))}
  </div>
</div>

 :
 <div className="absolute top-0 left-0 w-full overflow-hidden bg-[#F5AF1B]
 py-4">
  <div className="flex gap-20 whitespace-nowrap marqueAnimation">
    {Array.from({ length: 8 }).map((_, i) => (
      <h1
        key={i}
        className="text-[#00144F] font-kr text-xl font-bold tracking-wide"
      >
        Free Estimates • Licensed & Insured
      </h1>
    ))}
  </div>
</div>
 }

        {/* footertop */}
        <div className="flex flex-col sm:flex-row items-stretch justify-between">
            {/* footerleft */}
          <div className='w-full sm:w-1/2 flex flex-col justify-between pb-5'>
            <div ref={footerLogoRef}>
              <img className='w-[40%] sm:w-[50%] pb-5 sm:pb-0 mx-auto sm:mx-0' src={icon} alt='' />
            </div>
            <div className='flex flex-col gap-3 sm:gap-7'>
             <div ref={footerHeadingRef}>
               <h1 className='font-noto text-xl sm:text-5xl font-bold text-[#00144F] w-full sm:w-[83%] leading-none sm:leading-[1.2] text-center sm:text-start'>
                Call us or fill out the form below for a free estimate.
              </h1>
             </div>
              <div 
              ref={footerContactInfoRef}
              className='flex flex-col sm:gap-3 items-center sm:items-start'>
                <div className='flex items-center  gap-3 sm:w-full w-[80%]'>
                  <img className='w-5 sm:w-7' src={loaction} alt='' />
                  <p className='text-[#00144F] font-noto text-xs sm:text-base'>
                    Palo Alto, CA And surrounding Bay Area communities.
                  </p>
                </div>
                <div className='flex items-center  gap-3 sm:w-full w-[80%]'>
                  <img className='w-5 sm:w-7' src={clock} alt='' />
                  <p className='text-[#00144F] font-noto text-xs sm:text-base'>
                    Mon-Sat: 7:00 AM – 6:00 PM | Sunday: Emergency Only
                  </p>
                </div>
                <div className='flex items-center  gap-3 sm:w-full w-[80%]'>
                  <img className='w-5 sm:w-7' src={flash} alt='' />
                  <p className='text-[#00144F] font-noto text-xs sm:text-base'>
                    Available<strong> 24/7 for Emergencies</strong>
                  </p>
                </div>
              </div>
                {/* buttons */}
              <div
               ref={footerButtonsRef}
              className='flex flex-col sm:flex-row gap-2 sm:gap-4 items-center'>
                <Button
                  variant='yellowSolid'
                  text='Book an Appointment'
                  className='px-0 sm:px-7! font-medium! text-xs! w-fit!'
                />
                <Button
                  variant='bluephone'
                  text='Call for Emergency'
                  className='font-medium! text-xs! w-fit h-fit!'
                />
              </div>
            </div>
          </div>
          {/* footerright */}
          <div className='w-full sm:w-1/2 h-auto flex items-center justify-center'>
            <div  ref={formContainerRef}>
              <form
              action=''
              className='bg-[#00144F] text-[#F6F6F6] rounded-xl sm:rounded-4xl w-full sm:w-[80%] h-full px-5 sm:px-10 flex flex-col items-center justify-start gap-3 py-10'>
             <div ref={formTitleRef}>

               <h1 className='text-center font-Int text-xl sm:text-3xl w-full sm:w-[95%] pb-5'>
                Contact
                <span className='font-bold'>
                  JEMI Electrical Contractor Inc.
                </span>
              </h1>
             </div>
             <div ref={formFieldsRef} className="flex flex-col gap-3 w-full">
               <div className='w-full flex flex-col'>
                <label htmlFor='' className='font-Int font-normal text-xs pl-1 pb-0 sm:pb-1'>
                  Name
                </label>
                <input
                  type='text'
                  className='bg-white w-full rounded-lg py-1 text-[#00144F] px-3 font-medium'
                />
              </div>
              <div className='w-full flex flex-col'>
                <label htmlFor='' className='font-Int font-normal text-xs pl-1 pb-0 sm:pb-1'>
                  Phone
                </label>
                <input
                  type='text'
                  className='bg-white w-full rounded-lg py-1 text-[#00144F] px-3 font-medium'
                />
              </div>
              <div className='w-full flex flex-col'>
                <label htmlFor='' className='font-Int font-normal text-xs pl-1 pb-0 sm:pb-1'>
                  Email
                </label>
                <input
                  type='text'
                  className='bg-white w-full rounded-lg py-1 text-[#00144F] px-3 font-medium'
                />
              </div>
              <div className='w-full flex flex-col'>
                <label htmlFor='' className='font-Int font-normal text-xs pl-1 pb-0 sm:pb-1'>
                  Service Needed
                </label>
                <input
                  type='text'
                  className='bg-white w-full rounded-lg py-1 text-[#00144F] px-3 font-medium'
                />
              </div>
              <div className='w-full flex flex-col'>
                <label htmlFor='' className='font-Int font-normal text-xs pl-1 pb-0 sm:pb-1'>
                  Message
                </label>
                <input
                  type='text'
                  className='bg-white w-full rounded-lg h-32 text-black'
                />
              </div>
             </div>
             <div ref={formSubmitButtonRef}>
               <Button
                variant='yellowSolid'
                text='Schedule a Service'
                className='px-10! '
              />
             </div>
            </form>
            </div>
          </div>
        </div>
        {/* footerbottom */}
        <div 
        ref={footerBottomRef}
        className="w-full py-4 mt-10 font-Alex flex flex-col sm:flex-row text-sm justify-between px-0 sm:px-10">
            <h1 className="text-[#272F3C] text-xs sm:text-base">Privacy Policy | Your Privacy Choices</h1>
            <h1 className="text-[#272F3C] text-xs sm:text-base">© 2025 JEMI ELECTRICAL CONTRACTOR INC . All rights Reserved.</h1>
            <h1 className="text-[#F5AF1B] text-xs sm:text-base">Web Design</h1>
            <h1 className="text-[#272F3C] text-xs sm:text-base">By Latin Branding</h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
