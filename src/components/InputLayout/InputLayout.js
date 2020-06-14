import React, { Component } from 'react';
import SelectComponent from '../SelectComponent/SelectComponent';
import './InputLayout.css';

class InputLayout extends Component {
  state = {
    countries: [],
    getCountriesError: false,
    startYear: new Date().getFullYear(),
  };

  componentDidMount() {
    fetch(
      'https://cors-anywhere.herokuapp.com/https://date.nager.at/Api/v2/AvailableCountries'
    )
      .then((response) => response.json())
      .then((data) => {
        const countriesData = data.map((item) => {
          // console.log(item);
          return `${item.value} - ${item.key}`;
        });
        this.setState({ countries: countriesData });
      })
      .catch((error) => {
        this.setState({ getCountriesError: true });
      });
  }

  render() {
    let data = (
      <div className={'InputLayout'}>
        <p>Please select country and year</p>
        <div className={'SelectGroup'}>
          <div>
            <span>Countries</span>
            <SelectComponent
              defaultValue={null}
              data={this.state.countries}
              changed={this.props.changed}
              altClass={'country'}
            />
          </div>
          <div>
            <span>Years</span>
            <SelectComponent
              defaultValue={this.state.startYear}
              data={this.state.startYear}
              changed={this.props.changed}
              altClass={'year'}
            />
          </div>
        </div>
        <button onClick={this.props.clicked}>Get Holidays</button>
      </div>
    );
    if (this.state.getCountriesError)
      data = <p>Something went wrong, try again later!</p>;
    return data;
  }
}

export default InputLayout;
