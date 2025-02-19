import axios from 'axios'

export const getAllTypeMoviesAPI = async () => {
  return (await axios.get('https://phimapi.com/the-loai')).data
}

export const getAllCountriesAPI = async () => {
  return (await axios.get('https://phimapi.com/quoc-gia')).data
}