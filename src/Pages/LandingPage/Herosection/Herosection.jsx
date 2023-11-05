import TopNavBar from "../NavBar/TopNavBar";
import vector4 from "../Images/vector4.svg";
import chainImage from "../Images/chainImage.svg";
import shiny from "../Images/shiny.svg";
import virtual from "../Images/virtual.svg";
// import star from "../Images/star.svg";
import purpleLensFlare from "../Images/purpleLensFlare.svg";
import ManWearingSmartGlass from "../Images/ManWearingSmartGlass.svg";
import "./Herosection.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


const Herosection = () => {
  const [hours, setHours] = useState(2);
  const [minutes, setMinutes] = useState(60);
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    let interval;
    let Mininterval;
    let Hourinterval;

    if (seconds !== 0) {
      interval = setInterval(() => {
        setSeconds((prevContent) => prevContent - 1);
      }, 1000);
    }
    if (seconds === 0 && minutes !== 0) {
      Mininterval = setInterval(() => {
        setMinutes((prevContent) => prevContent - 1);
      }, 1000);
    }
    if (minutes === 0 && hours !== 0) {
      Hourinterval = setInterval(() => {
        setHours((prevContent) => prevContent - 1);
        setMinutes(60);
        setSeconds(60);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
      clearInterval(Mininterval);
      clearInterval(Hourinterval);
    };
  }, [seconds, minutes, hours]);

  return (
    <>
      <div className="bg-[#150E28] h-[120vh] md:h-[70vh] lg:h-[130vh] relative overflow-y-hidden
      overflow-x-hidden">
        <TopNavBar />
        <div className="relative top-[12vh]">
          <img src={purpleLensFlare} alt="" 
           className=" absolute top-0 lg:w-[50%]" />
        <div className="herosection text-center md:text-right pt-[1.5rem] md:p-[3rem]">
          <h1 className="lg:text-2xl font-black italic">
            Igniting a Revolution in HR Innovation
          </h1>
          <img src={vector4} alt="" className="float-right" />
        </div>
        <div className="md:flex gap-[10vw]">
          <div className="relative lg:w-[40%] pt-[2rem]">
            <h1 
              className="font-ClashDisplay text-center text-[1.8rem]
               md:text-left lg:text-[3rem] md:pl-[2rem] lg:pl-[5rem] pt-[2rem]">
              getlinked Tech <br /> Hackathon{" "}
              <span className="text-[#D434FE]">1.0</span> &nbsp; &nbsp;
              <span 
                className="absolute right-[-10vw] md:right-[-15vw]
                 top-[17vh] md:top-[11vh] lg:left-[32vw]
                  lg:top-[21vh] flex">
                <img src={chainImage} alt="" className=" w-[20%] lg:w-[30%]" />
                <img src={shiny} alt="" className=" w-[20%] lg:w-[30%]" />
              </span>
            </h1>
            <h1 className="Montserrat pl-[5rem] md:pl-[2rem] lg:pl-[5rem]">
              Participate in getlinked tech Hackathon 2023 stand <br />a chance
              to win a Big prize
            </h1>
            <div className="TopNavBarFont pl-[5rem]">
              <button
                className="rounded-sm bg-gradient-to-r from-[#FE34B9]  via-[#D434FE] to-[#903AFF]
           px-5 py-2 text-sm hover:delay-100 hover:duration-300 transition-all hover:scale-[1.05]
           font-black ease-in-out text-[1rem] my-[1rem]
           "
              >
                Register
              </button>
              <div className="timer lg:text-[2rem] relative flex">
                  <h1 className="relative tracking-widest text-[3.3rem]">
                    {hours} 
                  <span className="text-sm">H</span> 
                  </h1>
                  <h1 className="relative tracking-widest text-[3.3rem]">
                  {minutes}
                  <span className="text-sm">M</span>
                </h1>
                <h1 className="relative tracking-widest text-[3.3rem]">
                  {seconds}
                  <span className="text-sm">S</span>
                  </h1>
              </div>
            </div>
          </div>
          <div className="relative">
            <motion.img src={virtual} alt=""
            whileInView={{
              opacity: 1,
              transform: "rotate(20deg)",
              transition:{
                repeat: Infinity,
                type: 'spring',
                damping: 12,
                stiffness: 100,
                duration: 50,
              }
            }}
            initial={{
              opacity: [0.1,0.2,0.3],
              transform: "rotate(120deg)",
              transition:{
                repeat: Infinity,
                type: 'spring',
                damping: 12,
                stiffness: 100,
                duration: 50,
              }
            }}
             className="absolute virtual"
             />
            <img src={ManWearingSmartGlass} alt="" className="w-[90%]" />
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
