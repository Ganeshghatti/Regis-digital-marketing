
import founder from "../../assets/founder.svg";

const Founder = () => {
  return (
    <div className="relative">
      {/* Centered Heading */}
      <div className="flex justify-center items-center h-auto mb-4"> 
        <h1
          className="text-[#26326D] text-4xl md:text-[74px] font-light leading-[1.2]"
          style={{ fontFamily: 'Luxora Grotesk, sans-serif' }}
        >
          Meet the Founders
        </h1>
      </div>

      {/* Responsive Image */}
      <div className="flex justify-center mb-4">
        <img 
          src={founder} 
          alt="Founders" 
          className="w-full md:w-[1038px] h-auto rounded-[50px]" 
          style={{ maxHeight: '649px' }} 
        />
      </div>
      
      {/* Rectangle with Orange Background (Bottom Left) */}
      <div className=" hidden md:block absolute bottom-0 left-0 w-[380px] h-[230px] bg-[#EF633D] font-[16px] mx-6 mb-8 rounded-[20px] p-6">
        <h2 className="text-white font-bold text-xl" style={{ fontFamily: 'Luxora Grotesk, sans-serif' }}>
          CEO - Ankit Soni
        </h2>
        <p className="text-white font-light text-base mt-4">
          So a few years ago, Mayank (co-founder) went to Ankit (also co-founder) to ask him “Why don’t we hire a marketing agency?” (for their healthcare business) and from that day onwards, both set out to find an agency that not only understood the unique challenges.
        </p>
      </div>

      {/* Rectangle with Orange Background (Top Right) */}
      <div className="hidden md:block absolute top-28 right-0 w-[380px] h-[230px] bg-[#202C61] font-[16px] mx-8 mt-16 rounded-[20px] p-6">
        <h2 className="text-white font-bold text-xl" style={{ fontFamily: 'Luxora Grotesk, sans-serif' }}>
        CEO - Mayank Chapanera
        </h2>
        <p className="text-white font-light text-base mt-4">
        So a few years ago, mayank (co-founder) went to ankit (also co-founder) to ask him “why don’t we hire a marketing agency?” (for their healthcare business) and from that day onwards both set out to find an agency that not only understood the unique challenges 
        </p>
      </div>
    </div>
  );
};

export default Founder;
