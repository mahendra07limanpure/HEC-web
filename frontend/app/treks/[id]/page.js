"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useParams } from "next/navigation";
import Link from "next/link";

// This would typically come from an API or database
const getTrekData = (id) => {
  const treks = {
    "valley-of-flowers": {
      title: "Valley of Flowers",
      heroImage: "/valley-of-flowers.png", // Replace with your actual image
      description: "A Legendary Trail the World Wants to Trek in",
      longDescription: `The Valley of Flowers trek is one of India’s most popular treks in the Himalayas. People who haven’t even stepped into the Himalayas, have heard about the Valley of Flowers trek. But there is a solid reason behind Valley Of Flower’s legendary popularity – it is one of India’s oldest known treks.
      
       <br>
      In 1980, the Indian government created the Valley of Flowers National Park, and later in 2002, it was recognized as a UNESCO World Heritage Site. This pushed Valley of Flowers on the bucket list of trekkers from around the world.
      Having said that, you must note that the Valley Of Flowers trek is not easy. It is a moderate level trek, with slightly longer trekking days and a steep ascent to Hemkund Sahib that will challenge your endurance. So, prepare well for this trek. We have talked in detail about this in the ‘difficulty’ section of this trek guide.
      This extensive trek guide contains all details you need to know to do this trek.
      And, it also contains an interesting insight, a story of how one can fall in love with Himalayan treks after trekking to the Valley of Flowers and Hemkund Sahib. Yes, that can happen. We know because it happened with Sandhya UC, Co-Founder and COO of Indiahikes.`,
      difficulty: "Moderate",
      duration: "6 Days",
      altitude: "3,858m",
      distance: "37 Kilometers",
      trekLeads: ["Savraj Singh", "Mahendra Negi"],
      itinerary: [
        {
          day: "Day 1",
          title: "Drive from Rishikesh to Karanprayag",
          details: "Drive Distance: 200 km | Drive Duration: 11 hours | Pick up point for trekkers: Lakshman Jhula | From Hotel Rishikesh | Pick up Time: 6 am | Location of Basecamp: Karanprayag"
        },
        {
          day: "Day 2",
          title: "Drive from Rishikesh to Karanprayag",
          details: "Drive Distance: 200 km | Drive Duration: 11 hours | Pick up point for trekkers: Lakshman Jhula | From Hotel Rishikesh | Pick up Time: 6 am | Location of Basecamp: Karanprayag"
        },
        {
          day: "Day 3",
          title: "Drive from Rishikesh to Karanprayag",
          details: "Drive Distance: 200 km | Drive Duration: 11 hours | Pick up point for trekkers: Lakshman Jhula | From Hotel Rishikesh | Pick up Time: 6 am | Location of Basecamp: Karanprayag"
        },
        {
          day: "Day 4",
          title: "Drive from Rishikesh to Karanprayag",
          details: "Drive Distance: 200 km | Drive Duration: 11 hours | Pick up point for trekkers: Lakshman Jhula | From Hotel Rishikesh | Pick up Time: 6 am | Location of Basecamp: Karanprayag"
        },
        {
          day: "Day 5",
          title: "Drive from Rishikesh to Karanprayag",
          details: "Drive Distance: 200 km | Drive Duration: 11 hours | Pick up point for trekkers: Lakshman Jhula | From Hotel Rishikesh | Pick up Time: 6 am | Location of Basecamp: Karanprayag"
        },
        {
          day: "Day 6",
          title: "Drive from Rishikesh to Karanprayag",
          details: "Drive Distance: 200 km | Drive Duration: 11 hours | Pick up point for trekkers: Lakshman Jhula | From Hotel Rishikesh | Pick up Time: 6 am | Location of Basecamp: Karanprayag"
        }
      ],
      teamMembers: [
        {
          name: "Savraj Singh",
          role: "Trek Lead",
          image: "/trek-lead-vof.png"
        },
        {
          name: "Mahendra Negi",
          role: "Trek Lead",
          image: "/NEGI.png"
        }
      ],
      pastExperiences: [
        { image: "/experience1.jpg" },
        { image: "/experience2.jpg" },
        { image: "/experience3.jpg" },
        { image: "/experience4.jpg" }
      ]
    }
    // Add more treks as needed
  };
  
  return treks[id] || null;
};

export default function TrekDetailPage() {
  const params = useParams();
  const trekData = getTrekData(params.id);
  
  if (!trekData) {
    return <div className="min-h-screen bg-black text-white flex items-center justify-center">Trek not found</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        <Image
          src={trekData.heroImage || "/valley-of-flowers.jpg"}
          alt={trekData.title}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <Navbar />
        
        {/* Trek Title */}
        <div className="absolute bottom-1/4 w-full text-center">
          <h1 className="text-[58px] font-normal text-white mb-8 tracking-[0.04em] leading-[100%]" 
              style={{ fontFamily: 'Camica, sans-serif' }}>
            {trekData.title}
          </h1>
          
          {/* Trek Info */}
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="flex items-center gap-2 bg-black/50 px-4 py-2 rounded-md">
              <Image src="/icons/difficulty.png" alt="Difficulty" width={24} height={24} />
              <span>Difficulty: {trekData.difficulty}</span>
            </div>
            <div className="flex items-center gap-2 bg-black/50 px-4 py-2 rounded-md">
              <Image src="/icons/calendar.png" alt="Duration" width={24} height={24} />
              <span>Duration: {trekData.duration}</span>
            </div>
            <div className="flex items-center gap-2 bg-black/50 px-4 py-2 rounded-md">
              <Image src="/icons/altitude.png" alt="Altitude" width={24} height={24} />
              <span>Max Altitude: {trekData.altitude}</span>
            </div>
            <div className="flex items-center gap-2 bg-black/50 px-4 py-2 rounded-md">
              <Image src="/icons/distance.png" alt="Distance" width={24} height={24} />
              <span>Total Distance: {trekData.distance}</span>
            </div>
          </div>
          
          <button className="mt-8 bg-white text-black px-6 py-3 font-medium hover:bg-gray-200 transition">
            REGISTER NOW
          </button>
        </div>
      </div>

      {/* Trek Description and Trek Leads (Side by Side) */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">{trekData.description}</h2>
          
          <div className="flex flex-col md:flex-row">
            {/* Left side - Description */}
            <div className="md:w-3/4">
              <div className="prose prose-lg prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: trekData.longDescription.replace(/\n\n/g, '<br><br>') }} />
              </div>
            </div>
            
            {/* Right side - Trek Leads */}
            <div className="md:w-1/4 flex flex-col items-center md:items-end space-y-4">
              {trekData.teamMembers.map((member, index) => (
                <div key={index} className="w-[172.8px] bg-white text-black rounded-md overflow-hidden shadow-md">
                  <div className="h-[179.88px] relative">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <h3 className="text-sm font-bold uppercase">{member.name}</h3>
                    <p className="text-xs text-gray-600 uppercase">TREK LEADER</p>
                    <p className="text-xs text-gray-500">+91 1234567890</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">Travel Itinerary</h2>
          <div className="space-y-6 relative">
            <div className="absolute top-0 bottom-0 left-[19px] w-0.5 bg-white"></div>
            {trekData.itinerary.map((day, index) => (
              <div key={index} className="relative pl-12 mb-6">
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{day.day}: {day.title}</h3>
                  <p className="text-gray-400">
                    {day.details.split('|').map((detail, i) => (
                      <span key={i} className="block mb-1">{detail.trim()}</span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-white text-black px-6 py-3 font-medium hover:bg-gray-200 transition">
              BOOK YOUR TREK NOW
            </button>
          </div>
        </div>
      </section>

      {/* Past Experiences */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Past Experiences</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trekData.pastExperiences.map((exp, index) => (
              <div key={index} className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
                <Image 
                  src={exp.image} 
                  alt="Past Experience" 
                  width={300} 
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />

      
      

      
    </div>
    
  );
}