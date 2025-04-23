"use client"
import Image from "next/image";
import TrekCard from '../../components/TrekCard';
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";

export default function Treks() {
  const upcomingTreks = [
    {
      title: "Himalayan Trek",
      description: "Experience the majestic beauty of the Himalayas with our expert guides.",
      imageSrc: "/Container.png",
      difficulty: "Moderate",
      duration: "7 Days",
      trekLeads: ["John Doe"]
    },
    {
      title: "Alpine Expedition",
      description: "Discover the breathtaking views of the Alpine mountains on this journey.",
      imageSrc: "/Container.png",
      difficulty: "Difficult",
      duration: "10 Days",
      trekLeads: ["Jane Smith"]
    },
    {
      title: "Mountain Adventure",
      description: "Journey through magnificent mountains with our experienced team.",
      imageSrc: "/Container.png",
      difficulty: "Easy",
      duration: "5 Days",
      trekLeads: ["Mike Johnson", "Sarah Lee"]
    }
  ];

  const topTreks = [
    {
      title: "Valley Trek",
      description: "Explore beautiful valleys and meadows on this amazing trek.",
      imageSrc: "/Container.png",
      difficulty: "Easy",
      duration: "3 Days",
      trekLeads: ["Robert Chen"]
    },
    {
      title: "Forest Trail",
      description: "Walk through ancient forests and discover hidden waterfalls.",
      imageSrc: "/Container.png",
      difficulty: "Moderate",
      duration: "4 Days",
      trekLeads: ["Emily Wong"]
    },
    {
      title: "Peak Climb",
      description: "Challenge yourself with this exciting peak climbing experience.",
      imageSrc: "/Container.png",
      difficulty: "Difficult",
      duration: "8 Days",
      trekLeads: ["David Miller"]
    },
    {
      title: "Lake Trek",
      description: "Visit pristine mountain lakes and camp under the stars.",
      imageSrc: "/Container.png",
      difficulty: "Moderate",
      duration: "6 Days",
      trekLeads: ["Lisa Park"]
    },
    {
      title: "Ridge Walk",
      description: "Experience breathtaking views from mountain ridges.",
      imageSrc: "/Container.png",
      difficulty: "Moderate",
      duration: "5 Days",
      trekLeads: ["Alex Turner"]
    },
    {
      title: "Glacier Trek",
      description: "Explore ancient glaciers and ice formations.",
      imageSrc: "/Container.png",
      difficulty: "Difficult",
      duration: "9 Days",
      trekLeads: ["Maria Garcia", "Tom Wilson"]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-screen">
        <Image
          src="/trekmain.png"
          alt="Mountains"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <Navbar />
        
        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-wider font-serif">
            EXPLORE THE HEIGHTS
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl font-light tracking-wide">
            Discover breathtaking trails and unforgettable adventures with our expert-led treks
          </p>
        </div>
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
              difficulty={trek.difficulty}
              duration={trek.duration}
              trekLeads={trek.trekLeads}
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
              difficulty={trek.difficulty}
              duration={trek.duration}
              trekLeads={trek.trekLeads}
            />
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}