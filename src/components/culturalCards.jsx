import React from "react";
import { Link } from "react-router-dom";

const CulturalCard = ({ site }) => {
  return (
    <Link to={`site/${site.$id}`}>
      <div className="w-80 h-96 mx-auto bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
        <div className="relative w-full h-48">
          <img
            className="w-full h-full object-cover"
            src={site.photos[0]}
            alt={site.name}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 p-4 flex flex-col justify-end">
            <h2 className="text-lg font-semibold text-white mb-2 text-shadow-md">{site.name}</h2>
            <p className="text-xs text-white text-shadow-md">{site.description}</p>
          </div>
        </div>
        <div className="p-4 border-t-4 border-gradient-to-r from-blue-500 to-green-400 shadow-lg rounded-lg h-40">
          <div className="flex flex-col space-y-1">
            <p className="text-xs text-gray-600">
              <strong>State:</strong> {site.state}
            </p>
            <p className="text-xs text-gray-600">
              <strong>City:</strong> {site.city}
            </p>
            <p className="text-xs text-gray-600">
              <strong>History:</strong> {site.history}
            </p>
            <p className="text-xs text-gray-600">
              <strong>Importance:</strong> {site.importance}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CulturalCard;
