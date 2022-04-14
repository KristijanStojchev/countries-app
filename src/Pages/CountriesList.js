import React from "react";
import { useCountries } from "../Hooks/UseCountries";

import "./CountriesList.css";

export default function CountriesList() {
  const { error, loading, data } = useCountries();

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>Something went wrong!</div>;
  }

  return (
    <ul className="CountriesList">
      {data.countries.map((country) => {
        return <li key={country.code}>{country.name}</li>;
      })}
    </ul>
  );
}
