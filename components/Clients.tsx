"use client";

import React from "react";
import { ThreeDCardDemo } from './ui/ThreeDCardDemo';

import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { BackgroundBoxesDemo } from "./BackgroundBoxDemo";

const Clients = () => {
  return (
    <section id="certifications" className="pt-20">
      <h1 className="heading">
        Internships and 
        <span className="text-purple"> Certifications</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center mt-8">
        <ThreeDCardDemo />
      </div>
    </section>
  );
};

export default Clients;