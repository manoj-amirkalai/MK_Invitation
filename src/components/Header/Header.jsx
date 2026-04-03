import React, { useEffect } from "react";
import PILLAR_B64 from "../../assets/templebg.avif";
import "./Header.css";
import vinayagar from "../../assets/vinayagar.png";
import leftFlower from "../../assets/left.webp";
import rightFlower from "../../assets/coconut.png";
import banana from "../../assets/banana.png";
import ScrollReveal from "scrollreveal";

const Header = () => {
  useEffect(() => {
   ScrollReveal({
        origin: "left",
        distance: "200px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal("#leftflower", { delay: 750 });

      ScrollReveal({
        origin: "left",
        distance: "200px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal("#rightflower", { delay: 750 });

      ScrollReveal({
        origin: "bottom",
        distance: "200px",
        duration: 700,
        reset: true,
        opacity: 0,
      }).reveal("#vinayagar", { delay: 500 });
  }, []);
  
  return (
    <div
      style={{
        width: 440,
        minHeight: '50vh',// Container width
        display: "flex", // Now flex works on the div
        justifyContent: "center", // Centers the coconut
        alignItems: "center",
        backgroundImage: `url(${PILLAR_B64})`, // Use the imported variable
        backgroundSize: "fit",
        backgroundPosition: "center 0px",
        padding: "20px", // Space around the coconut
      }}
    >
       {/* <img
        src={leftFlower} // Your coconut image path
        alt="leftFlower"
        id="leftflower"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: '100px', // Coconut size relative to the div
          display: "block",
          margin: "0 auto", // Center the coconut
        }}
      />  */}
       {/* <img
        src={leftFlower} // Your coconut image path
        alt="rightFlower"
        id="rightflower"
        style={{
          position: "absolute",
          top: 0,
          right : 0,
          width: '100px', // Coconut size relative to the div
          display: "block",
          margin: "0 auto", // Center the coconut
        }}
      />  */}
       <img
        src={vinayagar} // Your coconut image path
        alt="vinayagar"
        id="vinayagar"
        style={{
          position: "absolute",
          top: 150,
          left: 242,
          transform: "translate(-50%, -50%)", // Center the coconut
          height: '250px', // Coconut size relative to the div
          width: '250px', // Coconut size relative to the div
          display: "block",
          margin: "0 auto", // Center the coconut
        }}
      /> 
    </div>
  );
};

export default Header;
