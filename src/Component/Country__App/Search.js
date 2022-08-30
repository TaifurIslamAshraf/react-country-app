import React, { useEffect, useState } from "react";
import "./fetchData.modiul.css";

const Search = (props) => {
  const { onSearch } = props;
  const [searchValue, setSearchValue] = useState("");
  const handleChangeCountry = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    onSearch(searchValue);
  }, [searchValue]);

  return (
    <div>
      <input
        onChange={handleChangeCountry}
        type="search"
        name="search"
        id="search"
        placeholder="Search Country..."
        value={searchValue}
      />
    </div>
  );
};

export default Search;
