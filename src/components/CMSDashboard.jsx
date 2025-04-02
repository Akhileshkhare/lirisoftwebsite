import React, { useState, useEffect } from "react";
import axios from "axios";

const CMSDashboard = () => {
  const [mainPages, setMainPages] = useState([]); // Array for main pages
  const [sections, setSections] = useState([]); // Array for sections of the selected page
  const [selectedPage, setSelectedPage] = useState(null); // Track selected main page
  const [selectedSection, setSelectedSection] = useState(null); // Track selected section
  const [formData, setFormData] = useState({}); // Form data for all pages and sections
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null); // State to track expanded main page

  // Fetch main pages and their data
  const getPages = () => {
    fetch("http://localhost:3005/api/homepage")
      .then((response) => response.json())
      .then((data) => {
        setMainPages(Object.keys(data)); // Set main pages (e.g., "Home")
        setFormData(data); // Store all data
      });
  };

  // Load sections for the selected page
  const loadSections = (page) => {
    setSelectedPage(page);
    setSections(Object.keys(formData[page] || {})); // Get sections of the selected page
    setSelectedSection(null); // Reset selected section
  };

  useEffect(() => {
    getPages();
  }, []);

  const handleInputChange = (section, keyPath, value) => {
    setFormData((prevData) => {
      const keys = keyPath.split(".");
      const updatedSection = { ...prevData[selectedPage][section] };
      let current = updatedSection;

      keys.slice(0, -1).forEach((key) => {
        current[key] = { ...current[key] };
        current = current[key];
      });

      current[keys[keys.length - 1]] = value;

      return {
        ...prevData,
        [selectedPage]: {
          ...prevData[selectedPage],
          [section]: updatedSection,
        },
      };
    });
  };

  const handleSave = () => {
    axios.post("http://localhost:3005/api/homepage", formData).then(() => {
      alert("Changes saved successfully!");
    });
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="w-full bg-white shadow-md p-4 flex justify-between items-center fixed top-0 z-10">
        <h1 className="text-xl font-bold">CMS Dashboard</h1>
        <div className="relative">
          <button
            className="flex items-center space-x-2"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <img
              src="https://via.placeholder.com/40"
              alt="User Icon"
              className="w-10 h-10 rounded-full"
            />
            <span className="hidden md:block">User</span>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 pt-16">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md p-4 fixed h-full">
          <ul className="space-y-2">
            {mainPages.map((page) => (
              <li key={page}>
                <div
                  onClick={() => loadSections(page)}
                  className={`p-2 rounded cursor-pointer ${
                    selectedPage === page ? "bg-blue-500 text-white" : "hover:bg-gray-100"
                  }`}
                >
                  {page}
                </div>
                {selectedPage === page && (
                  <ul className="pl-4 space-y-1">
                    {sections.map((section) => (
                      <li
                        key={section}
                        onClick={() => setSelectedSection(section)}
                        className={`p-2 rounded cursor-pointer ${
                          selectedSection === section
                            ? "bg-blue-300 text-white"
                            : "hover:bg-gray-200"
                        }`}
                      >
                        {section}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </aside>

        {/* Page Details */}
        <main className="flex-1 p-6 bg-gray-100 ml-64 overflow-y-auto">
          <h2 className="text-2xl font-semibold mb-4">
            Edit {selectedSection || "Section"}
          </h2>
          <div className="bg-white p-4 rounded shadow-md w-5/6 mx-auto">
            {selectedSection && (
              <form className="space-y-4">
                {Object.entries(formData[selectedPage][selectedSection] || {}).map(
                  ([key, value]) => {
                    if (typeof value === "object" && value !== null) {
                      return (
                        <div key={key} className="space-y-4">
                          <h3 className="font-medium">{key}</h3>
                          {Object.entries(value).map(([childKey, childValue]) => (
                            <div key={childKey} className="flex flex-col">
                              <label className="font-medium">{`${key}.${childKey}`}</label>
                              <input
                                type="text"
                                value={childValue}
                                onChange={(e) =>
                                  handleInputChange(
                                    selectedSection,
                                    `${key}.${childKey}`,
                                    e.target.value
                                  )
                                }
                                className="border rounded p-2"
                              />
                            </div>
                          ))}
                        </div>
                      );
                    } else {
                      return (
                        <div key={key} className="flex flex-col">
                          <label className="font-medium">{key}</label>
                          <input
                            type="text"
                            value={value}
                            onChange={(e) =>
                              handleInputChange(selectedSection, key, e.target.value)
                            }
                            className="border rounded p-2"
                          />
                        </div>
                      );
                    }
                  }
                )}
                <button
                  type="button"
                  onClick={handleSave}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Save Changes
                </button>
              </form>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CMSDashboard;
