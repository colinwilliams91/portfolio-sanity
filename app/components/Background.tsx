"use client";
import React, { useEffect, useRef, useState } from "react";
import GLOBE from "vanta/dist/vanta.globe.min";
import * as THREE from "three";

const Background: React.FC = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    // <-- how to attach script to <head> with Next.js / React
    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
    );
    document.getElementsByTagName("head")[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xff3fff,
          color2: 0x870ff2,
          size: 1.5,
          backgroundColor: 0x15082f,
        })
      );
    }
    // return () => {
    //   if (vantaEffect) vantaEffect.destroy();
    // };
  }, [vantaEffect]);

  return (
    // <div className="flex absolute justify-center align-middle w-full h-[1620px] -z-30 overflow-hidden">
    <>
      <main
        ref={vantaRef}
        id="vanta-canvas"
        className="block absolute -z-20 top-0 left-0 w-full h-[1622px] overflow-hidden"
      ></main>
      <main
        id="blur-box"
        className="block absolute -z-20 top-0 left-0 w-full h-[1622px] backdrop-blur-[3px] overflow-hidden"
      ></main>
      {/* // </div> */}
    </>
  );
};

export default Background;

{
  /* <script src="three.r134.min.js"></script>
      <script src="vanta.globe.min.js"></script>
      <script>
        VANTA.GLOBE({
          el: "#your-element-selector",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00
        })
      </script> */
}
