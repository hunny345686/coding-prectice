const filteredUsers = useMemo(
  () => users.filter((user) => user.active),
  [users],
);

const handleSelect = useCallback((id) => {
  setSelectedId(id);
}, []);

const UserList = React.memo(function UserList({ users, onSelect }) {
  return users.map((user) => (
    <button key={user.id} onClick={() => onSelect(user.id)}>
      {user.name}
    </button>
  ));
});

//  API Fetchig

useEffect(() => {
  const controller = new AbortController();

  async function loadUsers() {
    try {
      setStatus("loading");

      const response = await fetch("/api/users", {
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      setUsers(data);
      setStatus("success");
    } catch (error) {
      if (error.name !== "AbortError") {
        setStatus("error");
      }
    }
  }

  loadUsers();

  return () => controller.abort();
}, []);
