import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../assets/logo.svg"
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`w-full bg-white sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
            <nav className="max-w-6xl mx-auto p-4">
                <div className="flex items-center justify-between">
                    {/* Logo Section */}
                    <div className="logo-section">
                        <img src={logo} alt="Logo" className="md:w-50 h-10" />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex justify-center space-x-6 bg-[#EDEDEDCC] rounded-full px-6 py-2">
                        <a href="#" className="text-gray-800 font-semibold transition-colors duration-300 hover:text-blue-600">About Us</a>
                        <a href="#" className="text-gray-800 font-semibold transition-colors duration-300 hover:text-blue-600">What We Do</a>
                        <a href="#" className="text-gray-800 font-semibold transition-colors duration-300 hover:text-blue-600">Projects</a>
                    </div>

                    {/* Contact Button */}
                    <div className="hidden md:block">
                        <button className="bg-gradient-to-r from-[#26326D] to-[#EF633D] text-white rounded-full py-2 px-6 transition-shadow duration-300 hover:shadow-lg">
                            Contact Us
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`flex flex-col mt-4 space-y-2 ${isOpen ? 'block' : 'hidden'}`}>
                    <a href="#" className="text-gray-800 font-semibold">About Us</a>
                    <a href="#" className="text-gray-800 font-semibold">What We Do</a>
                    <a href="#" className="text-gray-800 font-semibold">Projects</a>
                    <button className="bg-gradient-to-r from-[#26326D] to-[#EF633D] text-white rounded-full py-2 w-full transition-shadow duration-300 hover:shadow-lg">
                        Contact Us
                    </button>
                </div>
            </nav>
        </header>
    );
}
