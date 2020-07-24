import React, { useState, useEffect } from "react";
import "./App.css";

function ItemDetails({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState([]);
  const [itemImages, setItemImage] = useState([]);
  let [itemSet, setItemSet] = useState([]);

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortnite-api.com/v2/cosmetics/br/${match.params.id}`
    );

    const item = await fetchItem.json();
    setItem(item.data);
    setItemImage(item.data.images);
    setItemSet(item.data.set);
  };

  if (itemSet === null || itemSet === "") {
    itemSet = { text: "This item belongs nowhere" };
  }

  return (
    <div className="container">
      <div className="itemContainer">
        <h1 className="display-4">{item.name}</h1>
        <img src={itemImages.icon} alt="Item Image" />
        <h5>Description:</h5>
        <p>
          {item.description}
          <br></br>
          {itemSet.text}
        </p>
      </div>
    </div>
  );
}

export default ItemDetails;
