import React from "react";
import PropTypes from "prop-types";
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTemperature from "./WeatherTemperature";
import "./style.css";

//Componente de datos del clima
const WeatherData = ({
  data: { temperature, weatherState, humidity, wind }
}) => (
  <div className="weatherDataCont">
    <WeatherTemperature temperature={temperature} weatherState={weatherState} />
    <WeatherExtraInfo humidity={humidity} wind={wind} />
  </div>
);

//Validación del tipo de los parámetros
WeatherData.propTypes = {
  data: PropTypes.shape({
    temperature: PropTypes.PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
  })
};

export default WeatherData;
