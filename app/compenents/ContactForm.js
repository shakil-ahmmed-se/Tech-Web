import React from 'react';
import SideBarColor from './SideBarColor';

const ContactForm = () => {
    return (
        <section className=" flex container text-white py-20">
            
            <SideBarColor/>
            <div className="container mx-auto px-4">
                {/* Top Text */}
                <div className="text-start mb-8">
                    <h2 className="text-3xl font-bold mb-4">Let us Start a Conversation</h2>
                    <p className="text-lg text-gray-300">
                        Whether you are looking for more details about our services or ready to kick off your project, we would love to hear from you. Contact us today, and let us explore how we can work together to achieve your tech goals.
                    </p>
                </div>

                {/* Map and Form Section */}
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Map */}
                    <div className="w-full md:w-1/2 h-auto rounded-lg overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.2572814946983!2d90.4059438142983!3d23.81033298456357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c747b43ddbd7%3A0xb6b327e8e4a2a13!2sDhaka%2C+Bangladesh!5e0!3m2!1sen!2sbd!4v1632214517229!5m2!1sen!2sbd"
                            className="w-full h-full border-0"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Location Map"
                        ></iframe>
                    </div>

                    {/* Form */}
                    <div className="w-full md:w-1/2 bg-gray-800 p-8 rounded-lg">
                        <h3 className="text-xl font-semibold mb-6">Send Message</h3>
                        <form>
                            <div className="flex gap-4 mb-4">
                                <input
                                    type="text"
                                    placeholder="First name"
                                    className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    type="text"
                                    placeholder="Last name"
                                    className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="tel"
                                    placeholder="+880 Phone number"
                                    className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <textarea
                                    placeholder="How can we help?"
                                    maxLength="120"
                                    className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition duration-300"
                            >
                                Submit
                            </button>
                        </form>
                        <p className="mt-4 text-gray-400 text-sm">
                            By contacting us, you agree to our <a href="#" className="underline">Terms of Use</a> and <a href="#" className="underline">Privacy Policy</a>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;