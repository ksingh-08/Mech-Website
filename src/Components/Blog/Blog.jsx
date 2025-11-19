import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiSearch } from 'react-icons/fi';

const Blog = () => {
  const { t } = useTranslation();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    author: '',
    email: ''
  });
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  // Filter posts based on search query
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate reading time based on content length
  const calculateReadTime = (content) => {
    const wordsPerMinute = 200; // Average reading speed
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes < 1 ? `1 ${t('blog.minRead')}` : `${minutes} ${t('blog.minRead')}`;
  };

  useEffect(() => {
    // Fetch approved blog posts from backend
    fetchBlogPosts();
  }, []);

  const backend = "https://mech-website-s7h6.onrender.com"
  const fetchBlogPosts = async () => {
    try {
      const response = await fetch(`${backend}/api/blog/posts`);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${backend}/api/blog/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });
      
      if (response.ok) {
        alert(t('blog.successMessage'));
        setNewPost({ title: '', content: '', author: '', email: '' });
        setShowForm(false);
      }
    } catch (error) {
      console.error('Error submitting blog post:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 mt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('blog.title')}</h1>
          <p className="text-xl text-gray-600 mb-8">{t('blog.subtitle')}</p>
          
          {/* Search/Filter Bar */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder={t('blog.searchPlaceholder') || "Search blog posts..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 border-2 border-gray-300 rounded-lg focus:border-red-800 focus:outline-none text-lg"
              />
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="text-sm text-gray-600 mt-2">
                {filteredPosts.length} {t('blog.resultsFound') || 'result(s) found'}
              </p>
            )}
          </div>
          
          <button
            onClick={() => navigate('/blog/submit')}
            className="bg-red-900 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition-colors inline-flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            {t('blog.submitNewPost')}
          </button>
        </div>

        {showForm && (
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">{t('blog.submitTitle')}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">{t('blog.titleLabel')}</label>
                <input
                  type="text"
                  value={newPost.title}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">{t('blog.contentLabel')}</label>
                <textarea
                  value={newPost.content}
                  onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  rows="6"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">{t('blog.authorLabel')}</label>
                <input
                  type="text"
                  value={newPost.author}
                  onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">{t('blog.emailLabel')}</label>
                <input
                  type="email"
                  value={newPost.email}
                  onChange={(e) => setNewPost({ ...newPost, email: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-900 text-white py-2 px-4 rounded-md hover:bg-red-800 transition-colors"
              >
                {t('blog.submitPost')}
              </button>
            </form>
          </div>
        )}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            // Skeleton loading states
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col animate-pulse">
                <div className="p-6 flex flex-col flex-grow">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  </div>
                  <div className="flex justify-between items-center mt-6">
                    <div className="flex items-center">
                      <div className="h-4 w-4 bg-gray-200 rounded-full mr-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-20"></div>
                    </div>
                    <div className="flex items-center">
                      <div className="h-4 w-4 bg-gray-200 rounded-full mr-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-16"></div>
                    </div>
                    <div className="flex items-center">
                      <div className="h-4 w-4 bg-gray-200 rounded-full mr-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-20"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Link
                key={post._id}
                to={`/blog/${post._id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
              >
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-red-900 transition-colors break-words">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 break-words whitespace-pre-wrap">
                    {post.content.length > 150 ? `${post.content.substring(0, 150)}...` : post.content}
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500 mt-auto">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {calculateReadTime(post.content)}
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {new Date(post.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-xl text-gray-600">{t('blog.noResults') || 'No blog posts found matching your search.'}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog; 