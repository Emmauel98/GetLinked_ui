import { motion } from 'framer-motion';
import xmark from '../Images/xmark.svg';
import { useRef, useState } from 'react';
import PropTypes from 'prop-types';




const SmallScreenNavBar = ({hideTopNavBar}) => {
    const [hideBar, setHideBar] = useState(false);
    const navBarRef = useRef(null);

    const hideBarHandle = ()=>{
        setHideBar(!hideBar);
        hideTopNavBar(false);
    };

  return (
    <>
        <motion.div 
         className="lg:hidden top-0 fixed pl-[14vw] bg-[#150E28] w-screen h-screen pt-[5vh] z-[200]"
         ref={navBarRef}
         animate={{x:0}}
         initial={{x:-120}}
         >
            <div className='mr-[4vw] mb-[16vh] relative z-[200]'>
                <img src={xmark} alt=""  className='float-right w-[3vh] h-[3vh]' onClick={hideBarHandle}/>
            </div>
          <ul className="cursor-pointer TopNavBarFont text-xl font-extrabold">
            <li className="hover:delay-100 hover:duration-100 transition-all hover:scale-[1.05]
           font-black ease-in-out time w-['auto'] relative text-left mb-[5vh]">Timeline</li>
            <li className="hover:delay-100 hover:duration-300 transition-all hover:scale-[1.05]
           font-black ease-in-out relative text-left mb-[5vh]">Overview</li>
            <li className="hover:delay-100 hover:duration-300 transition-all hover:scale-[1.05]
           font-black ease-in-out relative text-left mb-[5vh]">FAQs</li>
            <li className="hover:delay-100 hover:duration-300 transition-all hover:scale-[1.05]
           font-black ease-in-out relative text-left mb-[5vh]">Contact</li>
          </ul>
          <div className="TopNavBarFont lg:hidden">
          <button 
           className="rounded-sm bg-gradient-to-r from-[#903AFF] via-[#D434FE] to-[#FE34B9] 
           px-5 py-2 text-sm hover:delay-100 hover:duration-300 transition-all hover:scale-[1.05]
           font-black ease-in-out
           ">
            Register
          </button>
        </div>
          </motion.div>
    </>
  )
};

SmallScreenNavBar.propTypes = {
  hideTopNavBar: PropTypes.func.isRequired,
}

export default SmallScreenNavBar;