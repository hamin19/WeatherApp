import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { PropTypes } from "prop-types";
import getUrlWeatherByCity from "./../../services/getUrlWeatherByCity";
import transformWeather from "./../../services/transformWeather";
import Location from "./Location";
import WeatherData from "./WeatherData";
import "./style.css";
// import getUrlWeatherByCity from "../../services/getUrlWeatherByCity";

//Componente de ubicación
class WeatherLocation extends Component {
  constructor(props) {
    super(props);
    const { city } = props;

    this.state = {
      city,
      data: null
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.handleUpdateClick();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  //Escucha del botónn "Actualizar"
  handleUpdateClick = () => {
    const api_weather = getUrlWeatherByCity(this.state.city);

    fetch(api_weather)
      .then(resolve => {
        return resolve.json();
      })
      .then(data => {
        const newWeather = transformWeather(data);
        console.log(newWeather);
        debugger;

        this.setState({
          data: newWeather
        });
      });
  };

  render() {
    console.log("render");
    const { city, data } = this.state;
    return (
      <div className="weatherLocationCont">
        <Location city={city} />
        {data ? <WeatherData data={data} /> : <CircularProgress />}
      </div>
    );
  }
}

WeatherLocation.protoTypes = {
  city: PropTypes.string.isRequired
};

export default WeatherLocation;
