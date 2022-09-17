import React, {useState} from "react";

function ListingCard({item, handleDelete}) {
  const {id, image, description, location} = item
  const [favorite, setFavorite] = useState(true)
  function onFavoriteClick() {
    setFavorite(!favorite)
  }

  function onDeleteClick() {
    handleDelete(id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={onFavoriteClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={onFavoriteClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={onDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
