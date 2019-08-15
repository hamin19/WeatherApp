import React from "react";
import LocationList from "./components/LocationList";
import "./App.css";

const cities = ["Bogotá,col", "Buenos Aires,ar", "Madrid,es", "Fairbanks,us"];

function App() {
  return (
    <div className="App">
      <LocationList cities={cities} />
    </div>
  );
}

export default App;
