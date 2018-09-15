import React, { Component } from "react";
import { connect } from "react-redux";

class WeatherList extends Component {
  generateWeatherList = () => {
    return this.props.weather.map(d => {
      return (
        <tr key={d.city.id}>
          <td>{d.city.name}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>{this.generateWeatherList()}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return {
    weather
  };
}

export default connect(mapStateToProps)(WeatherList);
