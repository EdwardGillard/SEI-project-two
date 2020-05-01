import React from 'react'
import { getAllWeather } from '../../../lib/api'
class ShowWeather extends React.Component {
  state = {
    city: null,
    weather: null,
    searchTerm: ''
  }
  async componentDidMount() {
    try {
      const res = await getAllWeather(this.state.searchTerm)
      this.setState({ city: res.data.location, weather: res.data.current })
    } catch (err) {
      console.log(err)
    }
  }
  handleSubmit = async event => {
    event.preventDefault()
    try {
      this.componentDidMount()
    } catch (err) {
      console.log(err)
    }
  }
  handleChange = async event => {
    const val = event.target.value
    this.setState({ searchTerm: val })
  }
  render() {
    const { weather } = this.state
    const { city } = this.state
    if (!this.state.city) return <form
      onSubmit={this.handleSubmit}
    >
      <input
        onChange={this.handleChange}
      >
      </input>
      <button>Submit</button>
    </form>
    return (
      <>
        <form
          onSubmit={this.handleSubmit}
        >
          <input
            onChange={this.handleChange}
          >
          </input>
          <button>Submit</button>
        </form>
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-one-third">
                <div className="card">
                  <div className="card-content">
                    <h1 className="title-of-the-card">
                      {city.name}, {city.country}
                    </h1>
                    <div>
                      <img src={weather.weather_icons} alt="Weather Icon" />
                    </div>
                    <div className="main-content">
                      <p>Current Temperature: {weather.temperature}°C</p>
                      <p>Feels like: {weather.feelslike}°C</p>
                      <p>Wind Speed: {weather.wind_speed}mph</p>
                      <p>Wind Direction: {weather.wind_dir}</p>
                      <p>Precipitation: {weather.precip}%</p>
                      <p>Humidity: {weather.humidity}%</p>
                      <p>Cloud cover: {weather.cloudcover}%</p>
                    </div>
                    <div className="">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section >
      </>
    )
  }
}
export default ShowWeather