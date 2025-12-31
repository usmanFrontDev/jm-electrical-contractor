import { forwardRef } from "react";

type ChipProp ={
  text: string;
  variant?: "dark" | "normal";
};

// Accept the ref + pass it to the root div
const Chip = forwardRef<HTMLDivElement, ChipProp>(
  ({ text, variant = "normal" }, ref) => {
    return (
      <>
        {variant === "dark" ? (
          <div
            ref={ref}
            className="text-center rounded-full px-10 py-2 text-base sm:text-lg
            font-kr bg-[#00144F] text-white/80 font-bold"
          >
            {text}
          </div>
        ) : (
          <div
            ref={ref}
            className="text-center rounded-full px-10 py-2 text-base sm:text-lg
            font-kr bg-[#F5AF1B] text-[#00144F] font-bold"
          >
            {text}
          </div>
        )}
      </>
    );
  }
);

export default Chip;
