import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaUser,
  FaFileAlt,
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaBriefcase,
  FaUserTie,
  FaEnvelope,
  FaBoxOpen,
} from "react-icons/fa";
import { API_BASE_URI } from "../config/apiConfig";
import CommonInputField from "./CommonInputField";

const CMSDashboard = () => {
  const [mainPages, setMainPages] = useState([]);
  const [sections, setSections] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [formData, setFormData] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const getPages = () => {
    fetch(`${API_BASE_URI}/api/homepage`)
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data); // Debugging API response
        const pageIcons = {
          Home: <FaHome />,
          About: <FaInfoCircle />,
          Service: <FaCogs />,
          Portfolio: <FaBriefcase />,
          Career: <FaUserTie />,
          Contact: <FaEnvelope />,
          Product: <FaBoxOpen />,
          Contacts: <FaEnvelope />,
        };

        const pagesWithIcons = Object.keys(data).map((page) => ({
          name: page,
          icon: pageIcons[page] || <FaFileAlt />,
        }));

        setMainPages(pagesWithIcons);
        setFormData(data);
      })
      .catch((error) => console.error("Error fetching pages:", error));
  };

  const loadSections = (page) => {
    if (selectedPage === page) {
      setSelectedPage(null);
      setSections([]);
      setSelectedSection(null);
    } else {
      setSelectedPage(page);
      if (page === "contacts" || page === "proposals" || page === "consultations") {
        const data = Object.values(formData[page] || {});
        setSections([]); // Clear sections as we are displaying a table
        setSelectedSection(page); // Set a special section for the selected page
        console.log(`${page.charAt(0).toUpperCase() + page.slice(1)} Data:`, data); // Debugging data
      } else {
        setSections(Object.keys(formData[page] || {}));
        setSelectedSection(null);
      }
    }
  };

  const handleInputChange = (section, keyPath, value, index = null) => {
    setFormData((prevData) => {
      const updatedData = { ...prevData };
      const keys = keyPath.split(".");
      let current = updatedData[selectedPage][section];

      keys.forEach((key, idx) => {
        if (key.includes("[")) {
          // Handle array indexing
          const [arrayKey, arrayIndex] = key.match(/(\w+)\[(\d+)\]/).slice(1);
          if (!current[arrayKey]) current[arrayKey] = [];
          if (idx === keys.length - 1) {
            current[arrayKey][parseInt(arrayIndex, 10)] = value;
          } else {
            current = current[arrayKey][parseInt(arrayIndex, 10)];
          }
        } else {
          if (idx === keys.length - 1) {
            current[key] = value;
          } else {
            if (!current[key]) current[key] = {};
            current = current[key];
          }
        }
      });

      return updatedData;
    });
  };

  const handleSave = () => {
    // Recursively process data: convert only primitives to string, keep arrays/objects as is
    const processValue = (value) => {
      if (Array.isArray(value)) {
        return value.map(processValue);
      } else if (value !== null && typeof value === 'object') {
        const obj = {};
        for (const k in value) {
          obj[k] = processValue(value[k]);
        }
        return obj;
      } else if (typeof value === 'number' || typeof value === 'boolean') {
        return value.toString();
      } else {
        return value;
      }
    };

    const transformedData = {};
    for (const page in formData) {
      if (typeof formData[page] === 'object' && formData[page] !== null) {
        transformedData[page] = {};
        for (const section in formData[page]) {
          transformedData[page][section] = processValue(formData[page][section]);
        }
      } else {
        transformedData[page] = formData[page];
      }
    }

    axios
      .post(`${API_BASE_URI}/api/homepage`, transformedData)
      .then(() => alert("Changes saved successfully!"))
      .catch((error) => console.error("Error saving changes:", error));
  };

  const deleteContact = (id) => {
    if (!id) {
      console.error("Contact ID is undefined. Cannot delete contact.");
      return;
    }
  
    axios
      .delete(`${API_BASE_URI}/api/contact/${id}`)
      .then(() => {
        alert("Contact deleted successfully!");
        setFormData((prevData) => {
          const updatedContacts = prevData.contacts.filter((contact) => contact.id !== id);
          return { ...prevData, contacts: updatedContacts };
        });
      })
      .catch((error) => console.error("Error deleting contact:", error));
  };

  useEffect(() => {
    getPages();
  }, []);

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
                 <span className="ml-3">
                  {page.name === "PrivacyPolicy"
                    ? "Privacy Policy"
                    : page.name === "TermsOfService"
                    ? "Terms Of Service"
                    : page.name === "contacts"
                    ? "Contacts"
                    : page.name}
                </span>
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
          {selectedSection === "contacts" || selectedSection === "proposals" || selectedSection === "consultations" ? (
            <div className="bg-white p-4 rounded shadow-md w-5/6 mx-auto">
              <h2 className="text-2xl font-semibold mb-4">
                {selectedSection.charAt(0).toUpperCase() + selectedSection.slice(1)}
              </h2>
              <table className="table-auto text-sm w-full border-collapse border border-gray-300">
                <thead>
                  <tr>
                    {Object.keys(formData[selectedSection][0] || {}).map((header) => (
                      <th key={header} className="border border-gray-300 px-4 py-2">
                        {header.charAt(0).toUpperCase() + header.slice(1)} {/* Capitalize the first letter */}
                      </th>
                    ))}
                    <th className="border border-gray-300 px-4 py-2">Actions</th> {/* New column for actions */}
                  </tr>
                </thead>
                <tbody>
                  {Object.values(formData[selectedSection] || {}).map((item, index) => (
                    <tr key={index}>
                      {Object.entries(item).map(([key, value], idx) => (
                        <td key={idx} className="border border-gray-300 px-4 py-2">
                          {key === "date"
                            ? new Date(value * 1000).toLocaleString() // Display date and time in client's system timezone
                            : value}
                        </td>
                      ))}
                      <td className="border border-gray-300 px-4 py-2">
                        <button
                          onClick={() => deleteContact(item.id || item._id)} // Ensure correct ID field is used
                          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : selectedSection ? (
            <h2 className="text-2xl font-semibold mb-4">
              Edit {selectedPage || ""} {selectedSection || "Section"}
            </h2>
          ) : (
            ""
          )}
          <div className="bg-white p-4 rounded shadow-md w-5/6 mx-auto">
            {selectedSection ? (
                     <form className="space-y-4">
                     {Object.entries(formData[selectedPage][selectedSection] || {}).map(([key, value]) => {
                       if ((key === "images" ||key === "services" ||key === "budgetOptions" || key === "tabs" || key === "appSolutions" || key === "features" || key === "slides" || key === "caseStudies") && Array.isArray(value)) {
                         return (
                           <div key={key} className="space-y-4">
                             <h3 className="font-medium">{key}</h3>
                             {value.map((item, index) => (
                               <div key={index} className="space-y-4 border p-2 rounded">
                                 {Object.entries(item).map(([itemKey, itemValue]) => (
                                   <div key={itemKey} className="flex flex-col">
                                     <label className="font-medium">{`${key}[${index}].${itemKey}`}</label>
                                     <CommonInputField
                                       itemKey={itemKey}
                                       itemValue={itemValue}
                                       handleInputChange={(keyPath, value, idx) => {
                                        console.log('First ',selectedSection, keyPath, value, idx);

                                         const updatedKeyPath = `${key}[${index}].${itemKey}`;
                                         handleInputChange(selectedSection, updatedKeyPath, value, idx);
                                       }}
                                       keyPath={`${key}[${index}].${itemKey}`}
                                       index={index}
                                     />
                                   </div>
                                 ))}
                               </div>
                             ))}
                           </div>
                         );
                       } else if (key === "images" && typeof value === "object" && !Array.isArray(value)) {
                         return (
                           <div key={key} className="space-y-4">
                             <h3 className="font-medium">{key}</h3>
                             {Object.entries(value).map(([imageKey, imageValue]) => (
                               <div key={imageKey} className="space-y-4 border p-2 rounded">
                                 <h4 className="font-medium">{imageKey}</h4>
                                 {Object.entries(imageValue).map(([nestedKey, nestedValue]) => (
                                   <div key={nestedKey} className="flex flex-col">
                                     <label className="font-medium">{`${key}.${imageKey}.${nestedKey}`}</label>
                                     <CommonInputField
                                       itemKey={nestedKey}
                                       itemValue={nestedValue}
                                       handleInputChange={(keyPath, value, idx) =>{
                                        console.log('Second',selectedSection, keyPath, value, idx);
                                         handleInputChange(selectedSection, keyPath, value, idx);
                                        }
                                       }
                                       keyPath={`${key}.${imageKey}.${nestedKey}`}
                                     />
                                   </div>
                                 ))}
                               </div>
                             ))}
                           </div>
                         );
                       } else if (key === "sections" && typeof value === "object") {
                         return (
                           <div key={key} className="space-y-4">
                             <h3 className="font-medium">{key}</h3>
                             {Object.entries(value).map(([sectionKey, sectionValue]) => (
                               <div key={sectionKey} className="space-y-4">
                                 <h4 className="font-medium">{sectionKey}</h4>
                                 {Object.entries(sectionValue).map(([childKey, childValue]) => (
                                   <div key={childKey} className="flex flex-col">
                                     <label className="font-medium">{`${sectionKey}.${childKey}`}</label>
                                     <CommonInputField
                                       itemKey={childKey}
                                       itemValue={childValue}
                                       handleInputChange={(keyPath, value, idx) =>{
                                        console.log('Third ',selectedSection, keyPath, value, idx);
                                         handleInputChange(selectedSection, keyPath, value, idx);
                                        }
                                       }
                                       keyPath={`${key}.${sectionKey}.${childKey}`}
                                     />
                                   </div>
                                 ))}
                               </div>
                             ))}
                           </div>
                         );
                       } else if (typeof value === "object" && value !== null) {
                         return (
                           <div key={key} className="space-y-4">
                             <h3 className="font-medium">{key}</h3>
                             {Object.entries(value).map(([childKey, childValue]) => (
                               <div key={childKey} className="flex flex-col">
                                 <label className="font-medium">{`${key}.${childKey}`}</label>
                                 <CommonInputField
                                   itemKey={childKey}
                                   itemValue={childValue}
                                   handleInputChange={(keyPath, value, idx) =>{
                                    console.log('Fourth ',selectedSection, keyPath, value, idx);
                                     handleInputChange(selectedSection, keyPath, value, idx);
                                    }
                                   }
                                   keyPath={`${key}.${childKey}`}
                                 />
                               </div>
                             ))}
                           </div>
                         );
                       } else {
                         return (
                           <div key={key} className="flex flex-col">
                             <label className="font-medium">{key}</label>
                             <CommonInputField
                               itemKey={key}
                               itemValue={value}
                               handleInputChange={(keyPath, value, idx) =>{
                                console.log('Five ',selectedSection, keyPath, value, idx);
                                 handleInputChange(selectedSection, keyPath, value, idx);
                                }
                               }
                               keyPath={key}
                             />
                           </div>
                         );
                       }
                     })}
                     {
                      Object.entries(formData[selectedPage][selectedSection] || {}).length !== 0 && (
                        <button
                  type="button"
                  onClick={handleSave}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Save Changes
                </button>
                      )
                     }
               
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
