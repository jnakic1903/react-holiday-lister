import React, { Component } from 'react';
import './App.css';
import InputLayout from './components/InputLayout/InputLayout';
import Holidays from './components/Holidays/Holidays';

class App extends Component {
  state = {
    selectedCountry: '',
    selectedYear: new Date().getFullYear(),
    holidays: [],
    getHolidaysError: false,
  };

  selectedChangeHandler = (event) => {
    if (event.target.classList.contains('country')) {
      this.setState({ selectedCountry: event.target.value });
    } else {
      this.setState({ selectedYear: event.target.value });
    }
  };

  getHolidaysHandler = (event) => {
    if (this.state.selectedCountry !== '') {
      fetch(
        `https://cors-anywhere.herokuapp.com/https://date.nager.at/api/v2/publicholidays/${this.state.selectedYear}/${this.state.selectedCountry}`
      )
        .then((response) => response.json())
        .then((data) => {
          const holidaysData = data.map((holiday) => {
            // console.log(item);
            return {
              date: holiday.date,
              localName: holiday.localName,
              name: holiday.name,
            };
          });
          this.setState({ holidays: holidaysData });
        })
        .catch((error) => {
          this.setState({ getHolidaysError: true });
        });
    } else alert('Country must be selected');
  };

  render() {
    return (
      <div className='App'>
        <h1>Holiday Lister App</h1>
        <InputLayout
          changed={this.selectedChangeHandler}
          clicked={this.getHolidaysHandler}
        />
        <Holidays
          error={this.state.getHolidaysError}
          holidaysData={this.state.holidays}
        />
      </div>
    );
  }
}

export default App;
