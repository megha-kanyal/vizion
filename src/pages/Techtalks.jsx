import { useState } from "react";
import { FaThumbsUp, FaCommentDots, FaPaperPlane } from "react-icons/fa";

const Forums = () => {
  const [posts, setPosts] = useState([
    { id: 1, author: "Aryan Sharma", content: "How to prepare for tech interviews?", likes: 12, comments: ["Practice DSA daily!", "Check out LeetCode."] },
    { id: 2, author: "Neha Patel", content: "Best resources to learn React?", likes: 8, comments: ["React Docs are great!", "Try Fullstackopen."] }
  ]);
  const [newPost, setNewPost] = useState("");

  const addPost = () => {
    if (newPost.trim()) {
      setPosts([...posts, { id: posts.length + 1, author: "You", content: newPost, likes: 0, comments: [] }]);
      setNewPost("");
    }
  };

  const likePost = (id) => {
    setPosts(posts.map(post => post.id === id ? { ...post, likes: post.likes + 1 } : post));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
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
            <button className="flex items-center text-gray-400 hover:text-yellow-400" onClick={() => likePost(post.id)}>
              <FaThumbsUp className="mr-1" /> {post.likes}
            </button>
            <button className="flex items-center text-gray-400 hover:text-yellow-400">
              <FaCommentDots className="mr-1" /> {post.comments.length}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Forums;
