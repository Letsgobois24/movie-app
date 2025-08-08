import { Link } from "react-router-dom";
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
                        <button className="inline-flex cursor-pointer justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
                            <Icon icon="play" size="24" className="text-white mr-1" />
                            Play
                        </button>
                    </Link>
                    <Link to={`/movie/${movie.id}`}>
                        <button className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white cursor-pointer hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                        Detail
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default JumbotronItem;