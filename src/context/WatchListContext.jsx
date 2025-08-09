import { useState, useEffect, createContext, useContext } from "react";

const watchListContext = createContext();

export const WatchListProvider = ({ children }) => {
    const initialState = JSON.parse(localStorage.getItem('watchlist')) || [];
    const [watchList, setWatchList] = useState(initialState);

    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(watchList));
    }, [watchList]);

    const addToWatchList = (movie) => {
        if(!watchList.find(list => list.id === movie.id)){
            const watchlistMovie = {
                id: movie.id,
                movie: movie.title,
                poster_path: movie.poster_path
            }
            
            setWatchList([watchlistMovie, ...watchList]);
            localStorage.setItem('watchlist', JSON.stringify(watchlistMovie));
        }
    }

    const removeFromWatchList = (movieId) => {
        setWatchList(watchList.filter((list) => list.id !== movieId));
        localStorage.setItem('watchlist', JSON.stringify(watchList));
    }

    return (
        <watchListContext.Provider
            value={{ watchList, addToWatchList, removeFromWatchList }}
        >
            {children}
        </watchListContext.Provider>
    );
}

export const useWatchList = () => useContext(watchListContext);