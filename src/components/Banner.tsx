import React from "react";
import Typography from "./Typography";
import Button from "./Button";
import { bannercontent } from "../constant/banner";



// banner1
const BannerVariantOne: React.FC<VariantProps> = ({ dataKey }) => {
  const data = bannercontent[dataKey];
  return (
    <>
      <div>
        <div className='bg-red-800 h-screen w-full flex items-center justify-center'>
          <div className='w-[90%] sm:w-[70%] bg-[#F5AF1B] flex flex-col sm:flex-row gap-10 sm:gap-0 pt-10 sm:pt-0 items-stretch rounded-xl sm:rounded-4xl '>
            <div className='w-full sm:w-1/2 flex flex-col items-center justify-center gap-4 mr-0 sm:-mr-32 ml-0 sm:ml-24'>
              <Typography
                variant='heading'
                className='text-center font-medium font-Alex text-[#00144F]!'>
                {data.heading}
              </Typography>


          {/* ✅ OPTIONAL PARAGRAPH */}
          {data.paragraph && (
            <Typography variant="longPara" className="text-center text-[#00144F]! font-kr text-lg!">
              {data.paragraph}
            </Typography>
          )}

              <Button variant='darkCalendar' text={data.buttontext} />
            </div>
            <div className='w-full sm:w-1/2 h-auto mx:start'>
              <img className='w-full h-full' src={data.img} alt='' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// banner2
const BannerVariantTwo: React.FC<VariantProps> = ({ dataKey }) => {
  const data = bannercontent[dataKey];
  return (
    <>
      <div>
        <div className='bg-red-800 h-screen w-full flex items-center justify-center'>
          <div className='w-[90%] sm:w-[70%] bg-[#F5AF1B] flex flex-col-reverse sm:flex-row sm:gap-0 pt-10 sm:pt-0 items-stretch rounded-xl sm:rounded-4xl '>
            <div className="w-full sm:w-1/2 h-auto mx:start relative "><img className="sm:absolute w-[90%] bottom-0 left-10" src={data.img} alt="" /></div>
            <div className='w-full sm:w-1/2 flex flex-col items-center justify-center gap-4 py-0 sm:py-10  mr-0 sm:mr-20'>
              <Typography
                variant='heading'
                className='text-center font-medium font-Alex text-[#00144F]!'>
                {data.heading}
              </Typography>
              
          {/* ✅ OPTIONAL PARAGRAPH */}
          {data.paragraph && (
            <Typography variant="longPara" className="text-center text-[#00144F]! font-kr text-lg! px-4 sm:px-0">
              {data.paragraph}
            </Typography>
          )}


              <Button variant='darkCalendar' text={data.buttontext} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};





// banner3
const BannerVariantThree: React.FC<VariantProps> = ({ dataKey }) => {
  const data = bannercontent[dataKey];
  return (
    <>
      <div>
        <div className='bg-red-800 h-screen w-full flex items-center justify-center'>
          <div className='w-[90%] sm:w-[70%] bg-[#00144F] flex flex-col sm:flex-row gap-10 sm:gap-0 pt-10 sm:pt-0 items-stretch rounded-xl sm:rounded-4xl '>
            <div className='w-full sm:w-1/2 flex flex-col items-center justify-center gap-4 mr-0 sm:-mr-32 ml-0 sm:ml-24'>
              <Typography
                variant='heading'
                className='text-center font-medium font-Alex text-[#F5AF1B]!'>
                {data.heading}
              </Typography>
              <Button variant='yellowPhone' text={data.buttontext} />
            </div>
            <div className='w-full sm:w-1/2 h-auto mx:start'>
              <img className='w-full h-full' src={data.img} alt='' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


// banner4
const BannerVariantFour: React.FC<VariantProps> = ({ dataKey }) => {
  const data = bannercontent[dataKey];
  return (
    <>
      <div>
        <div className='bg-red-800 h-screen w-full flex items-center justify-center'>
          <div className='w-[90%] sm:w-[70%] bg-[#00144F] flex flex-col-reverse sm:flex-row sm:gap-0 pt-10 sm:pt-0 items-stretch rounded-xl sm:rounded-4xl '>
            <div className="w-full sm:w-1/2 h-auto mx:start relative "><img className="w-full sm:absolute -mb-8 sm:mb-0 -bottom-14 left-10" src={data.img} alt="" /></div>
            <div className='w-full sm:w-1/2 flex flex-col items-center justify-center gap-4 py-0 sm:py-8  mr-0 sm:mr-20'>
              <Typography
                variant='heading'
                className='text-center font-medium font-Alex text-[#F5AF1B]!'>
                {data.heading}
              </Typography>
              
          {/* ✅ OPTIONAL PARAGRAPH */}
          {data.paragraph && (
            <Typography variant="longPara" className="text-center font-medium font-Alex text-[#F5AF1B]!">
              {data.paragraph}
            </Typography>
          )}


              <Button variant='yellowPhone' text={data.buttontext} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


// banner5
const BannerVariantFive: React.FC<VariantProps> = ({ dataKey ,imgwidth}) => {
  const data = bannercontent[dataKey];
  return (
    <>
      <div>
        <div className='bg-red-800 h-screen w-full flex items-center justify-center'>
          <div className='w-[90%] sm:w-[70%] bg-[#00144F] flex flex-col-reverse sm:flex-row sm:gap-0 pt-10 sm:pt-0 items-stretch rounded-xl sm:rounded-4xl overflow-hidden sm:overflow-visible '>
            <div className="w-full sm:w-1/2 h-auto mx:start relative "><img className={`sm:absolute bottom-0 left-10 ${imgwidth ?? "w-[90%]"}`} src={data.img} alt="" /></div>
            <div className='w-full sm:w-1/2 flex flex-col items-center justify-center gap-4 py-0 sm:py-14  mr-0 sm:mr-20'>
              <Typography
                variant='heading'
                className='text-center font-medium font-Alex text-[#F5AF1B]!'>
                {data.heading}
              </Typography>
              
          {/* ✅ OPTIONAL PARAGRAPH */}
          {data.paragraph && (
            <Typography variant="longPara" className="text-center px-4 text-[#00144F]! font-kr text-lg!">
              {data.paragraph}
            </Typography>
          )}


              <Button variant='yellowPhone' text={data.buttontext} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


const BannerVariantSix: React.FC<VariantProps> = ({ dataKey }) => {
  const data = bannercontent[dataKey];
  return (
    <>
      <div>
        <div className='bg-red-800 h-screen w-full flex items-center justify-center'>
          <div className='w-[90%] sm:w-[70%] bg-[#F5AF1B] flex flex-col-reverse sm:flex-row sm:gap-0 pt-10 sm:pt-0 items-stretch rounded-xl sm:rounded-4xl '>
            <div className="w-full sm:w-1/2 h-auto mx:start relative "><img className="sm:absolute w-[90%] bottom-0 left-10" src={data.img} alt="" /></div>
            <div className='w-full sm:w-1/2 flex flex-col items-center justify-center gap-4 py-0 sm:py-14  mr-0 sm:mr-20'>
              <Typography
                variant='heading'
                className='text-center font-medium font-Alex text-[#00144F]! whitespace-nowrap'>
                {data.heading}
              </Typography>
              
          {/* ✅ OPTIONAL PARAGRAPH */}
          {data.paragraph && (
            <Typography variant="longPara" className="text-center px-1 text-[#00144F]! font-kr text-lg!">
              {data.paragraph}
            </Typography>
          )}


              <Button variant='darkCalendar' text={data.buttontext} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



type BannerVariant = "variantOne" | "variantTwo" |"variantthree" |"variantfour" |"variantfive" |"variantsix";
type BannerKey = keyof typeof bannercontent;

interface VariantProps {
  dataKey: BannerKey;
  imgwidth?:string,
}

interface BannerProps {
  variant: BannerVariant;
  dataKey: BannerKey;  
  imgwidth?:string,
}


const Banner: React.FC<BannerProps> = ({ variant,dataKey,imgwidth  }) => {
  switch (variant) {
    case "variantOne":
      return <BannerVariantOne dataKey={dataKey} />;

    case "variantTwo":
      return <BannerVariantTwo dataKey={dataKey} />;

    case "variantthree":
    return <BannerVariantThree dataKey={dataKey} />;
    case "variantfour":
    return <BannerVariantFour dataKey={dataKey} />;
    case "variantfive":
    return <BannerVariantFive dataKey={dataKey} imgwidth={imgwidth}/>;
      
    case "variantsix":
    return <BannerVariantSix dataKey={dataKey} />;
      
    default:
      return null;
  }
};

export default Banner;
