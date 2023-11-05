import { motion } from "framer-motion";


const TimeLineComponent = () => {
  const deviceWidth = window.outerWidth;
  console.log(deviceWidth);

  return (
    <>
      <div className="bg-[#150E28] py-10 overflow-hidden">
        <h1 className="text-center lg:text-[3rem] md:text-[2.4rem] text-[2rem]">Timeline</h1>
        <p className="text-center font-['Montserrat'] mx-5">
          Here is the breakdown of the time we anticipate <br />
          using for the upcoming event.
        </p>
        <br /><br />
        <div className="parent_div md:flex gap-10 md:mx-5 mx-10 relative">
          {/* .................... */}
          <div className="first_child md:pr-5 ml-[1rem] md:ml-0">
            <div className="lg:mb-[7vh] md:mb-[1vh] mb-[.5vh]">
              <motion.h1 className="text-[#D434FE] md:text-[1.5rem] md:text-right"
               whileInView={{
                x:0,
                opacity:1,
                transition:{
                  delay: .3,
                }
              }}
              initial={{
                x: 80,
                opacity: 0,
                transition:{
                  // delay: 35,
                }
              }}
              >
                Hackathon Announcement
              </motion.h1>
              <motion.p
                className=" md:text-right lg:text-[1rem] font-['Arial'] lg:w-[60%]
              relative lg:left-[18vw] md:text-[1.2rem]"
              whileInView={{
                opacity: 1,
                transition:{
                  duration: 1,
                  delay: .2,
                }
              }}
               initial={{
                opacity: 0,
                transition:{
                  delay: 2,
                  duration: 1,
                }
                }}
              >
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </motion.p>
            </div>
            <motion.div className="lg:mb-[7vh] md:mb-[7vh] mb-[5vh]"
             whileInView={{
              x:0,
              opacity:1,
              transition:{
                delay: .3,
              }
            }}
            initial={{
              x: -80,
              opacity: 0,
              transition:{
                // delay: 35,
              }
            }}
            >
              <h1 className="text-[#D434FE] md:text-[1.5rem] md:text-right">
                November 18, 2023
              </h1>
            </motion.div>
            <div className="lg:mb-[7vh] md:mb-[7vh] mb-[.5vh]">
              <motion.h1 className="text-[#D434FE] md:text-[1.5rem] md:text-right"
               whileInView={{
                x:0,
                opacity:1,
                transition:{
                  delay: .3,
                }
              }}
              initial={{
                x: -80,
                opacity: 0,
                transition:{
                  // delay: 35,
                }
              }}
              >
                Teams Registration ends
              </motion.h1>
              <motion.p
                className=" md:text-right lg:text-[1rem] font-['Arial'] lg:w-[60%]
              relative lg:left-[18vw] md:text-[1.2rem]"
              whileInView={{
                opacity: 1,
                transition:{
                  duration: 1,
                  delay: .2,
                }
              }}
               initial={{
                opacity: 0,
                transition:{
                  delay: 2,
                  duration: 1,
                }
                }}
              >
                Interested Participants are no longer Allowed to register{" "}
              </motion.p>
            </div>
            <motion.div className="lg:mb-[7vh] md:mb-[7vh] mb-[5vh]"
             whileInView={{
              x:0,
              opacity:1,
              transition:{
                delay: .3,
              }
            }}
            initial={{
              x: -80,
              opacity: 0,
              transition:{
                // delay: 35,
              }
            }}
            >
              <h1 className="text-[#D434FE] md:text-[1.5rem] md:text-right">
                November 18, 2023
              </h1>
            </motion.div>
            <div className="lg:mb-[7vh] md:mb-[1vh] mb-[.5vh]">
              <motion.h1 className="text-[#D434FE] md:text-[1.5rem] md:text-right"
               whileInView={{
                x:0,
                opacity:1,
                transition:{
                  delay: .3,
                }
              }}
              initial={{
                x: -80,
                opacity: 0,
                transition:{
                  // delay: 35,
                }
              }}
              >
                Getlinked Hackathon 1.0 Offically Begins
              </motion.h1>
              <motion.p
                className=" md:text-right lg:text-[1rem] font-['Arial'] lg:w-[60%]
              relative lg:left-[18vw] md:text-[1.2rem]"
              whileInView={{
                opacity: 1,
                transition:{
                  duration: 1,
                  delay: .2,
                }
              }}
               initial={{
                opacity: 0,
                transition:{
                  delay: 2,
                  duration: 1,
                }
                }}
              >
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions
              </motion.p>
            </div>
            <motion.div className="lg:mb-[7vh] mb-[5vh]"
             whileInView={{
              x:0,
              opacity:1,
              transition:{
                delay: .3,
              }
            }}
            initial={{
              x: -80,
              opacity: 0,
              transition:{
                // delay: 35,
              }
            }}
            >
              <h1 className="text-[#D434FE] md:text-[1.5rem] md:text-right">
                November 18, 2023
              </h1>
            </motion.div>
          </div>
          {/* ............. */}
          <div className="second_child md:relative absolute left-[-1rem] top-0">
            <div className="md:h-[65vh] lg:h-[100vh] md:w-[.3vw] bg-[#D434FE] rounded-md
              w-[.5vw] h-[120vh]"></div>
            <div className="absolute top-0">
              <div
                className="lg:h-[8vh] lg:w-[4vw] md:w-[5vw] md:h-[5vh]
                 w-[8vw] h-[5vh] mb-[14vh] mt-[12vh] md:mt-[3vh] ml-[-1rem]
                 rounded-full bg-gradient-to-r md:mb-[5.8vh] md:ml-[-2.5vw]
               from-[#903AFF] via-[#D434FE] to-[#D434FE] text-center
                  flex justify-center items-center lg:mb-[10vh] lg:ml-[-2vw]
                  md:ring-4 ring-[#150E28] ring-[1rem]"
              >
                1
              </div>
              <div
                className="lg:h-[8vh] lg:w-[4vw] md:w-[5vw] md:h-[5vh]
                 w-[8vw] h-[5vh] mb-[14vh] ml-[-1rem]
                 rounded-full bg-gradient-to-r md:mb-[7.8vh] md:ml-[-2.5vw]
               from-[#903AFF] via-[#D434FE] to-[#D434FE] text-center
                  flex justify-center items-center lg:mb-[10vh] lg:ml-[-2vw]
                  md:ring-4 ring-[#150E28] ring-[1rem]"
              >
                2
              </div>
              <div
                className="lg:h-[8vh] lg:w-[4vw] md:w-[5vw] md:h-[5vh]
                 w-[8vw] h-[5vh] mb-[15.5vh] ml-[-1rem]
                 rounded-full bg-gradient-to-r md:mb-[7.8vh] md:ml-[-2.5vw]
               from-[#903AFF] via-[#D434FE] to-[#D434FE] text-center
                  flex justify-center items-center lg:mb-[10vh] lg:ml-[-2vw]
                  md:ring-4 ring-[#150E28] ring-[1rem]"
              >
                3
              </div>
              <div
                className="lg:h-[8vh] lg:w-[4vw] md:w-[5vw] md:h-[5vh]
                 w-[8vw] h-[5vh] mb-[18vh] ml-[-1rem]
                 rounded-full bg-gradient-to-r md:mb-[7.8vh] md:ml-[-2.5vw]
               from-[#903AFF] via-[#D434FE] to-[#D434FE] text-center
                  flex justify-center items-center lg:mb-[10vh] lg:ml-[-2vw]
                  md:ring-4 ring-[#150E28] ring-[1rem]"
              >
                4
              </div>
              <div
                className="lg:h-[8vh] lg:w-[4vw] md:w-[5vw] md:h-[5vh]
                 w-[8vw] h-[5vh] mb-[17.5vh] ml-[-1rem]
                 rounded-full bg-gradient-to-r md:mb-[7.8vh] md:ml-[-2.5vw]
               from-[#903AFF] via-[#D434FE] to-[#D434FE] text-center
                  flex justify-center items-center lg:mb-[10vh] lg:ml-[-2vw]
                md:ring-4 ring-[#150E28] ring-[1rem]"
              >
                5
              </div>
              <div
                className="lg:h-[8vh] lg:w-[4vw] md:w-[5vw] md:h-[5vh]
                 w-[8vw] h-[5vh] mb-[0vh] ml-[-1rem]
                 rounded-full bg-gradient-to-r md:mb-[7.8vh] md:ml-[-2.5vw]
               from-[#903AFF] via-[#D434FE] to-[#D434FE] text-center
                  flex justify-center items-center lg:mb-[10vh] lg:ml-[-2vw]
                  md:ring-4 ring-[#150E28] ring-[1rem]"
              >
                6
              </div>
            </div>
          </div>
          {/* ............................ */}
          <div className="third_child ml-[1rem] md:ml-0">
            <motion.div className={`lg:mb-[7vh] md:mb-[5vh] mb-[5vh] ${deviceWidth <= 450? "hidden" : "block"}
              md:mt-[3vh]`}
              whileInView={{
                x:0,
                opacity:1,
                transition:{
                  delay: .3,
                }
              }}
              initial={{
                x: 80,
                opacity: 0,
                transition:{
                  // delay: 35,
                }
              }}
              >
              <h1 className={`text-[#D434FE] md:text-[1.5rem] ${ deviceWidth < 450 ? "hidden" : "block"}`}>
                November 18, 2023..
              </h1>
            </motion.div>
            <div className="lg:mb-[7vh] md:mb-[4vh]">
              <motion.h1 className="text-[#D434FE] md:text-[1.5rem]"
               whileInView={{
                x:0,
              }}
              initial={{
                x: 80,
              }}
               >
                Teams Registration begins
              </motion.h1>
              <motion.p className="lg:text-[1rem] md:text-[1.2rem] font-['Arial'] lg:w-[60%]"
              whileInView={{
                opacity: 1,
                transition:{
                  duration: 1,
                  delay: .2,
                }
              }}
               initial={{
                opacity: 0,
                transition:{
                  delay: 2,
                  duration: 1,
                }
                }}
              >
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register
              </motion.p>
            </div>
            {deviceWidth <= 450 ? (
              <motion.div className="lg:mb-[7vh] md:mb-[8vh] mb-[5vh]"
              whileInView={{
                x:0,
                opacity:1,
                transition:{
                  delay: .3,
                }
              }}
              initial={{
                x: 80,
                opacity: 0,
                transition:{
                  // delay: 35,
                }
              }}
              >
              <h1 className="text-[#D434FE] md:text-[1.5rem]">
                November 18, 2023
              </h1>
            </motion.div>
            ) : null}
            <motion.div className={`lg:mb-[7vh] md:mb-[5vh] mb-[5vh] ${deviceWidth <= 450? "hidden" : "block"}`}
            whileInView={{
              x:0,
              opacity:1,
              transition:{
                delay: .3,
              }
            }}
            initial={{
              x: 80,
              opacity: 0,
              transition:{
                // delay: 35,
              }
            }}
            >
              <h1 className={`text-[#D434FE] md:text-[1.5rem] ${deviceWidth <= 450? "hidden" : "block"}`}>
                November 18, 2023
              </h1>
            </motion.div>
            <div className="lg:mb-[7vh] md:mb-[4vh]">
              <motion.h1 className="text-[#D434FE] md:text-[1.5rem]"
              whileInView={{
                x:0,
              }}
              initial={{
                x: 80,
              }}
              >
                Announcement of the accepted teams and ideas
              </motion.h1>
              <motion.p className="lg:text-[1rem] md:text-[1.2rem] font-['Arial'] lg:w-[60%]"
              whileInView={{
                opacity: 1,
                transition:{
                  duration: 1,
                  delay: .2,
                }
              }}
               initial={{
                opacity: 0,
                transition:{
                  delay: 2,
                  duration: 1,
                }
                }}
              >
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced
              </motion.p>
            </div>
            {deviceWidth <= 450 ? (
              <motion.div className="lg:mb-[7vh] md:mb-[8vh] mb-[5vh]"
              whileInView={{
                x:0,
                opacity:1,
                transition:{
                  delay: .3,
                }
              }}
              initial={{
                x: 80,
                opacity: 0,
                transition:{
                  // delay: 35,
                }
              }}
              >
              <h1 className="text-[#D434FE] md:text-[1.5rem]">
                November 18, 2023
              </h1>
            </motion.div>
            ) : null}
            <motion.div className={`lg:mb-[7vh] md:mb-[4vh] mb-[5vh]  ${deviceWidth <= 450? "hidden" : "block"}`}
            whileInView={{
              x:0,
              opacity:1,
              transition:{
                delay: .3,
              }
            }}
            initial={{
              x: 80,
              opacity: 0,
              transition:{
                // delay: 35,
              }
            }}
            >
              <h1 className={`text-[#D434FE] md:text-[1.5rem]  ${deviceWidth <= 450? "hidden" : "block"}`}>
                November 18, 2023
              </h1>
            </motion.div>
            <div className="lg:mb-[7vh] md:mb-[7vh]"
            >
              <motion.h1 className="text-[#D434FE] md:text-[1.5rem]"
              whileInView={{
                x:0,
              }}
              initial={{
                x: 80,
              }}
              >Demo Day</motion.h1>
              <motion.p className="lg:text-[1rem] md:text-[1.2rem] font-['Arial'] lg:w-[60%]"
              whileInView={{
                opacity: 1,
                transition:{
                  duration: 1,
                  delay: .2,
                }
              }}
               initial={{
                opacity: 0,
                transition:{
                  delay: 2,
                  duration: 1,
                }
                }}
              >
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day
              </motion.p>
            </div>
            {deviceWidth <= 450 ? (
              <motion.div className="lg:mb-[7vh] md:mb-[8vh] mb-[5vh]"
              whileInView={{
                x:0,
                opacity:1,
                transition:{
                  delay: .3,
                }
              }}
              initial={{
                x: 80,
                opacity: 0,
                transition:{
                  // delay: 35,
                }
              }}
              >
              <h1 className="text-[#D434FE] md:text-[1.5rem]">
                November 18, 2023...
              </h1>
            </motion.div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeLineComponent;
