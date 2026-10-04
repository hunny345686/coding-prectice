import { useEffect, useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        const data = await response.json();
        setUsers(data);
      } catch (err) {}
    }

    fetchUsers();
  }, []);

  function handleSort() {
    const soredUser = [...users].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setUsers(soredUser);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>
            <button onClick={handleSort}>Name</button>
          </th>
          <th>Email</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
