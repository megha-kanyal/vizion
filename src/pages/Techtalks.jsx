import { useState } from "react";
import { FaThumbsUp, FaCommentDots, FaPaperPlane } from "react-icons/fa";
import Navbar from "../Components/Navbar";

const Forums = () => {
  const [posts, setPosts] = useState([
    { id: 1, author: "Aryan Sharma", content: "How to prepare for tech interviews?", likes: 12, comments: ["Practice DSA daily!", "Check out LeetCode."], showComments: false, liked: false },
    { id: 2, author: "Neha Patel", content: "Best resources to learn React?", likes: 8, comments: ["React Docs are great!", "Try Fullstackopen."], showComments: false, liked: false }
  ]);
  const [newPost, setNewPost] = useState("");
  const [newComment, setNewComment] = useState({});

  const addPost = (e) => {
    e && e.preventDefault();
    
    if (newPost.trim()) {
      setPosts([
        { 
          id: Date.now(),
          author: "You", 
          content: newPost, 
          likes: 0, 
          comments: [], 
          showComments: false, 
          liked: false 
        },
        ...posts
      ]);
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

  const addComment = (id, e) => {
    e && e.preventDefault();
    
    if (newComment[id]?.trim()) {
      setPosts(posts.map(post => {
        if (post.id === id) {
          return { 
            ...post, 
            comments: [...post.comments, newComment[id]], 
            showComments: true 
          };
        }
        return post;
      }));
      
      setNewComment(prev => ({ ...prev, [id]: "" }));
    }
  };

  return (
    <div className="min-h-screen bg-black p-8">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8 border-b-2 border-[#42b6b5] pb-2 inline-block">Forums</h1>
        
        {/* Post creation area */}
        <div className="bg-white rounded-lg shadow-md mb-8 border border-gray-800">
          <form onSubmit={addPost} className="p-6">
            <textarea 
              className="w-full p-4 bg-gray-900 text-white rounded-lg border border-gray-800 focus:border-[#42b6b5] focus:ring-1 focus:ring-[#42b6b5] focus:outline-none transition"
              placeholder="Start a discussion..." 
              rows="3"
              value={newPost} 
              onChange={(e) => setNewPost(e.target.value)}
            />
            <div className="flex justify-end">
              <button 
                type="submit"
                className="mt-3 px-5 py-2 bg-[#42b6b5] text-black font-medium rounded-md hover:bg-[#3aa09f] transition-all flex items-center shadow-sm"
              >
                <FaPaperPlane className="mr-2" /> Post
              </button>
            </div>
          </form>
        </div>
        
        {/* Posts list */}
        {posts.map(post => (
          <div key={post.id} className="bg-white rounded-lg shadow-md mb-5 border border-gray-800 overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-3">
                <div className="h-10 w-10 rounded-full bg-[#42b6b5] flex items-center justify-center text-black font-bold">
                  {post.author.charAt(0)}
                </div>
                <div className="ml-3">
                  <h3 className="font-semibold text-black">{post.author}</h3>
                </div>
              </div>
              
              <p className="text-black mb-4">{post.content}</p>
              
              <div className="flex items-center space-x-6 border-t border-gray-800 pt-4">
                <button 
                  type="button"
                  className={`flex items-center ${post.liked ? "text-[#42b6b5]" : "text-black"} hover:text-[#42b6b5] transition`} 
                  onClick={() => likePost(post.id)}
                >
                  <FaThumbsUp className="mr-1" /> {post.likes}
                </button>
                <button 
                  type="button"
                  className={`flex items-center ${post.showComments ? "text-[#42b6b5]" : "text-black"} hover:text-[#42b6b5] transition`} 
                  onClick={() => toggleComments(post.id)}
                >
                  <FaCommentDots className="mr-1" /> {post.comments.length}
                </button>
              </div>
            </div>

            {/* Comment Section */}
            {post.showComments && (
              <div className="bg-white p-4 border-t border-gray-800">
                {post.comments.length > 0 ? (
                  <div className="mb-4 space-y-3">
                    {post.comments.map((comment, index) => (
                      <div key={`${post.id}-comment-${index}`} className="flex">
                        <div className="h-8 w-8 rounded-full bg-[#42b6b5] flex items-center justify-center text-black text-xs mr-3 flex-shrink-0">
                          👤
                        </div>
                        <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-800 text-black text-sm flex-1">
                          {comment}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-black text-sm mb-4">No comments yet. Be the first to comment!</p>
                )}
                
                <form onSubmit={(e) => addComment(post.id, e)} className="flex items-center">
                <input 
                  type="text" 
                  className="flex-1 h-12 p-3 bg-white text-black rounded-l-lg border border-gray-800 focus:border-[#42b6b5] focus:ring-1 focus:ring-[#42b6b5] focus:outline-none transition" 
                  placeholder="Write a comment..."
                  value={newComment[post.id] || ""}
                  onChange={(e) => setNewComment({ ...newComment, [post.id]: e.target.value })}
                />
                <button 
                  type="submit"
                  className="h-12 px-4 bg-[#42b6b5] text-white font-semibold rounded-r-lg hover:bg-[#3aa09f] transition-all flex items-center justify-center"
                 >
                  <FaPaperPlane />
                </button>
                </form>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forums;