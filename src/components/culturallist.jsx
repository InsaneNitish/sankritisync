import React, { useEffect, useState } from "react";
import CulturalCard from "./culturalCards";
import { Query } from "appwrite";
import { databases } from "../appwrite/appwrite";
import IndianFlagLoader from "./IndianFlagLoader"; 

const CulturalList = () => {
  const [heritageData, setHeritageData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const limit = 8; // Number of posts per page

  useEffect(() => {
    const fetchHeritageData = async () => {
      setIsLoading(true);
      try {
        const result = await databases.listDocuments(
          "66d0c37a001cbbb08fb4", // Replace with your database ID
          "66d1e6f80003bdb5d96f", // Replace with your collection ID
          [ 
            Query.limit(limit),
            Query.offset((currentPage - 1) * limit)
          ]
        );
        setHeritageData(result.documents);
        setTotalPages(Math.ceil(result.total / limit));
        console.log(result.documents);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHeritageData();
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="p-6">
      {isLoading ? (
        <div className="flex items-center justify-center h-screen text-gray-600">
          <IndianFlagLoader/>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {heritageData.map((site) => (
              <CulturalCard key={site.$id} site={site} />
            ))}
          </div>
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded ${
                currentPage === 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-500"
              }`}
            >
              Previous
            </button>
            <span className="text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded ${
                currentPage === totalPages
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-500"
              }`}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CulturalList;
