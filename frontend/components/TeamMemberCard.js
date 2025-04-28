import Image from 'next/image';

const TeamMemberCard = ({ image, name, vertical = "HIGH ALTITUDE" }) => {
  return (
    <div>
    <div className="flex flex-col items-start p-4 bg-white">
      <div className="relative w-48 h-48 overflow-hidden mb-4">
        <Image
          src={image}
          alt={`${name}'s photo`}
          fill
          style={{ objectFit: 'fill' }}
          className="hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-lg font-bold text-gray-900">{name}</h3>
      {vertical && (
        <p className="text-sm text-gray-600 uppercase">
          {vertical}
        </p>
      )}
    </div>
    </div>
  );
};

export default TeamMemberCard;