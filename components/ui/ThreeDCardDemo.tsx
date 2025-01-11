"use client";

import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { certificates } from "@/data";
import Link from "next/link";
import Image from "next/image";

export function ThreeDCardDemo() {
  const [showAll, setShowAll] = useState(false);
  const initialCertificates = certificates.slice(0, 3);
  const displayedCertificates = showAll ? certificates : initialCertificates;

  const handleShowMore = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-6">
        {displayedCertificates.map((certificate, index) => (
          <CardContainer key={index} className="inter-var w-[24rem]">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-violet-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {certificate.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {certificate.desc}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={certificate.img}
                  height="1000"
                  width="1000"
                  className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-5">
                <CardItem
                  translateZ={20}
                  href={certificate.link}
                  as={Link}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Visit →
                </CardItem>
                {/* <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Sign up
                </CardItem> */}
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button
          onClick={handleShowMore}
          className='bg-purple text-black-100 rounded-full border-white px-12 py-4'>
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
}
