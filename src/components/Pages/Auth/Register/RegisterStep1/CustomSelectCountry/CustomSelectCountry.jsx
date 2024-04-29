import React, { useEffect } from 'react';
import './CustomSelectCountry.scss';
import PropTypes from 'prop-types';
import { getCountries, getCountryCallingCode } from 'react-phone-number-input';

const CustomSelectCountry = ({ value, onChange, labels, ...rest }) => {
  useEffect(() => {
    console.log(value)
  }, [value])

  useEffect(() => {
    console.log(getCountries());
  }, []);

  return (
    <select
      {...rest}
      value={value}
      onChange={event => onChange(event.target.value || undefined)}
    >
      {getCountries().map((country) => (
        <option key={country} value={country}>
          {labels[country]} ({country}) +{getCountryCallingCode(country)}
        </option>
      ))}
    </select>
  );
};

CustomSelectCountry.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  labels: PropTypes.objectOf(PropTypes.string).isRequired
};

export default CustomSelectCountry;
