import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-adam-light uppercase">
          DHRUVTARA FARMS
        </Link>
        <div className="space-x-4">
          <Link href="/gallery" className="text-gray-300 hover:text-white">
            Gallery
          </Link>
          <Link href="/testimonials" className="text-gray-300 hover:text-white">
            Testimonials
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">
            Contact Us
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white">
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
}