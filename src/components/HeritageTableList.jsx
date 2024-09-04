import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { databases } from "../appwrite/appwrite";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Query } from "appwrite";

const HeritageTableList = () => {
  const [heritageData, setHeritageData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const limit = 100; // Number of documents to fetch per request
  const offset = 0; // Initial offset

  useEffect(() => {
    const fetchHeritageSites = async () => {
      setIsLoading(true);
      let allDocuments = [];
      let currentOffset = 0;
      
      try {
        while (true) {
          const result = await databases.listDocuments(
            "66d0c37a001cbbb08fb4", // Replace with your database ID
            "66d1e6f80003bdb5d96f", // Replace with your collection ID
            [
              Query.limit(limit),
              Query.offset(currentOffset)
            ]
          );
          
          if (result.documents.length === 0) {
            break;
          }
          
          allDocuments = [...allDocuments, ...result.documents];
          currentOffset += limit;
        }
        
        setHeritageData(allDocuments);
      } catch (error) {
        console.error("Error fetching heritage sites:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHeritageSites();
  }, []);

  const downloadPDF = () => {
    const doc = new jsPDF();
    
    // Set the font size and style for the heading
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    
    // Add the heading to the PDF
    doc.text("Indian Cultural Heritage Sites", 14, 22); // Adjusted position
    
    // Set the font size and style for the table content
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    
    // Add table to PDF
    autoTable(doc, {
      startY: 30, // Start the table below the heading
      head: [["Name", "State", "City", "Description","Importance"]],
      body: heritageData.map(site => [
        site.name,
        site.state,
        site.city,
        site.description,
        site.importance
      ]),
      margin: { top: 30 },
      styles: {
        font: "helvetica",
        fontSize: 10,
        overflow: "linebreak",
        cellPadding: 2,
        halign: "left",
      },
      headStyles: {
        fillColor: [255, 193, 7], // Yellow header background
        textColor: [0, 0, 0], // Black text
        fontSize: 12,
        fontStyle: "bold",
      },
      bodyStyles: {
        fillColor: [255, 255, 255], // White background for rows
        textColor: [0, 0, 0], // Black text
      },
      theme: "striped", // Adds alternating row colors
    });
    
    // Save the PDF
    doc.save("HeritageSites.pdf");
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-lg p-6 border-4 border-dashed border-yellow-600">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700"
        >
          Back
        </button>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold text-center text-gray-800">Indian Cultural Heritage Sites</h2>
          <button
            onClick={downloadPDF}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-400"
          >
            Download PDF
          </button>
        </div>
        {isLoading ? (
          <div className="flex items-center justify-center h-48 text-gray-600">Loading...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-max text-left border-collapse">
              <thead>
                <tr className="bg-yellow-600 text-white">
                  <th className="py-2 px-4 border">Name</th>
                  <th className="py-2 px-4 border">State</th>
                  <th className="py-2 px-4 border">City</th>
                  <th className="py-2 px-4 border">Description</th>
                  <th className="py-2 px-4 border">Importance</th>
                </tr>
              </thead>
              <tbody>
                {heritageData.map((site) => (
                  <tr key={site.$id} className="hover:bg-yellow-100">
                    <td className="py-2 px-4 border">{site.name}</td>
                    <td className="py-2 px-4 border">{site.state}</td>
                    <td className="py-2 px-4 border">{site.city}</td>
                    <td className="py-2 px-4 border">{site.description}</td>
                    <td className="py-2 px-4 border">{site.importance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeritageTableList;
