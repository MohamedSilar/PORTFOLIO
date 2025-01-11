"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

export function Approach() {
  return (
    <section className="w-full py-29">
  <h1 className="heading">
    My
    <span className="text-purple"> Frameworks</span>
  </h1>

  <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
    <Card 
        title="programming techniques" 
        icon={<AceternityIcon order="Programming" />}
        description="I employ various programming techniques such as Object-Oriented Programming (OOP) to create modular and reusable code, and Functional Programming for concise data processing using lambdas and the Stream API"
        >
        
      <CanvasRevealEffect
        animationSpeed={5}
        containerClassName="bg-[#4CAF50]"// 4CAF50
        colors={[
          [125, 211, 252], 
          [166, 195, 215], 
        ]}
      />
    </Card>
    <Card 
        title="Coding Strategies" 
        icon={<AceternityIcon order="Coding"/>}
        description="Coding Strategies involve methods that enhance the efficiency, maintainability, and scalability of code. Key aspects include modular design for reusability, prioritizing code readability for clarity, and employing version control for effective collaboration.">
      <CanvasRevealEffect
        animationSpeed={5}
        containerClassName="bg-[#F4A460]"
        colors={[
          [236, 72, 153],  
          [232, 121, 249], 
        ]}
      />
    </Card>
    <Card 
        title="Content Creation and Integration" 
        icon={<AceternityIcon order="Content"/>}
        description="Content, including text, images, videos, and other multimedia elements, is created and integrated into the website. This content is optimized for search engines and user experience.">
      <CanvasRevealEffect
        animationSpeed={5}
        containerClassName="bg-[#FF4500]"
        colors={[
          [125, 211, 252],
          [166, 195, 215], 
        ]}
      />
    </Card>
    <Card 
        title="Testing, Deployment, and Maintenance" 
        icon={<AceternityIcon order="Thrive"/>}
        description="The website is thoroughly tested to identify and fix any bugs or errors. Once approved, it is deployed to the live server.">
      <CanvasRevealEffect
        animationSpeed={5}
        containerClassName="bg-[#8A2BE2]" //8A2BE2
        colors={[
          [125, 211, 252], 
          [166, 195, 215], 
        ]}
      />
    </Card>
  </div>
</section>

  );
}

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto lg:h-[35rem] relative rounded-3xl p-4"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%]
        translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
          {title}
        </h2>
        <h2 className="text-sm dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-justify"
        style={{color:'#e4ecff'}}>
        {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({order}:{order:string}) => {
  return (
    <div>
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 text-2xl font-bold px-5 py-2 text-purple backdrop-blur-3xl">
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
