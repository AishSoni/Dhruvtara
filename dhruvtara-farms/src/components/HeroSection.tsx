import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center text-white">
      {/* Background Video/Image */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/src/videos/hero-background.mp4" // Placeholder for video
        autoPlay
        loop
        muted
        playsInline
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
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
          Welcome to Dhruvtara Farms
        </h1>
        <p className="text-lg md:text-xl mb-8 animate-fade-in-up animation-delay-200">
          Your perfect destination for weddings, events, and serene getaways.
        </p>
        <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors duration-300 animate-fade-in-up animation-delay-400">
          Explore Our Offerings
        </button>
      </div>
    </section>
  );
};

export default HeroSection;