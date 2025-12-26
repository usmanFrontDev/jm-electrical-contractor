
import phoneBtnSvg from "../assets/svg/phoneBtn.svg";
import phoneBtn_2 from "../assets/svg/phoneBtn_2.svg";
import phoneBtnSvg_3 from "../assets/svg/phoneBtn_3.svg";
import calendar from "../assets/svg/calendar.svg";
import type { ButtonHTMLAttributes, JSX } from "react";


export type ButtonVariant =
  | "yellowSolid"
  | "whiteSolid"
  | "whitePhone"
  | "bluephone"
  | "darkCalendar"
  | "yellowPhone"
  | "darkPhone";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ variant = "yellowSolid", text, className, ...props }) => {
  const variantMap: Record<ButtonVariant, JSX.Element> = {
    yellowSolid: (
      <button
        className={`text-[#00144F] px-4 sm:px-5 py-2 sm:py-4 rounded-full
        cursor-pointer bg-[#F5AF1B] font-lex font-bold sm:font-semibold text-[0.65rem] sm:text-sm
        border-none hover:bg-white shadow-2xl hover:-translate-y-1 
        hover:scale-105 transition ease-out duration-150 
        flex justify-between items-center gap-2 ${className}`}
        {...props}
      >
        {text}
      </button>
    ),
    whiteSolid: (
      <button
        className="text-[#00144F] px-4 sm:px-5 py-2 sm:py-4 rounded-full
        cursor-pointer bg-white/80 font-lex font-semibold text-sm
        border-none hover:bg-white shadow-2xl hover:-translate-y-1 
        hover:scale-105 transition ease-out duration-150 
        flex justify-between items-center gap-2"
        {...props}
      >
        {text}
      </button>
    ),
    whitePhone: (
      <button
        className="text-[#00144F] px-4 sm:px-5 py-2 sm:py-4 rounded-full
        cursor-pointer bg-white/80 font-lex font-semibold text-sm
        border-none hover:bg-white shadow-2xl hover:-translate-y-1 
        hover:scale-105 transition ease-out duration-150 
        flex justify-between items-center gap-2"
        {...props}
      >
        {text}
        <span className="flex justify-start items-center gap-2">
          <img src={phoneBtnSvg} alt="" className="w-4 sm:w-4" /> 360-241-4434
        </span>
      </button>
    ),
    bluephone: (
      <button
        className={`text-white/80 px-4 sm:px-5 py-2 sm:py-4 rounded-full
        cursor-pointer bg-[#00144F] font-lex font-semibold text-sm
        border-none hover:bg-[#F5AF1B] hover:text-[#00144F] shadow-2xl hover:-translate-y-1 
        hover:scale-105 transition ease-out duration-150 
        flex justify-between items-center gap-2 ${className}`}
        {...props}
      >
        {text}
        <span className="flex justify-start items-center gap-2">
          <img src={phoneBtnSvg_3} alt="" className="w-4 sm:w-4 " /> 360-241-4434
        </span>
      </button>
    ),
    darkCalendar: (
      <button
        className="text-white/80 p-1 pr-3 sm:pr-5 rounded-full
        cursor-pointer bg-[#00144F] hover:text-[#00144F] font-lex font-semibold text-sm
        border-none hover:bg-white shadow-2xl hover:-translate-y-1 
        hover:scale-105 transition ease-out duration-150 
        flex justify-between items-center gap-2"
        {...props}
      >
        <span
          className="gap-2 w-6 h-6 sm:w-12 sm:h-12 bg-[#F5AF1B]
          flex justify-center items-center rounded-full p-1"
        >
          <img src={calendar} alt="" />
        </span>
        {text}
      </button>
    ),
    yellowPhone: (
      <button
        className="text-[#00144F] p-1 pr-3 sm:pr-5 rounded-full
        cursor-pointer bg-[#F5AF1B] hover:text-[#F5AF1B] font-lex font-semibold text-sm
        border-none hover:bg-white shadow-2xl hover:-translate-y-1 
        hover:scale-105 transition ease-out duration-150 
        flex justify-between items-center gap-2"
        {...props}
      >
        <span
          className="gap-2 w-6 h-6 sm:w-12 sm:h-12 bg-[#00144F]
          flex justify-center items-center rounded-full p-1"
        >
          <img src={phoneBtn_2} alt="" />
        </span>
        {text}
      </button>
    ),
    darkPhone: (
      <button
        className="group text-white/80 px-4 sm:px-5 py-2 sm:py-4 rounded-full
        cursor-pointer bg-[#00144F] font-lex font-semibold text-sm
        border-none hover:bg-white hover:text-[#00144F] shadow-2xl hover:-translate-y-1 
        hover:scale-105 transition ease-out duration-150 
        flex justify-between items-center gap-2"
        {...props}
      >
        {text}
        <span className="flex justify-start items-center gap-2">
          <img src={phoneBtnSvg_3} alt="" className="w-4 sm:w-4 group-hover:hidden" />
          <img src={phoneBtnSvg} alt="" className="w-4 sm:w-4 hidden group-hover:block" />
           360-241-4434
        </span>
      </button>
    ),
  };

  return variantMap[variant];
};

export default Button;
