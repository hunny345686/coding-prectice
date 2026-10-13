import React, { useState } from "react";

function UserSearch() {
  const [search, setSearch] = useState("");

  const users = ["Amit", "Rahul", "Priya", "Rohit", "Ravi"];

  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <h2>User Search</h2>

      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredUsers.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>

      {filteredUsers.length === 0 && <p>No users found.</p>}
    </div>
  );
}

export default UserSearch;
