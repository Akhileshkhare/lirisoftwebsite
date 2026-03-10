import React, { useState } from "react";
import axios from "axios";
import { API_BASE_URI } from "../config/apiConfig";

interface BlogFormProps {
  blog?: any;
  onClose: () => void;
  onSave: () => void;
}

const BlogForm: React.FC<BlogFormProps> = ({ blog, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    title: blog?.title || "",
    excerpt: blog?.excerpt || "",
    image: blog?.image || "",
    leftImage: blog?.leftImage || "",
    author: blog?.author || "Lirisoft Team",
    readTime: blog?.readTime || "",
    intro: blog?.content?.intro || "",
    paragraphs: blog?.content?.paragraphs || [""],
  });
  const [uploading, setUploading] = useState({
    mainImage: false,
    leftImage: false,
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = async (file: File, imageType: "mainImage" | "leftImage") => {
    const uploadFormData = new FormData();
    uploadFormData.append("image", file);

    setUploading((prev) => ({ ...prev, [imageType]: true }));

    try {
      const response = await axios.post(`${API_BASE_URI}/api/upload`, uploadFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const imageUrl = response.data.publicUrl;
      
      if (imageType === "mainImage") {
        setFormData((prev) => ({ ...prev, image: imageUrl }));
      } else {
        setFormData((prev) => ({ ...prev, leftImage: imageUrl }));
      }

      alert("Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error uploading image. Please try again.");
    } finally {
      setUploading((prev) => ({ ...prev, [imageType]: false }));
    }
  };

  const handleParagraphChange = (index: number, value: string) => {
    const updatedParagraphs = [...formData.paragraphs];
    updatedParagraphs[index] = value;
    setFormData((prev) => ({ ...prev, paragraphs: updatedParagraphs }));
  };

  const addParagraph = () => {
    setFormData((prev) => ({
      ...prev,
      paragraphs: [...prev.paragraphs, ""],
    }));
  };

  const removeParagraph = (index: number) => {
    const updatedParagraphs = formData.paragraphs.filter((_: any, i: number) => i !== index);
    setFormData((prev) => ({ ...prev, paragraphs: updatedParagraphs }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const blogData = {
      title: formData.title,
      excerpt: formData.excerpt,
      image: formData.image,
      leftImage: formData.leftImage,
      author: formData.author,
      readTime: formData.readTime,
      content: {
        intro: formData.intro,
        paragraphs: formData.paragraphs.filter((p: string) => p.trim() !== ""),
      },
    };

    const apiUrl = blog
      ? `${API_BASE_URI}/api/blogs/${blog.id}`
      : `${API_BASE_URI}/api/blogs`;
    const method = blog ? "put" : "post";

    axios[method](apiUrl, blogData)
      .then(() => {
        alert(`Blog ${blog ? "updated" : "created"} successfully!`);
        onSave();
        onClose();
      })
      .catch((error) => {
        console.error("Error saving blog:", error);
        alert("Error saving blog. Please try again.");
      });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-xl w-11/12 max-w-4xl my-8 max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-semibold">
            {blog ? "Edit Blog" : "Create New Blog"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block font-medium mb-2">Title *</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Excerpt *</label>
            <textarea
              value={formData.excerpt}
              onChange={(e) => handleInputChange("excerpt", e.target.value)}
              className="w-full border rounded px-3 py-2"
              rows={3}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-2">Main Image *</label>
              <div className="space-y-2">
                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) => handleInputChange("image", e.target.value)}
                  className="w-full border rounded px-3 py-2"
                  placeholder="Image URL or upload below"
                  required
                />
                <div className="flex items-center gap-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleImageUpload(file, "mainImage");
                    }}
                    className="text-sm"
                    disabled={uploading.mainImage}
                  />
                  {uploading.mainImage && (
                    <span className="text-sm text-blue-600">Uploading...</span>
                  )}
                </div>
                {formData.image && (
                  <img 
                    src={formData.image.startsWith('http') ? formData.image : `${API_BASE_URI}${formData.image}`} 
                    alt="Main preview" 
                    className="w-full h-32 object-cover rounded border"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                )}
              </div>
            </div>

            <div>
              <label className="block font-medium mb-2">Left Image *</label>
              <div className="space-y-2">
                <input
                  type="text"
                  value={formData.leftImage}
                  onChange={(e) => handleInputChange("leftImage", e.target.value)}
                  className="w-full border rounded px-3 py-2"
                  placeholder="Image URL or upload below"
                  required
                />
                <div className="flex items-center gap-2">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleImageUpload(file, "leftImage");
                    }}
                    className="text-sm"
                    disabled={uploading.leftImage}
                  />
                  {uploading.leftImage && (
                    <span className="text-sm text-blue-600">Uploading...</span>
                  )}
                </div>
                {formData.leftImage && (
                  <img 
                    src={formData.leftImage.startsWith('http') ? formData.leftImage : `${API_BASE_URI}${formData.leftImage}`} 
                    alt="Left preview" 
                    className="w-full h-32 object-cover rounded border"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-2">Author *</label>
              <input
                type="text"
                value={formData.author}
                onChange={(e) => handleInputChange("author", e.target.value)}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-2">Read Time *</label>
              <input
                type="text"
                value={formData.readTime}
                onChange={(e) => handleInputChange("readTime", e.target.value)}
                className="w-full border rounded px-3 py-2"
                placeholder="e.g., 5 min read"
                required
              />
            </div>
          </div>

          <div>
            <label className="block font-medium mb-2">Introduction *</label>
            <textarea
              value={formData.intro}
              onChange={(e) => handleInputChange("intro", e.target.value)}
              className="w-full border rounded px-3 py-2"
              rows={4}
              required
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block font-medium">Content Paragraphs *</label>
              <button
                type="button"
                onClick={addParagraph}
                className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600"
              >
                + Add Paragraph
              </button>
            </div>
            {formData.paragraphs.map((paragraph: string | number | readonly string[] | undefined, index: number) => (
              <div key={index} className="mb-3 flex gap-2">
                <textarea
                  value={paragraph}
                  onChange={(e) => handleParagraphChange(index, e.target.value)}
                  className="flex-1 border rounded px-3 py-2"
                  rows={4}
                  placeholder={`Paragraph ${index + 1}`}
                />
                {formData.paragraphs.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeParagraph(index)}
                    className="bg-red-500 text-white px-3 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border rounded hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {blog ? "Update Blog" : "Create Blog"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
