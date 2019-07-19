import React, { Component } from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import "./style.css";
import { SUN, WINDY } from "../../constants/weathers";

//Variable con los datos a mostrar
const data = {
  temperature: 25,
  weatherState: SUN,
  humidity: 10,
  wind: "10 m/s"
};

const data2 = {
  temperature: 12,
  weatherState: WINDY,
  humidity: 18,
  wind: "22 m/s"
};

//Componente de ubicación
class WeatherLocation extends Component {
  constructor() {
    super();

    this.state = {
      city: "Cali",
      data: data
    };
  }

  handleUpdateClick = () => {
    console.log("actualizado");

    this.setState({
      data: data2
    });
  };

  render() {
    return (
      <div className="weatherLocationCont">
        <Location city={this.state.city} />
        <WeatherData data={this.state.data} />
        <button onClick={this.handleUpdateClick}>Actualizar</button>
      </div>
    );
  }
}

export default WeatherLocation;
