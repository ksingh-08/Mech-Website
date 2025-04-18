import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const AdminBlogPost = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogPost();
  }, [id]);

  const fetchBlogPost = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        navigate('/admin');
        return;
      }

      const response = await fetch(`http://localhost:5000/api/blog/posts/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setPost(data);
      } else {
        navigate('/admin');
      }
    } catch (error) {
      console.error('Error fetching blog post:', error);
      navigate('/admin');
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/blog/approve/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });

      if (response.ok) {
        navigate('/admin');
      }
    } catch (error) {
      console.error('Error approving post:', error);
    }
  };

  const handleReject = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/blog/reject/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });

      if (response.ok) {
        navigate('/admin');
      }
    } catch (error) {
      console.error('Error rejecting post:', error);
    }
  };

  const handleRemove = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/blog/remove/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });

      if (response.ok) {
        navigate('/admin');
      }
    } catch (error) {
      console.error('Error removing post:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 py-12 mt-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 mt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => navigate('/admin')}
            className="text-red-900 hover:text-red-800 flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Admin Dashboard
          </button>
          <div className="flex space-x-4">
            {post.status === 'pending' ? (
              <>
                <button
                  onClick={handleApprove}
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                >
                  Approve
                </button>
                <button
                  onClick={handleReject}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                >
                  Reject
                </button>
              </>
            ) : (
              <button
                onClick={handleRemove}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Remove
              </button>
            )}
          </div>
        </div>

        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 break-words">{post.title}</h1>
            <div className="flex items-center text-gray-600 mb-8">
              <span className="mr-4">By {post.author}</span>
              <span className="mr-4">({post.email})</span>
              <span>{new Date(post.createdAt).toLocaleDateString()}</span>
            </div>
            <div className="prose max-w-none">
              {post.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700 leading-relaxed break-words whitespace-pre-wrap">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default AdminBlogPost; 