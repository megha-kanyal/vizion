import React, { useState } from "react";

const Feed = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postContent, setPostContent] = useState("");
  const [image, setImage] = useState(null);
  const [posts, setPosts] = useState([
    {
      id: 1,
      content: "Day 1 of #30DaysOfCode – The Journey Begins!",
      image: "/code-screenshot.jpg",
      time: new Date().toLocaleString(),
      likes: 3,
      comments: ["Great start!", "Looking forward to your journey!"],
    },
  ]);

  // Open the modal
  const openModal = () => setIsModalOpen(true);

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setPostContent("");
    setImage(null);
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  // Handle posting
  const handlePost = () => {
    if (postContent.trim() === "" && !image) return; // Prevent empty posts

    const newPost = {
      id: Date.now(),
      content: postContent,
      image: image,
      time: new Date().toLocaleString(),
      likes: 0,
      comments: [],
    };

    setPosts([...posts, newPost]); // Append new post below existing posts
    closeModal();
  };

  // Handle like
  const handleLike = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  // Handle comment
  const handleComment = (id, comment) => {
    if (!comment.trim()) return;
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, comments: [...post.comments, comment] } : post
      )
    );
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      {/* Input Box */}
      <div className="border-b pb-4 mb-4">
        <input
          type="text"
          placeholder="Start a post"
          className="w-full border p-2 rounded-md cursor-pointer"
          onClick={openModal}
          readOnly
        />
        <div className="flex justify-between mt-2 text-blue-600 text-sm">
          <span>📷 Media</span>
          <span>💼 Job</span>
          <span>✍️ Write article</span>
        </div>
      </div>

      {/* Posts */}
      {posts.map((post) => (
        <div key={post.id} className="mt-4 p-4 bg-gray-100 rounded-md">
          <h3 className="font-semibold">You</h3>
          <p className="text-gray-600 text-sm">{post.content}</p>
          {post.image && <img src={post.image} alt="Post" className="w-full mt-2 rounded-md" />}
          <div className="flex items-center justify-between mt-2">
  {/* Like Button */}
  <button
    onClick={() => handleLike(post.id)}
    className="flex items-center text-gray-700 hover:text-blue-600 transition"
  >
    👍 <span className="ml-1">{post.likes} Likes</span>
  </button>

  {/* Comment Button */}
  <button
    onClick={() => handleComment(post.id, prompt("Add a comment"))}
    className="flex items-center text-gray-700 hover:text-blue-600 transition"
  >
    💬 <span className="ml-1">{post.comments.length} Comments</span>
  </button>
</div>

{/* Display Comments */}
{post.comments.length > 0 && (
  <div className="mt-2 bg-gray-200 p-2 rounded-md">
    {post.comments.map((comment, index) => (
      <p key={index} className="text-xs text-gray-700">
        <span className="font-semibold">➡ {comment}</span>
      </p>
    ))}
  </div>
)}

        </div>
      ))}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-1/3">
            <h2 className="text-lg font-semibold mb-2">Create Post</h2>
            <textarea
              className="w-full border p-2 rounded-md"
              rows="4"
              placeholder="Write something..."
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            ></textarea>
            {/* Image Upload */}
            <input type="file" accept="image/*" onChange={handleImageUpload} className="mt-2" />
            {image && <img src={image} alt="Preview" className="mt-2 rounded-md w-full" />}
            {/* Buttons */}
            <div className="flex justify-end mt-2">
              <button onClick={closeModal} className="mr-2 px-4 py-2 bg-gray-300 rounded-md">
                Cancel
              </button>
              <button onClick={handlePost} className="px-4 py-2 bg-blue-600 text-white rounded-md">
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feed;
