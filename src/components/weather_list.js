import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from './chart';
import GoogleMap from './google_map';

class WeatherList extends Component {
  renderWeather = (cityData) => {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => {
      return weather.main.temp;
    });
    const pressures = cityData.list.map(weather => {
      return weather.main.pressure;
    });
    const humidities = cityData.list.map(weather => {
      return weather.main.humidity;
    });
    const lon = cityData.city.coord.lon;
    const lat = cityData.city.coord.lat;

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td>
          <Chart color="red" data={temps} />
        </td>
        <td>
          <Chart color="green" data={pressures} />
        </td>
        <td>
          <Chart color="black" data={humidities} />
        </td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thread>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thread>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather
  };
}

export default connect(mapStateToProps)(WeatherList);