import { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export default function App() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const query = search.trim();

    // Don't call API for an empty search
    if (!query) {
      setUsers([]);
      setLoading(false);
      setError("");
      return;
    }

    // Create a debounce timer
    const timerId = setTimeout(async () => {
      const controller = new AbortController();

      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `${API_URL}?q=${encodeURIComponent(query)}`,
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        // Example API returns an array of users
        setUsers(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Something went wrong");
          setUsers([]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }, 500);

    // Cleanup: cancel the previous timer
    return () => clearTimeout(timerId);
  }, [search]);

  return (
    <div style={{ padding: "24px", maxWidth: "500px" }}>
      <h2>Debounced User Search</h2>

      <input
        type="text"
        value={search}
        placeholder="Search users..."
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          boxSizing: "border-box",
        }}
      />

      {loading && <p>Loading...</p>}

      {error && <p role="alert">{error}</p>}

      {!loading && !error && search.trim() && users.length === 0 && (
        <p>No users found.</p>
      )}

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
