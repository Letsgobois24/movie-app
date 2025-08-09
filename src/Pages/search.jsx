import { useEffect } from "react";
import Layout from "../components/Layout";
import { useSearchParams } from "react-router-dom";
import { getMovieSearch } from "../services/movies.service";
import { useState } from "react";
import CardMovie from "../components/Fragments/cards/CardMovie";
import Title from "../components/Elements/Title";

const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query");
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovieSearch(query)
            .then(res => setMovies(res.data.results));
    }, []);
    
    return (
        <Layout>
            <div className="mt-6 ml-6">
                <Title>Search: {query}</Title>
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