import React from "react";
import PropTypes from "prop-types";

//Componente de información extra del clima
const WeatherExtraInfo = ({ humidity, wind }) => (
  <div>
    <span>{`${humidity}% - `}</span>
    <span>{`${wind} wind`}</span>
  </div>
);

//Validación del tipo de los parámetros
WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired
};

export default WeatherExtraInfo;
