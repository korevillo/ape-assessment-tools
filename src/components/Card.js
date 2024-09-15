import React from 'react';
import './Card.css'; // Optional: for custom styles

const Card = ({ data }) => {
  return (
    <div className="card">
      <h2>{data[0]}</h2> {/* Adjust based on your data structure */}
      <p>{data[1]}</p> {/* Adjust based on your data structure */}
      {/* Add more fields as needed */}
    </div>
  );
};

export default Card;
