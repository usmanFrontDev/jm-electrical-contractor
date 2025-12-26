import React, { type HTMLAttributes, type ReactNode } from "react";
import clsx from "clsx";

// Variant names exactly as provided
export type TypographyVariant ="navLinks" | "shortShort" | "longPara" | "heading" | "bigHeading";

export interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: TypographyVariant;
  children: ReactNode;
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({
  variant = "shortShort",
  className,
  children,
  ...props
}) => {
  const variantClasses: Record<TypographyVariant, string> = {
    navLinks: "text-xs font-lex sm:text-sm text-white/80 max-sm:text-center font-normal",
    shortShort: "text-xs font-noto sm:text-sm text-white/80 max-sm:text-center font-normal",
    longPara: "text-xs font-kr sm:text-sm text-white/80 max-sm:text-center font-normal sm:leading-6",
    heading: "text-[1.7rem] font-kr sm:text-[3.4rem] text-white/80 max-sm:text-center font-bold leading-8 sm:leading-15",
    bigHeading: "text-5xl font-kr sm:text-8xl text-white/80 max-sm:text-center font-extrabold",
  };

  const combinedClasses = clsx(variantClasses[variant], className);

  return (
    <p className={combinedClasses} {...props}>
      {children}
    </p>
  );
};

export default Typography;
