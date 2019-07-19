import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const Location = props => {
  const { city } = props;
  return (
    <div className="locationCont">
      <h1>{city}</h1>
    </div>
  );
};

//Validación del tipo de los parámetros
Location.propTypes = {
  city: PropTypes.string.isRequired
};

export default Location;
