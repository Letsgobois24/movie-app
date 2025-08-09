import { Link } from "react-router-dom";
import Button from "../../Elements/Button";
import Icon from "../../Elements/Icon";

const JumbotronItem = ({ movie }) => {
    const BASEIMG = import.meta.env.VITE_BASEIMGURL;

    return (
        <section className="bg-center h-[calc(100vh-64px)] bg-no-repeat bg-gray-700 bg-blend-multiply bg-cover" style={{ backgroundImage: `url(${BASEIMG + movie.backdrop_path})` }}>
            <div className="px-4 mx-auto max-w-screen-xl text-center py-40">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl min-h-20 flex items-center justify-center">{movie.title}</h1>
                <p className="mb-4 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">{movie.overview.substring(0, 120)}...</p>
                <div className="mb-4 flex items-center justify-center">
                    <Icon icon="star" size="16" className="text-yellow-300 mr-1" />
                    <p className="ms-2 text-sm font-bold text-light">{movie.vote_average}</p>
                    <span className="w-1 h-1 mx-1.5 bg-gray-300 rounded-full dark:bg-gray-400"></span>
                    <a href="#" className="text-sm font-medium text-light underline hover:no-underline">{movie.vote_count} reviews</a>
                </div>
                <div className="flex space-x-3 sm:flex-row justify-center sm:space-y-0">
                    <Link to={`/movie/${movie.id}`}>
                        <Button color='blue'>
                            <Icon icon="play" size="24" className="text-white mr-1" />
                            Play
                        </Button>
                    </Link>
                    <Link to={`/movie/${movie.id}`}>
                        <Button color='transparent'>
                            Detail
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default JumbotronItem;