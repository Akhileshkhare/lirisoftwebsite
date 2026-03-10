import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import Footer from './Footer';
import FullPageLoader from '../components/FullPageLoader';
import { API_BASE_URI } from '../config/apiConfig';

interface BlogPostData {
  id: string;
  title: string;
  image: string;
  leftImage: string;
  date: string;
  author: string;
  readTime: string;
  content: {
    intro: string;
    paragraphs: string[];
  };
}

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [blogPost, setBlogPost] = useState<BlogPostData | null>(null);

  useEffect(() => {
    // Fetch blog post from API
    if (id) {
      fetch(`${API_BASE_URI}/api/blogs/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Blog not found');
          }
          return response.json();
        })
        .then((data) => {
          setBlogPost(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching blog post:', error);
          setBlogPost(null);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [id]);

  if (isLoading) {
    return <FullPageLoader />;
  }

  if (!blogPost) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <Link to="/blogs" className="text-[#043a53] hover:underline">
            ← Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{blogPost.title} - Lirisoft Blog</title>
        <meta name="description" content={blogPost.content.intro} />
        <meta name="keywords" content="ReactJS, web development, modern companies, technology" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Top Image */}
        <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
          <img 
            src={blogPost.image} 
            alt={blogPost.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white">
            <Link to="/blogs" className="text-sm hover:underline mb-4 inline-block">
              ← Back to Blogs
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{blogPost.title}</h1>
            <div className="flex items-center gap-4 text-sm">
              <span>{blogPost.author}</span>
              <span>•</span>
              <span>{blogPost.date}</span>
              <span>•</span>
              <span>{blogPost.readTime}</span>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="w-4/5 md:w-3/4 lg:w-2/3 mx-auto py-12">
          {/* Introduction */}
          <p className="text-xl text-gray-700 leading-relaxed mb-12 font-light">
            {blogPost.content.intro}
          </p>

          {/* Left Image with Content */}
          <div className="mb-8">
            <img 
              src={blogPost.leftImage} 
              alt="React Development"
              className="float-left mr-8 mb-4 w-full md:w-[400px] rounded-lg shadow-lg"
            />
            
            {blogPost.content.paragraphs.map((paragraph, index) => (
              <p 
                key={index} 
                className="text-lg text-gray-700 leading-relaxed mb-6 text-justify"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Author Info */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#043a53] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                L
              </div>
              <div>
                <h3 className="font-bold text-lg">{blogPost.author}</h3>
                <p className="text-gray-600">Technology Experts & Software Consultants</p>
              </div>
            </div>
          </div>

          {/* Back to Blogs Button */}
          <div className="mt-12 text-center">
            <Link 
              to="/blogs"
              className="inline-block bg-[#043a53] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#065a7f] transition-colors"
            >
              ← Back to All Blogs
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
