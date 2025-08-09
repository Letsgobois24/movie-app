import { useState } from "react";
import { useWatchList } from "../../context/WatchListContext";
import Icon from "../Elements/Icon";
import { Link } from "react-router-dom";

const Header = ({ onClickToggle }) => {
    const [isOpenWatchlist, setIsOpenWatchlist] = useState(false);
    const BASEIMG = import.meta.env.VITE_BASEIMGURL;
    const { watchList, removeFromWatchList } = useWatchList();

    const handleRemoveWatchlist = (e, movieId) => {
        e.preventDefault();
        removeFromWatchList(movieId)
    }

    return (
        <header className="relative bg-dark w-full h-16 px-2 flex items-center justify-between md:justify-end border-b text-slate-600">
            <div onClick={onClickToggle} className="text-2xl w-12 h-12 cursor-pointer rounded-full hover:bg-slate-600 flex justify-center items-center text-light md:hidden">
                ☰
            </div>
            <div onClick={() => setIsOpenWatchlist(!isOpenWatchlist)} className="relative w-12 h-12 flex justify-center items-center rounded-full hover:bg-slate-600 cursor-pointer">
                <Icon icon="book" size="30" className="text-light " />
                <div className="absolute flex justify-center items-center font-semibold top-1 right-1 w-5 h-5 text-xs rounded-full bg-secondary border-2 border-light">{watchList.length}</div>
            </div>
            <div className={`${isOpenWatchlist ? '' : 'hidden'} z-10 py-2 min-w-sm absolute -bottom-0.5 right-7 translate-y-full text-light bg-dark rounded-md`} onMouseLeave={()=>setIsOpenWatchlist(false)}>
                {watchList.length > 0 ? watchList.map(movie => (
                    <Link to={'/movie/' + movie.id}>
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
        </header>
    )
}

export default Header;