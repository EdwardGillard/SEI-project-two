import axios from 'axios'


const newsKey = process.env.REACT_APP_MY_SECRET_KEY_NEWS
const newsUrl = 'https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines'
const weatherKey = process.env.REACT_APP_MY_SECRET_KEY_WEATHER
const weatherURL = 'https://cors-anywhere.herokuapp.com/http://api.weatherstack.com/'

export const getAllNews = (country) => {
  return axios.get(`${newsUrl}?country=${country}&apiKey=${newsKey}`)
}

export const filterCategory = (country, category) => {
  return axios.get(`${newsUrl}?country=${country}&category=${category}&apiKey=${newsKey}`)
}

export const getAllWeather = (searchTerm) => {
  return axios.get(`${weatherURL}current?access_key=${weatherKey}&query=${searchTerm}`)
}
