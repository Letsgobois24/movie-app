import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useSearchParams, useLocation } from "react-router-dom";
import { getMovieSearch, getMoviesByGenre, getGenreList } from "../services/movies.service";
import BadgeList from "../components/Fragments/BadgeList";
import CardMovie from "../components/Fragments/cards/CardMovie";
import Title from "../components/Elements/Title";

const SearchPage = () => {
    const location = useLocation();
    const genreName = location.state?.genreName;

    const [searchParams] = useSearchParams();
    const query = searchParams.get("query");
    const genreId = searchParams.get('genre');

    const [genreList, setGenreList] = useState([]);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if(query){
            getMovieSearch(query)
                .then(res => setMovies(res.data.results));
        } else {
            getMoviesByGenre(genreId)
                .then(res => setMovies(res.data.results));
        }
    }, [query, genreId]);

    useEffect(() => {
        getGenreList().then((res) => setGenreList(res.data.genres));
    }, [])

    return (
        <Layout>
            <div className="mt-6 ml-6">
                <BadgeList genres={genreList} />
            </div>
            <div className="mt-4 ml-6">
                <Title>{query ? `Search: ${query}` : `Genre: ${genreName}` }</Title>
            </div>
            <section className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-[10px] px-6">
                {movies.map(movie => (
                    <CardMovie key={movie.id} movie={movie}/>
                ))}
            </section>
        </Layout>
    );
}

export default SearchPage;