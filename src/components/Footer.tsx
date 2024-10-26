

const Footer = () => {
  return (
    <div>
      <div 
        className="bg-[#26326D] rounded-lg w-full h-auto p-6" // Added padding for better spacing
      >
        <div className="text-white text-center">
          <h2 className="text-5xl  font-semibold mb-4">LET’S OPERATE</h2> {/* Change to your footer title */}
          <p className="mb-2">© {new Date().getFullYear()} Website by Regis Digital.</p>
         
        </div>
      </div>
    </div>
  );
}

export default Footer;
