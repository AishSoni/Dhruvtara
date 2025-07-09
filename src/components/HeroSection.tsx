import React from 'react';
import Link from 'next/link';
import { client } from '../sanity/lib/client';

interface TestimonialItem {
  _id: string;
  author: string;
  content: string;
  rating?: number;
}
const HeroSection: React.FC = async () => {
  const testimonials: TestimonialItem[] = await client.fetch('*[_type == "testimonial"]');

  return (
    <>
      <section className="relative h-screen w-full flex items-center justify-center text-center text-white">
      {/* Background Video/Image */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://dhruvtararesorts.com/wp-content/uploads/2025/06/dhruvtara_farms_1745057490_3614123864584191072_55015345524-online-video-cutter.com_.mp4" // Placeholder for video
        autoPlay
        loop
        muted
        playsInline
        suppressHydrationWarning={true}
      >
        Your browser does not support the video tag.
      </video>
      {/* Fallback Image for browsers that don't support video or if video fails */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{ backgroundImage: 'url(/src/img/logo.png)' }} // Placeholder for image
      ></div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 p-4 md:p-8">
        <h1 className="text-3xl md:text-6xl font-bold mb-4 animate-fade-in-up">
          A premium wedding and event destination of <br/><i>timeless celebrations & unforgettable moments</i>
        </h1>
        <h2 className="text-xl md:text-xl font-bold mb-4 animate-fade-in-up">
          Weddings • Events • Lawn • Premium Stays • Decor & Catering
        </h2>
        <p className="text-lg md:text-xl mb-8 animate-fade-in-up animation-delay-200">
          Your perfect destination for weddings, events, and serene getaways.
        </p>
        <Link href="/gallery" passHref>
          <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors duration-300 animate-fade-in-up animation-delay-400">
            Explore Our Offerings
          </button>
        </Link>
        <br/>
        <br/>
        <Link href="/contact" passHref>
          <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors duration-300 animate-fade-in-up animation-delay-400">
            Book an Event
          </button>
        </Link>
      </div>
    </section>
    <section className="py-16 px-4 md:px-8 bg-gray-100">
      <h2 className="text-6xl md:text-6xl font-bold text-center mb-12 text-gray-800">What Our Customers Say</h2>
      {testimonials.length === 0 ? (
        <p className="text-center text-xl text-gray-600">No testimonials found yet.</p>
      ) : (
        <div className="relative w-full overflow-hidden max-w-6xl mx-auto">
          <div className="flex animate-infinite-scroll space-x-8 py-4">
            {testimonials.concat(testimonials).map((testimonial, index) => (
              <div key={`${testimonial._id}-${index}`} className="flex-none w-80 bg-white rounded-lg shadow-md p-6 testimonial-item">
                <p className="text-gray-700 text-lg mb-4 line-clamp-6">&quot;{testimonial.content}&quot;</p>
                <p className="font-semibold text-right text-gray-900">- {testimonial.author}</p>
                {testimonial.rating && (
                  <div className="flex justify-end mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
    </>
  );
};

export default HeroSection;