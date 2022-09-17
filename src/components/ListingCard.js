import React, {useState} from "react";

function ListingCard({item}) {
  const {image, description, location} = item
  const [favorite, setFavorite] = useState(true)
  function onFavoriteClick() {
    setFavorite(!favorite)
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
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
