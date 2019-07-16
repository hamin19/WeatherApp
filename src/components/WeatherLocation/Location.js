import React from "react";
import PropTypes from "prop-types";

const Location = props => {
  const { city } = props;
  return (
    <div>
      <h1>{city}</h1>
    </div>
  );
};

//Validación del tipo de los parámetros
Location.propTypes = {
  city: PropTypes.string.isRequired
};

export default Location;
