import Clients from "./about/Clients";
import Founder from "./about/Founder";
import Hero from "./about/Landing";

import Footer from "./Footer";
import Navbar from "./Navbar";


const About = () => {
  return (
    <div>
      <Navbar />

    <div >

     <Hero/>
    </div>
     <div className="mb-10">

     <Founder/>
     </div>
     <Clients/>
     <Footer/>
    </div>
  );
};

export default About;
