import "./NavBar.css";
import showMoreIcon from '../Images/showMoreIcon.svg';
import { useState } from "react";
import SmallScreenNavBar from "./SmallScreenNavBar";

const TopNavBar = () => {
    const [revealMobileNavBar, setRevealMobileNavBar] = useState("");

    const revealMobileNavBarHandle = (value)=>{
        setRevealMobileNavBar(value);
        console.log(revealMobileNavBar)
    };

  return (
    <>
      <div 
        className="fixed flex justify-between 
        px-[4vw] py-[5vh] bg-[rgba(21,14,40,0.6)] w-full 
        z-[200] shadow-sm shadow-purple-400
         backdrop-filter backdrop-blur-xl
         cursor-none">
        <div className="relative z-[200]">
          <h1 className='text-[#FFFFFF] font-["Clash Display"] font-black text-md md:text-2xl relative z-50'>
            get <span className="text-[#D434FE]">linked</span>{" "}
          </h1>
        </div>
        <div className="hidden lg:block relative z-50">
          <ul className="flex gap-[5vw] cursor-pointer TopNavBarFont">
            <li className="hover:delay-100 hover:duration-100 transition-all hover:scale-[1.05]
           font-black ease-in-out time w-['auto'] relative text-center">Timeline</li>
            <li className="hover:delay-100 hover:duration-300 transition-all hover:scale-[1.05]
           font-black ease-in-out relative text-center">Overview</li>
            <li className="hover:delay-100 hover:duration-300 transition-all hover:scale-[1.05]
           font-black ease-in-out relative text-center">FAQs</li>
            <li className="hover:delay-100 hover:duration-300 transition-all hover:scale-[1.05]
           font-black ease-in-out relative text-center">Contact</li>
          </ul>
        </div>
        <div className="TopNavBarFont hidden lg:block">
          <button 
           className="rounded-sm bg-gradient-to-r from-[#FE34B9]  via-[#D434FE] to-[#903AFF] 
           px-5 py-2 text-sm hover:delay-100 hover:duration-300 transition-all hover:scale-[1.05]
           font-black ease-in-out
           ">
            Register
          </button>
        </div>
      <div className="lg:hidden relative z-[200]">
        <img src={showMoreIcon} alt="" onClick={()=>revealMobileNavBarHandle(true)}/>
      </div>
      </div>
    {revealMobileNavBar && <SmallScreenNavBar hideTopNavBar={revealMobileNavBarHandle} /> }
      <hr className="h-px bg-[#FFFFFF2E] border-0 dark:bg-[#FFFFFF2E]" />
    </>
  );
};

export default TopNavBar;
