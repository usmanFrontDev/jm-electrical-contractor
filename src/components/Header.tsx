

import { useNavigate } from 'react-router-dom'
import Logo from'../assets/img/logo.png'
import { headerMenu } from '../constant/Header'
import Button from './Button'
import Typography from './Typography'
import { useState } from 'react'


const Header = () => {

const navigate = useNavigate()
const [menuOpen, setMenuOpen] = useState<string | null>(null)

  return ( 
    <div className="z-[999] px-32 pt-6 fixed top-0 left-0 right-0
     w-full flex justify-center items-center
    ">
        <div className='w-full flex justify-between items-center
         bg-white/5 border border-white/50 
    backdrop-blur-lg rounded-full px-12 py-2 '>
            <img src={Logo} alt="" 
        className='w-32'/>
        <div className='flex justify-center items-center gap-8 ml-20'>
         {headerMenu.map((item) => (
  <div
    key={item.label}
    className="relative"
    onMouseEnter={() => item.children && setMenuOpen(item.label)}
    onMouseLeave={() => setMenuOpen(null)}
    onClick={() => {
      if (!item.children) navigate(item.path);
    }}
  >
    <Typography
      variant="navLinks"
      className={`border-b border-transparent 
      hover:border-b-[#F5AF1B]
      transition ease-in duration-150
      cursor-pointer
      `}
    >
      {item.label}
    </Typography>

    {/* Dropdown */}
    {menuOpen === item.label && item.children && (
      <div className="absolute top-full
      -translate-x-1/2 left-1/2 pt-12">
      <div className='flex flex-col justify-start items-center gap-2
      bg-[#FFEAD3] 
     shadow-lg rounded-3xl py-4 px-6 min-w-fit'>
          
        {item.children.map((child) => (
          <div
            key={child.path}
            onClick={() => navigate(child.path)}
            className="w-full px-5 text-center whitespace-nowrap py-2 rounded-xl cursor-pointer 
            hover:bg-[#F5AF1B] text-[#00144F]
            transition-all duration-300 font-semibold font-lex"
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
        <div className='flex justify-end gap-6'>
            <Button variant='onlyNumber' text='360-241-4434'/>
             <Button variant='yellowSolid' text='Contact us'/>
        </div>
        </div>
    </div>
  )
}

export default Header