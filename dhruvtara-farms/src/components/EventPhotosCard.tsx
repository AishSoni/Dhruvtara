import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const EventPhotosCard: React.FC = () => {
  return (
    <div className="relative bg-background-dark text-white p-8 rounded-lg shadow-md flex flex-col justify-end items-start h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden">
      {/* Background image/illustration - Placeholder for the Golden Gate Bridge */}
      <div className="absolute inset-0">
        {/* This could be an Image component with a specific illustration */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Placeholder for the Golden Gate Bridge illustration */}
          <Image
            src="/logo.png"
            alt="Dhruvtara Farms Logo"
            fill
            style={{ objectFit: 'cover' }}
            className="z-0"
          />
        </div>
      </div>

      <div className="relative z-10 text-left">
        <h2 className="text-2xl font-bold mb-2">Our Gallery</h2>
        <p className="text-lg mb-6">
          This is our gallery.
        </p>
      </div>
    </div>
  );
};

export default EventPhotosCard;