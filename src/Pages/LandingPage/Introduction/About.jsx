import bulb from "./Images/bulb.svg";
import star from "./Images/star.svg";
import curl from "./Images/curl.svg";
import { motion } from "framer-motion";
const About = () => {

  const words = "Introduction to getlinked".split(" ");
  // const word = Array.from("Introduction to getlinked");
  
  
// Variants for Container of words.
const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
       staggerChildren: 0.12,
       delayChildren: 0.04 * i,
       duration: 5, 
      },
  }),
};


// Variants for each word.

const child = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      duration: 3,
    },
  },
  hidden: {
    opacity: 0,
    x: -200,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      duration: 3,
    },
  },
};



  return (
    <>
      <div 
        className="bg-[rgb(21,14,40)] w-full h-auto 
        md:flex p-[8%] overflow-hidden">
        <div className="relative md:w-1/2">
          <img src={star} alt="star" className="absolute" />
          <img src={bulb} alt="bulb" 
            className="w-[80%] ml-[8vw] md:ml-0
             md:w-[90%] lg:w-[70%] animate-pulse" />
          <img src={curl} alt="curl" className="absolute right-[10vw]" />
        </div>
        <div className="md:w-1/2 mt-[10vh] md:mt-[1vh] lg:mt-[12vh] 
        text-center md:text-left"
        >
           <motion.div 
       className=" overflow-hidden 
        flex text-[2rem]"
          variants={container}
          initial="hidden"
          whileInView="visible">
          {
            words.map((word,index)=>{
              // console.log(word)
              return(
                <motion.span key={index} 
                className="text-[1.5rem] md:text-[1.7rem]
                 lg:text-[2rem] mr-3"
                 variants={child}
                >{word}</motion.span>
              )
            })
          }
          </motion.div>
           {/* <br /> */}
          <motion.span 
          initial={{opacity: 0}}
          whileInView={{
            opacity: [0,0.5,0.1,0.7,1],
            transition:{
              duration: 3,
            }
          }}
            className="text-[1.5rem] md:text-[1.7rem] 
            lg:text-[2rem] text-[#D434FE]">
              tech Hackathon 1.0
          </motion.span>
          <motion.p className="font-['Montserrat'] leading-7 md:mt-[3vh]"
           whileInView={{y:0, transition:{
            duration: 1,
            type: 'tween',
            damping: 5,
           }}}
           initial={{y: 50}}>
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
// rgba(20, 13, 39, 1)
export default About;
