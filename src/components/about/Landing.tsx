
import bg from "../../assets/bg.svg"
const Hero = () => {
  return (
    <div>
      <div className=''>
<div className="relative ">
<img src={bg} alt="Background" className="w-full h-auto blur-2xl object-cover" />


<div className="absolute top-[100px] left-[5%] md:left-[10%] w-[90%] md:w-[800px] flex flex-col items-start gap-0 opacity-80">
<h1
className="text-[#26326D] font-light md:text-[74px] text-4xl md:leading-[88.81px] text-left font-medium "
style={{ fontFamily: 'Luxora Grotesk, sans-serif' }}
>
Hi, 
<br />
<span className="block md:inline font-medium">How did we reach here, you ask?</span>
</h1>
</div>
</div>

{/* Story Section */}
<div className="hidden md:block absolute bottom-5 right-5 w-[85%] md:w-[600px]  p-5 ">
<p className="text-[#444444] font-light text-base md:text-lg " style={{ fontFamily: 'Luxora Grotesk, sans-serif' }}>
So, a few years ago, Mayank (co-founder) went to Ankit (also co-founder) to ask him, “Why don’t we hire a marketing agency?” 
(for their healthcare business) and from that day onwards, both set out to find an agency that not only understood the unique challenges of the healthcare industry but also delivered tangible results. 
They were met with one disappointment after another. And that’s when Ankit said, “Why don’t we start a medical marketing agency ourselves?”
<br />
<br />
That day, they decided to set out on a journey to learn and grow and solve the problem they were facing. Not just for themselves but for the entire healthcare industry.
<br />
<br />
So we are here!
</p>
</div>  
</div>
    </div>
  )
}

export default Hero;
