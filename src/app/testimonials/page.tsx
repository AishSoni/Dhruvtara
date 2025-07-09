import { client } from '../../sanity/lib/client';
import React from 'react';

interface TestimonialItem {
  _id: string;
  author: string;
  content: string;
  rating?: number;
}

const TestimonialsPage = async () => {
  const testimonials: TestimonialItem[] = await client.fetch('*[_type == "testimonial"]');

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h1>
      {testimonials.length === 0 ? (
        <p className="text-center text-xl">No testimonials found yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial._id} className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 line-clamp-6 text-lg mb-4">&quot;{testimonial.content}&quot;</p>
              <p className="font-semibold text-right">- {testimonial.author}</p>
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
      )}
    </div>
  );
};

export default TestimonialsPage;
