import { Link } from "react-router-dom";
import { useWatchList } from "../../context/WatchListContext";
import Icon from "../Elements/Icon";

const WatchlistPanel = ({isOpenWatchlist, setIsOpenWatchlist}) => {
    const BASEIMG = import.meta.env.VITE_BASEIMGURL;
    
    const { watchList, removeFromWatchList } = useWatchList();
    const handleRemoveWatchlist = (e, movieId) => {
        e.preventDefault();
        removeFromWatchList(movieId)
    }

    return (
        <div className={`${isOpenWatchlist ? '' : 'hidden'} z-10 py-2 min-w-sm absolute -bottom-0.5 right-7 translate-y-full text-light bg-dark rounded-md`} onMouseLeave={() => setIsOpenWatchlist(false)}>
            {watchList.length > 0 ? watchList.map(movie => (
                <Link key={movie.id} to={'/movie/' + movie.id}>
                    <div className="py-2 border-b border-t border-light cursor-pointer hover:bg-slate-700">
                        <div className="flex items-center space-x-4 px-4">
                            <img width='50' className="rounded-md" src={BASEIMG + movie.poster_path} alt="" />
                            <h1 className="tracking-tight w-full">{movie.movie}</h1>
                            <button onClick={(e) => handleRemoveWatchlist(e, movie.id)} className="cursor-pointer">
                                <Icon icon="trash" size="20" className="text-red-500 hover:text-red-500" />
                            </button>
                        </div>
                    </div>
                </Link>
            )) :
                <div className="py-2 px-4">No watchlist selected</div>
            }
        </div>
    )
}

export default WatchlistPanel;