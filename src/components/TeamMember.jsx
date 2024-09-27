// src/components/TeamMember.jsx
import React from 'react';

const TeamMember = ({ name, role, imageSrc, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex">
      <img src={imageSrc} alt={name} className="w-24 h-24 rounded-full mr-6" />
      <div>
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-600">{role}</p>
        <p className="text-gray-700 mt-4">{description}</p>
      </div>
    </div>
  );
};

export default TeamMember;
