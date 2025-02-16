import { FC, useEffect, useState } from "react";
import { User } from "./types";
import DataTable from "./DataTable/DataTable";
import Header from "./Header";
import SearchBar from "./SearchBar/SearchBar";
import styles from "./App.module.scss";

const App: FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchItem, setSearchItem] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error(`Failed loading data`);
        }
        const data: User[] = await response.json();
        setUsers(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));

  const filteredItems = sortedUsers.filter((user) =>
    user.company.name.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <Header />
      <SearchBar onSearch={setSearchItem}></SearchBar>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && <DataTable users={filteredItems} />}
    </div>
  );
};

export default App;
