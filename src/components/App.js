import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [items, setItems] = useState([])
  

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(r => r.json())
    .then(data => setItems(data))
  }, [])

  function handleDelete(deleteID) {
    fetch(`http://localhost:6001/listings/${deleteID}`, {
    method: "DELETE"
    })
    .then(r => r.json())
    .then(() => {
      const newItems = items.filter((item) => item.id !== deleteID)
      setItems(newItems)
    })
  }

  return (
    <div className="app">
      <Header />
      <ListingsContainer items={items} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
