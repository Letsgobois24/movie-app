import CardList from "./CardList";
import Title from "../../Elements/Title";

const MovieSection = ({ movies, title }) => {
    return (
        <section>
            <Title>{title}</Title>
            <CardList movies={movies} />
        </section>
    )
}

export default MovieSection;