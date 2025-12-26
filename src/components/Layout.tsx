import type { ReactNode } from "react";
import flash from "../assets/svg/flash.svg";
import Typography from "./Typography";
import Button from "./Button";
import { firstPageContent } from "../constant/Layout";

type LayoutProps = {
  variant:
    | "home"
    | "about"
    | "whyus"
    | "service_1"
    | "service_2"
    | "service_3"
    | "service_4"
    | "service_5"
    | "service_6"
    | "gallery"
    | "blog"
    | "faqs";
  children: ReactNode;
};

const Layout = ({ variant, children }: LayoutProps) => {
  const combineStyleVariant1 = ["home", "about", "whyus"];
  const combineStyleVariant2 = [
    "service_1",
    "service_2",
    "service_3",
    "service_4",
    "service_5",
    "service_6",
  ];
  const combineStyleVariant3 = ["gallery", "blog", "faqs"];

  const isNormalPage = combineStyleVariant1.includes(variant);
  const isServicePage = combineStyleVariant2.includes(variant);
  const isCenterPage = combineStyleVariant3.includes(variant);

  const pageData = firstPageContent[variant];

  return (
    <div className='w-full h-full overflow-hidden'>
      {/* FIRST PAGE */}
      <div
        className={`w-full min-h-screen bg-[#050046]
      flex flex-col justify-star gap-6
      px-4 sm:px-40 pt-28 pb-72
       ${isNormalPage ? "  items-start sm:pt-40" : " items-center sm:pt-52"}
      `}
        style={{
          backgroundImage: `url(${pageData?.bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        {isCenterPage ? (
          <Typography variant='bigHeading' className='mt-16'>
            {"bigHeading" in pageData && pageData.bigHeading}
          </Typography>
        ) : (
          <>
            <div
              className={`flex flex-col justify-start 
       w-full gap-6 ${
         isNormalPage
           ? " sm:w-[60%] items-start"
           : isServicePage
           ? "sm:w-[70%] items-center"
           : "full items-center"
       }`}>
              {isNormalPage && "topPara" in pageData && (
                <div
                  className='max-sm:w-full flex justify-center sm:justify-start items-center gap-2
           -mb-2'>
                  <img src={flash} alt='' className='w-4 sm:w-6' />
                  <Typography variant='shortShort'>
                    {pageData.topPara}
                  </Typography>
                </div>
              )}
              <Typography
                variant='heading'
                className={`${isNormalPage ? "text-start" : "text-center"}`}>
                {"heading" in pageData && pageData.heading}
              </Typography>
              <div
                className={`w-full  ${
                  isNormalPage ? "sm:w-[65%]" : " sm:w-[80%]"
                }`}>
                <Typography
                  variant='longPara'
                  className={`${
                    isNormalPage ? "text-start" : "text-center sm:!text-base"
                  }`}>
                  {"para" in pageData && pageData.para}
                </Typography>
              </div>
            </div>
            <div
              className='flex justify-start items-center gap-6
         max-sm:flex-col'>
              <Button variant='yellowSolid' text='Book an Appointment'></Button>
              <Button variant='whitePhone' text='Call for Emergency'></Button>
            </div>
          </>
        )}
      </div>
      <>{children}</>
      {/* FOOTER */}
      <div></div>
    </div>
  );
};

export default Layout;
