import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[70px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
           <span className="text-purple">  Ready to take your</span> outside
          digital presence to the next level
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how i can help you
          acheive your goals
        </p>
        <a href="mailto:mohamedsilar26@gmail.com">
          <MagicButton
            title="Let's catch up"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col lg:px-40  justify-between items-center">
        <p className="md:text-base text-small md:font-normal font-thin">
        <span className="text-purple">  Email id:mohamedsilar26@gmail.com</span><br />
          Phone Number:+91 9345354812<br />
          Copyright ©️ 2024 Mohamed Silar
        </p>
        <div className="flex items-center md:gap-3 mt-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 hover:bg-violet-500 transition-all duration-300 rounded-lg border border-black-300"
            >
              <a href={profile.link} className="">
                <img
                  src={profile.img}
                  alt={profile.alt}
                  height={20}
                  width={20}
                    loading="lazy"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
