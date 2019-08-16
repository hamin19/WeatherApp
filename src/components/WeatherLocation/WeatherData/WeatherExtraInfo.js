import React from "react";
import PropTypes from "prop-types";
import "./style.css";

//Componente de información extra del clima
const WeatherExtraInfo = ({ humidity, wind }) => (
  <div className="weatherExtraInfoCont">
    <span className="extraInfoText">{`Humedad: ${humidity} %`}</span>
    <span className="extraInfoText">{`Vientos: ${wind}`}</span>
  </div>
);

//Validación del tipo de los parámetros
WeatherExtraInfo.propTypes = {
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.string.isRequired
};

export default WeatherExtraInfo;
