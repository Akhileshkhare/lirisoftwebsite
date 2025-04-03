import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaUser, FaFileAlt, FaHome, FaInfoCircle, FaCogs, FaBriefcase, FaUserTie, FaEnvelope, FaBoxOpen } from "react-icons/fa"; // Import an icon for menu

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
    fetch("https://liriapis.onrender.com/api/homepage")
      .then((response) => response.json())
      .then((data) => {
        const pageIcons = {
          Home: <FaHome />,
          About: <FaInfoCircle />,
          Service: <FaCogs />,
          Portfolio: <FaBriefcase />,
          Career: <FaUserTie />,
          Contact: <FaEnvelope />,
          Product: <FaBoxOpen />,
        };

        const pagesWithIcons = Object.keys(data).map((page) => ({
          name: page,
          icon: pageIcons[page] || <FaFileAlt />, // Default icon if not matched
        }));

        setMainPages(pagesWithIcons); // Set main pages with icons
        setFormData(data); // Store all data
      });
  };

  // Load sections for the selected page
  const loadSections = (page) => {
    if (selectedPage === page) {
      setSelectedPage(null); // Deselect the page if it's already selected
      setSections([]); // Clear sections
      setSelectedSection(null); // Reset selected section
    } else {
      setSelectedPage(page); // Select the new page
      setSections(Object.keys(formData[page] || {})); // Load sections of the selected page
      setSelectedSection(null); // Reset selected section
    }
  };

  useEffect(() => {
    getPages();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-menu") && !event.target.closest(".dropdown-button")) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
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
    axios.post("https://liriapis.onrender.com/api/homepage", formData).then(() => {
      alert("Changes saved successfully!");
    });
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="w-full bg-white shadow-md p-4 flex justify-between items-center fixed top-0 z-10">
        <div className="flex items-center space-x-3 space-y-1">
          <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
          <h1 className="text-xl font-bold">CMS Dashboard</h1>
        </div>
        <div className="relative">
          <button
            className="flex items-center space-x-2 dropdown-button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <FaUser className="text-xl" />
            <span className="hidden md:block">Admin</span>
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md dropdown-menu">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Profile
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    localStorage.clear(); // Clear storage
                    sessionStorage.clear(); // Clear session storage if used
                    window.location.href = "/liri-cms-login"; // Redirect to login page
                  }}
                >
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
              <li key={page.name}>
                <div
                  onClick={() => loadSections(page.name)}
                  className={`p-2 flex justify-left items-center flex-row rounded cursor-pointer ${
                    selectedPage === page.name ? "bg-blue-500 text-white" : "hover:bg-gray-100"
                  }`}
                >
                 <span className="ml-1"> {page.icon}</span> {/* Add icon before page name */}
                 <span className="ml-3"> {page.name}</span>
                </div>
                {selectedPage === page.name && (
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
         {selectedSection ? <h2 className="text-2xl font-semibold mb-4">
            Edit {selectedPage || ""} {selectedSection || "Section"}
          </h2>:""}
          <div className="bg-white p-4 rounded shadow-md w-5/6 mx-auto">
            {selectedSection ? (
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
            ) : (
              <div className="flex justify-center items-center h-64 text-gray-500">
                Section not Selected
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CMSDashboard;
