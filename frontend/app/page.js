"use client";
import Image from "next/image";
import Testimonial from "../components/Testimonial";
import TrekCard from "../components/TrekCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="font-sans">
    
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/discoverbg.png"
            alt="Mountain Range"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
        <Navbar />
        <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-40">
            Unleash Your Inner Explorer
          </h1>
          <button className="bg-white text-blue-900 px-6 py-3 font-medium hover:bg-gray-100 transition">
            Let&apos;s Explore
          </button>
        </div>
      </section>

      {/* Upcoming Treks Section */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Upcoming Treks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TrekCard
              imageSrc="/Container.png"
              title="VALLEY OF FLOWERS"
              description="This trip takes you into the beating heart of the Dolomites, where we'll take on some of the most revered climbs in the world, surrounded by the breathtaking beauty of..."
              duration="5D/4N"
              difficulty="Moderate"
              trekLeads={["Savraj, xxxx", "Savraj, xxxx"]}
            />
            <TrekCard
              imageSrc="/Container.png"
              title="VALLEY OF FLOWERS"
              description="This trip takes you into the beating heart of the Dolomites, where we'll take on some of the most revered climbs in the world, surrounded by the breathtaking beauty of..."
              duration="5D/4N"
              difficulty="Moderate"
              trekLeads={["Savraj, xxxx", "Savraj, xxxx"]}
            />
            <TrekCard
              imageSrc="/Container.png"
              title="VALLEY OF FLOWERS"
              description="This trip takes you into the beating heart of the Dolomites, where we'll take on some of the most revered climbs in the world, surrounded by the breathtaking beauty of..."
              duration="5D/4N"
              difficulty="Moderate"
              trekLeads={["Savraj, xxxx", "Savraj, xxxx"]}
            />
            {/* Add more TrekCard components as needed */}
          </div>
          <div className="text-center mt-8">
            <button className="border-b border-white text-white px-6 py-2">
              VIEW MORE
            </button>
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
            style={{ objectFit: "cover" }}
          />
          {/* <div className="absolute inset-0 bg-blue-900 opacity-70"></div> */}
        </div>
        <div className="container mx-auto relative z-10 px-4 h-110">
          <div className="max-w-2xl text-white">
            <h2 className="text-6xl font-bold mb-4 text-blue-900">
              Discover the world with us
            </h2>
            <p className="mb-6 text-black ">
              We the Himalayan Explorers&apos; Club (HEC) was founded in 1971.
              In between 1971 & 1974 the Institute Sports Association nurtured
              the Mountaineering & Trekking Club which fostered all
              mountaineering, trekking and outward bound activities amongst
              science, engineering and professional student community of the
              Indian Institute of Technology Roorkee.
            </p>
            <button className="bg-white text-blue-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
              KNOWN MORE
            </button>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 px-4 bg-black">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">
            Activities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="aspect-square bg-gray-200 rounded-lg"
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-black">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">
            Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="aspect-square bg-gray-300 rounded-lg md:col-span-2 md:row-span-2"></div>
            <div className="aspect-square bg-gray-300 rounded-lg"></div>
            <div className="aspect-square bg-gray-300 rounded-lg"></div>
          </div>
          <div className="text-center mt-8">
            <button className="border-b text-white px-6 py-2 hover:bg-grey-100 hover:text-white transition">
              VIEW MORE
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-black">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Testimonial
              name="GARY SMITH"
              title="One very first guest!"
              description="This is a group of people who truly care about the world around them. That blew me away and I've been back every year since it started."
              stars={5}
            />
            <Testimonial
              name="JENNIFER BRYAN"
              title="An inspiration explorer"
              description="There is no place I would rather be than inGamba. Thank you for exceeding our expectations and making it the #BESTWEEKEVER."
              stars={3}
            />
            <Testimonial
              name="GARY SMITH"
              title="One very first guest!"
              description="I places, good food and wine. A"
              stars={5}
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
