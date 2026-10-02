// Higher-Order Component (HOC)
const WithLoading = (Component) => {
  return function EnhanceFn({ isLoading, ...users }) {
    if (isLoading) {
      return <p>Loading...</p>;
    }

    return <Component {...users} />;
  };
};

const UserList = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};
const UserListWithLoading = WithLoading(UserList);

function App() {
  const users = [
    { id: 1, name: "Prem" },
    { id: 2, name: "Rahul" },
  ];
  return <UserListWithLoading users={users} isLoading={true} />;
}

export default App;
