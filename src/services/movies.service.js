import axios from "axios"

const BASEURL = import.meta.env.VITE_BASEURL;

export const getMovieLists = async(type) => {
    const movies = await axios.get(`${BASEURL}/movie/${type}?api_key=${import.meta.env.VITE_APIKEY}`);
    return movies;
}

export const getMovieDetail = async(id) => {
    const movies = await axios.get(`${BASEURL}/movie/${id}?api_key=${import.meta.env.VITE_APIKEY}`);
    return movies;
}

export const getMovieSearch = async(query) => {
    const movies = await axios.get(`${BASEURL}/search/movie?query=${query}&api_key=${import.meta.env.VITE_APIKEY}`);
    return movies;
}

export const getGenreList = async() => {
    const movies = await axios.get(`${BASEURL}/genre/movie/list?api_key=${import.meta.env.VITE_APIKEY}`);
    return movies;
}