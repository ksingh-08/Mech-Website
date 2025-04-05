import React from "react";

const FeatureCard = ({ title, description, Icon }) => {
  return (
    <div className="flex items-center text-center bg-white shadow-md rounded-lg p-6 border">
      <div className="text-red-700 text-3xl mr-4">{Icon}</div>
      <div>
        <h3 className="flex text-lg justify-center items-center font-semibold">{title}</h3>
        <p className="text-center text-gray-700 ">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
