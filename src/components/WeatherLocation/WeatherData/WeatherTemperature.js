import React from "react";
import WeatherIcons from "react-weathericons";
import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY
} from "../../../constants/weathers";
import PropTypes from "prop-types";

const icons = {
  [CLOUD]: "cloud",
  [CLOUDY]: "cloudy",
  [SUN]: "day-sunny",
  [RAIN]: "rain",
  [SNOW]: "snow",
  [WINDY]: "windy"
};

//Validación del icono de temperatura
const getWeatherIcon = weatherState => {
  const icon = icons[weatherState];

  if (icon)
    //Lógica de los weather icons
    return <WeatherIcons name={icon} size="2x" />;
  else return <WeatherIcons name="day-sunny" size="2x" />;
};

//Componente de temperatura
const WeatherTemperature = ({ temperature, weatherState }) => (
  <div>
    {getWeatherIcon(weatherState)}
    <span>{`${temperature} °C`}</span>
  </div>
);

//Validación del tipo de los parámetros
WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;
