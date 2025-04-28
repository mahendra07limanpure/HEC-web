import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>   {/* Navigation */}
    <nav className="flex justify-between items-center p-4 bg-transparent absolute w-full z-10">
    <div className="flex items-center">
      <Image src="/logo.png" alt="Explorer Logo" width={40} height={40} className="rounded-full" />
    </div>
    <div className="hidden md:flex space-x-6">
      <Link href="/about" className="text-white hover:text-gray-300">About Us</Link>
      <Link href="/treks" className="text-white hover:text-gray-300">Treks</Link>
      <Link href="/team" className="text-white hover:text-gray-300">Team</Link>
      <Link href="/gallery" className="text-white hover:text-gray-300">Gallery</Link>
    </div>
    <button className="bg-white text-blue-900 px-6 py-3 font-medium">Contact Us</button>
  </nav></div>
 
  );
}
