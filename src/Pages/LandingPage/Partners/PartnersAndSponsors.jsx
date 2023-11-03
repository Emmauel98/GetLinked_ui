import "./Partners.css";
// import vuzual from "./Images/vuzual.svg";
import vuzual from "./Images/Vizual Plus.png";
// import wisper from "./Images/wisper.svg";
import wisper from "./Images/wisper logo white.png";
// import winwise from "./Images/winwise.svg";
import winwise from "./Images/Winwise logo White colour 1.png";
// import paybox from "./Images/paybox.svg";
import paybox from "./Images/Paybox.png";
// import libertyPay from "./Images/libertyPay.svg";
import libertyPay from "./Images/Liberty company logo white.png";
// import libertyAssured from "./Images/libertyAssured.svg";
import libertyAssured from "./Images/Liberty company logo white colour.png";
import Purple_Lens_Flare from "./Images/Purple-Lens-Flare-PNG.png";


const PartnersAndSponsors = () => {
  return (
    <>
      <div className="bg-[rgb(17,11,32)] py-10 relative">
      <img src={Purple_Lens_Flare} alt="purple_lens_flare"
              className=" absolute lg:top-0 lg:right-[20vw]
              md:right-[10vw] right-[10vw] top-[25vh] opacity-30" />
        <img src={Purple_Lens_Flare} alt="purple_lens_flare"
              className=" absolute lg:bottom-[-60vh] lg:right-[-60vw]
              md:right-[-85vw] right-[-80vw] md:bottom-[-5vh] bottom-[25vh]" />
        <h1 className="text-center text-[1.5rem] 
            md:text-[1.7rem] lg:text-[2rem]">
          Partners and Sponsors
        </h1>
        <p
          className="text-center text-sm md:text-[1.2rem] lg:text-[1rem] font
            px-5 leading-loose pb-[3rem]"
        >
          Getlinked Hackathon 1.0 is honored to have the following major <br />
          companies as its partners and sponsors
        </p>
        <div
          className="grid grid-cols-3 lg:gap-[1.5rem]
             lg:px-[10vw] justify-center items-center
             ring-1 ring-[#D434FE] lg:mx-[10vw] lg:py-[15vh]
             md:mx-[10vw] md:py-[8vh] md:px-[1vw] mx-[6vw]
             px-[1.5vw] py-[1.5vh] md:gap-[2rem] gap-[1rem]
             bg-[rgba(255,255,255,0.02)] backdrop-filter 
             backdrop-blur-sm shadow-black rounded-lg
             shadow-md "
        >
          <div
            className="justify-center items-center
                lg:h-[17vh] border-r-4 border-[#D434FE]
                md:h-[15vh] h-[13vh] rounded-md"
          >
            <img src={libertyAssured} alt="" 
                 className="lg:ml-[3.5rem]
                 md:ml-[4vw] w-[60%] lg:w-[45%]
                 mt-[3vh] md:mt-0 ml-[3vw]" />
          </div>
          <div
            className="flex justify-center items-center
                lg:h-[17vh] md:h-[15vh] h-[13vh]"
          >
            <img src={libertyPay} alt="" 
                 className="md:w-[80%] lg:w-[100%] w-[60%]"/>
          </div>
          <div
            className="flex justify-center items-center
                lg:h-[17vh] border-l-4 border-[#D434FE]
                md:h-[15vh] h-[13vh] rounded-md"
          >
            <img src={winwise} alt=""
                 className="w-[60%] lg:w-[55%]" />
          </div>
          <div
            className="flex justify-center items-center
                lg:h-[17vh] border-r-4 border-[#D434FE]
                relative md:h-[15vh] h-[13vh] rounded-md"
          >
            <div
              className="h-[5px] lg:w-[15vw] bg-[#D434FE] absolute
                 top-[-1rem] md:w-[20vw] w-[20vw] rounded-md"
            ></div>
            <img src={wisper} alt=""
                 className="w-[60%] lg:w-[60%]" />
          </div>
          <div
            className="flex justify-center items-center
                lg:h-[17vh] relative md:h-[15vh] h-[13vh]"
          >
            <div
              className="h-[5px] lg:w-[20vw] bg-[#D434FE] absolute
                 top-[-1rem] md:w-[25vw] w-[25vw] rounded-md"
            ></div>
            <img src={paybox} alt=""
                 className="md:w-[80%] lg:w-[100%] w-[60%]" />
          </div>
          <div
            className="flex justify-center items-center
                lg:h-[17vh] border-l-4 border-[#D434FE]
                relative md:h-[15vh] h-[13vh] rounded-md"
          >
            <div
              className="h-[5px] lg:w-[16vw] bg-[#D434FE] absolute
                 top-[-1rem] md:w-[20vw] w-[20vw] rounded-md"
            ></div>
            <img src={vuzual} alt=""
                 className="md:w-[80%] lg:w-[80%] w-[60%]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnersAndSponsors;
