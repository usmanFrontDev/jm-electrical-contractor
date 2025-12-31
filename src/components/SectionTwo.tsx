import { useState } from "react";
import Chip from "./Chips";
import Typography from "./Typography";
import Button from "./Button";
import crossIcon from '../assets/svg/crossIcon.svg';
import plusIcon from '../assets/svg/plusIcon.svg';
import { 
  useSlideFromLeft, 
  useSlideFromRight, 
  useScaleClipPath,
  useStaggerAnimation,
  useFadeScaleCard,
  useScrollFadeIn 
} from "../hooks/useGSAPAnimations";

export type PageDataSectionTwo = {
  bgImage?: string;
  bgImage2?: string;
  chip?: string;
  heading?: string;
  para?: string;
  btnText?: string;
  btnVariant?: string;
  images?: string[];
  simpleCards?: any[];
  imgCards?: any[];
  heading1?: string;
  heading2: string;
  chip_1?: string;
  chip_2?: string;
  list?: { number: string; heading: string; para: string }[];
  layout?: string;
};

type SectionTwoProps = {
  pageData: PageDataSectionTwo;
  variant: string;
};

const SectionTwo = ({ pageData, variant }: SectionTwoProps) => {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<string | null>('');

  // Animation refs
  const textContentRef = useSlideFromLeft(0.2, 100);
  const imageRef = useScaleClipPath(0.3);
  const galleryRef = useStaggerAnimation(0.15);
  const cardsRef = useStaggerAnimation(0.2);
  const faqsRef = useStaggerAnimation(0.15);
  const headingRef = useScrollFadeIn(0.1);

  // Layout detection
  const isServicePage = variant.startsWith("service");
  const hasChip = !!pageData.chip;
  const hasCTA = !!pageData.btnText;
  const hasGallery = !!pageData.images;
  const hasSimpleCards = !!pageData.simpleCards;
  const hasImgCards = !!pageData.imgCards;
  const hasFaqs = !!pageData.list;
  const isTwoColumn = pageData.layout === "twoColumn";
  const secondCommon = ["about", "whyus"].includes(variant);

  return (
    <section
      className={`w-full min-h-screen p-4 sm:p-10
        ${secondCommon && "p-4 sm:pr-0"}`}
    >
      {/* HOME & SERVICE PAGE LAYOUT */}
      {(variant === "home" || isServicePage) && (
        <div className="relative min-h-fit sm:min-h-screen w-full">
          <div ref={imageRef}>
            <img
              src={pageData.bgImage}
              alt=""
              className="relative w-full h-full"
            />
          </div>
          <div
            className="w-full h-full relative sm:absolute top-0 left-0
              flex flex-col justify-start max-sm:items-center sm:justify-end items-end"
          >
            <div
              ref={textContentRef}
              className={`w-full sm:w-[43%] h-full 
                pt-10 sm:pt-[25rem] flex flex-col justify-start 
                items-center sm:items-start
                gap-8 ${isServicePage && "sm:pr-24"}`}
            >
              {pageData.chip && <Chip text={pageData.chip || "chip"} />}
              <Typography variant="heading" className="!text-[#00144F]">
                {pageData.heading}
              </Typography>
              <Typography
                variant="longPara"
                className="w-[85%] !text-[#00144F]"
              >
                {pageData.para}
              </Typography>
              {pageData.btnText && (
                <Button variant={pageData.btnVariant} text={pageData.btnText} />
              )}
            </div>
          </div>
        </div>
      )}

      {/* ABOUT & WHYUS LAYOUT */}
      {secondCommon && (
        <div
          className="relative h-fit sm:h-screen w-full
            flex max-sm:flex-col-reverse justify-between items-end sm:pl-10"
        >
          <div
            ref={textContentRef}
            className="w-full sm:w-[35%]
              flex flex-col justify-start items-center sm:items-start gap-5
              max-sm:py-4"
          >
            {pageData.chip && <Chip text={pageData.chip || "chip"} />}
            <Typography variant="heading" className="!text-[#00144F]">
              {pageData.heading}
            </Typography>
            <Typography variant="longPara" className="w-full sm:w-[90%] sm:w-[70%] !text-[#00144F]">
              {pageData.para}
            </Typography>
            {pageData.btnText && (
              <Button text={pageData.btnText} variant={pageData.btnVariant} />
            )}
          </div>
          <div 
            ref={imageRef}
            className="w-full sm:w-[60%] h-full relative flex justify-center items-center"
          >
            {variant === "about" ? (
              <>
                <div
                  className="absolute bottom-0 left-0
                    w-full h-[85%] bg-[#F5AF1B] rounded-l-full"
                ></div>
                <div className="w-full sm:w-[90%] h-[60dvh] sm:h-auto relative">
                  <div
                    className="w-[88%] sm:w-[70%] h-auto absolute 
                      top-1/2 right-0 sm:left-1/2 sm:-translate-x-1/2 -translate-y-1/2"
                  >
                    <img src={pageData.bgImage} alt="" className="w-full sm:w-[90%]" />
                  </div>
                  <div
                    className="w-[72%] sm:w-[70%] h-auto bottom-4 sm:top-[20%] left-26 sm:left-[30%] absolute 
                      -translate-x-1/2"
                  >
                    <img src={pageData.bgImage2} alt="" className="w-[60%]" />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="relative w-full h-full">
                  <img
                    src={pageData.bgImage}
                    alt=""
                    className="w-full h-full"
                  />
                  <img
                    src={pageData.bgImage2}
                    alt=""
                    className="w-[32%] sm:w-[45%] absolute bottom-4 sm:bottom-[-16%] -right-3 sm:right-10"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* GALLERY LAYOUT */}
      {variant === "gallery" && (
        <div
          ref={galleryRef}
          className="flex flex-row justify-between items-center flex-wrap
            p-1 max-sm:flex-col max-sm:gap-6"
        >
          {pageData.images?.map((item, idx) => {
            return (
              <div 
                key={idx}
                className="group w-full sm:w-[33%] 
                  h-[60dvh] sm:h-[85dvh] sm:p-4"
              >
                <div
                  className="w-full h-full rounded-4xl overflow-hidden
                    hover:shadow-2xl hover:translate-y-3 hover:scale-[0.92]
                    transition ease-in-out duration-200"
                >
                  <img
                    src={item}
                    alt=""
                    className="w-full h-full object-cover
                      group-hover:rotate-[12deg] group-hover:scale-[1.25]
                      transition ease-in-out duration-200"
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* BLOG LAYOUT */}
      {variant === "blog" && (
        <>
          <div>
            <div ref={headingRef}>
              <Typography variant="normalHeading" className="my-10">
                {pageData.heading1}
              </Typography>
            </div>
            <div 
              ref={cardsRef}
              className="flex justify-between items-center gap-8
                max-sm:flex-col"
            >
              {pageData.simpleCards?.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="w-full sm:w-1/2 flex flex-col justify-between
                      items-center sm:items-start
                      bg-[#00144F] p-6 sm:p-8 gap-10 sm:gap-16"
                  >
                    <div className="w-full flex justify-center sm:justify-end items-center gap-3">
                      <div
                        className="px-3 py-1 font-Inter font-medium
                          text-xs sm:text-sm text-white bg-white/10 rounded-xl"
                      >
                        {item.chip_1}
                      </div>
                      <div
                        className="px-3 py-1 font-Inter font-medium
                          text-xs sm:text-sm text-white bg-white/10 rounded-xl"
                      >
                        {item.chip_2}
                      </div>
                    </div>
                    <div
                      className="flex flex-col justify-start items-center sm:items-start
                        w-full sm:w-[65%] gap-4 sm:gap-6"
                    >
                      <Typography variant="longPara">{item.date}</Typography>
                      <Typography variant="normalBoldText" className="max-sm:leading-5">
                        {item.heading}
                      </Typography>
                      <Typography variant="longPara2">{item.para}</Typography>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div ref={headingRef}>
              <Typography variant="normalHeading" className="mb-10 mt-20">
                {pageData.heading2}
              </Typography>
            </div>
            <div 
              ref={cardsRef}
              className="w-full flex justify-between flex-wrap
                max-sm:flex-col max-sm:gap-6"
            >
              {pageData.imgCards?.map((item, idx) => {
                return (
                  <div 
                    key={idx}
                    className={`group w-full sm:w-[24%] shrink-0 rounded-lg overflow-hidden
                      hover:scale-[0.92] hover:shadow-2xl 
                      transition ease-linear duration-200 bg-white
                      ${idx > 3 && 'sm:mt-10'}`}
                  >
                    <div className="w-full h-[40dvh]">
                      <img 
                        src={item.img} 
                        alt="" 
                        className="w-full h-full object-cover
                          group-hover:scale-[1.2] transition ease-linear duration-200"
                      />
                    </div>
                    <div className="flex flex-col justify-start items-start
                      gap-4 p-4 mt-4">
                      <Typography variant="verySmall">{item.date}</Typography>
                      <Typography variant="normalBoldText2"
                        className="!text-[#00144F]">{item.heading}</Typography>
                      <Typography variant="verySmall"
                        className="!text-[#00144F]">{item.param}</Typography>
                      <div className="w-full flex gap-4 items-center 
                        pt-3 border-t border-[#E5E5E5]">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <img src={item.avatar} alt="" 
                            className="w-full h-full object-cover"/>
                        </div>
                        <div className="flex flex-col">
                          <Typography variant="verySmall" className="!font-bold">
                            {item.name}
                          </Typography>
                          <Typography variant="verySmall">
                            {item.role}
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}

      {/* FAQS LAYOUT */}
      {variant === "faqs" && (
        <div 
          ref={faqsRef}
          className="w-full flex flex-col justify-start items-center
            py-4 px-6 max-sm:gap-4"
        >
          {pageData.list?.map((faq) => {
            return (
              <div 
                key={faq.number}
                className="w-full sm:w-[88%] flex justify-between items-start
                  gap-8 bg-white hover:bg-[#EEEEEE] px-5 sm:px-8 py-4 sm:py-12
                  transition-all duration-300 ease-in-out
                  max-sm:flex-col-reverse max-sm:border max-sm:border-[#00000]
                  max-sm:rounded-3xl"
              >
                <div className="flex justify-start items-start gap-10 max-sm:flex-col">
                  <h2 className="font-Int text-3xl sm:text-5xl font-bold 
                    text-[#E8AC2B]">{faq.number}</h2>
                  <div>
                    <Typography variant="faqsTextHeading" className="break-all">
                      {faq.heading}
                    </Typography>

                    <Typography
                      variant="faqsTextPara"
                      className={`
                        break-all mt-6 overflow-hidden
                        transition-all duration-300 ease-in-out
                        ${isOpen === faq.number ? "max-h-[500px]" : "max-h-0"}
                      `}
                    >
                      {faq.para}
                    </Typography>
                  </div>
                </div>

                {isOpen && faq.number === isOpen ? 
                  <button
                    className="shrink-0 w-8 sm:w-12 h-8 sm:h-12 bg-black flex justify-center items-center rounded-full
                      p-3 sm:p-4 cursor-pointer"
                    onClick={() => setIsOpen(null)}
                  >
                    <img src={crossIcon} alt="" className="w-full h-full"/>
                  </button>
                  :
                  <button
                    className="shrink-0 w-10 sm:w-12 h-10 sm:h-12 flex justify-center items-center rounded-full
                      p-3 sm:p-4 cursor-pointer"
                    onClick={() => setIsOpen(faq.number)}
                  >
                    <img src={plusIcon} alt="" className="w-full h-full"/>
                  </button>
                }
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default SectionTwo;