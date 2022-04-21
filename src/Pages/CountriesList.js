import React, { useState } from "react";
import Modal from "react-modal";
import LoadingSpinner from "../Components/Loader";
import { useCountries } from "../Hooks/UseCountries";
import { useCountry } from "../Hooks/UseCountry";
// import { useQuery } from "@apollo/client";

// loader za loading countries, useQuery so getCountry vo poseben hook, modalcontent da e samo country code, skip parametar da ne pravi error

import "./CountriesList.css";

export default function CountriesList() {
  const { error, loading, data } = useCountries();
  const [isModalOpened, setisModalOpened] = useState(false);
  const [modalContent, setModalContent] = useState([]);
  const [skipState, setSkipState] = useState(true);

  // const {
  //   error: errorCountry,
  //   loading: loadingCountry,
  //   data: dataCountry,
  // } = useQuery(GET_COUNTRY, { variables: { code: modalContent.code } });

  const {
    error: errorCountry,
    loading: loadingCountry,
    data: dataCountry,
  } = useCountry(modalContent, skipState);

  const changeskipvalue = (value) => {
    setSkipState(value);
  };

  const changecode = (code) => {
    setModalContent(code);
  };

  if (loading) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  if (loadingCountry) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <div>Something went wrong!</div>;
  }

  if (errorCountry) {
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
                changecode(country.code);
                changeskipvalue(false);
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
          <p>name: {dataCountry?.country.name}</p>
          <p>capital: {dataCountry?.country.capital}</p>
          <p>currency: {dataCountry?.country.currency}</p>
          <p>phone: {dataCountry?.country.phone}</p>
          <p>native: {dataCountry?.country.native}</p>
        </div>
        <button onClick={() => setisModalOpened(false)}>Close</button>
      </Modal>
    </div>
  );
}
