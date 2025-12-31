import { useNavigate } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import { headerMenu } from "../constant/Header";
import Button from "./Button";
import Typography from "./Typography";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  return (
    <div className="z-[999] fixed top-0 left-0 right-0 w-full">
      {/* ================= DESKTOP HEADER ================= */}
      <div className="px-32 pt-6 w-full flex justify-center items-center max-sm:hidden">
        <div className="w-full flex justify-between items-center
         bg-white/5 border border-white/50 backdrop-blur-lg rounded-full px-12 py-2">
          
          <img
            onClick={() => navigate("/")}
            src={Logo}
            className="w-32 cursor-pointer"
          />

          <div className="flex items-center gap-8 ml-20">
            {headerMenu.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setMenuOpen(item.label)}
                onMouseLeave={() => setMenuOpen(null)}
                onClick={() => !item.children && navigate(item.path)}
              >
                <Typography
                  variant="navLinks"
                  className="border-b border-transparent hover:border-b-[#F5AF1B] cursor-pointer"
                >
                  {item.label}
                </Typography>

                {menuOpen === item.label && item.children && (
                  <div className="w-fit absolute top-full -translate-x-1/2 left-1/2 pt-12">
                    <div className="flex flex-col gap-2 bg-[#FFEAD3]
                     shadow-lg rounded-3xl py-4 px-6">
                      {item.children.map((child) => (
                        <div
                          key={child.path}
                          onClick={() => navigate(child.path)}
                          className="px-5 py-2 rounded-xl cursor-pointer
                           hover:bg-[#F5AF1B] whitespace-nowrap text-[#00144F] font-semibold"
                        >
                          {child.label}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex gap-6">
            <Button variant="onlyNumber" text="360-241-4434" />
            <Button variant="yellowSolid" text="Contact us" />
          </div>
        </div>
      </div>

      {/* ================= MOBILE HEADER ================= */}
      <div className="sm:hidden px-4 py-3 flex justify-between items-center bg-black/20
      backdrop-blur-xl">
        <img
          src={Logo}
          className="w-28 cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-8 h-10 flex flex-col justify-center gap-1"
        >
          <span className="h-[2px] w-full bg-white"></span>
          <span className="h-[2px] w-full bg-white"></span>
          <span className="h-[2px] w-full bg-white"></span>
        </button>
      </div>

      {/* ===== MOBILE MENU PANEL ===== */}
      {mobileOpen && (
        <div className="sm:hidden fixed top-0 left-0 w-full h-screen
         bg-black/60 backdrop-blur-sm">
          <div className="w-[78%] h-full bg-black/80 p-6">
            
            {/* Close Button */}
            <div className="flex justify-between items-center mb-6">
              <img src={Logo} className="w-24" />
              <button 
              className="text-white"
              onClick={() => setMobileOpen(false)}>✕</button>
            </div>

            <div className="flex flex-col gap-4">
              {headerMenu.map((item) => (
                <div key={item.label}>
                  {/* Parent Item */}
                  <div
                    onClick={() => {
                      if (!item.children) {
                        navigate(item.path);
                        setMobileOpen(false);
                      } else {
                        setMobileDropdown(
                          mobileDropdown === item.label ? null : item.label
                        );
                      }
                    }}
                    className="flex justify-between items-center py-2 text-lg font-semibold
                    text-white"
                  >
                    {item.label}
                    {item.children && <span>▾</span>}
                  </div>

                  {/* Dropdown Children */}
                  {mobileDropdown === item.label && item.children && (
                    <div className="ml-4 flex flex-col gap-2 pb-2
                    overflow-y-auto max-h-[30dvh]">
                      {item.children.map((child) => (
                        <div
                          key={child.path}
                          onClick={() => {
                            navigate(child.path);
                            setMobileOpen(false);
                          }}
                          className="text-sm py-2 border-b border-white/45 text-white/80"
                        >
                          {child.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="mt-6 flex flex-col gap-3 max-sm:items-center">
                <Button variant="onlyNumber" text="360-241-4434" />
                <Button variant="yellowSolid" text="Contact us" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
