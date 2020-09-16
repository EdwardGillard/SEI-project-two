import React from 'react'
import { getAllWeather } from '../../../lib/api'
import Navbar from '../../common/Navbar'
import FooterTwo from '../../common/FooterTwo'

class ShowWeather extends React.Component {
  state = {
    city: null,
    weather: null,
    searchTerm: ''
  }
  async componentDidMount() {
    try {
      this.loadWeather()
    } catch (err) {
      console.log(err)
    }
  }

  loadWeather = async () => {
    try {
      const res = await getAllWeather(this.state.searchTerm)
      this.setState({ city: res.data.location, weather: res.data.current })
    } catch (err) {
      console.log(err)
      this.props.history.push('/notfound')
    }
  }

  handleSubmit = async event => {
    event.preventDefault()
    try {
      this.loadWeather()
    } catch (err) {
      console.log(err)
      this.props.history.push('/notfound')
    }
  }

  handleChange = async event => {
    const val = event.target.value
    this.setState({ searchTerm: val })
  }

  render() {
    const { weather } = this.state
    const { city } = this.state
    if (!this.state.city) return (
      <>
        <Navbar />
        <div className="search-form-container">
          <h1 className="title is-2">Enter Your City</h1>
          <form className="search-form"
            onSubmit={this.handleSubmit}
          >
            <input
              onChange={this.handleChange}
            >
            </input>
            <button type="submit" className="weather-button">submit</button>
          </form>
        </div>
      </>
    )
    return (
      <>
        <Navbar />
        <div className="search-form-container-two">
          <form className="search-form"
            onSubmit={this.handleSubmit}
          >
            <input onChange={this.handleChange}></input>
            <button type="submit" className="weather-button">submit</button>
          </form>
        </div>
        <section className="section">
          <div className="container search-cont">
            <div className="columns weather-board">
              <div className="column is-three-fifths">
                <div className="card">
                  <div className="card-content">
                    <h1 className="title is-2 weather-title">
                      {city.name}, {city.country}
                    </h1>
                    <div className="weather-image">
                      <img src={weather.weather_icons} alt="Weather Icon" />
                    </div>
                    <div className="main-weather-content">
                      <p >Current Temperature: <span className="weather-content">{weather.temperature}°C </span></p>
                      <p >Feels like: <span className="weather-content">{weather.feelslike}°C </span></p>
                      <p >Wind Speed: <span className="weather-content">{weather.wind_speed}mph </span></p>
                      <p >Wind Direction: <span className="weather-content">{weather.wind_dir} </span></p>
                      <p >Precipitation: <span className="weather-content">{weather.precip}%</span></p>
                      <p >Humidity: <span className="weather-content">{weather.humidity}%</span></p>
                      <p >Cloud cover: <span className="weather-content">{weather.cloudcover}%</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section >
        <FooterTwo />
      </>
    )
  }
}
export default ShowWeather