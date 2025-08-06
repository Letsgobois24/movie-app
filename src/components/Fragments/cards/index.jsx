import CardList from "./CardList";

const MovieSection = ({ movies, title }) => {
    return (
        <section>
            <h1 className="mb-2 font-bold text-dark text-2xl">{title}</h1>
            <CardList movies={movies} />
        </section>
    )
}

export default MovieSection;