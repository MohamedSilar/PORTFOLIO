"use client";
import React, { useState } from 'react';
import { projects } from '@/data';
import { PinContainer } from './ui/3d-pin';
import { FaLocationArrow } from 'react-icons/fa';

const RecentProjects = () => {
  const [showAll, setShowAll] = useState(false);
  const initialProjects = projects.slice(0, 4);
  const displayedProjects = showAll ? projects : initialProjects;

  const handleShowMore = () => {
    setShowAll(!showAll);
  };

  return (
    <div className='py-20' id='projects'>
      <h1 className='heading'>
        My <span className='text-purple'>Recent Projects</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 mt-5'>
        {displayedProjects.map(({ id, title, des, img, iconLists, link }) => (
          <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10 ">
                <div className='relative w-full h-full overflow-hidden rounded-3xl bg-[#25283e]'>
                  <img src='/bg.png' alt='background' />
                </div>
                <img src={img} alt={title} className='z-10 w-full h-full absolute bottom-0 rounded-3xl object-cover ' />
              </div>
              <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>{title}</h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2" style={{ color: "#BEC1DD", margin: "1vh 0" }}>{des}</p>
              <div className='flex items-center justify-between mt-7 mb-3'>
                <div className='flex items-center'>
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img alt='icons' src={icon} className='p-2' />
                    </div>
                  ))}
                </div>
                <div className='flex justify-center items-center'>
                  <a href={link} className='flex lg:text-xl md:text-xs text-sm text-purple'>Check Live Site</a>
                  <FaLocationArrow className='ms-3' color='#cbacf9' />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
      <div className='flex justify-center mt-10'>
        <button onClick={handleShowMore} className='bg-purple text-black-100 rounded-full border-white px-12 py-4'>
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
}

export default RecentProjects;
