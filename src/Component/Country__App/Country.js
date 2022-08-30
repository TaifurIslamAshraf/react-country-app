import React from "react";

const Country = (props) => {
  const { name, capital, area, population, flags, region } = props.country;

  const handleDelete = (name) => {
    props.onRemoveCountry(name);
  };

  return (
    <article>
      <div>
        <img src={flags.png} alt={name.common} />
        <h4>Name: {name.common}</h4>
        <h4>Capital: {capital}</h4>
        <h4>Population: {population}</h4>
        <h4>Flags: {area}</h4>
        <h4>Region: {region}</h4>
        <button
          onClick={() => {
            handleDelete(name.common);
          }}
        >
          Remove Country
        </button>
      </div>
    </article>
  );
};

export default Country;
