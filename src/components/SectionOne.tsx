import flash from "../assets/svg/flash.svg";
import Typography from "./Typography";
import Button from "./Button";
import { useSlideFromLeft, useSlideFromRight, useScrollFadeIn } from "../hooks/useGSAPAnimations";

type PageData = {
  bg?: string;
  topPara?: string;
  heading?: string;
  para?: string;
  bigHeading?: string;
};

type SectionOneProps = {
  pageData: PageData;
  isNormalPage: boolean;
  isServicePage: boolean;
  isCenterPage: boolean;
};

const SectionOne = ({
  pageData,
  isNormalPage,
  isServicePage,
  isCenterPage,
}: SectionOneProps) => {
  
  // Animation refs
  const headingRef = useSlideFromLeft(0.2, 120);
  const paraRef = useScrollFadeIn(0.4);
  const buttonsRef = useSlideFromRight(0.6, 120);
  const topParaRef = useScrollFadeIn(0.1);
  const centerHeadingRef = useScrollFadeIn(0.3);

  return (
    <div
      className={`relative w-full  bg-[#050046]
      flex flex-col gap-6
      px-4 sm:px-40 pt-36 pb-24 sm:pb-72
      ${isNormalPage ? "items-start sm:pt-60" : "items-center sm:pt-60"}
      ${isCenterPage ? "min-h-screen sm:min-h-screen" : "min-h-fit sm:min-h-screen"}
      `}
      style={{
        backgroundImage: `url(${pageData?.bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* CENTER PAGES */}
      {isCenterPage ? (
        <div ref={centerHeadingRef}>
          <Typography variant="bigHeading" className="mt-16">
            {pageData.bigHeading}
          </Typography>
        </div>
      ) : (
        <>
          {/* TEXT BLOCK */}
          <div
            className={`flex flex-col gap-6 w-full ${
              isNormalPage
                ? "sm:w-[60%] items-start"
                : isServicePage
                ? "sm:w-[70%] items-center"
                : "items-center"
            }`}
          >
            {/* TOP PARA */}
            {isNormalPage && pageData.topPara && (
              <div 
                ref={topParaRef}
                className="flex items-center gap-2 -mb-2 
                max-sm:w-full max-sm:justify-center"
              >
                <img src={flash} alt="flash" className="w-4 sm:w-6" />
                <Typography variant="shortShort">
                  {pageData.topPara}
                </Typography>
              </div>
            )}

            {/* HEADING - Slides from LEFT */}
            <div ref={headingRef}>
              <Typography
                variant="heading"
                className={isNormalPage ? "text-start" : "text-center"}
              >
                {pageData.heading}
              </Typography>
            </div>

            {/* PARA - Fades in */}
            <div 
              ref={paraRef}
              className={isNormalPage ? "sm:w-[65%]" : "sm:w-[80%]"}
            >
              <Typography
                variant="longPara"
                className={
                  isNormalPage
                    ? "text-start"
                    : "text-center sm:!text-base"
                }
              >
                {pageData.para}
              </Typography>
            </div>
          </div>

          {/* CTA BUTTONS - Slide from RIGHT */}
          <div 
            ref={buttonsRef}
            className="flex gap-6 max-sm:flex-col 
            max-sm:w-full max-sm:items-center max-sm:mt-4"
          >
            <Button variant="yellowSolid" text="Book an Appointment" />
            <Button variant="whitePhone" text="Call for Emergency" />
          </div>
        </>
      )}
      
      {/* Marquee stays static - no animation needed */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-[#F5AF1B]
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
    </div>
  );
};

export default SectionOne;