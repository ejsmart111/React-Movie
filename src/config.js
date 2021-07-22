export const API_KEY = process.env.REACT_APP_API_KEY

export const BASE_URL = 'https://api.themoviedb.org/3/'

export const IMG_URL = 'https://image.tmdb.org/t/p/original'

export function convertDate (date) {
    const dateFull = new Date(date)
    return dateFull.toDateString()
}