import React, { Component, useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Items() {
  const API_PAGE = "https://fortnite-api.com/v2/cosmetics/br";
  const API_PAGE_SEARCH = "https://fortnite-api.com/v2/cosmetics/br/search/all";

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(`${API_PAGE}`);
    const items = await data.json();
    setItems(items.data);
  };

  return (
    <div className="container">
      <form>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search"
            onSubmit={(e) => getSearchValue(e)}
          />
          <div class="input-group-append">
            <button class="btn btn-success" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
      {items.map((item) => (
        <h3 key={item.id}>
          <Link to={`/Items/${item.id}`}>{item.name}</Link>
        </h3>
      ))}
    </div>
  );
}

export default Items;
