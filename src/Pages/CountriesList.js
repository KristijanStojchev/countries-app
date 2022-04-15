import React, { useState } from "react";
import Modal from "react-modal";
import { useCountries } from "../Hooks/UseCountries";

import "./CountriesList.css";

export default function CountriesList(props) {
  const { error, loading, data } = useCountries();
  const [isModalOpened, setisModalOpened] = useState(false);
  const [modalContent, setModalContent] = useState([]);

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
