import Image from "next/image";
import Link from "next/link";

const TrekCard = ({ 
  imageSrc, 
  title, 
  description, 
  difficulty, 
  duration,
  trekLeads = [],
  id = "valley-of-flowers" // Default ID for now, should be dynamic in real app
}) => {
  // Convert title to URL-friendly slug if no ID is provided
  const trekId = id || title.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="relative">
        <div className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-full text-sm font-medium z-10">
          FEATURED
        </div>
        <Image 
          src={imageSrc} 
          alt={title} 
          width={400}
          height={300}
          className="w-full h-[300px] object-cover"
        />
      </div>
      <div className="p-6">
          <span className="text-gray-600 text-xl font-bold">{title}</span> 
        <div className="flex items-center gap-2 mb-3">
          <span className="text-gray-600 text-sm">{duration}</span>
          <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
          <span className="text-gray-600 text-sm">{difficulty}</span>
        </div>
        <p className="text-gray-600 mb-6 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <Link href={`/treks/${trekId}`}>
            <button className="bg-blue-900 text-white px-4 py-2 text-sm font-normal hover:bg-blue-800 transition whitespace-nowrap">
                KNOW MORE
            </button>
          </Link>
          <div className="flex items-center gap-4">
            {trekLeads.map((lead, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-sm text-gray-400">Trek Lead:</span>
                <span className="text-sm text-black font-medium">{lead}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrekCard;