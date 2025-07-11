'use client';
import React from 'react';
import { MdEmail, MdPhone } from 'react-icons/md'; // Assuming react-icons is installed

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-12">
      <div className="text-center mb-8">
        <h1 className="text-6xl font-bold text-gray-800">Get in touch</h1>
        <p className="text-2xl text-gray-600 mt-2 flex items-center justify-center">
          <MdEmail className="mr-2" /> Email: dhdhruvtararesort@gmail.com
        </p>
        <p className="text-2xl text-gray-600 flex items-center justify-center">
          <MdPhone className="mr-2" /> Phone: +91 88612 05345
        </p>
        <button
          className="md:hidden bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={() => window.location.href = 'tel:+918861205345'}
        >
          Call Now
        </button>
        <br />
        <br />
        <button
          className="md:hidden bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={() => window.location.href = 'https://wa.me/918861205345'}
        >
          Chat on Whatsapp
        </button>
      </div>
      <div className="w-full max-w-4xl px-4">
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.4175681832785!2d79.85149667590728!3d23.1549551113738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b1aa3f421e31%3A0xdd5a62be39ab5547!2sDhruvtara%20Farms!5e0!3m2!1sen!2sin!4v1751288006436!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div className="w-full max-w-4xl px-4 mt-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Frequently Asked Questions (FAQ)</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-gray-700">Where is Dhruvtara Resorts located?</h3>
            <p className="text-xl text-gray-600 mt-2">Dhruvtara Resorts is located near Andhmuk bypass, main road, beside Reliance petrol pump, Tewar, Madhya Pradesh 482003 — Google Maps location pin provided above.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-700">What kind of events can be hosted at Dhruvtara?</h3>
            <p className="text-xl text-gray-600 mt-2">We host weddings, receptions, haldi/mehndi functions, corporate retreats, pre-wedding photoshoots, day outings, family gatherings, and private celebrations.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-700">Is Dhruvtara Resorts a pure vegetarian property?</h3>
            <p className="text-xl text-gray-600 mt-2">Yes, we are 100% pure vegetarian 🟢 and offer a wide range of delicious vegetarian cuisine.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-700">How many guests can your venue accomodate?</h3>
            <p className="text-xl text-gray-600 mt-2">Our spacious lawns and event areas can comfortably host both intimate functions and large weddings with up to 500+ guests.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-700">Do you offer wedding planning and decoration services?</h3>
            <p className="text-xl text-gray-600 mt-2">Yes, we provide end-to-end support including décor, event setup, logistics, and vendor coordination.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-700">Can we bring our own vendors for decor or catering?</h3>
            <p className="text-xl text-gray-600 mt-2">We have in-house services, but you&apos;re welcome to bring your own vendors. Prior approval is required.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-700">Can photoshoots be hosted at Dhruvtara?</h3>
            <p className="text-xl text-gray-600 mt-2">Absolutely! Our natural landscape, elegant setups, and scenic spaces are perfect for shoots.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-700">What kind of rooms and cottages are available?</h3>
            <p className="text-xl text-gray-600 mt-2">We offer luxurious superior cottages with modern amenities for overnight stays and event guests.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage;