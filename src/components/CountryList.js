import React, { Component } from "react";
import axios from "axios";

export default class CountryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  generateCountry(countryList) {
    const countries = countryList.data;
    return Object.keys(countries).map(c => {
      return (
        <option key={c} value={c}>
          {countries[c]}
        </option>
      );
    });
  }

  componentDidMount() {
    axios
      .get("../data/country.json")
      .then(response => this.generateCountry(response))
      .then(data => {
        this.setState({ list: data });
      });
  }

  render() {
    return (
      <select className="custom-select" onChange={this.props.onCountryChange}>
        {this.state.list}
      </select>
    );
  }
}
