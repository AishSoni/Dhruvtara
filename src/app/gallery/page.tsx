"use client";

import { client } from '../../sanity/lib/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import EventPhotosCard from '../../components/EventPhotosCard';
import GalleryImageCard from '../../components/GalleryImageCard';
import ImageModal from '../../components/ImageModal';
import { useState, useEffect } from 'react';

interface GalleryItem {
  _id: string;
  title: string;
  description: string;
  image: SanityImageSource; // Sanity image asset
}

const GalleryPage = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchGalleryItems = async () => {
      const items: GalleryItem[] = await client.fetch('*[_type == "gallery"]');
      setGalleryItems(items);
    };
    fetchGalleryItems();
  }, []);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-deep-blue p-8">
      {galleryItems.length === 0 ? (
        <p className="text-center text-xl text-white">No gallery items found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <EventPhotosCard />
          {galleryItems.map((item, index) => (
            <GalleryImageCard key={item._id} item={item} onClick={() => openModal(index)} />
          ))}
        </div>
      )}
      {isModalOpen && (
        <ImageModal
          images={galleryItems}
          initialIndex={currentImageIndex}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default GalleryPage;