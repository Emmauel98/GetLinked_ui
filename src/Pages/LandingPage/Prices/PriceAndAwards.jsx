import "./Price.css";
import Typewriter from "typewriter-effect";
import cup from "./Images/cup.svg";
import cup2 from "./Images/cup2.svg";
import first from "./Images/first.svg";
import second from "./Images/second.svg";
import third from "./Images/third.svg";
import Purple_Lens_Flare from "./Images/Purple-Lens-Flare-PNG.png";


const PriceAndAwardsComponent = () => {
  const deviceWidth = window.outerWidth;
  return (
    <>
      <div className="bg-[rgb(17,11,32)] relative py-10 md:p-10 h-auto">
      <img src={Purple_Lens_Flare} alt="purple_lens_flare"
              className=" absolute lg:top-0 lg:right-[20vw]
              md:right-[10vw] right-[10vw] top-[25vh] opacity-30" />
        <img src={Purple_Lens_Flare} alt="purple_lens_flare"
              className=" absolute lg:bottom-[-60vh] lg:right-[-60vw]
              md:right-[-85vw] right-[-80vw] md:bottom-[-5vh] bottom-[25vh]" />
        <div className="text-center md:text-left relative md:left-[45vw] lg:left-[50vw]">
          <h1 className="lg:text-[2rem] md:text-[1.7rem] text-[1.5rem]">
            {/* Prizes and <br /> <span className="text-[#D434FE]">Rewards</span> */}
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Prizes and")
                  .typeString(
                    '<br /> <span style="color: #D434FE " className="text-[#D434FE]">Rewards</span>'
                  )
                  .start();
              }}
              options={{
                delay: 400,
                loop: true,
              }}
            />
          </h1>
          <p className="font px-10 md:px-0">
            {/* Highlight of the prizes or rewards for winners and <br /> for
            participants. */}
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "Highlight of the prizes or rewards for winners and"
                  )
                  .pauseFor(200)
                  .typeString("<br/><span>for participants.</span>")
                  .start();
              }}
            />
          </p>
        </div>
        <div className="md:flex pb-[10vh] gap-5 mx-14">
          <div className="mt-[10vh]">
            {deviceWidth <= 480 ? (
              <img src={cup2} alt="cup" className="" />
            ) : (
              <img src={cup} alt="cup" />
            )}
            {/* <img src={cup} alt="cup"/> */}
          </div>
          <div className="flex md:mt-[20vh] justify-center gap-3 md:gap-0
                mt-[5vh]">
            <div className="relative">
              <img
                src={second}
                alt="second"
                className="relative z-10 lg:ml-[.5vw]
                ml-[-3vw] md:ml-0"
              />
              <div
                className="bg-[rgba(212,52,254,0.4)] 
                text-center lg:h-[40vh] absolute lg:top-[15vh]
                md:top-[5vh] md:left-[-1vw] md:pt-[5vh]
                lg:pt-[15vh] ring-1 ring-[rgba(212,52,254,1)]
                rounded-md md:py-10 lg:py-0 lg:left-0
                top-[6vh] h-[20vh] left-[-8vw] pt-[10vh]
                "
              >
                <h2 className="lg:text-[2rem]">2nd</h2>
                <h4 className="font">Runner</h4>
                <h2 className="text-[#D434FE] lg:text-[2rem] px-3">N300,000</h2>
              </div>
            </div>
            <div className="relative md:bottom-[10vh]">
              <img src={first} alt="first" className=" relative z-10" />
              <div
                className="bg-[rgba(144,58,255,0.4)] 
                text-center lg:h-[40vh] absolute lg:top-[30vh]
                md:top-[10vh] md:left-[2.5vw] md:pt-[5vh]
                lg:pt-[15vh] ring-1 ring-[rgba(144,58,255,1)]
                rounded-md lg:left-[3.3vw] md:py-10 lg:py-0
                top-[8vh] h-[20vh] left-[2vw] pt-[10vh]
                "
              >
                <h2 className="lg:text-[2rem]">1st</h2>
                <h4 className="font">Runner</h4>
                <h2 className="text-[#D434FE] lg:text-[2rem] px-3">N300,000</h2>
              </div>
            </div>
            <div className="relative">
              <img
                src={third}
                alt="third"
                className=" relative z-10 lg:ml-[.5rem]
                ml-[3vw] md:ml-0"
              />
              <div
                className="bg-[rgba(212,52,254,0.4)] 
                text-center lg:h-[40vh] absolute lg:top-[15vh]
                md:top-[5vh] md:left-[-1vw] md:pt-[5vh]
                lg:pt-[15vh] ring-1 ring-[rgba(212,52,254,1)]
                rounded-md lg:left-0 md:py-10 lg:py-0
                top-[6vh] h-[20vh] left-[-1vw] pt-[10vh]
                "
              >
                <h2 className="lg:text-[2rem]">3rd</h2>
                <h4 className="font">Runner</h4>
                <h2 className="text-[#D434FE] lg:text-[2rem] px-3">N300,000</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceAndAwardsComponent;
