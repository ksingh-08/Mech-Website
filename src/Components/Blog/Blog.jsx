import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    author: '',
    email: ''
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Fetch approved blog posts from backend
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/blog/posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/blog/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      });
      
      if (response.ok) {
        alert('Blog post submitted successfully! It will be reviewed by an admin.');
        setNewPost({ title: '', content: '', author: '', email: '' });
        setShowForm(false);
      }
    } catch (error) {
      console.error('Error submitting blog post:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Welding Research Blog</h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-red-900 text-white px-6 py-2 rounded-lg hover:bg-red-800 transition-colors"
          >
            {showForm ? 'Cancel' : 'Submit New Post'}
          </button>
        </div>

        {showForm && (
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Submit New Blog Post</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  value={newPost.title}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Content</label>
                <textarea
                  value={newPost.content}
                  onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  rows="6"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Author Name</label>
                <input
                  type="text"
                  value={newPost.author}
                  onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
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
                Submit Post
              </button>
            </form>
          </div>
        )}

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post._id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.content.substring(0, 150)}...</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">By {post.author}</span>
                  <span className="text-sm text-gray-500">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog; 