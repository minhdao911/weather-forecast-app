import React, { Component } from "react";
import { connect } from "react-redux";

import Chart from "../components/Chart";

class WeatherList extends Component {
  generateWeatherList = () => {
    return this.props.weather.map(d => {
      const { id, name } = d.city;
      const tempData = d.list.map(dt => dt.main.temp);
      const pressureData = d.list.map(dp => dp.main.pressure);
      const humidData = d.list.map(dh => dh.main.humidity);
      return (
        <tr key={id}>
          <td>{name}</td>
          <td>
            <Chart data={tempData} color="orange" unit="°C" />
          </td>
          <td>
            <Chart data={pressureData} color="green" unit="hPa" />
          </td>
          <td>
            <Chart data={humidData} color="blue" unit="%" />
          </td>
          <td>
            <button type="button" class="btn btn-primary">
              Remove
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
            <th />
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
