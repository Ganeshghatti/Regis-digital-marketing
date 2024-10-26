import React from 'react';
import bg from "../../assets/bg.svg";
import ProjectNav from './ProjectNav';

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background container */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={bg}
          alt=""
          className="w-full h-full object-cover blur-2xl"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-white/50" /> {/* Optional overlay */}
      </div>

      {/* Content container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-3xl">
          <h1 
            className="text-[#26326D] font-light text-4xl md:text-[65px] leading-tight md:leading-[1.37] tracking-tight font-medium"
            style={{ fontFamily: "Luxora Grotesk, sans-serif" }}
          >
            Hey Doctor,
            <span className="block font-medium mt-2 md:mt-4">
              You're doing <span className="inline">amazing work.</span>{' '}
              <span className="block md:inline">Let's share it with the world!</span>
            </span>
          </h1>

     
        </div>
      </div>
    </section>
  );
};

export default Hero;