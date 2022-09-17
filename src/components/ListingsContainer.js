import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({items, handleDelete}) {
  
  function handleDeleteLC(deleteID) {
    handleDelete(deleteID)
  }

  return (
    <main>
      <ul className="cards">
        {items.map((item) => (
        <ListingCard item={item} key={item.id} handleDelete={handleDeleteLC}/>
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
