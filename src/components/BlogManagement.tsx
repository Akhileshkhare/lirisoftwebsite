import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URI } from "../config/apiConfig";
import BlogForm from "./BlogForm";

const BlogManagement: React.FC = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<any>(null);

  const fetchBlogs = () => {
    axios
      .get(`${API_BASE_URI}/api/blogs`)
      .then((response) => {
        setBlogs(response.data.blogs || []);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleEdit = (blog: any) => {
    setSelectedBlog(blog);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      axios
        .delete(`${API_BASE_URI}/api/blogs/${id}`)
        .then(() => {
          alert("Blog deleted successfully!");
          fetchBlogs();
        })
        .catch((error) => {
          console.error("Error deleting blog:", error);
          alert("Error deleting blog. Please try again.");
        });
    }
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedBlog(null);
  };

  const handleSave = () => {
    fetchBlogs();
  };

  return (
    <div className="bg-white p-4 rounded shadow-md w-5/6 mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Blog Management</h2>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          + Add New Blog
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Author</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Read Time</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  {blog.title}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {blog.author}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {blog.date}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {blog.readTime}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex gap-2 justify-center">
                    <button
                      onClick={() => handleEdit(blog)}
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {blogs.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No blogs found. Click "Add New Blog" to create one.
          </div>
        )}
      </div>

      {showForm && (
        <BlogForm
          blog={selectedBlog}
          onClose={handleCloseForm}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default BlogManagement;
