import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { databases } from "../appwrite/appwrite";
import IndianFlagLoader from "./IndianFlagLoader";
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import Slider from "react-slick";

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

const borderStyle = {
  border: '5px solid',
  borderImage: 'linear-gradient(to right, #ff9933, #138808, #ffffff, #138808, #ff9933) 1',
  borderRadius: '10px',
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const CulturalDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [site, setSite] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSiteDetails = async () => {
      setIsLoading(true);
      try {
        const result = await databases.getDocument(
          "66d0c37a001cbbb08fb4", // Replace with your database ID
          "66d1e6f80003bdb5d96f", // Replace with your collection ID
          id                      // Document ID from URL parameter
        );
        setSite(result);
      } catch (error) {
        console.error("Error fetching site details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSiteDetails();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <IndianFlagLoader />
      </div>
    );
  }

  if (!site) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Site not found</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-blue-50 to-green-100 p-6">
      <div className="flex-1 bg-white shadow-xl rounded-lg overflow-hidden p-6 lg:mr-6 lg:w-2/3" style={borderStyle}>
        <button
          onClick={() => navigate(-1)}
          className="mb-4 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700"
        >
          Back
        </button>
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image Carousel */}
          <div className="w-full max-w-lg mx-auto">
            <Slider {...settings}>
              {site.photos.map((photo, index) => (
                <div key={index}>
                  <img
                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                    src={photo}
                    alt={`${site.name} ${index}`}
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="mt-6 lg:mt-0 lg:ml-6 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-gray-800">{site.name}</h2>
            <p className="text-gray-600 mt-2">{site.description}</p>
            <div className="mt-4 text-gray-600">
              <p>
                <strong>State:</strong> {site.state}
              </p>
              <p>
                <strong>City:</strong> {site.city}
              </p>
            </div>
            <div className="mt-4 text-gray-600">
              <p>
                <strong>History:</strong> {site.history}
              </p>
              <p>
                <strong>Importance:</strong> {site.importance}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-1/3 bg-white shadow-xl rounded-lg overflow-hidden p-6" style={borderStyle}>
        <h3 className="text-xl font-bold text-gray-800 mb-4">Location</h3>
        <APIProvider apiKey="AIzaSyCuAl7R9EOxdeQfQ4ix9NLOsTF9eQOWU1o"> {/* Replace with your API key */}
          <Map
            style={{ width: '100%', height: '400px' }} // Adjust height as needed
            defaultCenter={{ lat: site.latitude, lng: site.longitude }}
            defaultZoom={15}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
          >
            <Marker
              position={{ lat: site.latitude, lng: site.longitude }}
              title={site.name}
              icon={{
                url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png", // Customize marker icon
                scaledSize: { width: 32, height: 32 } // Custom size for the marker
              }}
            />
          </Map>
        </APIProvider>
      </div>
    </div>
  );
};

export default CulturalDetail;
