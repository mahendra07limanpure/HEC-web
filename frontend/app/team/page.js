"use client";
import TeamMemberCard from '@/components/TeamMemberCard';
import { useState } from 'react';

export default function TeamPage() {
  const [selectedYear, setSelectedYear] = useState('2024-25');
  
  const teamMembers = {
    facultyAdvisor: [
      { name: "FACULTY ADVISOR", image: "/NEGI.png" }
    ],
    overallSecretary: [
      { name: "OVERALL SECRETARY", image: "/NEGI.png" }
    ],
    deputySecretary: [
      { name: "DEPUTY SECRETARY", image: "/NEGI.png" },
      { name: "DEPUTY SECRETARY", image: "/NEGI.png" },
      { name: "DEPUTY SECRETARY", image: "/NEGI.png" },
      { name: "DEPUTY SECRETARY", image: "/NEGI.png" }
    ],
    jointSecretary: [
      { name: "JOINT SECRETARY 1", image: "/NEGI.png" },
      { name: "JOINT SECRETARY 2", image: "/NEGI.png" },
      { name: "JOINT SECRETARY 3", image: "/NEGI.png" },
      { name: "JOINT SECRETARY 4", image: "/NEGI.png" }
    ]
  };

  const years = ['2024-25', '2023-24', '2022-23', '2021-20'];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[100vh]">
        <div className="absolute inset-0 bg-[url('/teamhero.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 className="text-7xl font-bold text-white mb-4">Meet the Team</h1>
            <h2 className="text-2xl text-white mb-4">Where team work makes the dream work</h2>
            
            {/* Year Selection Buttons */}
            <div className="absolute bottom-20 left-0 right-0">
              <div className="flex justify-center gap-8">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`text-white text-xl border-b-2 pb-2 m-4 p-20 transition-all ${
                      selectedYear === year ? 'border-white' : 'border-transparent hover:border-white/50'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the team sections */}
      <div className="container mx-auto py-16 px-4">
        {/* Faculty Advisor Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Faculty Advisor</h2>
          <div className="flex justify-center">
            {teamMembers.facultyAdvisor.map((member, index) => (
              <TeamMemberCard
                key={index}
                image={member.image}
                name={member.name}
                vertical="FACULTY ADVISOR"
              />
            ))}
          </div>
        </div>

        {/* Overall Secretary Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Overall Secretary</h2>
          <div className="flex justify-center">
            {teamMembers.overallSecretary.map((member, index) => (
              <TeamMemberCard
                key={index}
                image={member.image}
                name={member.name}
                vertical="OVERALL SECRETARY"
              />
            ))}
          </div>
        </div>

        {/* Deputy Secretary Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Deputy Secretary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.deputySecretary.map((member, index) => (
              <TeamMemberCard
                key={index}
                image={member.image}
                name={member.name}
                vertical="DEPUTY SECRETARY"
              />
            ))}
          </div>
        </div>

        {/* Joint Secretary Section */}
        <div>
          <h2 className="text-2xl font-bold text-center mb-8">Joint Secretary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.jointSecretary.map((member, index) => (
              <TeamMemberCard
                key={index}
                image={member.image}
                name={member.name}
                vertical="JOINT SECRETARY"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}