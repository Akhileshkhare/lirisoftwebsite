import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import FullPageLoader from '../components/FullPageLoader';
import { API_BASE_URI } from '../config/apiConfig';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  readTime: string;
}

const Blogs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    // Fetch blogs from API
    fetch(`${API_BASE_URI}/api/blogs`)
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data.blogs || []);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching blogs:', error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <FullPageLoader />;
  }

  return (
    <>
      <Helmet>
        <title>Blogs - Lirisoft Insights & Technology Articles</title>
        <meta name="description" content="Read the latest articles about web development, technology trends, and software solutions from Lirisoft experts." />
        <meta name="keywords" content="technology blog, web development, ReactJS, software development, tech insights" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-[#043a53] to-[#065a7f] text-white py-20">
          <div className="w-4/5 mx-auto">
            <h1 className="text-5xl font-bold mb-4">Our Blog</h1>
            <p className="text-xl opacity-90">Insights, trends, and expertise from the world of technology</p>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="w-4/5 mx-auto py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link 
                key={blog.id} 
                to={`/blogs/${blog.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{blog.date}</span>
                    <span className="mx-2">•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-[#043a53] hover:text-[#065a7f] transition-colors">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {blog.author}</span>
                    <span className="text-[#043a53] font-semibold hover:text-[#065a7f]">
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Blogs;
