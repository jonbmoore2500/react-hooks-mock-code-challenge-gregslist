import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [items, setItems] = useState([])
  const [itemsSearched, setItemsSearched] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then(data => {
      setItems(data)
      setItemsSearched(data)
    })
  }, [])

  function handleDelete(deleteID) {
    fetch(`http://localhost:6001/listings/${deleteID}`, {
    method: "DELETE"
    })
    .then(r => r.json())
    .then(() => {
      const newItems = items.filter((item) => item.id !== deleteID)
      setItems(newItems)
      setItemsSearched(newItems)
    })
  }

  function handleSubmit(searchVal) {
    const searchedItems = items.filter((item) => item.description.toLowerCase().includes(searchVal))
    setItemsSearched(searchedItems)
  }

  return (
    <div className="app">
      <Header handleSubmit={handleSubmit}/>
      <ListingsContainer items={itemsSearched} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
