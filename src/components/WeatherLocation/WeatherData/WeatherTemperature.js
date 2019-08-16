import React from "react";
import WeatherIcons from "react-weathericons";
import {
  CLOUD,
  SUN,
  RAIN,
  SNOW,
  THUNDER,
  DRIZZLE
} from "../../../constants/weathers";
import PropTypes from "prop-types";
import "./style.css";

const icons = {
  [CLOUD]: "cloud",
  [SUN]: "day-sunny",
  [RAIN]: "rain",
  [SNOW]: "snow",
  [THUNDER]: "day-thunderstorm",
  [DRIZZLE]: "day-showers"
};

//Validación del icono de temperatura
const getWeatherIcon = weatherState => {
  const icon = icons[weatherState];
  const sizeIcon = "4x";

  if (icon)
    //Lógica de los weather icons
    return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />;
  else
    return <WeatherIcons className="wicon" name="day-sunny" size={sizeIcon} />;
};

//Componente de temperatura
const WeatherTemperature = ({ temperature, weatherState }) => (
  <div className="weatherTemperatureCont">
    {getWeatherIcon(weatherState)}
    <span className="temperature">{`${temperature}`}</span>
    <span className="temperatureType">{` C°`}</span>
  </div>
);

//Validación del tipo de los parámetros
WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;
