import axios from "axios"

const BASEURL = import.meta.env.VITE_BASEURL;
const APIKEY = import.meta.env.VITE_APIKEY;

export const getMovieLists = async(type) => {
    const movies = await axios.get(`${BASEURL}/movie/${type}?api_key=${APIKEY}`);
    return movies;
}

export const getMovieDetail = async(id) => {
    const movies = await axios.get(`${BASEURL}/movie/${id}?api_key=${APIKEY}`);
    return movies;
}

export const getMovieSearch = async(query, page = 1) => {
    const movies = await axios.get(`${BASEURL}/search/movie?query=${query}&page=${page}&api_key=${APIKEY}`);
    return movies;
}

export const getGenreList = async() => {
    const movies = await axios.get(`${BASEURL}/genre/movie/list?api_key=${APIKEY}`);
    return movies;
}

export const getMoviesByGenre = async(genreId, page) => {
    const movies = await axios.get(`${BASEURL}/discover/movie?with_genres=${genreId}&page=${page}&api_key=${APIKEY}`);
    return movies;
}