import React, { useEffect, useState } from "react";
import Countrys from "./Countrys";
import "./fetchData.modiul.css";
import Search from "./Search";

const url = "https://restcountries.com/v3.1/all";
const FetchData = () => {
  const [isLoding, setIsLoding] = useState(true);
  const [error, setError] = useState(null);
  const [countrys, setCountrys] = useState([]);

  const fetchCountry = async (url) => {
    setIsLoding(true);
    try {
      setError(null);
      const response = await fetch(url);
      const data = await response.json();
      setCountrys(data);
      setIsLoding(false);
    } catch (error) {
      setError(error.message);
      setIsLoding(false);
      setCountrys([]);
    }
  };

  useEffect(() => {
    fetchCountry(url);
  }, []);

  const handleRemoveCountry = (name) => {
    const filterReomoveCountry = countrys.filter(
      (country) => country.name.common !== name
    );
    setCountrys(filterReomoveCountry);
  };

  const handleSearch = (searchValue) => {
    const value = searchValue.toLowerCase();
    console.log(value);
    const filterCountrys = countrys.filter((country) => {
      const newCountry = country.name.common.toLowerCase();
      const filter = newCountry.startsWith(value);
      return filter;
    });

    setCountrys(filterCountrys);
  };

  return (
    <div className="container">
      <h1>Country App</h1>
      <Search onSearch={handleSearch} />
      {isLoding && <h2>Loding...</h2>}
      {error && <h2>{error}</h2>}
      <Countrys countrys={countrys} onRemoveCountry={handleRemoveCountry} />
    </div>
  );
};

export default FetchData;
