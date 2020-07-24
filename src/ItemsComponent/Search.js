import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../App.css";

function Search(item) {
  const itemsArr = item.item;

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const itemsMap = itemsArr.map((item) => item.name);
    const results = itemsMap.filter((itemsArrSearch) =>
      itemsArrSearch.toLowerCase().includes(searchTerm.toLowerCase().trim())
    );

    setSearchResults(results);
  }, [searchTerm]);

  const searchImgStyle = {
    width: "150px",
    height: "150px",
  };

  console.log(itemsArr);
  return (
    <div>
      <form>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search for Fortnite Costumes..."
            value={searchTerm}
            onChange={handleChange}
          />
          <div className="input-group-append">
            <button disabled className="btn btn-success" type="submit">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </form>
      <div className="results">
        {searchResults.map((name, index) => (
          <div key={index}>
            <img
              style={searchImgStyle}
              src={
                itemsArr[itemsArr.findIndex((item) => item.name === name)]
                  .images.smallIcon
              }
            />
            <h5 className="font-weight-lighter">
              <Link
                to={`/Items/${
                  itemsArr[itemsArr.findIndex((item) => item.name === name)].id
                }`}
              >
                {name}
              </Link>
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
