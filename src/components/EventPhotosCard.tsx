import React from 'react';
import { redirect } from 'next/navigation';

const EventPhotosCard: React.FC = () => {
  return (
    <div className="relative color-gray-800 text-black p-8 rounded-lg shadow-md flex flex-col justify-center items-center text-center aspect-[4/3]">
      <div className="relative z-10">
        <h2 className="text-xl font-bold mb-2 uppercase">Dhruvtara Farms Gallery</h2>
        <p className="text-lg mb-6">
          A small glimpse of the events and the garden.
        </p>
        <button
          onClick={() => redirect('/contact')}
          className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors"
        >
          Get a quote
        </button>
      </div>
    </div>
  );
};

export default EventPhotosCard;