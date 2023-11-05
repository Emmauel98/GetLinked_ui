import { motion } from "framer-motion";
import people from "./Images/people.svg";
import attributes from "./data,js";
import Purple_Lens_Flare from "./Images/Purple-Lens-Flare-PNG.png";



const Attribute = () => {
    const words = "Judging Criteria".split(" ");

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
        <motion.div
        whileInView={{
            opacity: 1,
            transition: {
              duration: 4,
              staggerChildren: 0.12,
              delayChildren: 0.05 * 1,
            },
          }}
          initial={{ opacity: 0 }}
          className="bg-[rgb(21,14,40)] w-full h-auto 
          md:flex p-[8%] relative overflow-hidden"
        >
          <img src={Purple_Lens_Flare} alt="purple_lens_flare"
              className=" absolute lg:top-0 lg:right-[20vw]
              md:right-[10vw] right-[10vw] top-[25vh] opacity-50" />
        <img src={Purple_Lens_Flare} alt="purple_lens_flare"
              className=" absolute lg:bottom-[-60vh] lg:right-[-60vw]
              md:right-[-85vw] right-[-80vw] md:bottom-[-5vh] bottom-[25vh]" />
          <div className="relative md:w-1/2 overflow-hidden">
            <motion.img
            initial={{
              y: -400,
              opacity: 0,
              transition:{
                duration: 4,
                type: 'spring',
                damping: 10,
                stiffness: 100,
                delay: 1,
              }
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition:{
                duration: 4,
                type: 'spring',
                damping: 10,
                stiffness: 100,
                delay: 1,
              }
            }}
              src={people}
              alt="people"
              className="w-[100%] ml-[0vw] md:ml-0
               md:w-[100%] lg:w-[100%] animate-pulse
               lg:ml-[0vw] md:mt-[30vh] lg:mt-[30vh]
               mt-[20vh]
               "
            />
          </div>
          <div
            className="md:w-1/2 mt-[10vh] md:mt-[1vh] lg:mt-[12vh] 
          text-center md:text-left overflow-x-hidden"
          >
            <motion.div
              className=" overflow-hidden 
               flex text-[2rem] ml-[15vw]
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
              Key attributes
            </motion.span>
            <motion.div
              className="font-['Montserrat'] leading-7 md:mt-[3vh]"
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 2,
                  staggerChildren: 0.12,
                  delayChildren: 0.05 * 1,
                },
              }}
              initial={{ opacity: 0 }}
            >
              {
                attributes.map((attribute)=>{
                    // console.log(attribute.heading)
                    const {id, heading, body} = attribute;
                    return(
                    <motion.div key={id}
                    whileInView={{
                        opacity: 1,
                        x:0,
                        transition: {
                            duration: 5,
                            type: 'spring',
                            damping: 10,
                            stiffness: 100,
                          },
                    }}
                    initial={{
                        opacity: 0,
                        x: 300,
                        transition: {
                            duration: 5,
                            type: 'spring',
                            damping: 10,
                            stiffness: 100,
                          },
                    }}>
                        <span 
                         className=" font-black text-[#FF26B9]
                        md:text-[1.2rem]">
                            {heading}
                        </span> &nbsp;
                        <span>{body}</span> <br /> <br />
                    </motion.div>
                    )
                })
              }
            </motion.div>
          </div>
        </motion.div>
      </>
    );
};

export default Attribute;