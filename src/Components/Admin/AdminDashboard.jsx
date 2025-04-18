import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [posts, setPosts] = useState([]);
  const [approvedPosts, setApprovedPosts] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const navigate = useNavigate();
const backend = "https://mech-website-ankur.onrender.com"
  // Calculate reading time based on content length
  const calculateReadTime = (content) => {
    const wordsPerMinute = 200; // Average reading speed
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes < 1 ? '1 min read' : `${minutes} min read`;
  };

  useEffect(() => {
    // Check if admin is already authenticated
    const token = localStorage.getItem('adminToken');
    if (token) {
      setIsAuthenticated(true);
      fetchPendingPosts();
      fetchApprovedPosts();
    }
  }, []);

  const fetchPendingPosts = async () => {
    try {
      const response = await fetch(`${backend}/api/blog/pending`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching pending posts:', error);
    }
  };

  const fetchApprovedPosts = async () => {
    try {
      const response = await fetch(`${backend}/api/blog/posts`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });
      const data = await response.json();
      setApprovedPosts(data);
    } catch (error) {
      console.error('Error fetching approved posts:', error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${backend}/api/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('adminToken', data.token);
        setIsAuthenticated(true);
        fetchPendingPosts();
        fetchApprovedPosts();
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleApprove = async (postId) => {
    try {
      const response = await fetch(`${backend}/api/blog/approve/${postId}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });

      if (response.ok) {
        fetchPendingPosts();
      }
    } catch (error) {
      console.error('Error approving post:', error);
    }
  };

  const handleReject = async (postId) => {
    try {
      const response = await fetch(`${backend}/api/blog/reject/${postId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });

      if (response.ok) {
        fetchPendingPosts();
      }
    } catch (error) {
      console.error('Error rejecting post:', error);
    }
  };

  const handleRemove = async (postId) => {
    try {
      const response = await fetch(`${backend}/api/blog/remove/${postId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });

      if (response.ok) {
        fetchApprovedPosts();
      }
    } catch (error) {
      console.error('Error removing post:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsAuthenticated(false);
    navigate('/');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Admin Login
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">Username</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                  value={credentials.username}
                  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-900 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 mt-20 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800"
          >
            Logout
          </button>
        </div>

        {/* Pending Posts Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pending Posts</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {posts.map((post) => (
                <li key={post._id} className="px-6 py-4 hover:bg-gray-50 cursor-pointer" onClick={() => navigate(`/admin/blog/${post._id}`)}>
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-medium text-gray-900">{post.title}</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {post.content.length > 20 ? `${post.content.substring(0, 20)}...` : post.content}
                      </p>
                      <div className="flex items-center mt-2 space-x-4 text-sm text-gray-500">
                        <span>Submitted by: {post.author} ({post.email})</span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {calculateReadTime(post.content)}
                        </span>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0 flex space-x-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleApprove(post._id);
                        }}
                        className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700"
                      >
                        Approve
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleReject(post._id);
                        }}
                        className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700"
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Approved Posts Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Approved Posts</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {approvedPosts.map((post) => (
                <li key={post._id} className="px-6 py-4 hover:bg-gray-50 cursor-pointer" onClick={() => navigate(`/admin/blog/${post._id}`)}>
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-medium text-gray-900">{post.title}</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {post.content.length > 20 ? `${post.content.substring(0, 20)}...` : post.content}
                      </p>
                      <div className="flex items-center mt-2 space-x-4 text-sm text-gray-500">
                        <span>Submitted by: {post.author} ({post.email})</span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {calculateReadTime(post.content)}
                        </span>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemove(post._id);
                        }}
                        className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 