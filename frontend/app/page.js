"use client"
import Image from "next/image";


export default function Home() {
  return (
    <div className="font-sans">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 bg-transparent absolute w-full z-10">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Explorer Logo" width={40} height={40} className="rounded-full" />
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="text-white hover:text-gray-300">About Us</a>
          <a href="#treks" className="text-white hover:text-gray-300">Treks</a>
          <a href="#tours" className="text-white hover:text-gray-300">Tours</a>
          <a href="#gallery" className="text-white hover:text-gray-300">Gallery</a>
        </div>
        <button className="bg-white text-blue-900 px-4 py-2 rounded-md font-medium">Contact Us</button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image 
            src="/discoverbg.png" 
            alt="Mountain Range" 
            fill 
            style={{objectFit: "cover"}}
            priority
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
        <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Unleash Your Inner Explorer</h1>
          <button className="bg-white text-blue-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">Get Started</button>
        </div>
      </section>

      {/* Upcoming Treks Section */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Upcoming Treks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Trek Card 1 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="h-48 relative">
                <Image 
                  src="/Container.png" 
                  alt="Trek destination" 
                  fill 
                  style={{objectFit: "cover"}}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Himalayan Adventure</h3>
                <p className="text-gray-400 mb-4">Experience the majestic beauty of the Himalayas with our expert guides.</p>
                <div className="flex justify-between mb-4">
                  <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">Book Now</button>
                  <div className="flex space-x-2">
                    <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs">Hot</span>
                    <span className="bg-yellow-600 text-white px-2 py-1 rounded-full text-xs">Featured</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trek Card 2 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="h-48 relative">
                <Image 
                  src="/Container.png" 
                  alt="Trek destination" 
                  fill 
                  style={{objectFit: "cover"}}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Alpine Expedition</h3>
                <p className="text-gray-400 mb-4">Discover the breathtaking views of the Alpine mountains on this journey.</p>
                <div className="flex justify-between mb-4">
                  <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">Book Now</button>
                  <div className="flex space-x-2">
                    <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs">Hot</span>
                    <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs">New</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trek Card 3 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="h-48 relative">
                <Image 
                  src="/Container.png" 
                  alt="Trek destination" 
                  fill 
                  style={{objectFit: "cover"}}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Andes Exploration</h3>
                <p className="text-gray-400 mb-4">Journey through the magnificent Andes mountains with our experienced team.</p>
                <div className="flex justify-between mb-4">
                  <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">Book Now</button>
                  <div className="flex space-x-2">
                    <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs">Limited</span>
                    <span className="bg-yellow-600 text-white px-2 py-1 rounded-full text-xs">Featured</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition">See More</button>
          </div>
        </div>
      </section>

      {/* Discover Section */}
      <section className="relative py-16">
        <div className="absolute inset-0">
          <Image 
            src="/discover.png" 
            alt="Mountain explorer" 
            fill 
            style={{objectFit: "cover"}}
          />
          {/* <div className="absolute inset-0 bg-blue-900 opacity-70"></div> */}
        </div>
        <div className="container mx-auto relative z-10 px-4 h-110">
          <div className="max-w-2xl text-white">
            <h2 className="text-6xl font-bold mb-4 text-blue-900">Discover the world with us</h2>
            <p className="mb-6 text-black ">
            We the Himalayan Explorers&apos; Club (HEC) was founded in 1971. In between 1971 & 1974 the Institute Sports Association nurtured the Mountaineering & Trekking Club which fostered all mountaineering, trekking and outward bound activities amongst science, engineering and professional student community of the Indian Institute of Technology Roorkee.
            </p>
            <button className="bg-white text-blue-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">KNOWN MORE</button>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 px-4 bg-black">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Activities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="aspect-square bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-black">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="aspect-square bg-gray-300 rounded-lg md:col-span-2 md:row-span-2"></div>
            <div className="aspect-square bg-gray-300 rounded-lg"></div>
            <div className="aspect-square bg-gray-300 rounded-lg"></div>
          </div>
          <div className="text-center mt-8">
            <button className=" text-white px-6 py-2 rounded hover:bg-grey-100 hover:text-white transition"><u>VIEW MORE</u></button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-black">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">What Explorers says</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h3 className="font-bold">John Smith</h3>
                  <p className="text-sm text-red-600">Experienced</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600">&ldquo;This was the trip of a lifetime! The views were incredible and the guides were knowledgeable and friendly. I can&apos;t wait to book my next adventure.&rdquo;</p>
            </div>

            {/* Testimonial 2 */}
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h3 className="font-bold">Sarah Johnson</h3>
                  <p className="text-sm text-blue-600">Adventure Seeker</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600">&ldquo;The trek was challenging but so rewarding. The team made sure we were safe and comfortable throughout the journey. Highly recommend!&ldquo;</p>
            </div>

            {/* Testimonial 3 */}
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h3 className="font-bold">Michael Chen</h3>
                  <p className="text-sm text-green-600">Nature Lover</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600">&ldquo;An unforgettable experience that connected me with nature in ways I never imagined. The landscapes were breathtaking and the memories will last forever.&ldquo;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Image src="/logo.png" alt="HEC Logo" width={80} height={80} className="rounded-full mr-4" />
              {/* <div> */}
                {/* <h3 className="font-bold text-xl mb-1">Himalayan Explorers&apos; Club</h3> */}
                {/* <p className="text-sm">the students organization of IIT Roorkee</p> */}
              {/* </div> */}
            </div>
            <p className="text-gray-400 text-sm mb-6 max-w-xl">
              Himalayan Explorers&apos; Club - the students organization of IIT Roorkee pioneering in trekking, mountaineering and adventure sports. HEC was founded in 1971. In between 1971 & 1974 the Institute Sports Association nurtured the Mountaineering & Trekking Club which fostered all mountaineering, trekking and outward bound activities amongst science, engineering and professional student community of the Indian Institute of Technology Roorkee.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex flex-col space-y-2">
                <a href="#about" className="text-white hover:text-gray-300">About us</a>
                <a href="#treks" className="text-white hover:text-gray-300">Treks</a>
                <a href="#team" className="text-white hover:text-gray-300">Team</a>
                <a href="#gallery" className="text-white hover:text-gray-300">Gallery</a>
              </div>
            </div>
            <div>
              <div className="flex flex-col space-y-4">
                <div>
                  <p className="text-sm">Email:</p>
                  <p className="text-white">hec@iitr.ac.in</p>
                </div>
                <div>
                  <p className="text-sm">Phone:</p>
                  <p className="text-white">+01332-28-4381</p>
                </div>
                <div>
                  <p className="text-sm">Address:</p>
                  <p className="text-white">HEC Office, 2nd Floor Multi Activity Center, IIT Roorkee</p>
                  <p className="text-white">Roorkee, Uttarakhand-247667</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>@copyright2025</p>
        </div>
      </footer>
    </div>
  );
}
