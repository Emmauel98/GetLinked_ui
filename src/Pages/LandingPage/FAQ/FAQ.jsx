import { motion } from "framer-motion";
import LadySits from "./Images/thinking.svg";
import "./FAQ.css";
import FAQuest from "./data";
import Purple_Lens_Flare from "./Images/Purple-Lens-Flare-PNG.png";


const FAQuestion = () => {
  const words = "Frequently Ask".split(" ");

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
          md:flex p-[8%] overflow-x-hidden relative
          overflow-y-hidden"
      >
        <img src={Purple_Lens_Flare} alt="purple_lens_flare"
              className=" absolute lg:top-0 lg:right-[20vw]
              md:right-[10vw] right-[10vw] top-[25vh] opacity-20" />
        <img src={Purple_Lens_Flare} alt="purple_lens_flare"
              className=" absolute lg:bottom-[-60vh] lg:right-[-60vw]
              md:right-[-85vw] right-[-80vw] md:bottom-[-5vh] bottom-[25vh]" />
        <div className="relative md:w-1/2 order-2">
          <div
            className="absolute lg:top-[1vh]
              md:right-[10vw] -top-[16vh] md:top-[13vh]
              right-[18vw]"
          >
            <span
              className="questionTag
                    text-[10rem] text-[#A866FD]"
            >
              ?
            </span>
            <span
              className="questionTag relative
                    text-[10rem] text-[#D434FE]
                    bottom-[3.5vh]"
            >
              ?
            </span>
            <span
              className="questionTag
                    text-[10rem] text-[#A866FD]"
            >
              ?
            </span>
          </div>
          <img
            src={LadySits}
            alt="LadySits"
            className="w-[100%] ml-[1vw] md:ml-[5vw]
               md:w-[100%] lg:w-[100%] animate-pulse
               lg:ml-[8vw] md:mt-[30vh] lg:mt-[25vh]
               mt-[15vh]"
          />
        </div>
        <div
          className="md:w-1/2 mt-[10vh] md:mt-[1vh] lg:mt-[12vh] 
          text-center md:text-left"
        >
          <motion.div
            className=" overflow-hidden 
               flex text-[2rem] ml-[18vw]
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
            Question
          </motion.span>
          <h5 className=" font-thin mt-5">
            We got answers to the questions that you might <br /> want to ask about
            getlinked Hackathon 1.0
          </h5>
          <motion.div
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
            {FAQuest.map((attribute) => {
              // console.log(attribute.heading)
              const { id, quest } = attribute;
              return (
                <motion.div
                  key={id}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 5,
                      type: "spring",
                      damping: 14,
                      stiffness: 100,
                    },
                  }}
                  initial={{
                    opacity: 0,
                    x: 300,
                    transition: {
                      duration: 5,
                      type: "spring",
                      damping: 14,
                      stiffness: 100,
                    },
                  }}
                >
                  <div>
                    <h1 className="mt-10 text-left">
                      {quest}
                      <span
                        className="float-right mr-[1vw]
                            text-[2rem] text-[#D434FE]"
                      >
                        +
                      </span>
                    </h1>
                    <br />
                    <hr className="bg-[#D434FE] border border-[#D434FE]" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default FAQuestion;
