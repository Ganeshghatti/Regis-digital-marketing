import React from 'react';
import bg from "../../assets/bg.svg";

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background container */}
      <div className="absolute inset-0">
        <img 
          src={bg} 
          alt="Background" 
          className="w-full h-full object-cover blur-2xl"
        />
      </div>

      {/* Content wrapper */}
      <div className="relative h-full">
        {/* Heading section */}
        <div className="absolute top-[100px] left-[5%] md:left-[10%] w-[90%] md:w-[800px]">
          <h1
            className="text-[#26326D] font-light md:text-[74px] text-4xl md:leading-[88.81px] text-left font-medium"
            style={{ fontFamily: 'Luxora Grotesk, sans-serif' }}
          >
            Hi,
            <br />
            <span className="block md:inline font-medium mt-2">
              How did we reach here, you ask?
            </span>
          </h1>
        </div>

        {/* Story Section */}
        <div className="absolute bottom-8 right-5 w-full md:w-[600px] p-5 md:bottom-6 ">
          <p 
            className="text-[#444444] font-light text-base md:text-lg space-y-4"
            style={{ fontFamily: 'Luxora Grotesk, sans-serif' }}
          >
            So, a few years ago, Mayank (co-founder) went to Ankit (also co-founder) to ask him, 
            "Why don't we hire a marketing agency?" (for their healthcare business) and from that 
            day onwards, both set out to find an agency that not only understood the unique challenges 
            of the healthcare industry but also delivered tangible results. They were met with one 
            disappointment after another. And that's when Ankit said, "Why don't we start a medical 
            marketing agency ourselves?"
            
            <br /><br />
            
            That day, they decided to set out on a journey to learn and grow and solve the problem 
            they were facing. Not just for themselves but for the entire healthcare industry.
            
            <br /><br />
            
            So we are here!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;