import React from "react";
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTemperature from "./WeatherTemperature";
import {
  CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY
} from "../../../constants/weathers";
import PropTypes from "prop-types";

const WeatherData = () => (
  <div>
    <WeatherTemperature temperature={20} weatherState={SUN} />
    <WeatherExtraInfo humidity={80} wind={"10 m/s"} />
  </div>
);

export default WeatherData;
