import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({items}) {
  return (
    <main>
      <ul className="cards">
        {items.map((item) => (
        <ListingCard item={item}/>
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
