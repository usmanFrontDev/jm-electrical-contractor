import React, { type HTMLAttributes, type ReactNode, forwardRef } from "react";
import clsx from "clsx";

// Variant names exactly as provided
export type TypographyVariant ="navLinks" | "shortShort" | "longPara" | "longPara2" | "heading" | "bigHeading" | "normalHeading" | "normalBoldText" | "verySmall" | "normalBoldText2" | "faqsTextHeading" | "faqsTextPara"
| "normalHeading2" |"service2Heading" | "longParaLex" | "normalTextLex" | "normalHeading3" | "NotoKrPara" | "alexHeading" | "longPara3" | "normalHeading4";

export interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: TypographyVariant;
  children: ReactNode;
  className?: string;
}

const Typography = forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ variant = "shortShort" as TypographyVariant, className, children, ...props }, ref) => {
    const variantClasses: Record<TypographyVariant, string> = {
    service2Heading: "text-xl font-lex sm:text-4xl text-[#00144F] max-sm:text-center font-medium",
    faqsTextHeading: "text-xl font-Int sm:text-3xl text-[#000000] max-sm:text-center font-bold",
    faqsTextPara: "text-sm font-Int sm:text-base text-[#000000] max-sm:text-center font-normal",
    verySmall: "text-xs font-noto sm:text-sm text-[#00144F] max-sm:text-center font-normal",
    normalBoldText2: "text-base font-noto sm:text-lg text-white max-sm:text-center font-semibold",
    normalBoldText: "text-lg font-noto sm:text-xl text-white max-sm:text-center font-semibold",
    normalHeading: "text-2xl font-noto sm:text-4xl text-[#00144F] max-sm:text-center font-bold",
    normalHeading3: "text-2xl font-kr sm:text-5xl text-[#00144F] max-sm:text-center font-bold",
    normalHeading2: "text-xl font-kr sm:text-3xl text-[#00144F] max-sm:text-center font-bold",
    normalHeading4: "text-base font-kr sm:text-lg text-[#00144F] max-sm:text-center font-semibold",
    navLinks: "text-xs font-lex sm:text-sm text-white/80 max-sm:text-center font-normal",
    shortShort: "text-xs font-noto sm:text-sm text-white/80 max-sm:text-center font-normal",
    normalTextLex: "text-sm font-lex sm:text-base text-white max-sm:text-center font-normal sm:leading-6",
    NotoKrPara: "text-base font-kr sm:text-lg text-white/80 max-sm:text-center font-normal sm:leading-6",
    longParaLex: "text-xs font-lex sm:text-sm text-white/80 max-sm:text-center font-normal sm:leading-6",
    alexHeading: "text-xl font-lex sm:text-5xl text-white/80 max-sm:text-center font-medium",
    longPara: "text-xs font-kr sm:text-sm text-white/80 max-sm:text-center font-normal sm:leading-6",
    longPara3: "text-sm font-kr sm:text-base text-white/80 max-sm:text-center font-light sm:leading-6",
    longPara2: "text-xs font-noto sm:text-sm text-white/80 max-sm:text-center font-light sm:leading-6",
    heading: "text-[1.7rem] font-kr sm:text-[3.4rem] text-white/80 max-sm:text-center font-bold leading-8 sm:leading-15",
    bigHeading: "text-5xl font-kr sm:text-8xl text-white/80 max-sm:text-center font-extrabold",
  };

 const combinedClasses = clsx(variantClasses[variant], className);

  return (
    <p
    ref={ref}
    className={combinedClasses} {...props}>
      {children}
    </p>
  );
}
);

export default Typography;
