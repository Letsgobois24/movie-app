import { Link } from "react-router-dom";
import Icon from "../../Elements/Icon";
import { useWatchList } from "../../../context/WatchListContext";

const CardMovie = ({movie}) => {
    const BASEIMG = import.meta.env.VITE_BASEIMGURL;
    const movieDetailUrl = '/movie/' + movie.id;
    const { addToWatchList } = useWatchList();
    
    const handleAddToWatchlist = (e) => {
        e.preventDefault();
        addToWatchList(movie);
    }

    return (
        <div className="bg-light group hover:bg-white border border-gray-200 rounded-lg shadow-sm transition overflow-hidden">
            <Link to={movieDetailUrl}>
            <div className="overflow-hidden relative flex flex-col">
                <button className="flex group translate-y-full group-hover:translate-y-0 transition cursor-pointer p-1.5 bg-dark absolute left-0 bottom-0 z-1 rounded-tr-lg">
                    <Icon icon="star" size="13" className="text-yellow-500" />
                    <p className="ms-1 text-xs font-bold text-light">{movie.vote_average.toFixed(1)}</p>
                </button>
                <button onClick={(e) => handleAddToWatchlist(e)} className="-translate-y-full group-hover:translate-y-0 transition cursor-pointer bg-dark absolute right-0 z-1 rounded-bl-lg rounded-tr-lg">
                    <Icon icon="watchlist" size="20" className="text-light m-1.5 hover:text-yellow-500" />
                </button>
                <img className="h-80 w-full object-cover rounded-t-lg group-hover:scale-120 transition" src={movie.poster_path ? BASEIMG + movie.poster_path : '/image/no-image.png'} alt="" />
            </div>
            <div className="p-5 inline-block w-full">
                <h5 className="min-h-24 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.title}</h5>
            </div>
            </Link>
        </div>
    )
}

export default CardMovie;