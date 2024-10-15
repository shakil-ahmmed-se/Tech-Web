import React from 'react';
import InquiryButton from './InquiryButton';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between">
                {/* Left Side: Logo and Inquiry */}
                <div className="flex flex-col space-y-4 w-full md:w-1/3">
                    <h2 className="text-2xl text-white font-semibold">TechWeb</h2>
                    <p>TechWeb specializes in PCB design, embedded systems, and IoT solutions. Our team provides reliable tech services that make technology simple and accessible for everyone.</p>
                    <div>
                    <InquiryButton />
                    </div>
                </div>

                {/* Middle Links Section */}
                <div className="flex w-full md:w-1/3 justify-around mt-8 md:mt-0">
                    <div className="flex flex-col space-y-2">
                        <h4 className="text-white font-semibold">About us</h4>
                        <a href="#" className="hover:text-white">Services</a>
                        <a href="#" className="hover:text-white">Portfolio</a>
                        <a href="#" className="hover:text-white">Feedback</a>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <h4 className="text-white font-semibold">Privacy Policy</h4>
                        <a href="#" className="hover:text-white">Terms</a>
                        <a href="#" className="hover:text-white">Conditions</a>
                        <a href="#" className="hover:text-white">Cookie Policy</a>
                    </div>
                </div>

                {/* Right Side: Contact Info */}
                <div className="w-full md:w-1/3 mt-8 md:mt-0">
                    <p className="font-semibold text-white">example@domain.com</p>
                    <p>+01 234 567 8910</p>
                    <a href="#" className="hover:text-white inline-block mt-2">Navigate our Location &rarr;</a>

                    {/* Social Icons */}
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fas fa-code"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center text-gray-500 mt-8 text-sm">
                © 2024 TechWeb | All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;