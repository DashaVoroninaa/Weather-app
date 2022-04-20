import React from 'react'
import {debounce} from 'lodash'
import {getCurrentWeather} from '../api'
import {LOAD_STATUSES} from '../constants'
import {Loader} from './common'
import {WeatherTable} from './WeatherTable'
import css from './styles.module.css'

export class App extends React.Component {
    state = {
        city: '',
        data: {},
        loadStatus: LOAD_STATUSES.UNKNOWN,
    };

    fetchWeather = (params) => {
        this.setState({loadStatus: LOAD_STATUSES.LOADING})
    
        getCurrentWeather(params).then(({main, weather}) => {
            this.setState({loadStatus: LOAD_STATUSES.LOADED, data:{...main, icon: weather[0].icon} })
        }).catch(() => {
            this.setState({loadStatus: LOAD_STATUSES.ERROR, data: {}})
        })
    }
    
    fetchWeatherDebounced = debounce(this.fetchWeather, 1000)

    componentDidUpdate(_, prevState) {
        if(prevState.city !== this.state.city) {
            this.fetchWeatherDebounced({city: this.state.city})
        }
    }
    
    render() {
        const {city, data} = this.state

        return <div className={css.wrapper}>
            <input  value={city} placeholder='your city' onChange = {(e) => this.setState({city: e.target.value})} />
            {this.state.loadStatus === LOAD_STATUSES.LOADING && <Loader/>}
            {this.state.loadStatus === LOAD_STATUSES.ERROR && <p>Не удалось получить данные, попробуйте изменить запрос</p>}
            {this.state.loadStatus === LOAD_STATUSES.LOADED && 
            <WeatherTable {...data}/>
            }
        </div>
    };
};
