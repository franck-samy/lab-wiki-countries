import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountriesDetails from './components/CountryDetails';
import { Route, Switch } from 'react-router-dom';
import countries from './countries.json';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <CountriesList countries={countries} />
        <Switch>
          <Route
            exact
            path="/:cca3"
            render={(routeProps) => (
              <CountriesDetails {...routeProps} countries={countries} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
