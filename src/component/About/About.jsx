import React, { useEffect, useRef } from "react";
import imageb from "../../assets/Cropped_Image2.png";
import * as THREE from "three"; // Import THREE.js
import BIRDS from "vanta/dist/vanta.birds.min"; // Correct import for Vanta.js

export default function About() {
  const vantaRef = useRef(null);
  
  useEffect(() => {
    const vantaEffect = BIRDS({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      backgroundColor: 0xffffff
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);
  const description =
    "I am a dedicated B-Tech student with a passion for Java problem-solving and MERN stack development. I have experience working on projects like 'Degiclean – Turning Waste into Value! 🌍♻️', where I utilized EJS, CSS, Node.js, Express, MongoDB, and Google OAuth (Passport). I also specialize in creating user-friendly MERN portfolio websites. Proficient in HTML, CSS, JavaScript, React.js, Node.js, Express, and MongoDB, I bring both technical skills and hands-on design experience with Canva. I’m a quick learner, adaptable, and a strong advocate for collaboration. In my free time, I enjoy mentoring, coding, and reading.";

  return (
    <section ref={vantaRef} className="min-h-[80vh] flex flex-col lg:flex-row items-center justify-between mx-auto max-w-6xl w-full mt-8  px-6">
      {/* Image Container */}
      <div className="rounded-lg overflow-hidden bg-sky-300">
        <img
          src={imageb}
          alt="Profile"
          className="w-[400px] h-[400px] object-cover rounded-lg"
        />
      </div>

      {/* Text Container */}
      <div className="flex flex-col items-center text-left ml-8 lg:items-start lg:text-left w-full lg:w-1/2 gap-4">
        <h2 className="text-3xl font-semibold pt-6">About Me</h2>
        <p className="text-base text-black font-medium max-w-3xl">
          {description}
        </p>
      </div>
    </section>
  );
}
