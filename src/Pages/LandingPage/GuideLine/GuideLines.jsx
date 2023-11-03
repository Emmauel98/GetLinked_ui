import { motion } from "framer-motion";
import LadySits from "./Images/LadySits.svg";
import Purple_Lens_Flare from "./Images/Purple-Lens-Flare-PNG.png";

const GuideLines = () => {
  const words = "Rules and    ".split(" ");

  const container = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.04 * 1,
        duration: 0.5,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      x: -200,
      transition: {
        type: "Spring",
        duration: 0.5,
        damping: 10,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "Spring",
        duration: 0.5,
        damping: 10,
        stiffness: 100,
      },
    },
  };
  return (
    <>
      <div
        className="bg-[rgb(21,14,40)] w-full h-auto 
        md:flex p-[8%] overflow-x-hidden relative overflow-y-hidden"
      >
        <img src={Purple_Lens_Flare} alt="purple_lens_flare"
              className=" absolute lg:top-0 lg:right-[20vw]
              md:right-[40vw] right-[10vw] top-[-5vh] opacity-50" />
        <img src={Purple_Lens_Flare} alt="purple_lens_flare"
              className=" absolute lg:bottom-[-60vh] lg:right-[-60vw]
              md:right-[-85vw] right-[-80vw] md:bottom-[-5vh] bottom-[25vh]" />
        <div className="relative md:w-1/2 order-2">
          <img
            src={LadySits}
            alt="LadySits"
            className="w-[100%] ml-[1vw] md:ml-[5vw]
             md:w-[100%] lg:w-[100%] animate-pulse
             lg:ml-[10vw]"
          />
        </div>
        <div
          className="md:w-1/2 mt-[10vh] md:mt-[1vh] lg:mt-[12vh] 
        text-center md:text-left"
        >
          <motion.div
            className=" overflow-hidden 
             flex text-[2rem] ml-[25vw]
             md:ml-0"
            variants={container}
            initial="hidden"
            whileInView="visible"
          >
            {words.map((word, index) => {
              // console.log(word)
              return (
                <motion.span
                  key={index}
                  className="text-[1.5rem] md:text-[1.7rem]
                 lg:text-[2rem] mr-3"
                  variants={child}
                >
                  {word}
                </motion.span>
              );
            })}
          </motion.div>
          {/* <br /> */}
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: [0, 0.5, 0.1, 0.7, 1],
              transition: {
                duration: 3,
              },
            }}
            className="text-[1.5rem] md:text-[1.7rem] 
            lg:text-[2rem] text-[#D434FE]"
          >
            Guidelines
          </motion.span>
          <motion.p
            className="font-['Montserrat'] leading-7 md:mt-[3vh]"
            whileInView={{
              y: 0,
              transition: {
                duration: 1,
                type: "tween",
                damping: 5,
              },
            }}
            initial={{ y: 50 }}
          >
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default GuideLines;
