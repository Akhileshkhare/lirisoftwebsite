import React, { useState } from "react";
import axios from "axios";
import { API_BASE_URI } from "../config/apiConfig";

const CommonInputField = ({ itemKey, itemValue, handleInputChange, keyPath, index }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(`${API_BASE_URI}/api/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const uploadedFilePath = response.data.publicUrl;
      console.log( "uploadedFilePath", uploadedFilePath,response); // Log the uploaded file path
      handleInputChange(keyPath, uploadedFilePath, index); // Update the file path in the form data
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to upload the file. Please try again.");
    }
  };

  const handleImageClick = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  if (typeof itemValue === "string" && itemValue.match(/\.(jpeg|jpg|png|svg)$/i)) {
    return (
      <div className="relative">
        <input
          type="file"
          onChange={handleFileUpload}
          className="border rounded p-2"
        />
        <div className="flex items-center mt-2">
          <img
            src={itemValue}
            alt="Preview"
            className="w-16 h-16 object-cover cursor-pointer border rounded"
            onClick={handleImageClick}
          />
        </div>
        {isPopupOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={closePopup}
          >
            <div
              className="bg-white p-4 rounded shadow-lg flex flex-col items-center justify-center"
              style={{ height: "80%" }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the popup
            >
              <img
                src={itemValue}
                alt="Large Preview"
                className="max-w-full max-h-[90%] mb-4"
              />
              <button
                onClick={closePopup}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    );
  } else if (typeof itemValue === "string" && itemValue.length > 50) {
    return (
      <textarea
        value={itemValue}
        onChange={(e) => handleInputChange(keyPath, e.target.value, index)}
        className="border rounded p-2"
      />
    );
  } else {
    return (
      <input
        type="text"
        value={itemValue || ""}
        onChange={(e) => handleInputChange(keyPath, e.target.value, index)}
        className="border rounded p-2"
      />
    );
  }
};

export default CommonInputField;
