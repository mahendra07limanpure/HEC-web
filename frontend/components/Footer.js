"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Section - Logo and Description */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="HEC Logo"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <p className="text-sm text-gray-300 max-w-xl">
              Himalayan Explorers' Club - the students organization of IIT Roorkee
              pioneering in trekking, mountaineering and adventure sports. HEC was
              founded in 1971. In between 1971 & 1974 the Institute Sports
              Association nurtured the Mountaineering & Trekking Club which
              fostered all mountaineering, trekking and outward bound activities
              amongst science, engineering and professional student community of
              the Indian Institute of Technology Roorkee.
            </p>
          </div>

          {/* Right Section - Navigation and Contact Information */}
          <div className="md:w-1/3 flex flex-col justify-start">
            {/* Navigation Links */}
            <div className="mb-6">
              <nav className="flex space-x-8 border-b border-blue-500 pb-2">
                <Link href="/about" className="hover:text-gray-300">About us</Link>
                <Link href="/treks" className="hover:text-gray-300">Treks</Link>
                <Link href="/team" className="hover:text-gray-300">Team</Link>
                <Link href="/gallery" className="hover:text-gray-300">Gallery</Link>
              </nav>
            </div>
            
            {/* Contact Information */}
            <div className="text-sm space-y-4">
              <div>
                <p className="mb-1">Email: <span className="text-gray-300">hec@iitr.ac.in</span></p>
              </div>
              <div>
                <p className="mb-1">Phone: <span className="text-gray-300">+01332-28-4381</span></p>
              </div>
              <div>
                <p className="mb-1">Address: <span className="text-gray-300">HEC Office, 2nd Floor Multi Activity Center, IIT Roorkee</span></p>
                <p className="text-gray-300">Roorkee, Uttarakhand-247667</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-right mt-8 text-gray-500 text-sm">
          <p>@copyright2025</p>
        </div>
      </div>
    </footer>
  );
}