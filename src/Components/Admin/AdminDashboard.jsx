import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [posts, setPosts] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Check if admin is already authenticated
    const token = localStorage.getItem('adminToken');
    if (token) {
      setIsAuthenticated(true);
      fetchPendingPosts();
    }
  }, []);

  const fetchPendingPosts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/blog/pending', {
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

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/admin/login', {
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
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const handleApprove = async (postId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/blog/approve/${postId}`, {
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
      const response = await fetch(`http://localhost:5000/api/blog/reject/${postId}`, {
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
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
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

        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {posts.map((post) => (
              <li key={post._id} className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-medium text-gray-900">{post.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{post.content.substring(0, 200)}...</p>
                    <p className="mt-2 text-sm text-gray-500">
                      Submitted by: {post.author} ({post.email})
                    </p>
                  </div>
                  <div className="ml-4 flex-shrink-0 flex space-x-4">
                    <button
                      onClick={() => handleApprove(post._id)}
                      className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleReject(post._id)}
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
    </div>
  );
};

export default AdminDashboard; 