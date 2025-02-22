import axios from 'axios'
import { cleanUrl } from '../helpers/CleanUrl'

export const getAllTypeMoviesAPI = async () => {
  return (await axios.get('https://phimapi.com/the-loai')).data
}

export const getAllCountriesAPI = async () => {
  return (await axios.get('https://phimapi.com/quoc-gia')).data
}

export const getMoviesAPI = async ({ page }) => {
  return (await axios.get(`https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=${page}`)).data
}

export const getMoviesByTypeAPI = async ({ type_list, page, sort_field, sort_type, sort_lang, category, country, year, limit }) => {
  const api = `https://phimapi.com/v1/api/danh-sach/${type_list}?page=${page}&sort_field=${sort_field}&sort_type=${sort_type}&sort_lang=${sort_lang}&category=${category}&country=${country}&year=${year}&limit=${limit}`
  return ((await axios.get(cleanUrl(api))).data).data
}

export const getMoviesByGenreAPI = async ({ type_list, page, sort_field, sort_type, sort_lang, country, year, limit }) => {
  const api = `https://phimapi.com/v1/api/the-loai/${type_list}?page=${page}&sort_field=${sort_field}&sort_type=${sort_type}&sort_lang=${sort_lang}&country=${country}&year=${year}&limit=${limit}`
  return ((await axios.get(cleanUrl(api))).data).data
}


export const getMoviesByCountryAPI = async ({ type_list, page, sort_field, sort_type, sort_lang, category, year, limit }) => {
  const api = `https://phimapi.com/v1/api/quoc-gia/${type_list}?page=${page}&sort_field=${sort_field}&sort_type=${sort_type}&sort_lang=${sort_lang}&category=${category}&year=${year}&limit=${limit}`
  return ((await axios.get(cleanUrl(api))).data).data
}

export const getMovieBySlugAPI = async (slug) => {
  return (await axios.get(`https://phimapi.com/phim/${slug}`)).data
}                          
