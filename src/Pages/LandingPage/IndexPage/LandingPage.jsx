import { useEffect, useRef, useState } from "react";
import Herosection from "../Herosection/Herosection";
import Introduction from "../Introduction/Index";
import '../../../App.css';
import Custom_Cursor from "../../Custom_Cursor/Custom_Cursor";
import RuleAndGuideLines from "../GuideLine/Index";
import Attribute from "../Attribute/Attribute";
import FrequentlyAskQuestions from "../FAQ/Index";
import TimeLine from "../Timeline/Index";
import PriceAndAwards from "../Prices/Index";
import Partners_Sponsors from "../Partners/Index";
import Privacy from "../Privacy/Index";
import Footer from "../Footer2/Index";

const LandingPage = () => {
  const [position, setPosition] = useState({x:'-100px', y:'-100px'});

  const starRef = useRef(null);
  const createStar = () =>{

    const star = document.createElement('div');
    star.className = 'star';
    star.style.width = `${Math.random() * 3}px`;
    star.style.height = star.style.width;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    return star;
  };

  const generateStars = (star)=>{
    for (let i = 0; i < star; i++) {
      const star = createStar();
      // document.body.appendChild(star);
      starRef.current.appendChild(star);
    }
  };
  
  useEffect(() => {
    generateStars(100);
  }, []); 

  return (
    <>
      <div ref={starRef} 
      className=" cursor-none"
       onMouseMove={(e)=>setPosition({x: e.clientX, y:e.clientY})}>
        <Custom_Cursor position={position}/>
        <Herosection />
        <Introduction />
        <RuleAndGuideLines/>
        <Attribute />
        <FrequentlyAskQuestions/>
        <TimeLine />
        <PriceAndAwards />
        <Partners_Sponsors />
        <Privacy />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
