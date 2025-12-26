import Button from "./Button";
import icon from "../assets/svg/footerlogo.svg";
import loaction from "../assets/svg/locationicon.svg";
import clock from "../assets/svg/footerclock.svg";
import flash from "../assets/svg/footerflash.svg";

type Props = {};

const Footer = ({}: Props) => {
  return (
    <>
      <div className=' w-full bg-[#ffead3] px-4 sm:px-20 pt-28 pb-0 sm:py-20'>
        {/* footertop */}
        <div className="flex flex-col sm:flex-row items-stretch justify-between">
            {/* footerleft */}
          <div className='w-full sm:w-1/2 flex flex-col justify-between pb-5'>
            <img className='w-[40%] sm:w-[50%] pb-5 sm:pb-0 mx-auto sm:mx-0' src={icon} alt='' />
            <div className='flex flex-col gap-3 sm:gap-7'>
              <h1 className='font-noto text-xl sm:text-5xl font-bold text-[#00144F] w-full sm:w-[83%] leading-none sm:leading-[1.2] text-center sm:text-start'>
                Call us or fill out the form below for a free estimate.
              </h1>
              <div className='flex flex-col sm:gap-3 items-center sm:items-start'>
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
              <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 items-center'>
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
            <form
              action=''
              className='bg-[#00144F] text-[#F6F6F6] rounded-xl sm:rounded-4xl w-full sm:w-[80%] h-full px-5 sm:px-10 flex flex-col items-center justify-start gap-3 py-10'>
              <h1 className='text-center font-Int text-xl sm:text-3xl w-full sm:w-[95%] pb-5'>
                Contact
                <span className='font-bold'>
                  JEMI Electrical Contractor Inc.
                </span>
              </h1>
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
              <Button
                variant='yellowSolid'
                text='Schedule a Service'
                className='px-10! '
              />
            </form>
          </div>
        </div>
        {/* footerbottom */}
        <div className="w-full py-4 mt-10 font-Alex flex flex-col sm:flex-row text-sm justify-between px-0 sm:px-10">
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
