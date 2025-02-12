import React, { useEffect, useRef, useState } from "react";
import WAVES from "vanta/dist/vanta.waves.min.js";
import imageb from "../../assets/Cropped_Image2.png";
import image from "../../assets/image.png";
import { Button } from "@nextui-org/react";

export default function HomePage() {
  const vantaRef = useRef(null);
  const [currentHeading, setCurrentHeading] = useState(0);
  const [animationKey, setAnimationKey] = useState(0); // Key to re-trigger animation

  // Vanta.js Effect Setup
  useEffect(() => {
    const vantaEffect = WAVES({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 300.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x5e8f92,
      shininess: 60,
      waveHeight: 30,
      waveSpeed: 1.5,
      zoom: 1,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  const headings = [
    "Backend Developer",
    "MERN Stack Developer"
  ];
  const greeting = "Hello,";
  const name = "I'm Vikash Kumar";
  const description ="Self motivated person and Enthustatic to learn something new to improve from present days";
  const buttonText = "Download CV";
  const resume = "https://drive.google.com/file/d/1iX-9CzcozHcENxHoW2uJNC0RiK_VSYC_/view?usp=sharing"

  // Heading Animation Effect
  useEffect(() => {
    if (headings.length === 0) return;

    const interval = setInterval(() => {
      setCurrentHeading((prev) => (prev + 1) % headings.length);
      setAnimationKey((prev) => prev + 1); // Trigger animation
    }, 3000);

    return () => clearInterval(interval);
  }, [headings.length]);

  return (
    <div ref={vantaRef} className="relative w-full h-[80vh] flex flex-col md:flex-row items-center md:justify-center p-2 md:p-32" >
      {/* Left Section */}
      <div className="flex flex-col md:max-w-lg relative">
        {/* Mobile Image */}
        <img src={image} alt="Profile" className="md:hidden w-[300px] h-[520px] object-cover mt-4 ml-12" />

        {/* Text Section */}
        <div className="absolute md:relative top-2/3 md:top-0 left-4 md:left-0 flex flex-col sm:gap-2 md:gap-8 text-black text-left">
          <div className="text-lg font-semibold">{greeting}</div>

          <div className="text-2xl md:text-4xl md:font-semibold font-bold">
            <span className="text-yellow-300 md:text-[#5e3bee]">{name}</span>
            <br />
            <span key={animationKey} className="fade-in">{headings[currentHeading]}</span>
          </div>

          <div className="font-medium">{description}</div>

          <a href={resume}>
            <button className="bg-[#5e3bee] w-full text-white text-lg p-2 rounded hover:bg-[#4b2fbf] transition duration-300">
              {buttonText}
            </button>
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:block ml-20 bg-sky-300 rounded-lg">
        <img
          src={imageb}
          alt="Profile"
          className="rounded-lg"
          style={{ width: "400px", height: "400px" }}
        />
      </div>
    </div>
  );
}
