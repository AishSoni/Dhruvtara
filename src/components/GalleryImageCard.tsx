"use client";

import React from 'react';
import Image from 'next/image';
import { urlFor } from '../sanity/lib/image';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

interface GalleryItem {
  _id: string;
  title: string;
  description: string;
  image: SanityImageSource; // Sanity image asset
}

interface GalleryImageCardProps {
  item: GalleryItem;
  onClick: () => void;
}

const GalleryImageCard: React.FC<GalleryImageCardProps> = ({ item, onClick }) => {
  return (
    <div
      key={item._id}
      className="relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      {item.image && (
        <div className="relative w-full pb-[75%]"> {/* Enforce 4:3 aspect ratio (height/width = 3/4 = 0.75) */}
          <Image
            src={urlFor(item.image).url()}
            alt={item.title}
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 rounded-t-lg"
          />
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
        <h2 className="text-xl font-semibold">{item.title}</h2>
      </div>
    </div>
  );
};

export default GalleryImageCard;