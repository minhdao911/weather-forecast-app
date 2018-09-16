import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions";
import CountryList from "../components/CountryList";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: "",
      country: ""
    };
  }

  onInputChange = e => {
    this.setState({ city: e.target.value });
  };

  onCountryChange = e => {
    this.setState({ country: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.fetchWeather(this.state.city, this.state.country);
    this.setState({ city: "" });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group search-bar">
        <input
          type="text"
          className="form-control search-bar-input"
          placeholder="City Name"
          value={this.state.city}
          onChange={this.onInputChange}
        />
        <CountryList onCountryChange={this.onCountryChange} />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="submit">
            Search
          </button>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
