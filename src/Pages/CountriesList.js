import { getDataFromTree } from "@apollo/client/react/ssr";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useCountries } from "../Hooks/UseCountries";

import "./CountriesList.css";

export default function CountriesList() {
  const { error, loading, data } = useCountries();
  const [isModalOpened, setisModalOpened] = useState(false);
  const [modalContent, setModalContent] = useState(() => {
    const localData = localStorage.getItem("contents");

    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("contents", JSON.stringify(modalContent));
  });

  const changecontent = (country) => {
    setModalContent(country);
  };

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>Something went wrong!</div>;
  }

  return (
    <div className="App">
      <ul className="CountriesList">
        {data.countries.map((country) => {
          return (
            <li
              onClick={() => {
                setisModalOpened(true);
                changecontent(country);
              }}
              key={country.code}
            >
              {country.name}
            </li>
          );
        })}
      </ul>
      <Modal
        isOpen={isModalOpened}
        onRequestClose={() => setisModalOpened(false)}
      >
        <div>
          <p>name: {modalContent.name}</p>
          <p>capital: {modalContent.capital}</p>
          <p>currency: {modalContent.currency}</p>
          <p>phone: {modalContent.phone}</p>
          <p>native: {modalContent.native}</p>
        </div>
        <button onClick={() => setisModalOpened(false)}>Close</button>
      </Modal>
    </div>
  );
}
