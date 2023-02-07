import React, { useEffect, useState, useRef, useContext } from "react";
import axios from "axios";
import SearchResult from "./SearchResult";
import context from "../utils/Context";

import "./Search.style.scss";

const Search = () => {
  const ctx = useContext(context);
  const [searchedWord, setSearchedWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [error, setError] = useState(false);
  const focusRef = useRef();
  const errorTxt = (
    <span className="errorTxt">
      We couldn't find this word, please try another one!
    </span>
  );

  const dictionaryAPI = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`
      );
      setMeanings(data.data);
    } catch (error) {
      console.error(error);
      if (error.response.status === 404) {
        setError(true);
        setMeanings([]);
      }
    }
  };

  const inputHandler = (ev) => {
    setSearchedWord(ev.target.value);
    setError(false);
  };

  const inputClearHandler = () => {
    setSearchedWord("");
    setMeanings([]);
    setError(false);
    focusRef.current.focus();
  };

  useEffect(() => {
    if (searchedWord === "") {
      setSearchedWord("");
      setMeanings([]);
    }
    const identifier = setTimeout(() => {
      searchedWord && dictionaryAPI();
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [searchedWord]);
  return (
    <div className="search">
      <div className="search_input_wrapper">
        <input
          type="text"
          placeholder="Search a word..."
          className={`search_input ${!ctx.sarif ? "search_input_sans" : ""} ${error && "error"}`}
          value={searchedWord}
          onChange={inputHandler}
          ref={focusRef}
        />
        <img src={require("../../assets/search.png")} className="search_icon" />
        {searchedWord !== "" && (
          <button
            className={`search_clear ${!ctx.sarif ? "search_clear_sans" : ""}`}
            onClick={inputClearHandler}
          >
            Clear
          </button>
        )}
      </div>
      <div className="search_result_wrapper">
        {error && errorTxt}
        {!error && meanings && (
          <SearchResult meanings={meanings} word={searchedWord} />
        )}
      </div>
    </div>
  );
};

export default Search;
