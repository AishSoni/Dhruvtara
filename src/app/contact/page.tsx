import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12">
      <div className="w-full max-w-4xl px-4">
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.4175681832785!2d79.85149667590728!3d23.1549551113738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b1aa3f421e31%3A0xdd5a62be39ab5547!2sDhruvtara%20Farms!5e0!3m2!1sen!2sin!4v1751288006436!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;