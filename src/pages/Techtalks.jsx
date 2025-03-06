import { useState } from "react";
import { FaThumbsUp, FaCommentDots, FaPaperPlane } from "react-icons/fa";
import Navbar from "../components/Navbar";

const Forums = () => {
  const [posts, setPosts] = useState([
    { id: 1, author: "Aryan Sharma", content: "How to prepare for tech interviews?", likes: 12, comments: ["Practice DSA daily!", "Check out LeetCode."], showComments: false, liked: false },
    { id: 2, author: "Neha Patel", content: "Best resources to learn React?", likes: 8, comments: ["React Docs are great!", "Try Fullstackopen."], showComments: false, liked: false }
  ]);
  const [newPost, setNewPost] = useState("");
  const [newComment, setNewComment] = useState({});

  const addPost = () => {
    if (newPost.trim()) {
      setPosts([...posts, { id: posts.length + 1, author: "You", content: newPost, likes: 0, comments: [], showComments: false, liked: false }]);
      setNewPost("");
    }
  };

  const likePost = (id) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, likes: post.liked ? post.likes - 1 : post.likes + 1, liked: !post.liked } : post
    ));
  };

  const toggleComments = (id) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, showComments: !post.showComments } : post
    ));
  };

  const addComment = (id) => {
    if (newComment[id]?.trim()) {
      setPosts(posts.map(post => 
        post.id === id ? { ...post, comments: [...post.comments, newComment[id]], showComments: true } : post
      ));
      setNewComment({ ...newComment, [id]: "" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <Navbar />
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">Forums</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
        <textarea 
          className="w-full p-3 bg-gray-700 text-white rounded-lg"
          placeholder="Start a discussion..." 
          value={newPost} 
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button 
          className="mt-3 px-4 py-2 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 flex items-center"
          onClick={addPost}
        >
          <FaPaperPlane className="mr-2" /> Post
        </button>
      </div>
      {posts.map(post => (
        <div key={post.id} className="bg-gray-800 p-5 rounded-lg shadow-lg mb-4">
          <h3 className="font-semibold text-yellow-400">{post.author}</h3>
          <p className="text-gray-300 mt-2">{post.content}</p>
          <div className="flex items-center mt-3 space-x-4">
            <button className={`flex items-center ${post.liked ? "text-yellow-400" : "text-gray-400"} hover:text-yellow-400`} onClick={() => likePost(post.id)}>
              <FaThumbsUp className="mr-1" /> {post.likes}
            </button>
            <button className="flex items-center text-gray-400 hover:text-yellow-400" onClick={() => toggleComments(post.id)}>
              <FaCommentDots className="mr-1" /> {post.comments.length}
            </button>
          </div>

          {/* Comment Section */}
          {post.showComments && (
            <div className="mt-3 bg-gray-700 p-4 rounded-lg">
              {post.comments.map((comment, index) => (
                <p key={index} className="text-gray-300 mb-2">💬 {comment}</p>
              ))}
              <div className="flex mt-3">
                <input 
                  type="text" 
                  className="w-full p-2 bg-gray-600 text-white rounded-lg" 
                  placeholder="Write a comment..."
                  value={newComment[post.id] || ""}
                  onChange={(e) => setNewComment({ ...newComment, [post.id]: e.target.value })}
                />
                <button 
                  className="ml-2 px-4 py-2 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400"
                  onClick={() => addComment(post.id)}
                >
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Forums;
