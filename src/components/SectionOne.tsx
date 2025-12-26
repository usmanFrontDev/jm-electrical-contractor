import flash from "../assets/svg/flash.svg";
import Typography from "./Typography";
import Button from "./Button";

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
  return (
    <div
      className={`relative w-full min-h-screen bg-[#050046]
      flex flex-col gap-6
      px-4 sm:px-40 pt-28 pb-72
      ${isNormalPage ? "items-start sm:pt-60" : "items-center sm:pt-60"}`}
      style={{
        backgroundImage: `url(${pageData?.bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* CENTER PAGES */}
      {isCenterPage ? (
        <Typography variant="bigHeading" className="mt-16">
          {pageData.bigHeading}
        </Typography>
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
              <div className="flex items-center gap-2 -mb-2">
                <img src={flash} alt="flash" className="w-4 sm:w-6" />
                <Typography variant="shortShort">
                  {pageData.topPara}
                </Typography>
              </div>
            )}

            {/* HEADING */}
            <Typography
              variant="heading"
              className={isNormalPage ? "text-start" : "text-center"}
            >
              {pageData.heading}
            </Typography>

            {/* PARA */}
            <div className={isNormalPage ? "sm:w-[65%]" : "sm:w-[80%]"}>
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

          {/* CTA BUTTONS */}
          <div className="flex gap-6 max-sm:flex-col">
            <Button variant="yellowSolid" text="Book an Appointment" />
            <Button variant="whitePhone" text="Call for Emergency" />
          </div>
        </>
      )}
 <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-[#F5AF1B]
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

    </div>
  );
};

export default SectionOne;
