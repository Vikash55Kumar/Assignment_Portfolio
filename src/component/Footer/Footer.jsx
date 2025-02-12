import React from "react";
import Linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Footer() {
  return (
    <div className="bg-sky-50 w-full flex flex-col items-center text-black py-10">
      <section className="max-w-6xl w-full flex flex-col md:flex-row justify-between px-6 md:px-12">
        {/* Connect Links */}
        <div className="flex flex-col w-full md:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold">Reach out to me here</h2>
          <p className="text-base">
            Feel free to ping me for volunteering, discussing your ideas, or grabbing a cup of coffee.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.linkedin.com/in/software-enginner-vikash">
              <img src={Linkedin} alt="LinkedIn" className="w-12" />
            </a>
            <a href="https://github.com/Vikash55Kumar">
              <img src={github} alt="GitHub" className="w-12" />
            </a>
          </div>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col w-full md:w-1/2 space-y-6 mt-6 md:mt-0">
          <h2 className="text-2xl font-semibold">Have a Question?</h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <a
                href="https://maps.app.goo.gl/hdAeQ1oacGPoDW3B8"
                className="flex items-center space-x-3 hover:underline"
              >
                <LocationOnIcon className="text-white" />
                <span>
                  NH-62, JIET College, New Pali Road, Jodhpur, Rajasthan, India
                  <br /> PIN: 842802
                </span>
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <PhoneIcon />
              <span>+91 35842253</span>
            </li>
            <li className="flex items-center space-x-3">
              <EmailRoundedIcon />
              <a href="mailto:vikashcbsb@gmail.com" className="hover:underline">
                vikashcbsb@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </section>
      <footer className="w-full text-center mt-10 text-lg font-light">
        Made with ❤️ by <b>Vikash Kumar</b>
      </footer>
    </div>
  );
}
