import React from "react";
import Search from "./Search";

function Header({handleSubmit}) {
  
  function onClickSubmit(searchVal) {
    handleSubmit(searchVal)
  }
  
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onClickSubmit={onClickSubmit}/>
    </header>
  );
}

export default Header;
