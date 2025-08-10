import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useSearchParams, useLocation } from "react-router-dom";
import { getMovieSearch, getMoviesByGenre, getGenreList } from "../services/movies.service";
import BadgeList from "../components/Fragments/BadgeList";
import CardMovie from "../components/Fragments/cards/CardMovie";
import Title from "../components/Elements/Title";
import Pagination from "../components/Fragments/pagination";

const SearchPage = () => {
    const location = useLocation();
    const genreName = location.state?.genreName;

    const [searchParams] = useSearchParams();
    const query = searchParams.get("query");
    const genreId = searchParams.get('genre');

    const [genreList, setGenreList] = useState([]);
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(3);
    const [totalResult, setTotalResult] = useState({ totalPages: 0, totalResult: 0 })

    const setMoviesData = (res) => {
        setMovies(res.data.results);
        setTotalResult({
            totalPages: res.data.total_pages,
            totalResults: res.data.total_results,
            moviesPerPage: res.data.results.length
        })
    }

    useEffect(() => {
        if (query) {
            getMovieSearch(query, currentPage)
                .then(res => setMoviesData(res));
        } else {
            getMoviesByGenre(genreId, currentPage)
                .then(res => setMoviesData(res));
        }
    }, [query, genreId, currentPage]);

    useEffect(() => setCurrentPage(1), [query]);
    useEffect(() => getGenreList().then((res) => setGenreList(res.data.genres)), [])

    return (
        <Layout>
            <div className="mt-6 ml-6">
                <BadgeList genres={genreList} />
            </div>
            <div className="mt-4 ml-6">
                <Title>{query ? `Search: ${query}` : `Genre: ${genreName}`}</Title>
            </div>
            <section className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-[10px] px-6">
                {movies.map(movie => (
                    <CardMovie key={movie.id} movie={movie} />
                ))}
            </section>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalResult={totalResult} />
        </Layout>
    );
}

export default SearchPage;