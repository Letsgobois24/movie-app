import { useState } from "react";
import Icon from "../Elements/Icon";
import NavbarButton from "../Elements/NavbarButton";
import SearchForm from "../Elements/SearchForm";
import WatchlistPanel from "../Fragments/WatchlistPanel";
import { useWatchList } from "../../context/WatchListContext";

const Header = ({ onClickToggle }) => {
    const [isOpenWatchlist, setIsOpenWatchlist] = useState(false);
    const {watchList} = useWatchList();
    
    return (
        <header className="relative bg-dark w-full h-16 px-2 flex items-center justify-between md:justify-end border-b text-slate-600">
            <NavbarButton className='md:hidden' onClick={onClickToggle}>
                <span className="text-2xl">☰</span>
            </NavbarButton>
            <SearchForm />
            <NavbarButton onClick={() => setIsOpenWatchlist(!isOpenWatchlist)} className='relative'>
                <Icon icon="book" size="30" className="text-light " />
                <div className="absolute text-dark flex justify-center items-center font-semibold top-1 right-1 w-5 h-5 text-xs rounded-full bg-secondary border-2 border-light">{watchList.length}</div>
            </NavbarButton>
            <WatchlistPanel isOpenWatchlist={isOpenWatchlist} setIsOpenWatchlist={setIsOpenWatchlist} />
        </header>
    )
}

export default Header;