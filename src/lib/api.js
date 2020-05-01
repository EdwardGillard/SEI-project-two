import axios from 'axios'


const apiKey = '&apiKey=6782c412ba294495afbcc7a6791b1125'
const newsUrl = 'https://newsapi.org/v2/top-headlines'
const weatherKey = 'current?access_key=851110325e8ed3acbc16f9bc843ac101'
const weatherURL = 'http://api.weatherstack.com/'


export const getAllNews = (country) => {
  return axios.get(`${newsUrl}?country=${country}${apiKey}`)
}

export const filterCategory = (country, category) => {
  return axios.get(`${newsUrl}?country=${country}&category=${category}${apiKey}`)
}

export const getAllWeather = (searchTerm) => {
  return axios.get(`${weatherURL}${weatherKey}&query=${searchTerm}`)
}
