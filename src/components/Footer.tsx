import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <Link href="https://www.instagram.com/dhruvtara_farms/" target="_blank" rel="noopener noreferrer">
            <Image src="/instagram-icon.svg" alt="Instagram" width={24} height={24} className="filter invert" />
          </Link>
        </div>
        <p>&copy; {new Date().getFullYear()} Dhruvtara Farms. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;