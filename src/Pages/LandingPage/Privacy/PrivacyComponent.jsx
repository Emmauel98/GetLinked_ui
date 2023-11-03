import lock from "./Images/lock.png";
import vector from "./Images/vector.png";
import "./Privacy.css";
import Purple_Lens_Flare from "./Images/Purple-Lens-Flare-PNG.png";


const PrivacyComponent = () => {
  return (
    <>
      <div
        className="bg-[rgb(17,11,32)] md:flex py-20
           gap-10 px-[10vw] relative"
      >
        <img src={Purple_Lens_Flare} alt="purple_lens_flare"
              className=" absolute lg:top-0 lg:right-[20vw]
              md:right-[10vw] right-[10vw] top-[25vh] opacity-30" />
        <img src={Purple_Lens_Flare} alt="purple_lens_flare"
              className=" absolute lg:bottom-[-60vh] lg:right-[-60vw]
              md:right-[-85vw] right-[-80vw] md:bottom-[-5vh] bottom-[25vh]" />
        <div className="md:w-[50%] relative py-10">
          <h1 className="lg:text-[2rem] md:text-[1.7rem] text-[1.5rem]
              text-center md:text-left">
            Privacy Policy and <br />{" "}
            <span className="text-[rgba(212,52,254)]">Terms</span>
          </h1>{" "}
          <br />
          <p className="font text-center md:text-left">Last updated on September 12, 2023</p> <br />{" "}
          <br />
          <p className="fonty text-center md:text-left">
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>{" "}
          <br /> <br />
          <div
            className="ring-1 ring-[rgba(212,52,254,1)] md:p-[1rem]
               rounded-md lg:p-[5rem] bg-[rgba(255,255,255,0.03)]
               backdrop-filter backdrop-blur-sm bg-opacity-0 p-[2rem]"
          >
            <p className="font">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>{" "}
            <br /> <br />
            <h2 className="text-[1.3rem] text-[rgba(212,52,254)]">
              Licensing Policy
            </h2>{" "}
            <br />
            <h3>Here are terms of our Standard License:</h3> <br />
            <ul className="">
              <li className="font text-[0.8rem]">
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </li>{" "}
              <br />
              <li className="font text-[0.8rem]">
                You are licensed to use the item available at any free source
                sites, for your project developement
              </li>
            </ul>{" "}
            <br />
            <div className="flex justify-center items-center">
              <button
                className="font px-8 py-3 bg-gradient-to-r
                rounded-sm from-[rgba(144,58,255,1)] via-[rgba(212,52,254,1)] to-[rgba(254,52,185,1)]"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-[50%] relative">
          <img src={vector} alt=""/>
          <img src={lock} alt=""  
          className="absolute bottom-[-25vh] md:bottom-[30vh] 
          lg:bottom-[10vh]"/>
        </div>
      </div>
    </>
  );
};

export default PrivacyComponent;
