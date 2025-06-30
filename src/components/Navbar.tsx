import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-main p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-dark text-2xl font-adam-light uppercase flex items-center">
          <Image
            src="/logo-transparent.png"
            alt="Dhruvtara Farms Logo"
            width={50}
            height={50}
            className="mr-2"
          />
          DHRUVTARA FARMS
        </Link>
        <div className="space-x-4">
          <Link href="/gallery" className="text-dark hover:text-gray-500">
            Gallery
          </Link>
          <Link href="/testimonials" className="text-dark hover:text-gray-500">
            Testimonials
          </Link>
          <Link href="/contact" className="text-dark hover:text-gray-500">
            Contact Us
          </Link>
          <Link href="/about" className="text-dark hover:text-gray-500">
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
}