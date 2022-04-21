import React from 'react'
import {debounce} from 'lodash'
import {Loader} from './common'
import {WeatherTable} from './WeatherTable'
import css from './styles.module.css'
import {connect} from 'react-redux'
import { WeatherSelectors } from '../store'
import { WeatherAC } from '../store'

export class AppTwo extends React.Component {
    state = {
        city: '',
    };

    fetchWeatherDebounced = debounce(this.props.getWeather, 1000)

    componentDidUpdate(_, prevState) {
        if(prevState.city !== this.state.city) {
            this.fetchWeatherDebounced({city: this.state.city})
        }
    }
    
    render() {
        const {city} = this.state
        const {data, isLoading, isError, isLoaded} = this.props 

        return (<div className={css.wrapper}>
            <input type=''  value={city} placeholder='your city' onChange = {(e) => this.setState({city: e.target.value})} />
            {isLoading && <Loader/>}
            {isError && <p>Не удалось получить данные, попробуйте изменить запрос</p>}
            {isLoaded && 
            <WeatherTable {...data}/>
            }
        </div>)
    };
};

const mapStatetoProps = (state) => {
    return {
        data: WeatherSelectors.getWeather(state),
        isLoading: WeatherSelectors.getWeather(state),
        isError: WeatherSelectors.getWeather(state),
        isLoaded: WeatherSelectors.getWeather(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getWeather: (city) => dispatch(WeatherAC.fetchWeather(city))
    }
}

export const App =  connect(mapStatetoProps, mapDispatchToProps)(AppTwo)
