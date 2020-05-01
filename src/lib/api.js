import axios from 'axios'


const apiKey = '&apiKey=6e145feb0c664217b76b233d8c8d7366'
const newsUrl = 'https://newsapi.org/v2/top-headlines'
const weatherKey= 'current?access_key=7b28970b4f9ea8f2d97c712aa7628aaf'


export const getAllNews = (country) => {
  return axios.get(`${newsUrl}?country=${country}${apiKey}`)
}

export const filterCategory = (country, category) => {
  return axios.get(`${newsUrl}?country=${country}&category=${category}${apiKey}`)
}

export const getAllWeather = (searchTerm) => {
  return axios.get(`http://api.weatherstack.com/${weatherKey}&query=${searchTerm}`)
}
