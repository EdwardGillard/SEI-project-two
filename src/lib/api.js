import axios from 'axios'

const apiKey = '&apiKey=6e145feb0c664217b76b233d8c8d7366'

const newsUrl = 'https://newsapi.org/v2/top-headlines'

export const getAllNews = (country) => {
  return axios.get(`${newsUrl}?country=${country}${apiKey}`)
}

export const filterCategory = (country, category) => {
  return axios.get(`${newsUrl}?country=${country}&category=${category}${apiKey}`)
}