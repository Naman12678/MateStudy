// src/components/ServiceCard.jsx
import React from 'react';
import Card from './Card';

const ServiceCard = ({ title, description, imageSrc }) => {
  return <Card title={title} description={description} imageSrc={imageSrc} />;
};

export default ServiceCard;
