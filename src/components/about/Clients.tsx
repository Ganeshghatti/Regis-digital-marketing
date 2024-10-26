
import client from "../../assets/client.svg";

const Clients = () => {
  return (
    <div className="flex flex-col  mb-4">
      <h1
        className="text-[#26326D] text-[24px] font-light leading-[28.8px] tracking-[0.04em] text-left mx-6 md:mx-20 border-b border-[#747474] pb-2"
        style={{ fontFamily: 'Luxora Grotesk, sans-serif' }}
      >
        Our Clients
      </h1>

      {/* Client Image below the border */}
      <div className="flex justify-center items-center mt-4">
        <img 
          src={client} 
          alt="Clients" 
          className="w-full md:w-[600px] h-auto object-contain" // Responsive width, height auto, and maintain aspect ratio
        />
      </div>
    </div>
  );
}

export default Clients;
