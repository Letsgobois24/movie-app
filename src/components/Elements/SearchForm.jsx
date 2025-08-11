import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Icon from "./Icon";

const SearchForm = () => {
    const [searchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get("query") || '');
    const navigate = useNavigate();

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if(query && query.trim() != ''){
            navigate(`/search?query=${query.trim()}`);
        } else {
            navigate('/');
        }
    }

    return (
        <form className="w-md mx-auto" onSubmit={(e) => handleSubmitForm(e)}>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <Icon icon="search" size="16" className="text-gray-500 dark:text-gray-400" />
                </div>
                <input type="search" id="default-search" value={query} onChange={(e) => setQuery(e.target.value)} className="block w-full rounded-lg py-3 ps-10 text-sm bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search Movies" />
                <button type="submit" className="cursor-pointer text-white absolute end-1 bottom-1 font-medium rounded-lg text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Search</button>
            </div>
        </form>
    );
}

export default SearchForm;