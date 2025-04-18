import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SubmitPost = () => {
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    author: '',
    email: ''
  });
  const navigate = useNavigate();
const backend = "https://mech-website-ankur.onrender.com"
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
        alert('Blog post submitted successfully! It will be reviewed by an admin.');
        navigate('/blog');
      }
    } catch (error) {
      console.error('Error submitting blog post:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 mt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Submit New Blog Post</h1>
          <p className="mt-2 text-gray-600">Share your welding research and insights with the community</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                required
                placeholder="Enter a descriptive title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Content</label>
              <textarea
                value={newPost.content}
                onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                rows="10"
                required
                placeholder="Write your blog post content here..."
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Author Name</label>
                <input
                  type="text"
                  value={newPost.author}
                  onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  required
                  placeholder="Your name"
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
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => navigate('/blog')}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-red-900 text-white rounded-md hover:bg-red-800"
              >
                Submit Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubmitPost; 