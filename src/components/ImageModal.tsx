"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { urlFor } from '../sanity/lib/image';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

interface GalleryItem {
  _id: string;
  title: string;
  description: string;
  image: SanityImageSource; // Sanity image asset
}

interface ImageModalProps {
  images: GalleryItem[];
  initialIndex: number;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ images, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const currentImage = images[currentIndex];

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        goToNext();
      } else if (event.key === 'ArrowLeft') {
        goToPrevious();
      } else if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToNext, goToPrevious, onClose]);

  if (!currentImage) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
      <div className="relative w-full max-w-6xl h-full max-h-[90vh] flex flex-col">
        {/* Close Button and Download/Share (Placeholder) */}
        <div className="absolute top-4 right-4 z-10 flex space-x-4">
          <button onClick={onClose} className="text-white text-3xl p-2 rounded-full bg-gray-800 bg-opacity-50 hover:bg-gray-700 transition-colors">
            &times;
          </button>
        </div>

        {/* Main Image */}
        <div className="relative flex-grow flex items-center justify-center mb-4">
          <Image
            src={urlFor(currentImage.image).url()}
            alt={currentImage.title}
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
          {/* Navigation Arrows */}
          <button onClick={goToPrevious} className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl p-2 rounded-full bg-gray-800 bg-opacity-50 hover:bg-gray-700 transition-colors">
            &lsaquo;
          </button>
          <button onClick={goToNext} className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl p-2 rounded-full bg-gray-800 bg-opacity-50 hover:bg-gray-700 transition-colors">
            &rsaquo;
          </button>
        </div>

        {/* Description */}
        <div className="bg-gray-800 bg-opacity-70 p-4 rounded-lg text-white text-center mb-4">
          <h3 className="text-2xl font-bold mb-2">{currentImage.title}</h3>
          <p className="text-lg">{currentImage.description}</p>
        </div>

        {/* Carousel Thumbnails */}
        <div className="flex justify-center space-x-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <div
              key={image._id}
              className={`relative w-20 h-20 flex-shrink-0 cursor-pointer rounded-md overflow-hidden ${index === currentIndex ? 'border-2 border-white' : ''}`}
              onClick={() => setCurrentIndex(index)}
            >
              <Image
                src={urlFor(image.image).url()}
                alt={image.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;