"use client";

import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import SideBarColor from './SideBarColor';

const FAQ = () => {

    const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if already open
    } else {
      setOpenIndex(index); // Open the clicked item
    }
  };

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer:
        'The timeline depends on the complexity of the project. Small PCB designs might take a few weeks, while more complex IoT systems could take longer. We’ll provide a clear timeline during the planning phase.',
    },
    {
      question: 'Can you customize solutions for my specific needs?',
      answer: 'Yes, we specialize in tailoring solutions to fit your exact requirements.',
    },
    {
      question: 'What is the cost of your services?',
      answer: 'Our costs vary depending on the project scope. Contact us for a detailed quote.',
    },
    {
      question: 'Do you offer post-project support?',
      answer: 'Yes, we offer post-project support to ensure everything runs smoothly after completion.',
    },
    {
      question: 'What industries do you work with?',
      answer:
        'We work across various industries, including agriculture, defense, healthcare, and more.',
    },
  ];

    return (
        <section className="container flex text-white">
            <SideBarColor/>
        <div className="max-w-full mx-auto">
          {/* FAQ Header */}
          <div className="text-start mb-12">
            <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="text-gray-400 mt-4">
              Got questions? We have got answers. Here are some of the most common questions we get about our services. If you need more information, feel free to reach out!
            </p>
          </div>
  
          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-700 rounded-lg bg-[#F5F5F54D] ">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-4 text-left text-gray-200 hover:bg-gray-700 focus:outline-none"
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  {openIndex === index ? (
                    <FaChevronUp className="text-gray-400" />
                  ) : (
                    <FaChevronDown className="text-gray-400" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="p-4 text-gray-400 bg-gray-900 border-t border-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default FAQ;