import React from 'react';
import { Link } from 'react-router-dom';

// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import countries from '../countries.json';

const CountryDetails = (props) => {
  const nation = props.countries.filter((country) => {
    return props.match.params.cca3 === country.cca3;
  });

  return (
    <div className="CountryDetails">
      <h1>{nation[0].name.official}</h1>
      <div className="col-7">
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{nation[0].capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {nation[0].area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {nation[0].borders.map((singleCode) => {
                    const countryObject = props.countries.filter(
                      (borderingCountries) => {
                        return borderingCountries.cca3 === singleCode;
                      }
                    );
                    return (
                      <li>
                        <Link to={'/' + countryObject[0].cca3}>
                          {countryObject[0].name.official}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CountryDetails;
