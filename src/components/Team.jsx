// src/components/Team.jsx
import React from 'react';
import TeamMember from './TeamMember';

const Team = () => {
  const teamMembers = [
    { name: 'Naman Sharma', role: 'Founder & CEO', imageSrc: 'pp.jpg', description: 'Naman is passionate about helping others succeed.' },
    { name: 'Yashvardhan Sharma', role: 'Community Manager', imageSrc: 'pp.jpg', description: 'Yashvardhan manages the learning community.' },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
