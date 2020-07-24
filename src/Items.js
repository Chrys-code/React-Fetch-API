import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import Search from "./ItemsComponent/Search.js";
import "./App.css";

function Items() {
  const API_PAGE = process.env.REACT_APP_API_PAGE;

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(`${API_PAGE}`);
    const items = await data.json();
    setItems(items.data);
    console.log(items);
  };

  return (
    <div className="container">
      <Search item={items} />
    </div>
  );
}

export default Items;

/*

      <div className="api-results">
        {items.map((item) => (
          <h5 key={item.id}>
            <Link to={`/Items/${item.id}`}>{item.name}</Link>
          </h5>
        ))}
      </div>


*/
