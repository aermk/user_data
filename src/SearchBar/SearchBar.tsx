import React from "react";
import styles from "./SearchBar.module.scss";
import { IoSearch } from "react-icons/io5";

type SearchBarPropsType = {
  onSearch: (query: string) => void;
};

const SearchBar: React.FC<SearchBarPropsType> = ({ onSearch }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div className={styles.bar}>
      <div className={styles.search}>
        <IoSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search by company"
          className={styles.searchInput}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;
