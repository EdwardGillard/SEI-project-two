import axios from 'axios'


const apiKey = '&apiKey=6e145feb0c664217b76b233d8c8d7366'
const newsUrl = 'https://newsapi.org/v2/top-headlines'
const weatherUrl = 'http://api.weatherstack.com/'
const weatherApiKey = '7b28970b4f9ea8f2d97c712aa7628aaf'


export const getAllNews = (country) => {
  return axios.get(`${newsUrl}?country=${country}${apiKey}`)
}
export const filterCategory = (country, category) => {
  return axios.get(`${newsUrl}?country=${country}&category=${category}${apiKey}`)
}
export const businessPage = () => {
  return axios.get(`${newsUrl}?country=us&category=business${apiKey}`)
}
export const getAllWeather = (city) => {
  return axios.get(`${weatherUrl}current?access_key=${weatherApiKey}&query=${city}`)
}