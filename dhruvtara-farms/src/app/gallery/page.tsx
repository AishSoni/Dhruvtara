import { client } from '../../sanity/lib/client';
import { urlFor } from '../../sanity/lib/image';
import Image from 'next/image';

interface GalleryItem {
  _id: string;
  title: string;
  description: string;
  image: any; // Sanity image asset
}

const GalleryPage = async () => {
  const galleryItems: GalleryItem[] = await client.fetch('*[_type == "gallery"]');

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-12">Our Gallery</h1>
      {galleryItems.length === 0 ? (
        <p className="text-center text-xl">No gallery items found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {galleryItems.map((item) => (
            <div key={item._id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {item.image && (
                <div className="relative w-full h-48">
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GalleryPage;