import React from 'react';
import css from './styles.module.css';

export class WeatherTable extends React.Component {
  render() {
    return (
      <table className={css.wrapper}>
          <thead>
            <tr>
              <th>Temperature</th>
              <th>Humidity</th>
              <th>Max Temperature</th>
              <th>Min Temperature</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.props.temp}</td>
              <td>{this.props.humidity}</td>
              <td>{this.props.temp_max}</td>
              <td>{this.props.temp_min}</td>
            </tr>
          </tbody>
      </table>
    );
  }
}
