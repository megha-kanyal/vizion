import React, { useState, useEffect } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
      });
  }, []);

  useEffect(() => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <div className="mb-4">
        <label htmlFor="search" className="block text-lg font-semibold">
          Search Users
        </label>
        <input
          type="search"
          id="search"
          className="w-full p-2 mt-2 text-black rounded"
          placeholder="Type to search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid gap-4">
        {filteredUsers.map((user) => (
          <div key={user.id} className="bg-gray-800 p-4 rounded shadow-md">
            <h2 className="text-yellow-400 text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-300">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
