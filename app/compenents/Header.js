import Link from 'next/link';
import React from 'react';
import InquiryButton from './InquiryButton';

const Header = () => {
    return (
        <header className=" container bg-dark shadow-md  m-auto pt-4 ">
        <nav className="rounded-3xl  bg-white mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-blue-500 text-2xl font-bold">
            Tech<span className='text-black'>Web</span>
          </div>
          <ul className="flex space-x-6 text-gray-700">
            <li><Link href="#">About us</Link></li>
            <li><Link href="#">Services</Link></li>
            <li><Link href="#">Portfolio</Link></li>
            <li><Link href="#">Feedback</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
          <Link href="#">
            <InquiryButton/>
          </Link>
        </nav>
      </header>
    );
};

export default Header;