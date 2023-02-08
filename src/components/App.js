import React, { useState, useEffect } from "react";
import Span from "./Span";
import Info from "./Info";

function App() {
  const [pups, setPups] = useState([])
  const [info, setInfo] = useState({
    "id": 1,
    "name": "Mr. Bonkers",
    "isGoodDog": true,
    "image": "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg"
  })
  const [isFiltered, setIsFiltered] = useState(false)
 

  useEffect(() => {
    fetch('http://localhost:3001/pups')
      .then(resp => resp.json())
      .then(data => setPups(data))
  }, [])

  function onHandleClick(id) {
    let newInfo = pups.filter(pup => {
      return pup.id === id
    })

   return setInfo(newInfo[0])

  }

  const filteredList = pups.filter(pup => {
    return pup.isGoodDog === true
  })

  function handleGoodClick(event) { 
    setIsFiltered(prev => !prev)
  }


  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter" onClick={handleGoodClick}>Filter good dogs: {isFiltered ? "ON" : "OFF"}</button>
      </div>
      <div id="dog-bar">
        <Span pups={isFiltered ? filteredList : pups } onHandleClick={onHandleClick} />
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          <Info info={info} setInfo={setInfo} />
        </div>
      </div>
    </div>
  );
}

export default App;
