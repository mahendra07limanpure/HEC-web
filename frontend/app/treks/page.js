"use client"
import Image from "next/image";
import TrekCard from "@/components/TrekCard";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";

export default function Treks() {
  const upcomingTreks = [
    {
      title: "Himalayan Trek",
      description: "Experience the majestic beauty of the Himalayas with our expert guides.",
      imageSrc: "/Container.png"
    },
    {
      title: "Alpine Expedition",
      description: "Discover the breathtaking views of the Alpine mountains on this journey.",
      imageSrc: "/Container.png"
    },
    {
      title: "Mountain Adventure",
      description: "Journey through magnificent mountains with our experienced team.",
      imageSrc: "/Container.png"
    }
  ];

  const topTreks = [
    {
      title: "Valley Trek",
      description: "Explore beautiful valleys and meadows on this amazing trek.",
      imageSrc: "/Container.png"
    },
    {
      title: "Forest Trail",
      description: "Walk through ancient forests and discover hidden waterfalls.",
      imageSrc: "/Container.png"
    },
    {
      title: "Peak Climb",
      description: "Challenge yourself with this exciting peak climbing experience.",
      imageSrc: "/Container.png"
    },
    {
      title: "Lake Trek",
      description: "Visit pristine mountain lakes and camp under the stars.",
      imageSrc: "/Container.png"
    },
    {
      title: "Ridge Walk",
      description: "Experience breathtaking views from mountain ridges.",
      imageSrc: "/Container.png"
    },
    {
      title: "Glacier Trek",
      description: "Explore ancient glaciers and ice formations.",
      imageSrc: "/Container.png"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-screen">
        <Image
          src="/discoverbg.png"
          alt="Mountains"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <Navbar />
      </div>

      {/* Upcoming Treks Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-white">Upcoming Treks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingTreks.map((trek, index) => (
            <TrekCard
              key={index}
              title={trek.title}
              description={trek.description}
              imageSrc={trek.imageSrc}
            />
          ))}
        </div>
      </div>

      {/* Top Treks Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-white">Top Treks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topTreks.map((trek, index) => (
            <TrekCard
              key={index}
              title={trek.title}
              description={trek.description}
              imageSrc={trek.imageSrc}
            />
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-4">
            <Image
              src="/logo.png"
              alt="HEC Logo"
              width={60}
              height={60}
              className="rounded-full"
            />
          </div>
          <p className="text-center text-gray-400 text-sm">
            © 2024 Himalayan Explorers' Club. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}  