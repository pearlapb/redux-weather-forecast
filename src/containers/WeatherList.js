import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart.js';
import GoogleMap from '../components/GoogleMap.js'
// GET THE WEATHER DATA:
// 1. import connect function
// 2. Define function mapStateToProps
// 3. Pull the weather data into our container

class WeatherList extends Component {

    renderWeather(cityData) {
        const name = cityData.city.name
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat } = cityData.city.coord;

        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td><Chart data={temps} color='orange' unit='K' /></td>
                <td><Chart data={pressures} color='blue' unit='hPa' /></td>
                <td><Chart data={humidities} color='green' unit='%' /></td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}


// Hooking up to our redux state
function mapStateToProps({ weather }) {
    return { weather }
}
export default connect(mapStateToProps)(WeatherList);
