import fb from "./Images/fb.svg";
import instagram from "./Images/instagram.svg";
import linkedin from "./Images/linkedin.svg";
import twitter from "./Images/twitter.svg";
import call from "./Images/call.svg";
import location from "./Images/location.svg";

const FooterComponent = () => {
  return (
    <>
      <div
        className="bg-[rgba(16,11,32,1)] pt-[19vh] md:pt-[5vh]
           md:flex lg:px-[10vw] lg:gap-[5vw] lg:pb-[5vh] md:px-[5vw]
           md:pb-[5vh] md:gap-[3vw] px-[10vw]
        "
      >
        <div className="md:w-[40%]">
          <h1 className="lg:text-[1.4rem] md:text-[1.5rem] text-[1.5rem]">
            get <b className="text-[rgba(212,52,254,1)]">linked</b>{" "}
          </h1>{" "}
          <br />
          <p className="font">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
          <p>
            Terms of Use <span>|</span> Privacy Policy
          </p>
        </div>
        <div className="md:w-[30%] mt-[2rem] md:mt-0">
          <h3
            className=" text-[rgba(212,52,254,1)]
               lg:text-[1.2rem] md:text-[1.2rem]
          "
          >
            Useful Links
          </h3>{" "}
          <br />
          <ul className="font">
            <li>Overview</li>
            <li>Timeline</li>
            <li>FAQs</li>
            <li>Register</li>
          </ul>
          <span className="font flex lg:gap-[1.5vw] md:gap-[0.7rem] gap-[1.5vw]">
            <p>Follow us</p>
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
            <img src={fb} alt="fb" />
            <img src={linkedin} alt="linkedin" />
          </span>
        </div>
        <div className="md:w-[30%]">
          <h3 className="text-[rgba(212,52,254,1)] lg:text-[1.2rem] 
              md:text-[1.2rem] mt-[2rem] md:mt-0">
            Contact Us
          </h3>{" "}
          <br />
          <p className="flex gap-[1vw] font">
            <span className="lg:mt-[1vh] mt-[1vh]">
              <img src={call} alt="location" />
            </span>
            <span>+234 6707653444</span>
          </p>{" "}
          <br />
          <p className="flex gap-[1vw] font">
            <span className="lg:mt-[1vh] mt-[1vh]">
              <img src={location} alt="location" />
            </span>
            <span>27,Alara Street Yaba 100012 Lagos State</span>
          </p>
        </div>
      </div>
      <hr />
      <div className="bg-[rgba(16,11,32,1)] font text-center py-10">
        <span className="font flex gap-[1vh] md:gap-[1.5vw] justify-center items-center">
          <p className="text-[0.8rem] md:[1.5rem]">Created By olamilekan Oluwapelumi</p>
          <a
            href="https://www.instagram.com/olami_js/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} alt="instagram" />
          </a>
          <a
            href="https://twitter.com/olami_js"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="twitter" />
          </a>
          <img src={fb} alt="fb" />
          <img src={linkedin} alt="linkedin" />
        </span>
      </div>
    </>
  );
};

export default FooterComponent;
