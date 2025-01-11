import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { IoDocumentAttachOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="pb-20 pt-28">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative my-20 z-10 gap-3">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 ">
            Learning to full-stack development
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Hi There! I'm Mohamed Silar"
          />
          <h2 className="uppercase tracking-widest text-md text-center text-blue-100">
            Velammal College of Engineering and Technology, Madurai
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <a
              target="_blank"
              href="https://linkedin.com/in/mohamed-silar-374a09284"
              className="flex w-full"
            >
              <MagicButton
                title="Linkedin"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/166VVNwxG0XYjwqoAgtYm82sQDDLKQZii/view?usp=drive_link"
              className="flex w-full"
            >
              <MagicButton
                title="My Resume"
                icon={<IoDocumentAttachOutline />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
