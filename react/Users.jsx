import React, { useEffect, useState } from "react";

function Users() {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("/api/user");

        if (!res.ok) {
          throw new Error("Req failed");
        }
        const result = await res.json();
        setUser(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  });

  useEffect(() => {
    const controller = new AbortController();

    async function getUser() {
      const user = await fetch("./api/user", {
        signal: controller.signal,
      });

      const result = await user.json();
    }

    getUser();

    return () => {
      return controller.abort();
    };
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default Users;
